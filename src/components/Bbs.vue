<template>
  <div class="bbs">
    <p>bbs</p>
    <p>bbs</p>
    <p>bbs</p>
    <p>bbs</p>
    <p>bbs</p>
    <p class="bbs2">bbs</p>
    <p>bbs</p>

    <hr>
    
    <h1>群聊--在线人数
      <span>{{onlineNum}}</span>
    </h1>
    <div style="width: 30%; float: left">
        输入:
        <input type="text" v-model="ipt">
        <button @click="send">发送</button>
        <ul>
          <li v-for="(val,index) of user_list" :key="index" @click="private_mess(index,$event)">{{val}}</li>
        </ul>
    </div>
    <div style="width: 65%; float: right" id="showbox">
      <div v-for="(val,index) of mess_list" :key="index">{{val}}</div>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      onlineNum:0,
      ipt:'',
      user_list:[],
      mess_list:[]
    }
  },
  beforeDestroy(){
    console.log('beforeDestroy')
    
    // this.$socket.disconnect()
    this.$socket.emit('logout',{});
    // this.$socket.close();
  },
  sockets:{
    connect(){//连接到服务器时
      console.log('bbs 连接到服务器时')
    },
    login(data){
      this.mess_list.push(`${data.username}: ${data.msg}`)
    },
    logout(data){
      this.mess_list.push(`${data.username}: ${data.msg}`)
    },
    update(data){
      this.onlineNum = data.onlineCount;
      this.user_list=data.onlineUserName;
    },
    message(data){
      this.mess_list.push(`${data.username}: ${data.msg}`)
    },
    'private message'(data){
      this.mess_list.push(`${data.fromUserName}对你悄悄说: ${data.msg}`)
    }
  },
  mounted(){
    //链接

    // this.$socket.open();

     this.$socket.emit('login', { username: '用户名' + Math.random().toFixed(4) });

    /*this.$socket.on('login', (data) => {  //监听服务器发来的自定义事件
        this.mess_list.push(`${data.username}: ${data.msg}`)
    })
    this.$socket.on('logout', (data) => {  //监听服务器发来的自定义事件
        this.mess_list.push(`${data.username}: ${data.msg}`)
    })

    this.$socket.on('update', (data) => {  //监听服务器发来的自定义事件
        this.onlineNum = data.onlineCount;
        this.user_list=data.onlineUserName;
    })

    

    this.$socket.on('message', (data) => {  //监听服务器发来的自定义事件
        this.mess_list.push(`${data.username}: ${data.msg}`)
    })
    this.$socket.on('private message', (data) => {  //监听服务器发来的自定义事件
        this.mess_list.push(`${data.fromUserName}对你悄悄说: ${data.msg}`)
    })   */
  },
  methods:{
    send(){
      // let msg = msginput.value;
      let data = { msg: this.ipt };
      this.$socket.emit('message', data);  //发送消息到服务器
    },
    private_mess(index,ev){
      //事件委托+私信点击用户名发送
      let msg = this.ipt;
      let data = { msg: msg };
      let toUserName = this.user_list[index];
      this.$socket.emit('private message', toUserName, data, (data) => {
          this.mess_list.push(data)
      });
      
    }
  },
}
</script>


<style lang="scss">

  /*引入全局scss变量*/
  // @import url(../assets/scss/base.scss);  ×

  //局部变量
  $bg-color: #399;
  .bbs{
    background: $bg-color;
  }
  .bbs2{
    background: $theme-color;
  }
</style>
