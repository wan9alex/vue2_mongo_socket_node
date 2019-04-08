<template>
  <div id="app">
    <loading v-show="bLoading"></loading>
    <app-header v-show="bNav"></app-header>
    <transition mode="out-in" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight" >
      <router-view></router-view>
    </transition>
    <app-footer v-show="bFoot"></app-footer>
  </div>
</template>
<script>
import AppHeader from "./common/AppHeader";
import AppFooter from "./common/AppFooter";

import {mapGetters} from 'vuex';
import * as types from './store/types.js'
export default {
  components: { AppHeader, AppFooter},
  computed:mapGetters([
    'bNav','bFoot','bLoading'
  ]),
  mounted(){
    //读库标识,读cookie,localStrage ,存状态管理store
    // console.log('app',this.$socket)
  },
  watch:{
    $route:{
      handler(to){
        let path = to.path;
        // console.log(path)
        this.checkPath(path);
      },
      immediate: true
    }
  },
  methods:{
    checkPath(path){
      if(/home|follow|column/.test(path)){
        this.$store.dispatch(types.VIEW_NAV,true);
        this.$store.dispatch(types.VIEW_FOOT,true);
      }
      if(/login|reg|detail/.test(path)){
        this.$store.dispatch(types.VIEW_NAV,false);
        this.$store.dispatch(types.VIEW_FOOT,false);
      }
      if(/user/.test(path)){
        this.$store.dispatch(types.VIEW_NAV,false);
        this.$store.dispatch(types.VIEW_FOOT,true);
      }
    }
  }
};
</script>

<style>
</style>
