<template>
<!--这个div和下面的button测试完删除掉-->
<div class="songlistdiv">   
    <musichead class="musicheadtag"></musichead>
        <div class="songlistfooter1div">
            <mt-button v-for="(item,index) of list" :key="index" :data-idx="index" @click="setActive">
                                            {{item}} 
            </mt-button>
        </div>
    <mt-tab-container v-model="active">
    <!--第一个子面板-->
        <mt-tab-container-item id="tab1">
            <div class="songlistdiv1">
                <img v-for="(item1,i) in songlist" :key="i" :src="item1.coverImgUrl"   class="imgsize">
                <a :href="'https://music.163.com/#/playlist?id='+item2.id" v-for="(item2,index2) in songlist" :key="index2" class="songlista">
         {{item2.name}}
                </a>
            </div>
        </mt-tab-container-item>
    <!--第二个子面板-->
        <mt-tab-container-item id="tab2">
            <div class="songlistdiv2">
                <img v-for="(item3,index3) in songlist1" :key="index3" :src="item3.coverImgUrl"   class="imgsize">
             <a :href="'https://music.163.com/#/playlist?id='+item4.id" v-for="(item4,index4) in songlist1" :key="index4" class="songlista1">
            {{item4.name}}
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
            list:["最新","最热",],
            active:"tab1",
                
        }
    },
    components:{
        musichead:musichead
    },
    methods:{
        setActive(e){
                    //e指所有事件
                    //target指触发事件
                    //dataset指所有自定义属性库
                    //上面自己写的idx自定义属性名
                  var idx=parseInt(e.target.dataset.idx)  
                  //自定义属性拿过来是一个字符串，所以需要转换一下
                  this.active="tab"+(idx+1)
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
        }
    },
    mounted(){
        this.bfsonglist(),
        this.bfsonglist1()
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
</style>   