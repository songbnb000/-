<template>
    <div class="headdiv">
        <div class="headdiv1">
            <h1>
                <a href="javascript:;">
                    <img src="./headimg/2.jpg" alt="千千音乐" class="headdivimg">
                </a>
            </h1>
            <nav class="headnav">
                <a href="javascript:;" class="headnav-a">首页</a>
                <a href="javascript:;" class="headnav-a">歌单</a>
                <a href="javascript:;" class="headnav-a">歌手</a>
                <a href="javascript:;" class="headnav-a">榜单</a>
                <a href="javascript:;" class="headnav-a">MV</a>
                <a href="javascript:;" class="headnav-a">登录</a>
                <a href="javascript:;" class="headnav-a">注册</a>
            </nav>
            <div class="headdiv1-2">
                <input type="text" class="headinput" placeholder="请输入歌名、歌词、歌手或专辑">
                <div class="headdiv2i">
                <i class="el-icon-search"></i>
                </div>
            </div>
            <div class="headdiv1-3">
                <a href="javascript:;" class="headdiv3-a">
                    <i class="iconfont icon-weibo"></i>
                </a>
                <a href="javascript:;" class="headdiv3-a">
                    <i class="iconfont icon-weixin"></i>
                </a>
                <a href="javascript:;" class="headdiv3-a">  
                    <i class="iconfont icon-qq"></i>
                </a>
            </div>
        </div>
        <div class="headdiv2">
        </div>
        <div class="headdiv3">
            <div class="headdiv3div">
                <div class="headdiv3div1">
                    <a href="" class="headdiv3div1a">U榜</a>
                </div>
                <div class="headdiv3div1">
                    <a href="" class="headdiv3div1a1">销售榜</a>
                </div>
                <div class="headdiv3div1">
                    <a href="" class="headdiv3div1a">富豪榜</a>
                </div>
            </div>
        </div>
        <div class="headdiv4">
            <div class="headdiv4div">
                <a href="" class="headdiv4diva">实时榜</a>
            </div>  
            <div class="headdiv4div">
                <a href="" class="headdiv4diva">日榜</a>
            </div>
            <div class="headdiv4div">
                <a href="" class="headdiv4diva">周榜</a>
            </div>
            <div class="headdiv4div">
                <a href="" class="headdiv4diva">月榜</a>
            </div>
        </div>
        <div class="headdiv5">
            <div class="headdiv5div1"></div>
            <div class="headdiv5div2"></div>
            <div class="headdiv5div3"></div>
        </div>
        <div class="headdiv6">
            <div class="headdiv6div"></div>
            <div class="headdiv6div"></div>
            <div class="headdiv6div"></div>
            <div class="headdiv6div"></div>
            <div class="headdiv6div"></div>
            <div class="headdiv6div"></div>
            <div class="headdiv6div"></div>
            <div class="headdiv6div"></div>
            <div class="headdiv6div"></div>
            <div class="headdiv6div"></div>
        </div>
    </div>
</template>
<script>
import muiscredrank from "./muiscredrank/iconfont.css"
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
        height:3000px;
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
        background-color:#25211e
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
        color:#a97b4c;
        font-size:16px;
        text-decoration:none;

    }
    .headinput{
        width:300px;
        height:30px;
        margin:0 0 0 0;
        margin-bottom:1px;
        border:1px solid #a97b4c;;
        border-radius:5px;
        background-color:#100e0d;
        color:#a97b4c;
    }
    .headdiv1-2{
        width:330px;
        height:30px;
        line-height:30px;
        margin:35px 0 0 30px;
        display:flex;
        display:-webkit-flex;
        flex-wrap:wrap;
        color:#a97b4c;

    }
    .el-icon-search{
        font-size:150%;
        margin:0 0 0 0;
        color:#a97b4c;
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
    .icon-weibo,.icon-weixin,.icon-qq{
        font-size:150%;
        background-color:#a97b4c;
        border-radius:50px;
    }
    .headdiv2{
        width:1000px;
        height:400px;
        background-image:url('./musicredrank/1.jpg');
        background-size:100% 100%;
        margin:0 auto;
    }
    .headdiv3{
        width:1200px;
        height:84px;
        background-image:url('./musicredrank/2.jpg');
        background-size:100% 100%
    }
    .headdiv3div{
        line-height:50px;
        margin:0 auto;
        width:1000px;
        height:50px;
        display:flex;
        justify-content:space-between;

    }
    .headdiv3div1{
        width:333px;
        height:50px;
        text-align:center;
        margin-top:13px;

    }
    .headdiv3div1a{
        text-decoration:none;
        font-size:26px;
        color:#4f3218;
        
    }
    .headdiv3div1a1{
        text-decoration:none;
        font-size:26px;
        color:#f9f4d0;
    }
    .headdiv4{
        margin:20px auto;
        width:1000px;
        height:44px;
        line-height:44px;
        display:flex;
        justify-content:space-between;
        text-align:center;


    }
    .headdiv4div{
        width:249px;
        height:44px;
        border-right:1px solid #d1a271;
        border-left:1px solid #d1a271;
    }
    .headdiv4diva{
        color:#d1a271;
        text-decoration:none;
        font-size:18px;

    }
    .headdiv5{
        margin:0 auto;
        width:1000px;
        height:530px;
        background-image:url('./musicredrank/4.jpg');
        background-position:23% 48%;
        position:relative;
        background-repeat:no-repeat;
    }
    .headdiv5div1{
        position:absolute;
        width:210px;
        height:210px;
        border-radius:50%;
        background-image:url('./musicredrank/5.jpg');
        background-size:100% 100%;
        top:78px;
        left:394px;
        background-repeat:no-repeat;
    }
    .headdiv6{
        margin:0 auto;
        width:1000px;
        height:1200px;
    }
    .headdiv6div{
        width:1000px;
        height:116px;
        background-color:
    }
</style>