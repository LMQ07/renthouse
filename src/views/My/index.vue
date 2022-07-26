<template>
  <div class="My">
    <!-- 未登录 -->
    <div class="top" v-if="!token">
      <img src="http://liufusong.top:8080/img/profile/bg.png" alt="" />
      <div class="card">
        <img src="https://img01.yzcdn.cn/vant/cat.jpeg" alt="" />
        <p>游客</p>
        <van-button type="primary" @click="loginFn">去登录</van-button>
      </div>
    </div>
    <!-- 已登入 -->
    <div class="top" v-else>
      <img src="http://liufusong.top:8080/img/avatar.png" alt="" />
      <div class="card">
        <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="" />
        <p>{{ name }}</p>
        <van-button type="primary" @click="quit" size="mini">退出</van-button>
        <p class="edit">编辑个人资料 ></p>
      </div>
    </div>
    <van-grid :column-num="3" :border="false" clickable>
      <van-grid-item icon="star-o" text="我的收藏" to="/collect" />
      <van-grid-item icon="wap-home-o" text="我的出租" to="/rent" />
      <van-grid-item icon="clock-o" text="看房记录" />
      <van-grid-item icon="notes-o" text="成为房主" />
      <van-grid-item icon="friends-o" text="个人资料" />
      <van-grid-item icon="phone-circle-o" text="联系我们" />
    </van-grid>
    <div class="bottom">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { getUserInfoAPI } from "@/api";
export default {
  data() {
    return {
      name: "",
      token: "",
    };
  },
  mounted() {
    this.getTokenMsg();
  },
  methods: {
    loginFn() {
      this.$router.push("/login");
    },
    async getTokenMsg() {
      this.token = localStorage.getItem("Token") || "";
      // console.log(this.token);
      const res = await getUserInfoAPI();
      console.log(res);
      this.name = res.data.body && res.data.body.nickname;
    },
    quit() {
      this.$dialog
        .confirm({
          title: "提示",
          message: "是否确认退出？",
        })
        .then(() => {
          localStorage.removeItem("Token");
          // this.token = "";
          this.$router.push("/layout/my");
        })
        .catch(() => {});
    },
  },
};
</script>

<style scoped>
.My .top {
  min-height: 300px;
  /* background-color: aqua; */
  position: relative;
  margin-bottom: 15px;
}
.My .top img {
  width: 100%;
  background-size: cover;
}
.My .top .card {
  position: absolute;
  background: #fff;
  width: 75%;
  height: 55%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px 3px #ddd;
  margin: 50px auto 0;
  padding: 0 20px;
  text-align: center;
  font-size: 13px;
}
.My .top .card img {
  transform: translateY(-30px);
  width: 60px;
  height: 60px;
  background-size: cover;
  border-radius: 50%;
  border: 5px solid #ccc;
}
.My .top .card .van-button {
  margin-top: 15px;
}
.My .bottom {
  text-align: center;
  margin-top: 10px;
}
.My .bottom img {
  width: 95%;
}
.edit {
  margin-top: 5px;
  font-size: 10px;
  color: #ccc;
}
</style>
