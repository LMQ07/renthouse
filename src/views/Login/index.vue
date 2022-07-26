<template>
  <div class="login">
    <van-nav-bar
      title="账号登录"
      left-arrow
      @click-left="onClickLeft"
      text-color="white"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号名"
        :rules="[{ required: true, message: '请填写账号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">提交</van-button>
      </div>
      <router-link to="/register" class="link">还没有账号，去注册~</router-link>
    </van-form>
  </div>
</template>

<script>
import { getUserMsgAPI } from "@/api";
export default {
  data() {
    return {
      username: "hzhmqd",
      password: "123456",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },

    async onSubmit() {
      const res = await getUserMsgAPI({
        username: this.username,
        password: this.password,
      });
      console.log(res);
      console.log(res.data.status);
      if (res.data.status !== 200) {
        alert("登录失败");
      } else {
        localStorage.setItem("Token", res.data.body.token);
        this.$router.push("/layout/my");
      }
    },
  },
};
</script>

<style scoped>
.login .van-nav-bar {
  background-color: #21b97a;
}
.login .van-nav-bar__title {
  max-width: 60%;
  margin: 0 auto;
  color: #ffff;
  font-weight: 500;
  font-size: 16px;
}
.van-nav-bar .van-icon {
  color: #fff !important;
}
.login .van-form {
  margin-top: 15px;
}
.login .van-field {
  height: 60px;
}
.login .van-button {
  background-color: #1cb676;
  border: 1px solid #1cb676;
}
.link {
  text-align: center;
  color: #666;
  font-size: 16px;
  text-decoration: none;
  margin-left: 117px;
}
</style>
