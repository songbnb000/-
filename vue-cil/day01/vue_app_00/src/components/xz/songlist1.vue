<template>
<!--这个div和下面的button测试完删除掉-->
<div class="songlistdiv">   
    <musichead class="musicheadtag"></musichead>
        <div class="songlistfooter1div">
            <mt-button v-for="(item,index) of list" :key="index" :data-idx="index" @click="setActive" class="buttontag" id="ppp">
            {{item}} 
            </mt-button>
        </div>
    <mt-tab-container v-model="active">
    <!--第一个子面板-->
        <mt-tab-container-item id="tab1">
            <div class="songlistdiv1">
                <img v-for="(item1,i) in songlist" :key="i+'1'" :src="item1.coverImgUrl"   class="imgsize">
                <a :href="'https://music.163.com/#/playlist?id='+item2.id" v-for="(item2,index2) in songlist" :key="index2+'2'" class="songlista">
         {{item2.name}}
                </a>
            </div>
        </mt-tab-container-item>
    <!--第二个子面板-->
        <mt-tab-container-item id="tab2">
            <div class="songlistdiv2">
                <img v-for="(item3,index3) in songlist1" :key="index3+'3'" :src="item3.coverImgUrl"   class="imgsize">
             <a :href="'https://music.163.com/#/playlist?id='+item4.id" v-for="(item4,index4) in songlist1" :key="index4+'4'" class="songlista1">
            {{item4.name}}
                </a>
            </div>
        </mt-tab-container-item>
    <!--第三个子面板-->
        <mt-tab-container-item id="tab3">
            <div class="songlistdiv2">
                <img v-for="(item5,indexs4) in songlistlx" :key="indexs4+'5'" :src="item5.coverImgUrl"   class="imgsize">
             <a :href="'https://music.163.com/#/playlist?id='+item6.id" v-for="(item6,indexs5) in songlistlx" :key="indexs5+'6'" class="songlista1">
            {{item6.name}}
                </a>
            </div>
        </mt-tab-container-item>
    <!--第四个子面板-->
        <mt-tab-container-item id="tab4">
            <div class="songlistdiv2">
                <img v-for="(item7,index5) in songlistqyy" :key="index5+'7'" :src="item7.coverImgUrl"   class="imgsize">
             <a :href="'https://music.163.com/#/playlist?id='+item8.id" v-for="(item8,index6) in songlistqyy" :key="index6+'8'" class="songlista1">
            {{item8.name}}
                </a>
            </div>
        </mt-tab-container-item>
    <!--第五个子面板-->
        <mt-tab-container-item id="tab5">
            <div class="songlistdiv2">
                <img v-for="(items9,i7) in songlistsg" :key="i7+'9'" :src="items9.coverImgUrl"   class="imgsize">
             <a :href="'https://music.163.com/#/playlist?id='+items10.id" v-for="(items10,i7) in songlistsg" :key="i7+'10'" class="songlista1">
            {{items10.name}}
                </a>
            </div>
        </mt-tab-container-item>
    <!--第六个子面板-->
        <mt-tab-container-item id="tab6">
            <div class="songlistdiv2">
                <img v-for="(itemgf,igf) in songlistgf" :key="igf+'11'" :src="itemgf.coverImgUrl"   class="imgsize">
             <a :href="'https://music.163.com/#/playlist?id='+itemgfa.id" v-for="(itemgfa,igfa) in songlistgf" :key="igfa+'12'" class="songlista1">
            {{itemgfa.name}}
                </a>
            </div>
        </mt-tab-container-item>
    <!--第七个子面板-->
        <mt-tab-container-item id="tab7">
            <div class="songlistdiv2">
                <img v-for="(itemhj,ihj) in songlisthj" :key="ihj+'13'" :src="itemhj.coverImgUrl"   class="imgsize">
             <a :href="'https://music.163.com/#/playlist?id='+itemhja.id" v-for="(itemhja,ihja) in songlisthj" :key="ihja+'14'" class="songlista1">
            {{itemhja.name}}
                </a>
            </div>
        </mt-tab-container-item>
    <!--第八个子面板-->
        <mt-tab-container-item id="tab8">
            <div class="songlistdiv2">
                <img v-for="(itemxy,ixy) in songlistxy" :key="ixy+'15'" :src="itemxy.coverImgUrl"   class="imgsize">
             <a :href="'https://music.163.com/#/playlist?id='+itemxya.id" v-for="(itemxya,ixya) in songlistxy" :key="ixya+'16'" class="songlista1">
            {{itemxya.name}}
                </a>
            </div>
        </mt-tab-container-item>
    <!--第九个子面板-->
        <mt-tab-container-item id="tab9">
            <div class="songlistdiv2">
                <img v-for="(itemysys,iysys) in songlistysys" :key="iysys+'17'" :src="itemysys.coverImgUrl"   class="imgsize">
             <a :href="'https://music.163.com/#/playlist?id='+itemysysa.id" v-for="(itemysysa,iysysa) in songlistysys" :key="iysysa+'18'" class="songlista1">
            {{itemysysa.name}}
                </a>
            </div>
        </mt-tab-container-item>
    <!--第十个子面板-->
        <mt-tab-container-item id="tab10">
            <div class="songlistdiv2">
                <img v-for="(itemyg,iyg) in songlistyg" :key="iyg+'19'" :src="itemyg.coverImgUrl"   class="imgsize">
             <a :href="'https://music.163.com/#/playlist?id='+itemyga.id" v-for="(itemyga,iyga) in songlistyg" :key="iyga+'20'" class="songlista1">
            {{itemyga.name}}
                </a>
            </div>
        </mt-tab-container-item>
    <!--第十一个子面板-->
        <mt-tab-container-item id="tab11">
            <div class="songlistdiv2">
                <img v-for="(itemyd,iyd) in songlistyd" :key="iyd+'21'" :src="itemyd.coverImgUrl"   class="imgsize">
             <a :href="'https://music.163.com/#/playlist?id='+itemyda.id" v-for="(itemyda,iyda) in songlistyd" :key="iyda+'22'" class="songlista1">
            {{itemyda.name}}
                </a>
            </div>
        </mt-tab-container-item>
        <!--第十二个子面板-->
        <mt-tab-container-item id="tab12">
            <div class="songlistdiv2">
                <img v-for="(itemfc,ifc) in songlistfc" :key="ifc+'23'" :src="itemfc.coverImgUrl"   class="imgsize">
             <a :href="'https://music.163.com/#/playlist?id='+itemfca.id" v-for="(itemfca,ifca) in songlistfc" :key="ifca+'24'" class="songlista1">
            {{itemfca.name}}
                </a>
            </div>
        </mt-tab-container-item>
        <!--第十三个子面板-->
        <mt-tab-container-item id="tab13">
            <div class="songlistdiv2">
                <img v-for="(itemwlgq,iwlgq) in songlistwlgq" :key="iwlgq+'25'" :src="itemwlgq.coverImgUrl"   class="imgsize">
             <a :href="'https://music.163.com/#/playlist?id='+itemwlgqa.id" v-for="(itemwlgqa,iwlgqa) in songlistwlgq" :key="iwlgqa+'26'" class="songlista1">
            {{itemwlgqa.name}}
                </a>
            </div>
        </mt-tab-container-item>
        <!--第十四个子面板-->
        <mt-tab-container-item id="tab14">
            <div class="songlistdiv2">
                <img v-for="(itemxx,ixx) in songlistxx" :key="ixx+'27'" :src="itemxx.coverImgUrl"   class="imgsize">
             <a :href="'https://music.163.com/#/playlist?id='+itemxxa.id" v-for="(itemxxa,ixxa) in songlistxx" :key="ixxa+'28'" class="songlista1">
            {{itemxxa.name}}
                </a>
            </div>
        </mt-tab-container-item>
        <!--第十五个子面板-->
        <mt-tab-container-item id="tab15">
            <div class="songlistdiv2">
                <img v-for="(itemjd,ijd) in songlistjd" :key="ijd+'29'" :src="itemjd.coverImgUrl"   class="imgsize">
             <a :href="'https://music.163.com/#/playlist?id='+itemjda.id" v-for="(itemjda,ijda) in songlistjd" :key="ijda+'30'" class="songlista1">
            {{itemjda.name}}
                </a>
            </div>
        </mt-tab-container-item>
        <!--第十六个子面板-->
        <mt-tab-container-item id="tab16">
            <div class="songlistdiv2">
                <img v-for="(itemsc,isc) in songlistsc" :key="isc+'31'" :src="itemsc.coverImgUrl"   class="imgsize">
             <a :href="'https://music.163.com/#/playlist?id='+itemsca.id" v-for="(itemsca,isca) in songlistsc" :key="isca+'32'" class="songlista1">
            {{itemsca.name}}
                </a>
            </div>
        </mt-tab-container-item>
    </mt-tab-container>
</div>
</template>

<script>
import musichead from "../../music/musichead.vue"
export default {
    data(){
        return {
            songlist:{},
            songlist1:{},
            songlistlx:{},
            songlistqyy:{},
            songlistsg:{},
            songlistgf:{},
            songlisthj:{},
            songlistxy:{},
            songlistysys:{},
            songlistacg:{},
            songlistyg:{},
            songlistyd:{},
            songlistfc:{},
            songlistwlgq:{},
            songlistxx:{},
            songlistjd:{},
            songlistsc:{},
            list:["最新","最热","流行","轻音乐","伤感","古风","怀旧","校园","ACG","摇滚","运动","翻唱","网络歌曲","学习","经典","说唱"],
            active:"tab1",
            chars:['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
                
        }
    },
    components:{
        musichead:musichead
    },
    methods:{
        generateMixed(n){
        var res="";
        for(var i=0;i<n;i++){
        var id=Math.ceil(Math.random()*16);
        res+=this.chars[id];
        }
        return res;
        },
        setActive(e){
                    //e指所有事件
                    //target指触发事件
                    //dataset指所有自定义属性库
                    //上面自己写的idx自定义属性名
                  var idx=parseInt(e.target.dataset.idx)  
                  //自定义属性拿过来是一个字符串，所以需要转换一下
                  this.active="tab"+(idx+1);
                  var num=this.generateMixed(6);
                  var p=document.getElementById('ppp')
                  //console.log(e.target)触发的标签
                  e.target.style.color ="#"+num;
        },
        bfsonglist(){this.axios.get("/top/playlist").then(res=>{
            var songlistdata=res.data.playlists
            this.songlist=songlistdata
            console.log(this.songlist)
            return this.songlist
        })
        },
        bfsonglist1(){this.axios.get("/top/playlist?limit=50&order=new").then(res=>{
            var songlistdata1=res.data.playlists
            this.songlist1=songlistdata1
            console.log(this.songlist1)
            return this.songlist1
        })
        },
        bfsonglistlx(){this.axios.get("/top/playlist/?cat=流行&limit=50").then(res=>{
            var songlistdata1=res.data.playlists
            this.songlistlx=songlistdata1
            return this.songlistlx
        })
        },
        bfsonglistqyy(){this.axios.get("/top/playlist/?cat=轻音乐&limit=50").then(res=>{
            var songlistdata1=res.data.playlists
            this.songlistqyy=songlistdata1
            return this.songlistqyy
        })
        },
        bfsonglistsg(){this.axios.get("/top/playlist/?cat=治愈&limit=50").then(res=>{
            var songlistdata1=res.data.playlists
            this.songlistsg=songlistdata1
            return this.songlistsg
        })
        },
        bfsonglistgf(){this.axios.get("/top/playlist/?cat=古风&limit=50").then(res=>{
            var songlistdata1=res.data.playlists
            this.songlistgf=songlistdata1
            return this.songlistgf
        })
        },
        bfsonglisthj(){this.axios.get("/top/playlist/?cat=怀旧&limit=50").then(res=>{
            var songlistdata1=res.data.playlists
            this.songlisthj=songlistdata1
            return this.songlisthj
        })
        },
        bfsonglistxy(){this.axios.get("/top/playlist/?cat=校园&limit=50").then(res=>{
            var songlistdata1=res.data.playlists
            this.songlistxy=songlistdata1
            return this.songlistxy
        })
        },
        bfsonglistysys(){this.axios.get("/top/playlist/?cat=影视原声&limit=50").then(res=>{
            var songlistdata1=res.data.playlists
            this.songlistysys=songlistdata1
            return this.songlistysys
        })
        },
        bfsonglistacg(){this.axios.get("/top/playlist/?cat=ACG&limit=50").then(res=>{
            var songlistdata1=res.data.playlists
            this.songlistacg=songlistdata1
            return this.songlistacg
        })
        },
         bfsonglistyg(){this.axios.get("/top/playlist/?cat=摇滚&limit=50").then(res=>{
            var songlistdata1=res.data.playlists
            this.songlistyg=songlistdata1
            return this.songlistyg
        })
        },
        bfsonglistyd(){this.axios.get("/top/playlist/?cat=运动&limit=50").then(res=>{
            var songlistdata1=res.data.playlists
            this.songlistyd=songlistdata1
            return this.songlistyd
        })
        },
        bfsonglistfc(){this.axios.get("/top/playlist/?cat=翻唱&limit=50").then(res=>{
            var songlistdata1=res.data.playlists
            this.songlistfc=songlistdata1
            return this.songlistfc
        })
        },
        bfsonglistwlgq(){this.axios.get("/top/playlist/?cat=网络歌曲&limit=50").then(res=>{
            var songlistdata1=res.data.playlists
            this.songlistwlgq=songlistdata1
            return this.songlistwlgq
        })
        },
        bfsonglistxx(){this.axios.get("/top/playlist/?cat=学习&limit=50").then(res=>{
            var songlistdata1=res.data.playlists
            this.songlistxx=songlistdata1
            return this.songlistxx
        })
        },
        bfsonglistjd(){this.axios.get("/top/playlist/?cat=经典&limit=50").then(res=>{
            var songlistdata1=res.data.playlists
            this.songlistjd=songlistdata1
            return this.songlistjd
        })
        },
        bfsonglistsc(){this.axios.get("/top/playlist/?cat=说唱&limit=50").then(res=>{
            var songlistdata1=res.data.playlists
            this.songlistsc=songlistdata1
            return this.songlistsc
        })
        }
    },
    mounted(){
        this.bfsonglist(),
        this.bfsonglist1(),
        this.bfsonglistlx(),
        this.bfsonglistqyy(),
        this.bfsonglistsg(),
        this.bfsonglistgf(),
        this.bfsonglisthj(),
        this.bfsonglistxy(),
        this.bfsonglistysys(),
        this.bfsonglistyg(),
        this.bfsonglistyd(),
        this.bfsonglistfc(),
        this.bfsonglistwlgq(),
        this.bfsonglistxx(),
        this.bfsonglistjd(),
        this.bfsonglistsc(),
        this.setActive()
    },
}
</script>
<style scoped>
*{padding:0;margin:0}
    .songlistdiv{
        margin:0 auto;
    }
    .songlistdiv1{
        /*页面的高*/
        width:1200px;
        height:2700px;
        flex-wrap:wrap;
        display:flex;
        justify-content:space-between;
        margin:0 auto;
    }
       .songlistdiv2{
        /*页面的高*/
        width:1200px;
        height:2700px;
        flex-wrap:wrap;
        display:flex;
        justify-content:space-between;
        margin:0 auto;
    }
    .imgsize{
        background-size:100% 100%;
        width:220px;
        height:220px;
        margin-bottom:49px;
    }
    .songlista{
        width:220px;
        height:20px;
        display:block;
        overflow: hidden;
        bottom:2700px;
        padding-top:247px;
        flex-wrap:wrap;
        display:flex;
        justify-content:space-between;
        position:relative;
        text-decoration:none;
    }
    .songlista1{
         width:220px;
        height:20px;
        display:block;
        overflow:hidden;
        bottom:2700px;
        padding-top:247px;
        flex-wrap:wrap;
        display:flex;
        justify-content:space-between;
        position:relative;
        text-decoration:none;
    }
    .songlista1:hover{
        overflow:visible;
    }
    .songlistfooter1div{
        width:1200px;
        height:41px;
        margin:10px auto;
    }
    .musicheadtag{
        margin-bottom:30px;
    }
   /*.buttontag:hover{
    color:#fff;*/
    /*background: -webkit-linear-gradient(red, blue);  Safari 5.1 - 6.0 
    background: -o-linear-gradient(red, blue);  Opera 11.1 - 12.0 
    background: -moz-linear-gradient(red, blue);  Firefox 3.6 - 15 
    background: linear-gradient(red, blue);  标准的语法（必须放在最后）
    }*/
</style>   