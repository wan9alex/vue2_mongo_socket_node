import Vue from 'vue';
import axios from 'axios';

import store from '../store';
import {VIEW_LOADING} from '../store/types'

axios.defaults.withCredentials=true;//统一携带凭证，用来反向跨域

//请求时拦截
axios.interceptors.request.use(function (config) {
  // 做一些事情，给config==请求体 ,附加一些东西
  store.dispatch(VIEW_LOADING,true);//显示loading.....
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 响应时拦截
axios.interceptors.response.use(function (response) {
   // 做一些事情，给config==响应体 ,附加一些东西
  store.dispatch(VIEW_LOADING,false);//显示loading.....
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

window.axios=axios;
Vue.prototype.$axios=axios;

export default axios;