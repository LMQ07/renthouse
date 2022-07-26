<template>
  <div>
    <div class="top">
      <van-nav-bar title="收藏列表" left-arrow @click-left="onClickLeft" />
      <list
        v-for="item in collectList"
        :key="item.houseCode"
        :imgsrc="item.houseImg"
        :title="item.title"
        :location="item.desc"
        :tags="item.tags"
        :price="item.price"
      ></list>
    </div>
  </div>
</template>

<script>
import { getCollectMsgAPI } from "@/api";
import list from "@/components/list.vue";
export default {
  data() {
    return {
      collectList: [],
    };
  },
  components: {
    list,
  },
  mounted() {
    this.getCollectMsg();
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    async getCollectMsg() {
      const res = await getCollectMsgAPI();
      console.log(res);
      this.collectList = res.data.body;
    },
  },
};
</script>

<style></style>
