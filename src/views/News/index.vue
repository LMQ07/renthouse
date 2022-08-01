<template>
  <div class="new">
    <div>
      <span>区域</span>
      <van-icon name="arrow-down" />
    </div>
    <div>
      <span>方式</span>
      <van-icon name="arrow-down" />
    </div>
    <div>
      <span>租金</span>
      <van-icon name="arrow-down" />
    </div>
    <div>
      <span>筛选</span>
      <van-icon name="arrow-down" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.new {
  display: flex;
  div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      color: black;
      font-size: 18px;
    }
    .van-icon {
      font-size: 12px;
      color: gray;
    }
  }
}
</style>
