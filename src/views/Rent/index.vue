<template>
  <div>
    <van-nav-bar title="房屋管理" left-arrow @click-left="onClickLeft" />
    <list
      v-for="item in rentList"
      :key="item.houseCode"
      :imgsrc="item.houseImg"
      :price="item.price"
      :location="item.desc"
      :tags="item.tags"
      :title="item.title"
    ></list>
  </div>
</template>

<script>
import list from "@/components/list.vue";
import { getHouseListAPI } from "@/api";
export default {
  data() {
    return {
      rentList: [],
    };
  },
  mounted() {
    this.getRentList();
  },
  components: { list },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    async getRentList() {
      const res = await getHouseListAPI();
      console.log(res);
      this.rentList = res.data.body;
    },
  },
};
</script>

<style></style>
