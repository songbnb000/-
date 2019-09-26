<template>
<!--这个div和下面的button测试完删除掉-->
<div class="songlist2div">   
    <musichead class="musicheadtag"></musichead>
    <div class="songlist2div2">
        <h3 class="songlist2h3">那些欧美的声音</h3>
    </div>
        <div class="songlist2div3">
                <img v-for="(item,i) in songlistom" :key="i+'1'" :src="item.coverImgUrl"   class="imgsize">
            <div class="huayutaga">
                <a :href="'https://music.163.com/#/playlist?id='+items.id" v-for="(items,index2) in songlistom" :key="index2+'2'" class="songlista">
                {{items.name}}
                </a>
            </div>
        </div>
</div>
</template>

<script>
import musichead from "../../music/musichead.vue"
export default {
    data(){
        return {
            songlistom:{},          
        }
    },
    components:{
        musichead:musichead
    },
    methods:{
        bfsonglisthg(){this.axios.get("/top/playlist/?cat=欧美&limit=50").then(res=>{
            var songlistdata=res.data.playlists
            this.songlistom=songlistdata
            console.log(this.songlistom)
            return this.songlistom
        })
        }
    },
    mounted(){
        this.bfsonglisthg()
    },
}
</script>
<style scoped>
*{padding:0;margin:0}
    .songlist2div1{
        margin:0 auto;
        height:100%;
    }
    .songlist2div3{
        /*页面的高*/
        width:1200px;
        height:100%;
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
        bottom:841px;
        padding-top:248px;
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
    .huayutaga{
        width:1200px;
        height:100%;
        flex-wrap:wrap;
        display:flex;
        justify-content:space-between;
        margin-top:-1868px;
        margin-bottom:0px;
    }
</style>   