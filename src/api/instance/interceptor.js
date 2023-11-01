import store from "@/store";

// 요청 인터셉터
function setRequestOptions(instance) {
  instance.interceptors.request.use(
    (config) => {
      // 요청이 전달되기 전 수행

      // http 헤더 토큰(사용자 인증 데이터) 설정
      const token = store.getters['getToken'];
      config.headers.Authorization = token;
      return config;
    },
    (error) => {
      // 요청 오류
      const token = error.response.headers.authorization;
      store.commit('SET_TOKEN', token);
      return Promise.reject(error.response);
    }
  );
}


// 응답 인터셉터
function setResponseOptions(instance) {
  instance.interceptors.response.use(
    (config) => {
      // 응답 데이터가 있는 작업 수행
      const token = config.headers.authorization;
      store.commit('SET_TOKEN', token)
      return config;
    },
    (error) => {
      // 응답 오류
      const token = error.response.headers.authorization;
      store.commit('SET_TOKEN', token);
      return Promise.reject(error.response);
    }
  );
}

export {
  setRequestOptions,
  setResponseOptions
};