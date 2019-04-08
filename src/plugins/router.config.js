import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


import Home from '@/components/Home'

// import Follow from '@/components/Follow'
//路由懒加载
// const Follow =()=>{return  import('@/components/Follow.vue')}
const Follow = () => import('@/components/Follow.vue')
// const Follow = () => import(/* webpackChunkName: "group1" */'@/components/Follow.vue')

// import Column from '@/components/Column'
const Column = () => import('@/components/Column.vue')
// const Column = () => import( /* webpackChunkName: "group1" */ '@/components/Column.vue')

import User from '@/components/User'
import Login from '@/components/Login'
import Reg from '@/components/Reg'
import Detail from '@/components/Detail'
import AppError from '@/common/AppError'
import Bbs from '@/components/Bbs'

let routes=[
  {path:'/home',component:Home},
  {path:'/follow',component:Follow},
  {path:'/column',component:Column},
  {path:'/detail/:id',component:Detail},
  {path:'/user',component:User},
  {path:'/login',component:Login},
  {path:'/reg',component:Reg},
  {path:'/bbs',component:Bbs},
  {path:'/',redirect:'/home'},
  {path:'*',component:AppError}
];

const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到 顶部
    return {x:0,y:0}
  }
});

export default router;