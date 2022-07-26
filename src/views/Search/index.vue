<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left" />
      <van-search show-action label="上海" placeholder="请输入小区或地址">
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
      <van-grid direction="horizontal">
        <van-grid-item>
          <span class="text">区域</span>
          <van-icon class="icon" name="arrow-down"></van-icon>
        </van-grid-item>
        <van-grid-item>
          <span class="text">方式</span>
          <van-icon class="icon" name="arrow-down"></van-icon>
        </van-grid-item>
        <van-grid-item>
          <template #default>
            <span class="text">租金</span>
            <van-icon class="icon" name="arrow-down"></van-icon>
          </template>
        </van-grid-item>
        <van-grid-item>
          <span class="text">筛选</span>
          <van-icon class="icon" name="arrow-down"></van-icon>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import { getSearchHouseListAPI } from "@/api";
export default {
  mounted() {
    this.getList();
  },
  methods: {
    async getList() {
      const res = await getSearchHouseListAPI();
      console.log(res);
    },
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
</style>
