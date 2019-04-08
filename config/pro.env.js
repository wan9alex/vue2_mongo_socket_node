// 生产环境
let config = require('./config')
module.exports = {
  // NODE_ENV: '"production"',
  devServer:{
    // disableHostCheck: true, //进行配置反向代理，一定要加上“disableHostCheck: true”这句话

    //代理全部失效
    proxy:{//代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
      '/api':{//axios访问 /api ==  target + /api  
        target:config.baseUrl.https,
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
}