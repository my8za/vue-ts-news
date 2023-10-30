// api
import {
  fetchNews,
  fetchAsk,
  fetchJobs
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
};
