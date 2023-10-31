// api
import {
  fetchNews,
  fetchAsk,
  fetchJobs,
  fetchUser,
  fetchItem,
  fetchList
} from '@/api';

// 비동기 호출
export default {
  FETCH_NEWS({ commit }) {
    return fetchNews().then((resp) => commit('SET_NEWS', resp.data));
  },
  FETCH_ASK({ commit }) {
    return fetchAsk().then((resp) => commit('SET_ASK', resp.data));
  },
  FETCH_JOBS({ commit }) {
    return fetchJobs().then((resp) => commit('SET_JOBS', resp.data));
  },
  FETCH_USER({ commit }, userId) {
    return fetchUser(userId).then((resp) => commit('SET_USER', resp.data));
  },
  FETCH_ITEM({ commit }, itemId) {
    return fetchItem(itemId).then((resp) => commit('SET_ITEM', resp.data));
  },
  
  // HOC, Higher Order Component 
  // 컴포넌트의 로직(인스턴스 옵션) 재사용을 위한 기술
  FETCH_LIST ({ commit }, listType) {
    return fetchList(listType).then((resp) => commit('SET_LIST', resp.data))
  }
};
