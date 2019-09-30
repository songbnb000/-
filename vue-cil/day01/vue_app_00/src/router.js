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
import home2 from "./components/xz/home2.vue"
import ychome3 from "./components/xz/ychome3.vue"
import lghome4 from "./components/xz/lghome4.vue"
import djyyhome5 from "./components/xz/djyyhome5.vue"
import iTuneshome6 from "./components/xz/iTuneshome6.vue"
import ukhome7 from "./components/xz/ukhome7.vue"
import sshome8 from "./components/xz/sshome8.vue"
import songlist1 from "./components/xz/songlist1.vue"
import songlist3 from "./components/xz/songlist3.vue"
import songlisthy from "./components/xz/songlisthy.vue"
import songlistyy from "./components/xz/songlistyy.vue"
import songlisthg from "./components/xz/songlisthg.vue"
import songlistry from "./components/xz/songlistry.vue"
import songlistom from "./components/xz/songlistom.vue"
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
import search from "./music/search.vue"
import djradio from "./music/djradio.vue"
import ceshisonglist from "./music/ceshisonglist.vue"
import musicmv from "./music/musicmv.vue"
import musicsinger from "./music/musicsinger.vue"
import singer from "./music/singer.vue"
import singerboy from "./music/singerboy.vue"
import singerboy1 from "./music/singerboy1.vue"
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
import hanguoboy from "./music/hanguoboy.vue"
import hanguogril from "./music/hanguogril.vue"
import hanguoitem from "./music/hanguoitem.vue"
import japanboy from "./music/japanboy.vue"
import japangril from "./music/japangril.vue"
import japanitem from "./music/japanitem.vue"
import other from "./music/othersinger.vue"
import singertop from "./music/singertop.vue"
import topall from "./components/xz/topall.vue"
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
    {path:'/axios1',component:axios1},
    {path:'/topall',component:topall},
    {path:'/home2',component:home2},
    {path:'/ychome3',component:ychome3},
    {path:'/lghome4',component:lghome4},
    {path:'/djyyhome5',component:djyyhome5},
    {path:'/ituneshome6',component:iTuneshome6},
    {path:'/ukhome7',component:ukhome7},
    {path:'/sshome8',component:sshome8},
    {path:'/songlist1',component:songlist1},
    {path:'/songlist3',component:songlist3},
    {path:'/hanguoboy',component:hanguoboy},
    {path:'/hanguogril',component:hanguogril},
    {path:'/hanguoitem',component:hanguoitem},
    {path:'/japanboy',component:japanboy},
    {path:'/japangril',component:japangril},
    {path:'/japanitem',component:japanitem},
    {path:'/other',component:other},
    {path:'/singerboy1',component:singerboy1},
    {path:'/singertop',component:singertop},
    /*为了做一个伪动态，所以这边路径和名称不一样*/
    {path:'/songlist2',component:songlisthy},
    {path:'/songlist23',component:songlistyy},
    {path:'/songlist9',component:songlistom},
    {path:'/songlist14',component:songlistry},
    {path:'/songlist18',component:songlisthg},
    {path:'/search',component:search},
    {path:'/djradio',component:djradio}

    
    


    
    
    
    

    
  
  ]
})
