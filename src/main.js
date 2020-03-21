import Vue from 'vue'
// import VueResource from 'vue-resource'
import App from './App'
import router from './router'
// import axios from 'axios'

//全局配置
// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
// axios.defaults.headers.common['Authorization'] = 'Token'
// axios.defaults.headers.post['Conent-type'] = 'application/urlencode'
// axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.config.productionTip = false

Vue.use(VueResource)

// 自定义指令
// Vue.directive('rainbow',{
//   //钩子函数
//   bind(el,binding,vnode){
//     el.style.color = "#"+Math.random().toString(16).slice(2,8)
//   }
// })
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = '1260px'
    }else if(binding.value == 'narrow'){
      el.style.maxWidth = '560px'
    }
    if(binding.arg == 'column'){
      el.style.background = '#6677cc';
      el.style.padding = '20px'
    }
  }
})
//自定义过滤器(全局)
//大写
// Vue.filter('to-uppercase',function(value){
//   return value.toUpperCase()
// })
//截取
Vue.filter('snippet',function(value){
  return value.slice(0,100)+"..."
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  mode:"history",
  components: { App },
  template: '<App/>'
})
