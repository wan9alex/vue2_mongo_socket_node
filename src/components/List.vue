<template>
  <div class="newsList">
    <ul>
      <li
        v-for="(item,index) of list"
        :key="item._id"
      >
        <router-link
          :to="'/detail/'+item._id+'?dataName='+dataName"
        >
          <h2>{{index+1}}.{{item.title}}/{{ 1 | fillzero }}</h2>
          <p>{{item.des}}</p>
        </router-link>
      </li>
      <!-- <li>
        <router-link
          to="/detail/2"
        >
          <h2>2.xx</h2>
          <p>oooo</p>
        </router-link>
      </li> -->
     
      
    </ul>
  </div>
</template>
<script>
export default {
  props:['list','dataName']
}
</script>

<style scoped>
.content .newsList{width:6.4rem; margin:0 auto;}
.newsList ul{ padding:0 0.4rem;}
.newsList ul li{ color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
.newsList ul li h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
.newsList ul li p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
.newsList{clear: both;margin-bottom:1rem;}
</style>
