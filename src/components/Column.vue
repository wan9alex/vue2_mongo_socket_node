<template>
  <div class="newsList">
    <ul>
      <li
        v-for="item of list"
        :key='item._id'
      >
        <a href="javascript:;">
          <h2>{{item.title}}</h2>
          <p>{{item.des}}</p>
        </a>
      </li>

    </ul>
  </div>
</template>
<script>
import Slider from './Slider'
import List from './List'
export default {
  data(){
    return {
      list:[],
      dataName:'column'
    }
  },
  components:{Slider,List},

  mounted(){

    axios({
      url:'/api/product',
      params:{dataName:this.dataName}
    }).then(
      res=>this.list=res.data.page_data
    )


  }
}
</script>
<style scoped>
  .newsList{clear: both;margin-bottom:1rem;margin-top:.7rem;}
  .content .newsList{width:6.4rem; margin:0 auto;}
  .newsList ul{ padding:0 0.4rem;}
  .newsList ul li{ color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
  .newsList ul li h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
  .newsList ul li p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
  .newsList{clear: both;margin-bottom:1rem;}
</style>