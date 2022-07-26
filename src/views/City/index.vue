<template>
  <div>
    <van-sticky>
      <van-nav-bar title="城市列表" left-arrow @click-left="onClickLeft" />
    </van-sticky>
    <van-index-bar :index-list="indexList" highlight-color="#21b97a">
      <van-index-anchor index="#" class="title">当前城市</van-index-anchor>
      <van-cell title="上海" />
      <van-index-anchor index="热">热门城市</van-index-anchor>
      <van-cell title="北京" />
      <van-cell title="广州" />
      <van-cell title="上海" />
      <!-- <van-cell v-for="item in filterList" :key="item.key" title="深圳" /> -->
      <!-- <van-index-anchor
        v-for="item in filterCityList"
        :index="item"
        :key="item"
      /> -->
      <div v-for="item in filterList" :key="item.key">
        <van-index-anchor :index="item.key">{{ item.key }}</van-index-anchor>
        <template>
          <div v-for="item in item.value" :key="item.pinyin">
            <van-cell :title="item.label" />
          </div>
        </template>
      </div>
      <!-- <van-index-anchor v-for="item in filterCityList" :index="" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="B" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" /> -->
      <!-- <van-index-anchor index="1">标题1</van-index-anchor>
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="2">标题2</van-index-anchor>
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" /> -->
    </van-index-bar>

    <!-- <van-index-anchor index="B">B</van-index-anchor>
      <template>
        <div v-for="item in Blist" :key="item.pinyin">
          <van-cell :title="item.label" />
        </div>
      </template>
    </van-index-bar>
    <van-index-anchor index="C">C</van-index-anchor>
    <template>
      <div v-for="item in Clist" :key="item.pinyin">
        <van-cell :title="item.label" />
      </div>
    </template>
    <van-index-anchor index="D">D</van-index-anchor>
    <template>
      <div v-for="item in Dlist" :key="item.pinyin">
        <van-cell :title="item.label" />
      </div>
    </template> -->
  </div>
</template>

<script>
import { getCityListAPI } from "@/api";
export default {
  data() {
    return {
      cityList: [],
      indexList: [
        "#",
        "热",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
      Alist: [],
      Blist: [],
      Clist: [],
      Dlist: [],
      filterList: [],
    };
  },
  mounted() {
    this.getCityList();
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    async getCityList() {
      const res = await getCityListAPI({ level: 1 });
      console.log(res.data.body);
      this.cityList = res.data.body;
      // const this.filterCityList = {};
      const map = {};
      this.cityList.forEach((item) => {
        if (map[item.short[0]]) {
          map[item.short[0]].push(item);
        } else {
          map[item.short[0]] = [item];
        }
      });
      const filterList = [];
      for (const key in map) {
        filterList.push({
          key: key.toUpperCase(),
          value: map[key],
        });
      }
      this.filterList = filterList.sort((a, b) => a.key.localeCompare(b.key));
    },
  },
};
</script>

<style scoped>
.van-index-anchor.title {
  font-size: 14px;
  padding: 10px 15px;
  color: #999;
}
.name {
  width: 100%;
  height: 50px;
  padding: 0 15px;
  line-height: 50px;
  border-bottom: 1px solid #eee;
  font-size: 16px;
  color: #333;
  background: #fff;
  cursor: pointer;
}
</style>
