import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/Layout";
import Home from "@/views/Home";
import News from "@/views/News";
import Search from "@/views/Search";
import My from "@/views/My";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Map from "@/views/Map";
import Rent from "@/views/Rent";
import City from "@/views/City";
import Collect from "@/views/Collect";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/layout" },
  {
    path: "/layout",
    component: Layout,
    redirect: "/layout/home",
    children: [
      { path: "home", component: Home },
      { path: "news", component: News },
      { path: "search", component: Search },
      { path: "my", component: My },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/map",
    component: Map,
  },
  {
    path: "/rent",
    component: Rent,
  },
  {
    path: "/city",
    component: City,
  },
  {
    path: "/collect",
    component: Collect,
  },
];

const router = new VueRouter({
  routes,
});
// 解决重复点击相同路由问题
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err);
};
export default router;
