//router.js 引入路由
import Vue from 'vue'
import Router from 'vue-router'
//自定义组件
import HelloContainer from "./components/HelloWorld.vue"
//1:引入Exam01.vue 组件 39
import Exam01 from "./components/exam/Exam01.vue"
import Exam02 from
"./components/exam/Exam02.vue"
import Exam03 from "./components/exam/Exam03.vue"
import Homework04 from "./components/exam/Homework04.vue"
import Exam05 from "./components/exam/Exam05.vue"
import axios1 from "./components/exam/axios1.vue"
import ExamContainer06 from "./components/exam/ExamContainer06.vue"
import ExamContainer07 from "./components/exam/ExamContainer07.vue"
import ExamTabbar08 from "./components/exam/ExamTabbar08.vue"
import S10 from "./components/exam/S10.vue"
import vuexa from "./components/exam/vuexA.vue"
import vuexb from "./components/exam/vuexB.vue"
import Home from "./components/weixin/Home.vue"
import MessageList from "./components/weixin/common/MessageList.vue"
import Login from "./components/xz/Login.vue"
import Home1 from "./components/xz/Home1.vue"
import Product from "./components/xz/Product.vue"
import Cart from "./components/xz/Cart.vue"
/*import Carousel from "./components/xz/carousel.vue"*/
import carousel2 from "./music/carousel2.vue"
import musicborder from "./music/musicborder.vue"
import round from "./music/round.vue"
import round2 from "./music/round2.vue"
import carousel3 from "./music/carousel3.vue"
import hotsonglist from "./music/hotsonglist.vue"
import musichead from "./music/musichead.vue"
import carousel from "./music/carousel.vue"
import index from "./music/index.vue"
import hotsong from "./music/hotsong.vue"
import songlist from "./music/songlist.vue"
import loadmore from "./music/loadmore.vue"
import ceshisonglist from "./music/ceshisonglist.vue"
import musicmv from "./music/musicmv.vue"
import musicsinger from "./music/musicsinger.vue"
import singer from "./music/singer.vue"
import singerboy from "./music/singerboy.vue"
import singergril from "./music/singergril.vue"
import Chinaband from "./music/Chinaband.vue"
import musicoriginal from "./music/musicoriginal.vue"
import oumeigril from "./music/oumeigril.vue"
import oumeiboy from "./music/oumeiboy.vue"
import oumeiitem from "./music/oumeiitem.vue"
import suoyin from "./music/suoyin.vue"
import musicsort from "./music/musicsort.vue"
import musictop from "./music/musictop.vue"
import musicredrank from "./music/musicredrank.vue"
import ceshilogin from "./music/ceshilogin.vue"
import music3yuan from "./music/music3yuan.vue"
import music2yuan from "./music/music2yuan.vue"
Vue.use(Router)
export default new Router({
  routes: [
    {path:'/Cart',
    component:Cart},
    {path:'/Product',component:Product},
    {path:'/Home1',component:Home1},
    {path:'/Login',component:Login},
    {path:'/MessageList',component:MessageList},
    {path:'/Home',component:Home},
    {path:'/S10',component:S10},
    {path:'/ExamTabbar08',component:ExamTabbar08},
    {path:'/ExamContainer07',component:ExamContainer07},
    {path:'/ExamContainer06',component:ExamContainer06},
    {path:'/Exam05',component:Exam05},
    {path:'/Homework04',component:Homework04},
    {path:'/Exam03',component:Exam03},
    {path:'/Exam02',component:Exam02},
    {path:'/',component:HelloContainer},
    {path:'/Exam01',component:Exam01},
    /*{path:'/Carousel',component:Carousel},*/
    {path:'/carousel2',component:carousel2},
    {path:'/musicborder',component:musicborder},
    {path:'/round',component:round},
    {path:'/round2',component:round2},
    {path:'/carousel3',component:carousel3},
    {path:'/hotsonglist',component:hotsonglist},
    {path:'/musichead',component:musichead},
    {path:'/carousel',component:carousel},
    {path:'/index',component:index},
    {path:'/hotsong',component:hotsong},
    {path:'/songlist',component:songlist},
    {path:'/loadmore',component:loadmore},
    {path:'/ceshisonglist',component:ceshisonglist},
    {path:'/musicmv',component:musicmv},
    {path:'/musicsinger',component:musicsinger},
    {path:'/singer',component:singer},
    {path:'/singerboy',component:singerboy},
    {path:'/singergril',component:singergril},
    {path:'/Chinaband',component:Chinaband},
    {path:'/musicoriginal',component:musicoriginal},
    {path:'/oumeiboy',component:oumeiboy},
    {path:'/oumeigril',component:oumeigril},
    {path:'/oumeiitem',component:oumeiitem},
    {path:'/suoyin',component:suoyin},
    {path:'/musicsort',component:musicsort},
    {path:'/musictop',component:musictop},
    {path:'/musicredrank',component:musicredrank},
    {path:'/ceshilogin',component:ceshilogin},
    {path:'/music3yuan',component:music3yuan},
    {path:'/music2yuan',component:music2yuan},
    {path:'/vuexa',component:vuexa},
    {path:'/vuexb',component:vuexb},
    {path:'/axios1',component:axios1}
    
    
    
    

    
  
  ]
})
