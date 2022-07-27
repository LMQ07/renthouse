import Vue from "vue";
import App from "./App.vue";
import Vant from "vant";
import "vant/lib/index.css";
import router from "@/router";
import "@/assets/flexible.js";
import "@/assets/reset.css";
import BaiduMap from "vue-baidu-map";
import { store } from "@/store";
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: "VDHyCP1GX81wLPdmWijSVyuo6ziBIPQ4",
});
Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
