<template>
<!--这个div和下面的button测试完删除掉-->
<div class="songlist2div">   
    <musichead class="musicheadtag"></musichead>
    <div class="songlist2div2">
        <h3 class="songlist2h3">推荐歌单</h3>
    </div>
        <div class="songlist2div3">
                <img v-for="(item1,i) in songlist1" :key="i" :src="item1.picUrl"   class="imgsize">
                <a :href="'https://music.163.com/#/playlist?id='+item2.id" v-for="(item2,index2) in songlist1" :key="index2" class="songlista">
                {{item2.name}}
                </a>
        </div>
</div>
</template>

<script>
import musichead from "../../music/musichead.vue"
export default {
    data(){
        return {
            songlist1:{},          
        }
    },
    components:{
        musichead:musichead
    },
    methods:{
        bfsonglist1(){this.axios.get("/personalized").then(res=>{
            var songlistdata1=res.data.result
            this.songlist1=songlistdata1
            console.log(this.songlist1)
            return this.songlist1
        })
        }
    },
    mounted(){
        this.bfsonglist1()
    },
}
</script>
<style scoped>
*{padding:0;margin:0}
    .songlist2div1{
        margin:0 auto;
    }
    .songlist2div3{
        /*页面的高*/
        width:1200px;
        height:1650px;
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
        bottom:1630px;
        padding-top:247px;
        flex-wrap:wrap;
        display:flex;
        justify-content:space-between;
        position:relative;
        text-decoration:none;
    }
    .songlista:hover{
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
    .songlist2div2{
        width:1200px;
        height:20px;
        margin:20px auto;
    }
</style>   