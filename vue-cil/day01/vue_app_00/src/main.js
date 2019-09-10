import Vue from 'vue'
import App from './App.vue'
import router from './router'
//第三方组件库在下面引入
//1:完整引入mint-ui
import MintUI from 'mint-ui' 
//2:单引引入mint-ui样式
import 'mint-ui/lib/style.css'
//3:将mint-ui注册vue
Vue.use(MintUI);
//4:引入图标字体样式文件
import "./font/iconfont.css"
//main.js配置axios
//引入axios库
import axios from "./axios"
//3:发送请求时保存session信息
//只要有session信息一定要这个选项
//axios.defaults.withCredentials=true
//4:设置请求基础路径
//axios.defaults.baseURL="http://127.0.0.1:3000/"
//地址栏必须写http://127.0.0.1:3000/
//另外发送请求的url直接填http://127.0.0.1:3000/后面的地址就可以了
//如果是loaclhost 报错
//注册
//Vue.prototype.axios=axios;
//5:引入axios.js文件
//import axios from "./axios"
//6：引入vuex
import Vuex from "vuex"
//7: 注册vuex组件
//一定要先注册再创建存储对象
Vue.use(Vuex)
//使用elment-ui的轮播组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//8: 创建vuex实例 store 
var store = new Vuex.Store({
  //vuex中全局共享数据
  //这个用来保存全局数据
  state:{
    cartCount:0,
    age:70,
    list:[1,2,3,4]
  },
  //修改vuex中全局共享数据
  //这个用来修改数据的函数
  mutations:{
    //购物车数量加 1
    increment(state){
      state.cartCount++;
    },
    clear(state){
      state.cartCount = 0;
    },
    //购物车数量增加指定值 5
    updateCount(state,c){
       state.cartCount+=c;
    },
    //修改age的数值
    updateAge(state){
      state.age=30
    }
  },
  //获取vuex中全局共享数据 11:40
  //这个是用来获取数据的函数
  getters:{
   getCartCount:function(state){
    return state.cartCount;
   },
   //获取上面的age
   getAge(state){//特殊:所有函数都有参数
    return state.age;
    //返回获得age
  },
      //返回数组
  getList(state){
    return state.list
  }
  },
  //actions:{//集中保存异步修改函数
   // modifyage:(context)=>{//context是一个上下文对象
     // setTimeout(()=>{
       // context.commit("")
      //},500)
   // }
  //}
})
//9: 将store保存vue实例中
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')


