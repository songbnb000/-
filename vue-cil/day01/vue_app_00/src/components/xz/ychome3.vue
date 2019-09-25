<template>
   <div class="alldiv">
    <musicsinger class="singgertag"></musicsinger>
    <div class="div2">
        <topall></topall>
        <div class="div1">
        <!-- <div @click="nihao">你好吗</div>-->
        
            <div class="lengthdiv">
                <h3 v-for="(item2,i2) in toplistsong3" :key="i2" class="hlength">{{i2}}</h3>
            </div>
            <div class="imgdiv">
                <img v-for="(item1,i) in toplistsong3" :key="i" :src="item1.al.picUrl"   class="imgsize">     
            </div>
            <div class="namediv">
                <a href="javascript:;" v-for="(item,index) in toplistsong3" :key="index" class="songname">{{item.name}}</a>
            </div>
            <div class="ardiv">
                <a href="javascript:;" v-for="(item3,index3) in toplistsong3" :key="index3" class="arname">{{item3.ar[0].name}}</a>
            </div>
            <div class="iddiv" id="iddiv1">
                <a id="aid" v-for="(item4,index4) in toplistsong3" :key="index4"  :href="'https://music.163.com/song?id='+item4.id" class="ida" title="点击播放">
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
        return {
            toplistsong3:{}
        }
    },
    components:{
        musicsinger:musicsinger,
        topall:topall
    },
    methods:{
        artists3(){this.axios.get("/top/list?idx=2").then(res=>{
            var toplist=res.data.playlist.tracks
           /* for(var i=0;toplist.length<=10;i++){
                    this.toplistsong=toplist
                   
            }*/
            this.toplistsong3=toplist
           console.log(this.toplistsong1)
            return this.toplistsong1
        })
        }
    },
    mounted(){
            this.artists3()
        },
}
</script>
<style scoped>
.namediv{
    width:220px;
    height:100%;
}
    .namea{
        width:50px;
        height:50px;
        display:block;
    }
    /*这里引用home1的样式*/
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
        justify-content:space-between;
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