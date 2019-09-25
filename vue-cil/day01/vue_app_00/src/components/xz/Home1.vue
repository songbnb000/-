<template>
<div class="alldiv">
    <musicsinger class="singgertag"></musicsinger>
    <div class="div2">
        <topall></topall>
        <div class="div1">
        <!-- <div @click="nihao">你好吗</div>-->
         <!--   <button @click="artists">1</button>-->
            <div class="lengthdiv">
                <h3 v-for="(item2,i2) in toplistsong" :key="i2" class="hlength">{{i2}}</h3>
            </div>
            <div class="imgdiv">
                <img v-for="(item1,i) in toplistsong" :key="i" :src="item1.al.picUrl"   class="imgsize">     
            </div>
            <div class="namediv">
                <a href="javascript:;" v-for="(item,index) in toplistsong" :key="index" class="songname">{{item.name}}</a>
            </div>
            <div class="ardiv">
                <a href="javascript:;" v-for="(item3,index3) in toplistsong" :key="index3" class="arname">{{item3.ar[0].name}}</a>
            </div>
            <div class="iddiv" id="iddiv1">
                <a id="aid" v-for="(item4,index4) in toplistsong" :key="index4"  :href="'https://music.163.com/song?id='+item4.id" class="ida" title="点击播放">
                    <i class="iconfont icon-bofang1"></i>
                </a>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import iconfont from "./bficon1/iconfont.css"
import topall from "./topall.vue"
import musicsinger from "../../music/musicsinger.vue"
export default {
    data(){ 
        return{
            toplistsong:{}
        }
    },
    components:{
        musicsinger:musicsinger,
        topall:topall
    },
    methods:{
        artists(){this.axios.get("/top/list?idx=0").then(res=>{
            
            var toplist=res.data.playlist.tracks
          /*  var toplist1=res.data.playlist.tracks[0].al.picUrl*/
            /*console.log(toplist)*/
            /*var x=document.getElementById("bfmy")*/

           /* for(var i=0;i<toplist.length;i++){
                    this.toplistsong[i]=toplist[i]
                    console.log(this.toplistsong)
            }*/
            this.toplistsong=toplist
            console.log(this.toplistsong)
            console.log(this.toplistsong[0].ar[0].name)
            return this.toplistsong
        })
        },
    },
    mounted(){
       /* this.nihao()*/
       this.artists()
    }
}
</script>
<style scoped>
*{padding:0;margin:0}
    .alldiv{
        width:1200px;
        margin:0 auto;
    }
    .div2{
        margin-top:-40px;
        width:1200px;
        display:flex;
        flex-direction:row;
        flex-wrap:nowrap;
        /*justify-content:space-between;*/
    }
    .singgertag{
        width:1200px;
    }
    .div1{
        width:100%;
        margin-left:30px;
        margin-top:5px;

    }
    .hlength{
        width:50px;
        height:50px;
        padding-top:20px;
        margin-bottom:0;
        line-height:50px;
    }
    .imgsize{
        background-size:100% 100%;
        width:50px;
        height:50px;
        margin-right:30px;
        margin-top:0;
        padding-top:20px;
        display:block;
    }
    .songname{
        width:200px;
        height:50px;
        display:block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top:20px;
        line-height:50px;
        text-decoration:none;
    }
    .songname:hover{
        overflow:visible;
        text-decoration:none;

    }
    .arname{
        width:200px;
        height:50px;
        display:block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top:20px;
        line-height:50px;
        text-decoration:none;
    }
    .ida{
        width:200px;
        height:50px;
        display:block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top:20px;
        line-height:50px;
        text-decoration:none;
        color:darkturquoise
    }
    .imgdiv{
        float:left;
    }
    .namediv{
        float:left;
    }
    .lengthdiv{
        float:left;
    }
    .ardiv{
        float:left;
    }
    .iddiv{
        float:left;
    }
</style>
