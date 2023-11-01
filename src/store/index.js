import Vue from "vue";
import Vuex from "vuex"
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
    user: [],
    item: [],
    list: [],
    
    // 사용자 권한 데이터, 토큰
    token: '',
  },
  getters,
  mutations,
  actions,
});