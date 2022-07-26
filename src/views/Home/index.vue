<template>
  <div>
    <div class="top">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in imgList" :key="item.id">
          <img :src="`http://liufusong.top:8080${item.imgSrc}`" alt="" />
        </van-swipe-item>
      </van-swipe>
      <van-search show-action label="上海" placeholder="请输入小区或地址">
        <template #left-icon>
          <div>
            <van-icon name="arrow-down" @click="chooseCity" />
          </div>
        </template>
        <template #action>
          <div><van-icon name="aim" size="0.6rem" @click="showMap" /></div>
        </template>
      </van-search>
    </div>
    <van-grid :border="false" route>
      <van-grid-item
        icon="wap-home-o"
        color="#1989fa"
        text="整租"
        to="/layout/search"
      />
      <van-grid-item icon="friends-o" text="合租" to="/layout/search" />
      <van-grid-item icon="photo-o" text="地图找房" to="/map" />
      <van-grid-item icon="shop-o" text="去出租" to="/rent" />
    </van-grid>
    <div class="group">
      <div class="title">
        <h3>租房小组</h3>
        <span>更多</span>
      </div>
      <div class="group-msg">
        <div v-for="item in groupList" :key="item.id">
          <img :src="`http://liufusong.top:8080${item.imgSrc}`" alt="" />
          <h4>{{ item.title }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSwiperImgAPI, getGroupMsgAPI } from "@/api";
export default {
  data() {
    return {
      imgList: [],
      groupList: [],
    };
  },
  mounted() {
    this.getImage();
    this.getGroupImg();
  },
  methods: {
    async getImage() {
      const res = await getSwiperImgAPI();
      // console.log(res.data.body);
      this.imgList = res.data.body;
    },
    async getGroupImg() {
      const res = await getGroupMsgAPI();
      console.log(res);
      this.groupList = res.data.body;
    },
    chooseCity() {
      this.$router.push("/city");
    },
    showMap() {
      this.$router.push("/map");
    },
  },
};
</script>

<style scoped>
.top {
  position: relative;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  /* background-color: #39a9ed; */
}
.my-swipe .van-swipe-item img {
  width: 100%;
  background-size: cover;
}
.van-search {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  background-color: transparent !important;
}
.group {
  background-color: #f6f5f6;
  overflow: hidden;
  padding: 0 10px;
}
.group .title {
  margin: 15px 0 15px 10px;
  display: flex;
  justify-content: space-between;
}
.group .title h3 {
  font-size: 14px !important;
  font-weight: bold;
}
.group .title span {
  font-size: 12px !important;
}
.group-msg {
  display: flex;
  flex-wrap: wrap;
}
.group-msg div {
  display: flex;
  align-items: center;
  width: 160px;
  height: 50px;
  margin: 0 17px 10px 0;
  background-color: #fff;
}
.group-msg div img {
  width: 50px;
  height: 50px;
}
.group-msg div h4 {
  font-size: 18px;
}
</style>
