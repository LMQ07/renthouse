<template>
  <div class="list">
    <div class="img"><img :src="imgsrc" alt="" /></div>
    <div class="title">
      <h3>{{ title }}</h3>
      <p>{{ location }}</p>
      <p>
        <van-tag type="success" v-for="(item, index) in tags" :key="index">{{
          item
        }}</van-tag>
      </p>
      <p class="price">
        <span>{{ price }}</span
        >元/月
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgsrc", "title", "location", "tags", "price"],
};
</script>
ß
<style scoped>
.list {
  padding-top: 18px;
  display: flex;
  align-items: center;
}
.img {
  width: 106px;
  height: 80px;
}
.img img {
  width: 106px;
  height: 100%;
}
.title {
  width: 269px;
  flex: 1;
  padding-left: 15px;
}
.title h3 {
  font-size: 15px;
  color: #394043;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
.title p {
  font-size: 12px;
  color: #afb2b3;
}
.title .price {
  font-size: 12px;
  color: red;
}
.title .price span {
  font-size: 15px;
  color: red;
}
</style>
