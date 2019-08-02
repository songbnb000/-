<template>
    <div class="headdiv">
        <div class="headdiv1">
            <h1>
                <a href="javascript:;">
                    <img src="./headimg/1.png" alt="千千音乐" class="headdivimg">
                </a>
            </h1>
            <nav class="headnav">
                <a href="javascript:;" class="headnav-a">发现音乐</a>
                <a href="javascript:;" class="headnav-a">随心听</a>
                <a href="javascript:;" class="headnav-a">客户端</a>
                <a href="javascript:;" class="headnav-a">VIP</a>
                <a href="javascript:;" class="headnav-a">音乐人</a>
                <a href="javascript:;" class="headnav-a">演出</a>
            </nav>
            <div class="headdiv1-2">
                <input type="text" class="headinput" placeholder="请输入歌名、歌词、歌手或专辑">
                <div class="headdiv2i">
                <i class="el-icon-search"></i>
                </div>
            </div>
            <div class="headdiv1-3">
                <a href="javascript:;" class="headdiv3-a">登录</a>
                |
                <a href="javascript:;" class="headdiv3-a">注册</a>
            </div>
        </div>
        <div class="headdiv2">
            <nav class="headnav2">
                <a href="javascript:;" class="headnav2-a">推荐</a>
                <a href="http://127.0.0.1:8080/#/songlist" class="headnav2-a1">歌单</a>
                <a href="javascript:;" class="headnav2-a1">歌手</a>
                <a href="javascript:;" class="headnav2-a1">榜单</a>
                <a href="javascript:;" class="headnav2-a1">分类</a>
                <a href="javascript:;" class="headnav2-a1">MV</a>
                <a href="javascript:;" class="headnav2-a1">U榜</a>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    }
}
</script>
<style scoped>
*{margin:0;padding:0}
    .headdiv{
        width:1200px;
        height:133px;
        margin:0 auto;
    }
    /*千千音乐图片*/
    .headdivimg{
        width:123px;
        margin-right:90px;
        margin-bottom:-10px;
        
    }
    .headdiv1{
        width:1200px;
        height:95px;
        line-height:95px;
        display:flex;
        display:-webkit-flex;
        flex-wrap:wrap;
    }
    .headnav{
        width:452px;
        height:31px;
        display:flex;
        display:-webkit-flex;
        flex-wrap:wrap;
        justify-content:space-between;
    }
    .headnav-a{
        text-decoration:none;
        color:#333333;
        font-size:16px;
        text-decoration:none;

    }
    .headinput{
        width:300px;
        height:30px;
        margin:0 0 0 0;
        margin-bottom:1px;
        border:1px solid gainsboro;
        border-radius:5px;
    }
    .headdiv1-2{
        width:330px;
        height:30px;
        line-height:30px;
        margin:35px 0 0 30px;
        display:flex;
        display:-webkit-flex;
        flex-wrap:wrap;

    }
    .el-icon-search{
        font-size:150%;
        margin:0 0 0 0;
        color:orangered;
    }
    .headdiv1-3{
        width:130px;
        height:34px;
        line-height:34px;
        margin:32px 0 0 5px;

    }
    .headdiv3-a{
        text-decoration:none;
        color:#333333;
        padding:0 13px 0 13px;
    }
    .headdiv2i{
        width:34px;
        height:30px;
        margin-top:4px;
        margin-left:-30px;
    }
    .headdiv2{
        width:1200px;
        height:40px;
        background-color:snow;
        line-height:40px;
    }
    .headnav2{
        width:800px;
        height:40px;
        margin:0 auto;
        display:flex;
        display:-webkit-flex;
        flex-wrap:wrap;
        justify-content:space-between;
    }
    .headnav2-a{
        text-decoration:none;
        font-size:16px;
        font-family:PingFangSC-Regular,poppin,Tahoma,Arial,sans-serif;
        color:orangered;
        letter-spacing:1px;
    }
    .headnav2-a1{
        text-decoration:none;
        font-size:16px;
        font-family:PingFangSC-Regular,poppin,Tahoma,Arial,sans-serif;
        color:#333;
        letter-spacing:1px;
    }
</style>