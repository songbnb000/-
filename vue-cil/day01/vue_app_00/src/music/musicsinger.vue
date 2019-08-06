<template>
<div>
    <div class="songlistdiv">
        <!--第一部分-->
        <div class="songlist1div">
            <h1 class="songlistdivh1">
                <div class="musicimg"></div>
            </h1>

            <div class="songlistdiv1">
                <div class="songlistdiv1-2">
                    <input type="text" class="songlistdiv1input" placeholder="请输入歌名、歌手、或者专辑名字">
                </div>
                <i class="el-icon-search"></i>
            </div>

            <div class="songlistdiv2">
                <a href="javascript:;" class="songlistdiv2-a">幸福指南编辑部</a>
                <a href="javascript:;" class="songlistdiv2-a">炼金术</a>
                <a href="javascript:;" class="songlistdiv2-a">木偶人</a>
            </div>
            <div class="songlistdiv3">
                <a href="javascript:;" class="songlistdiv3-a">
                    <i class="el-icon-potato-strips"></i>
                    <a href="javascript:;" class="songlistdiv3-a-a">VIP</a>
                </a>
                <a href="javascript:;" class="songlistdiv3-2a">
                    <i class="el-icon-user-solid"></i>
                    <a href="javascript:;" class="songlistdiv3-3a">登录|注册</a>
                </a>
            </div>
        </div>
        <!--第二部分-->
        <div class="songlist2div">
            <div class="songlist2div1">
                <a href="http://127.0.0.1:8080/#/index" class="songlist2div1a">首页</a>
                <a href="http://127.0.0.1:8080/#/songlist" class="songlist2div1a">歌单</a>
                <a href="http://127.0.0.1:8080/#/singer" class="songlist2div1a">歌手</a>
                <a href="http://127.0.0.1:8080/#/musicsort" class="songlist2div1a">分类</a>
                <a href="http://127.0.0.1:8080/#/musictop" class="songlist2div1a">榜单</a>
                <a href="http://127.0.0.1:8080/#/musicmv" class="songlist2div1a">MV</a>
                <a href="javascript:;" class="songlist2div1a">演出</a>
                <a href="javascript:;" class="songlist2div1a">U榜</a>
            </div>
            <div class="songlist2div2">
                <a href="javascript:;" class="songlist2div2a">
                    <i class="el-icon-lollipop"></i>
                    播放
                </a>
                <a href="javascript:;" class="songlist2div2a">
                    <i class="el-icon-s-data"></i>
                    随心听
                </a>
                <a href="javascript:;" class="songlist2div2a">
                    <i class="el-icon-video-play"></i>
                    音乐盒
                </a>
            </div>
        </div>
    </div>
</div>
</template>
    <script>
export default {
    data(){
        return {
                }
            },
            methods:{
            
    }
}
</script>
<style scoped>
*{margin:0;padding:0;}
.songlistdiv{
    width:1200px;
    height:120px;
    margin:30px auto;
}
.songlist1div{
    width:1200px;
    height:70px;
    flex-direction:row;
	display:flex;
	/*justify-content:space-between;*/
	flex-wrap:wrap;
}
.songlist1div{
    width:1200px;
    height:50px;
}
/*千千音乐的h1*/
.songlistdivh1{
    width:123px;
    height:41px;
    
}
.musicimg{
    width:123px;
    height:41px;
    background-image:url('./songlist/head/1.png');
    background-size:100% 100%;
}
/*input*/
.songlistdiv1{
    width:400px;
    height:50px;
    margin-left:49px;
    margin-top:5px;
}
.songlistdiv1input{
    width:400px;
    height:28px;
    line-height:28px;
    float:left;
    border:1px solid darkgray;
    border-radius:5px;
    background-color:#eeeeee;
}
/*input旁边的搜索标签*/
.el-icon-search{
    margin-left:-30px;
    font-size:130%;
    padding-top:5px;
    float:left;
    color:orangered;
}
/*input旁边的div*/
.songlistdiv2{
    margin-left:28px;
    width:224px;
    height:53px;
    margin-top:10px;
    }
.songlistdiv2-a{
    color:#ababab;
    font-size:12px;
    text-decoration:none;
    padding-left:6px;
}
.el-icon-potato-strips{
    color:#ffa200;
    font-size:130%;
    display:block;
}
.songlistdiv3{    
    margin-left:147px;
    flex-direction:row;
	display:flex;
	/*justify-content:space-between;*/
	flex-wrap:wrap;

}
.songlistdiv3-a{
    text-decoration:none;
}
.songlistdiv3-a-a{
    color:#ffa200;
    text-decoration:none;
    margin-top:-3px;
}
.el-icon-user-solid{
    font-size:130%;
    color:orangered;
    margin-left:30px;
}
.songlistdiv3-2a{
    text-decoration:none;
    margin-left:20px;
}
.songlistdiv3-3a{
    color:#ababab;
    text-decoration:none;
    padding-left:10px;
    display:block;
    font-size:14px;
    /*实在不想再写标签，写个文字间距解决..*/
    letter-spacing:3px;
}
/*推荐-音乐盒*/
.songlist2div{
    width:100%;
    height:50px;
    flex-direction:row;
	display:flex;
	/*justify-content:space-between;*/
	flex-wrap:wrap;
}
.songlist2div1{
    width:600px;
    height:50px;
    flex-direction:row;
	display:flex;
	justify-content:space-between;
	flex-wrap:wrap;
    line-height:50px;
    margin-left:30px;
}
.songlist2div2{
    width:300px;
    height:50px;
    flex-direction:row;
	display:flex;
	justify-content:space-between;
	flex-wrap:wrap;
    margin-left:130px;
}

.songlist2div1a{
    text-decoration:none;
    color:#ababab;
}
/*播放~~音乐盒*/
.songlist2div2a{
    text-decoration:none;
    display:block;
    height:50px;
    line-height:50px;
    margin-left:0px;
    color:#333333;
}
.el-icon-lollipop{
    color:orangered;
    font-size:160%;
}
.el-icon-s-data{
    color:orangered;
    font-size:160%;
    
}
.el-icon-video-play{
    color:orangered;
    font-size:160%;
}
/*下面二十个模块*/
.songlistfooter{
    width:1200px;
    height:1256px;
    margin:0 auto;
}
.songlistfooter1div{
    width:1200px;
    height:22px;  

}
/*最热 最新文字样式*/
.songlistfooter1diva{
    text-decoration:none;
    color:#333333;
    font-size:16px;
    margin-left:5px;
}
.songlistfooter2div{
    width:1200px;
    height:1209px;
    margin-top:25px;
    flex-direction:row;
	display:flex;
	justify-content:space-between;
	flex-wrap:wrap;
}
.songlistfooter2div-div{
    width:220px;
    height:260px;
}
.songlistfooter2div-div:hover{
    font-size:150%;
}
</style>