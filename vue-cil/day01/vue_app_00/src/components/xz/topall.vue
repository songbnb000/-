<template>
<div class="musictop">
    <!--全部榜单 208-->
                <div class="musictopdiv1">
                <div class="musictopdiv1div1">
                    <h3><a href="http://127.0.0.1:8080/#/musictop" class="musictopdiv1div1a">全部榜单</a></h3>
                </div>
                <div class="musictopdiv1div2">
                    <h3>主打榜单</h3>
                    <a href="http://127.0.0.1:8080/#/home2" class="musictopdiv1div2a">热歌榜</a>
                    <a href="http://127.0.0.1:8080/#/home1" class="musictopdiv1div2a">新歌榜</a>
                    <a href="http://127.0.0.1:8080/#/ychome3" class="musictopdiv1div2a">网络歌曲榜</a>
                    <a href="http://127.0.0.1:8080/#/lghome4" class="musictopdiv1div2a">经典老歌榜</a>
                </div>
                <div class="musictopdiv1div3">
                    <h3>其他榜单</h3>
                    <a href="http://127.0.0.1:8080/#/djyyhome5" class="musictopdiv1div3a">中国说唱榜</a>
                    <a href="http://127.0.0.1:8080/#/ituneshome6" class="musictopdiv1div3a">iTunes音乐榜</a>
                    <a href="http://127.0.0.1:8080/#/ukhome7" class="musictopdiv1div3a">UK排行榜周榜</a>
                    <a href="http://127.0.0.1:8080/#/sshome8" class="musictopdiv1div3a">音乐上升榜</a>
                    <a href="http://127.0.0.1:8080/#/musicredrank" class="musictopdiv1div3a">U榜</a>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    data(){
        return {}
    }
}
</script>
<style scoped>
    .musictop{
    
    height:2200px;
    /*margin:0 auto;*/
    display:flex;
}
.musictopdiv1{
    width:208px;
    height:454px;
    border-right:1px dashed gainsboro;

}
.musictopdiv1div1{
    width:208px;
    height:36px;
    line-height:36px;
    background-color:#299de7;
}
.musictopdiv1div1a{
    color:#fff;
    font-size:17px;
    text-decoration:none;
    margin-left:15px;
}
.musictopdiv1div2a{
    color:deepskyblue;
    font-size:16px;
    text-decoration:none; 
    margin-top:15px;
    display:block;
}
.musictopdiv1div3a{
    color:deepskyblue;
    font-size:14px;
    text-decoration:none; 
    margin-top:15px;
    display:block;
}
</style>