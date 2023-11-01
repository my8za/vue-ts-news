import axios from "axios";
import { setRequestOptions, setResponseOptions } from "./interceptor";

const APP_BASE_URI = 'https://api.hnpwa.com/v0/';
const options = {};

function create(url, options = {}) {
  const instance = axios.create(
    // Object.assign(대상객체, 출처객체)
    // 출처 객체의 모든 자체 속성을 복사하여 대상 객체에 붙여넣고 대상객체를 반환
    // options값을 가진 API 인스턴스 반환
    Object.assign({ baseURL: url }, options)
  );
  return instance;
}

function createWithAuth(url, options = {}) {
  const instance = axios.create(Object.assign({ baseURL: url }, options));
  // 최초 인스턴스 생성 시, 스토어의 tokem이 빈 문자열이므로, 자바스크립트 레벨에서 파일이 생성될 때 Authrozation 값이 빈 문자열로 설정
  // 스토어의 토큰 값을 변경해도 axios 인스턴스의 Authorzation 값이 변경되지 않음
  // => Axios 인터셉터 활용하여 헤더에 토큰 설정
  setRequestOptions(instance);
  setResponseOptions(instance);
  return instance;
}

const news = create(`${APP_BASE_URI}news/`);
const user = createWithAuth(`${APP_BASE_URI}user/`, options);

export { news, user };