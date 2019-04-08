<template>
  <div class="home" style="min-height:1400px">
    <Slider :banner="banner"></Slider>
    <List :list="list" :dataName="dataName"></List>
  </div>
</template>
<script>
import Slider from './Slider'
import List from './List'
import * as types from '../store/types.js'
export default {
  data(){
    return {
      list:[],
      dataName:'home',
      banner:[]
    }
  },
  components:{Slider,List},
  sockets:{
    connect(){
      console.log('home 连接到服务器时')
    },
    update_product(res){
      console.log('home.收到',res.data.title)
      this.list.unshift({id:'222323',des:'xxx',title:res.data.title})
    }
  },
  created(){
    
    //前端的多并发

    //并行无关联
    // axios.all([]).then(res=>数组)
    // axios.all([]).then(axios.spread((res1,res2)=>{}))

    /* this.$socket.on('update_product',(res)=>{
      console.log('home.收到',res.data.title)
      this.list.unshift({id:'222323',des:'xxx',title:res.data.title})
    }) */

    axios.all([
      axios({
        url: '/api/product',
        params:{dataName:this.dataName,count:20}
      }),
      axios({
        url:'/api/banner',
        params:{dataName:'banner'}
      })
    ]).then(
      axios.spread((product,banner)=>{
        // this.$store.dispatch(types.VIEW_LOADING,false)
        this.list=product.data.page_data
        this.banner=banner.data.page_data
      })
    )

    /* axios({
      url: '/api/product',
      params:{dataName:this.dataName,count:20}
    }).then(
      res=>this.list=res.data.page_data
    )
*/

    /* const service = axios.create({
      baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
      timeout: 5000 // 请求超时时间
    }) */

    //远端代理失效
    /* axios({
    // service({
      // url:'/douban/v2/movie/top250',
      url:'/douban/v2/movie/top250',
      params:{start:1,count:2}
    }).then(
      res=>console.log('douban',res.data)
    )  */

    //串行有关联
    // axios({}).then(res=>return axios(res.数据)).then


  }
}
</script>

