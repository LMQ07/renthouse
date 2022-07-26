<template>
  <div>
    <van-nav-bar title="地图找房" left-arrow @click-left="onClickLeft" />
    <div></div>
    <baidu-map id="container"> </baidu-map>
  </div>
</template>

<script>
export default {
  mounted() {
    // this.getMap();
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    getMap() {
      var map = new BMapGL.Map("container");
      var point = new BMapGL.Point(116.404, 39.915);
      map.centerAndZoom(point, 15);
      map.enableScrollWheelZoom(true);
      var marker = new BMap.Marker(point);
      map.addOverlay(marker);
    },
  },
};
</script>

<style scoped>
html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0px;
  padding: 0px;
}
#container {
  height: 100%;
  height: 100vh;
}
</style>
