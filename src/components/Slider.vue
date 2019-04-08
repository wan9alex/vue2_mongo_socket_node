<template>
  <!-- <swipe 
    class="my-swipe"
    :speed="300"
  >
    <swipe-item 
      v-for="item of banner"
      :key="item._id"
    >
        <img :src="baseUrl+item.banner" alt=""/>
        <div class="text-box">
          <h2>{{item.title}}</h2>
          <p>{{item.sub_title}}</p>
        </div>
    </swipe-item>
  </swipe> -->


  <div class="banner">
      <ul class="clearfix">
        <li
          v-for="item of banner"
          :key="item._id"
        >
          <img :src="baseUrl+item.banner" alt=""/>
          <div class="text-box">
            <h2>{{item.title}}</h2>
            <p>{{item.sub_title}}</p>
          </div>
        </li>
        
      </ul>

    </div>

</template>

<script>
import $ from  'jquery';

import Swipe from '../assets/js/swipe.js'


// import 'vue-swipe/dist/vue-swipe.css';
// import { Swipe, SwipeItem } from 'vue-swipe';
export default {
  data(){return {baseUrl}},
  props:['banner'],
 /*  components: {
    'swipe': Swipe,
    'swipe-item': SwipeItem
  }, */
  updated(){
    var mySwipe=new Swipe($('.banner')[0],{
      auto:2000,
      continuous:true,
      stopPropation:true,
      callback:function (index,element){
        $('.banner ol li').removeClass('active');
        $('.banner ol li').eq(index).addClass('active');
      }
    })
  }
}
</script>

<style scoped>

/* .my-swipe {
  margin-top:1.2em;
  height: 150px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
 
.slide1 {
  background-color: #0089dc;
  color: #fff;
}
 
.slide2 {
  background-color: #ffd705;
  color: #000;
}
 
.slide3 {
  background-color: #ff2d4b;
  color: #fff;
} */

.banner{min-height:220px;max-width:6.4rem; margin:0 auto; position: relative;overflow: hidden; z-index: 1}
.banner ul li{width:6.4rem;float:left;position: relative;}
.banner ul li img{width:100%; display:block;}
.banner ul li .text-box{width:5.8rem; padding:0 0.3rem;height:1.24rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}
.text-box h2{ font-size:0.3rem; font-weight:normal; margin-top:0.22rem; line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
.text-box p{ line-height:100%;}

</style>
