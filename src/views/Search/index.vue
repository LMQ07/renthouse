<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left" />
      <van-search
        show-action
        :label="name"
        placeholder="请输入小区或地址"
        @click="$router.push('/city')"
      >
        <template #left-icon>
          <div>
            <van-icon name="arrow-down" />
          </div>
        </template>
        <template #action>
          <div><van-icon name="aim" size="0.6rem" /></div>
        </template>
      </van-search>
    </div>
    <!-- 中间部分的 -->
    <div class="middle">
      <van-dropdown-menu>
        <van-dropdown-item title="区域">
          <van-picker
            show-toolbar
            :columns="areaList"
            toolbar-position="bottom"
            @confirm="getMsg"
            @cancel="calcel"
          />
        </van-dropdown-item>
        <van-dropdown-item title="方式">
          <van-picker
            show-toolbar
            :columns="rentTypeList"
            toolbar-position="bottom"
            @confirm="getMsg"
            @cancel="calcel"
          />
        </van-dropdown-item>
        <van-dropdown-item title="租金">
          <van-picker
            show-toolbar
            :columns="rentPrice"
            toolbar-position="bottom"
            @confirm="getMsg"
            @cancel="calcel"
          />
        </van-dropdown-item>
        <van-dropdown-item title="筛选" @click="show = true">
          <van-popup v-model="show" position="left"></van-popup>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
    <!-- 列表 -->
    <div>
      <list
        v-for="item in houseList"
        :key="item.houseCode"
        :imgsrc="item.houseImg"
        :title="item.title"
        :price="item.price"
        :location="item.desc"
        :tags="item.tags"
      ></list>
    </div>
  </div>
</template>

<script>
import { getSearchHouseListAPI, getListAPI } from "@/api";
import list from "@/components/list.vue";
export default {
  data() {
    return {
      name: this.$store.state.name,
      id: this.$store.state.id,
      rentTypeList: [],
      areaList: [{ text: "区域" }, { text: "地铁" }],
      rentPrice: [],
      show: false,
      houseList: [],
    };
  },
  components: { list },
  mounted() {
    this.getList();
  },
  methods: {
    async getList() {
      console.log(this.$store.state.id);
      const res = await getSearchHouseListAPI(this.id);
      const res2 = await getListAPI(this.id);
      console.log(res, res2);
      this.houseList = res2.data.body.list;
      res.data.body.rentType.forEach((item) =>
        this.rentTypeList.push(item.label)
      );
      const arr = res.data.body.area.children;
      const newArr = this.dealMsg(arr);
      const arr2 = res.data.body.subway.children;
      const newArr2 = this.dealMsg(arr2);
      this.areaList[0].children = newArr;
      this.areaList[1].children = newArr2;
      res.data.body.price.forEach((item) => this.rentPrice.push(item.label));
    },
    dealMsg(arr) {
      const newArr = [];
      arr.forEach((item, index) => {
        if (!item.children) {
          newArr[index] = { text: item.label };
          newArr[index].children = [{ text: "" }];
        } else {
          newArr[index] = { text: item.label };
          newArr[index].children = this.dealMsg(item.children);
        }
      });
      return newArr;
    },
    getMsg(value) {
      console.log(value);
    },
    calcel() {},
  },
};
</script>

<style scoped>
.top {
  display: flex;
  align-items: center;
  background-color: #21b97a;
  height: 50px;
  padding: 0 10px;
}
.van-search {
  background-color: transparent;
  padding: 12px 37px;
}

.middle .text {
  font-size: 12px;
}

.middle .icon {
  font-size: 12px;
}
.van-popup--left {
  top: 0;
  left: 0;
  width: 50%;
  height: 100% !important;
}
</style>
