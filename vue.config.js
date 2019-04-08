/* var config = require('./config/config');
module.exports={
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/base.scss";
        `
      }
    }
  },
  devServer:{
    // proxy: 'http://localhost:3000',//告诉开发服务器将任何未知请求 (没有匹配到静态文件的请求) 代理到http://localhost:4000。
    // host: '0.0.0.0',
    port: 8002,
    open: false,
    // https: false,
    // proxy: null, // string | Object
    disableHostCheck: true, //进行配置反向代理，一定要加上“disableHostCheck: true”这句话
    proxy:{//代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
      '/api':{//axios访问 /api ==  target + /api  
        // target:'https://uncle9.top',
        // target:'http://localhost:3000',
        target:config.baseUrl.localhost_https,
        changeOrigin:true,//创建虚拟服务器 
        ws:true,//websocket代理
      },
      '/douban':{// axios 访问 /douban == target + '/douban'
        target:'https://api.douban.com',
        changeOrigin:true,
        pathRewrite:{//路径替换
          '^/douban':'',// axios 访问/douban/v2 == target + /v2
        }
      }
    }
  }
} */


// var path = require('path');

var proEnv = require('./config/pro.env');  // 生产环境
var devEnv = require('./config/dev.env');  // 本地开发环境
var merge = require('merge');

const env = process.env.NODE_ENV;
// console.log(env,process.env.VUE_APP_SECRET);
let target = '';
// 默认是本地环境
if(env==='production'){  // 生产环境
    target = proEnv;
}else{  // 本地开发环境
    target = devEnv;
}


module.exports = merge(target,{
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/base.scss";
        `
      }
    }
  }
});