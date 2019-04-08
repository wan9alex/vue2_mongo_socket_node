import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//配置全局资源
import './assets/css/base.css';
import './assets/js/font';
// import './assets/js/jquery-1.7.2';
// import $ from  'jquery';
// window.$=$;

//插件
import'./plugins/axios';
//路由
import router from './plugins/router.config'

//全局 baseUrl
let config = require('../config/config')
window.baseUrl = config.baseUrl.localhost_https


//全局过滤器
import filters from './filters';
Object.keys(filters).forEach(key=>Vue.filter(key,filters[key]));

//loading插件
import loading from './plugins/loading'
Vue.use(loading);


//store插件 
import store from './store'

//引入全局
import 'animate.css';

//vue-socket配置
import VueSocketIO from 'vue-socket.io';
import SocketIO from 'socket.io-client';
Vue.use(new VueSocketIO({
  connection: SocketIO(config.ws.socket_https_port)
  /* vuex: {
    store,
    actionPrefix: "SOCKET_",
    mutationPrefix: "SOCKET_"
  } */
}));

new Vue({
  render: h => h(App),
  router,store
}).$mount('#app')
