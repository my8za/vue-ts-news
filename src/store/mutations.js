// state 변경 함수
export default {
  SET_NEWS (state, payload) {
    state.news = payload;
  },
  SET_ASK (state, payload) {
    state.ask = payload;
  },
  SET_JOBS (state, payload) {
    state.jobs = payload;
  },
}