import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    name: "上海",
    id: "AREA|dbf46d32-7e76-1196",
  },
  mutations: {
    changeMsg(state, obj) {
      state.name = obj.name;
      state.id = obj.id;
    },
  },
});
