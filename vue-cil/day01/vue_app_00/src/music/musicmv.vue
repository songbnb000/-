<template>
    <div class="songlistdiv">
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
        <div class="songlist2div">
            <div class="songlist2div1">
                <a href="javascript:;" class="songlist2div1a">首页</a>
                <a href="javascript:;" class="songlist2div1a">歌单</a>
                <a href="javascript:;" class="songlist2div1a">歌手</a>
                <a href="javascript:;" class="songlist2div1a">分类</a>
                <a href="javascript:;" class="songlist2div1a">榜单</a>
                <a href="javascript:;" class="songlist2div1a">MV</a>
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
        <carousel class="carouseltop">
        </carousel>
        <!--推荐mv-->
        <div class="musicmv1">
            <div class="musicmv1div">
                <span class="musicmv1divspan">推荐MV</span>
            </div>
            <div class="musicmv2div">
                <div class="musicmv2divdiv">
                    <div class="musicmv2divdivimg1"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">如果电视剧</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">炫子</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv2divdivimg2"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">风</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">火箭少女101</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv2divdivimg3"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">珍珠奶茶</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">品冠</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv2divdivimg4"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">我们很好</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">林俊杰</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv2divdivimg5"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">大象之歌</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">...</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv2divdivimg6"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">winner</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">潘玮柏</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv2divdivimg7"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">永远同在</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">木村弓</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv2divdivimg8"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">随便谁</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">李大奔</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv2divdivimg9"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">千星之恋</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">简迷离</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv2divdivimg10"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">慢动作</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">曹格</a>
                </div>
            </div>
        </div>
        <!--热门主播-->
        <div class="musicmv2">
            <div class="musicmv2div1">
                <span class="musicmv2div1span">热门主播</span>
            </div>
            <div class="musicmv2div2">
                <div class="musicmv2div2div1"></div>
                <div class="musicmv2div2div2"></div>
                <div class="musicmv2div2div3"></div>
                <div class="musicmv2div2div4"></div>
                <div class="musicmv2div2div5"></div>
            </div>
        </div>
        <!--内地-->
        <div class="musicmv3">
            <div class="musicmv1div">
                <span class="musicmv1divspan">内地</span>
            </div>
            <div class="musicmv2div">
                <div class="musicmv2divdiv">
                    <div class="musicmv3divdivimg1"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">亚洲雄风</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">韦唯</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv3divdivimg2"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">天竺少女</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">李玲玉</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv3divdivimg3"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">很任性</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">千百顺</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv3divdivimg4"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">你</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">屠洪刚</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv3divdivimg5"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">晚秋</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">毛宁</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv3divdivimg6"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">缘分一道桥</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">王力宏</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv3divdivimg7"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">家乡</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">赵雷</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv3divdivimg8"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">逆流成河</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">金南玲</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv3divdivimg9"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">缘分一道桥</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">王力宏</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv3divdivimg10"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">心雨</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">毛宁</a>
                </div>
            </div>
        </div>
        <!--港台-->
        <div class="musicmv4">
            <div class="musicmv1div">
                <span class="musicmv1divspan">港台</span>
            </div>
            <div class="musicmv2div">
                <div class="musicmv2divdiv">
                    <div class="musicmv4divdivimg1"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">霍元甲</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">周杰伦</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv4divdivimg2"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">坚持到底</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">阿杜</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv4divdivimg3"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">青花瓷</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">周杰伦</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv4divdivimg4"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">青花瓷</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">周杰伦</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv4divdivimg5"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">现代爱情故事</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">张智霖</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv4divdivimg6"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">天黑</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">阿杜</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv4divdivimg7"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">海阔天空</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">Beyond</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv4divdivimg8"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">伤心太平洋</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">任贤齐</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv4divdivimg9"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">长城</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">Beyond</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv4divdivimg10"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">晴天</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">周杰伦</a>
                </div>
            </div>
        </div>
        <!--欧美-->
        <div class="musicmv5">
            <div class="musicmv1div">
                <span class="musicmv1divspan">欧美</span>
            </div>
            <div class="musicmv2div">
                <div class="musicmv2divdiv">
                    <div class="musicmv5divdivimg9"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">...</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">....</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv5divdivimg10"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">...</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">....</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv5divdivimg1"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">Baby</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">Justin Bieber</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv5divdivimg2"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">Come and Get Your Love</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">Redbone</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv5divdivimg3"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">Never say never</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">Karaoke/Jus..</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv5divdivimg4"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">Poker Face</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">Lady Gaga</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv5divdivimg5"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">I Love The Lord</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">Whitney Ho..</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv5divdivimg6"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">Touch The Sky</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">Cedric Gervais</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv5divdivimg7"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">Pray</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">Justin Bieber</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv5divdivimg8"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">I Want It That Way</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">Backstreet ..</a>
                </div>
            </div>
        </div>
        <!--韩语-->
        <div class="musicmv6">
            <div class="musicmv1div">
                <span class="musicmv1divspan">韩语</span>
            </div>
            <div class="musicmv2div">
                <div class="musicmv2divdiv">
                    <div class="musicmv6divdivimg9"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">...</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">....</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv6divdivimg10"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">...</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">....</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv6divdivimg1"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">...</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">....</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv6divdivimg2"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">2017韩流性感女团最新合集</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">少女时代</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv6divdivimg3"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">...</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">...</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv6divdivimg4"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">...</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">...</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv6divdivimg5"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">...</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">...</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv6divdivimg6"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">...</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">...</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv6divdivimg7"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">...</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">...</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv6divdivimg8"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">...</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">...</a>
                </div>
            </div>
        </div>
        <!--日语-->
        <div class="musicmv7">
            <div class="musicmv1div">
                <span class="musicmv1divspan">韩语</span>
            </div>
            <div class="musicmv2div">
                <div class="musicmv2divdiv">
                    <div class="musicmv7divdivimg9"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">...</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">....</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv7divdivimg10"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">...</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">....</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv7divdivimg1"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">...</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">....</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv7divdivimg2"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">2017韩流性感女团最新合集</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">少女时代</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv7divdivimg3"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">...</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">...</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv7divdivimg4"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">...</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">...</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv7divdivimg5"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">...</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">...</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv7divdivimg6"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">...</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">...</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv7divdivimg7"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">...</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">...</a>
                </div>
                <div class="musicmv2divdiv">
                    <div class="musicmv7divdivimg8"></div>
                    <a href="javascript:;" class="musicmv2divdivimg1a">...</a>
                    <a href="javascript:;" class="musicmv2divdivimg2a">...</a>
                </div>
            </div>
        </div>
    </div>
</template>    
<script>
import musichead from "./musichead.vue"
import hotsong from "./hotsong.vue"
import carousel from "./carousel.vue"
import hotsonglist from "./hotsonglist.vue"
import round from "./round.vue"
import carousel3 from "./carousel3.vue"
import carousel2 from "./carousel2.vue"
import musicborder from "./musicborder.vue"
export default {
    data(){
        return{}
    },
    components:{
        "musichead":musichead,
        "hotsong":hotsong,
        "carousel3":carousel3,
        "hotsonglist":hotsonglist,
        "carousel2":carousel2,
        "musicborder":musicborder,
        "round":round,
        "carousel":carousel

    }
}
</script>
<style scoped>
    *{margin:0;padding:0;}
.carouseltop{
    margin-top:20px;
}
.songlistdiv{
    width:1200px;
    height:3940px;
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
    margin-top:0;
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
/*推荐mv*/
.musicmv1{
    width:1200px;
    height:426px;
}
/*推荐mv文字样式*/
.musicmv1divspan{
    color:#000000;
    font-family:微软雅黑;
    font-size:29px;
    font-weight:400;
}
.musicmv1div{
    width:1200px;
    height:71px;
}
.musicmv2div{
    width:1200px;
    height:352px;
    flex-direction:row;
	display:flex;
	justify-content:space-between;
	flex-wrap:wrap;
}

/*每个模块的样式*/
.musicmv2divdiv{
    width:211px;
    height:170px;
}
/*添加十张图片*/
.musicmv2divdivimg1{
    width:211px;
    height:135px;
    background-image:url('./musicmv/tuijian/1.jpg');
    background-size:100% 100%;
}
.musicmv2divdivimg2{
    width:211px;
    height:135px;
    background-image:url('./musicmv/tuijian/2.jpg');
    background-size:100% 100%;
}
.musicmv2divdivimg3{
    width:211px;
    height:135px;
    background-image:url('./musicmv/tuijian/3.jpg');
    background-size:100% 100%;
}
.musicmv2divdivimg4{
    width:211px;
    height:135px;
    background-image:url('./musicmv/tuijian/4.jpg');
    background-size:100% 100%;
}
.musicmv2divdivimg5{
    width:211px;
    height:135px;
    background-image:url('./musicmv/tuijian/5.jpg');
    background-size:100% 100%;
}
.musicmv2divdivimg6{
    width:211px;
    height:135px;
    background-image:url('./musicmv/tuijian/6.jpg');
    background-size:100% 100%;
}
.musicmv2divdivimg7{
    width:211px;
    height:135px;
    background-image:url('./musicmv/tuijian/7.jpg');
    background-size:100% 100%;
}
.musicmv2divdivimg8{
    width:211px;
    height:135px;
    background-image:url('./musicmv/tuijian/8.jpg');
    background-size:100% 100%;
}
.musicmv2divdivimg9{
    width:211px;
    height:135px;
    background-image:url('./musicmv/tuijian/9.jpg');
    background-size:100% 100%;
}
.musicmv2divdivimg10{
    width:211px;
    height:135px;
    background-image:url('./musicmv/tuijian/10.jpg');
    background-size:100% 100%;
}
/*推荐mv下面的文字*/
.musicmv2divdivimg1a{
    text-decoration:none;
    font-size:16px;
    color:#000000;
    display:block;
    text-align:center;

}
.musicmv2divdivimg2a{
    text-decoration:none;
    font-size:14px;
    color:#999999;
    display:block;
    text-align:center;
}
/*热门主播*/
.musicmv2{
    width:1200px;
    height:414px;
    margin-top:30px;
}
/*热门主播文字样式*/
.musicmv2div1span{
    color:#000000;
    font-family:微软雅黑;
    font-size:29px;
    font-weight:400;
}
.musicmv2div1{
    width:1200px;
    height:90px;
}
.musicmv2div2{
    width:1200px;
    height:290px;
    flex-direction:row;
	display:flex;
	justify-content:space-between;
	flex-wrap:wrap;
}
/*主播图片5张*/
.musicmv2div2div1{
    width:220px;
    height:270px;
    background-image:url('./musicmv/zhubo/1.jpg');
    background-size:100% 100%;

}
.musicmv2div2div2{
    width:220px;
    height:270px;
    background-image:url('./musicmv/zhubo/2.jpg');
    background-size:100% 100%;
}
.musicmv2div2div3{
    width:220px;
    height:270px;
    background-image:url('./musicmv/zhubo/3.jpg');
    background-size:100% 100%;
}
.musicmv2div2div4{
    width:220px;
    height:270px;
    background-image:url('./musicmv/zhubo/4.jpg');
    background-size:100% 100%;
}
.musicmv2div2div5{
    width:220px;
    height:270px;
    background-image:url('./musicmv/zhubo/5.jpg');
    background-size:100% 100%;
}
/*内地*/
.musicmv3{
    width:1200px;
    height:426px;
}
/*内地图片十张*/
.musicmv3divdivimg1{
    width:211px;
    height:135px;
    background-image:url('./musicmv/neidi/1.jpg');
    background-size:100% 100%;
}
.musicmv3divdivimg2{
    width:211px;
    height:135px;
    background-image:url('./musicmv/neidi/2.jpg');
    background-size:100% 100%;
}
.musicmv3divdivimg3{
    width:211px;
    height:135px;
    background-image:url('./musicmv/neidi/3.jpg');
    background-size:100% 100%;
}
.musicmv3divdivimg4{
    width:211px;
    height:135px;
    background-image:url('./musicmv/neidi/4.jpg');
    background-size:100% 100%;
}
.musicmv3divdivimg5{
    width:211px;
    height:135px;
    background-image:url('./musicmv/neidi/5.jpg');
    background-size:100% 100%;
}
.musicmv3divdivimg6{
    width:211px;
    height:135px;
    background-image:url('./musicmv/neidi/6.jpg');
    background-size:100% 100%;
}
.musicmv3divdivimg7{
    width:211px;
    height:135px;
    background-image:url('./musicmv/neidi/7.jpg');
    background-size:100% 100%;
}
.musicmv3divdivimg8{
    width:211px;
    height:135px;
    background-image:url('./musicmv/neidi/8.jpg');
    background-size:100% 100%;
}
.musicmv3divdivimg9{
    width:211px;
    height:135px;
    background-image:url('./musicmv/neidi/9.jpg');
    background-size:100% 100%;
}
.musicmv3divdivimg10{
    width:211px;
    height:135px;
    background-image:url('./musicmv/neidi/10.jpg');
    background-size:100% 100%;
}
/*港台*/
.musicmv4{
    width:1200px;
    height:426px;
}
/*港台十张图片*/
.musicmv4divdivimg1{
    width:211px;
    height:135px;
    background-image:url('./musicmv/gangtai/1.jpg');
    background-size:100% 100%;
}
.musicmv4divdivimg2{
    width:211px;
    height:135px;
    background-image:url('./musicmv/gangtai/2.jpg');
    background-size:100% 100%;
}
.musicmv4divdivimg3{
    width:211px;
    height:135px;
    background-image:url('./musicmv/gangtai/3.jpg');
    background-size:100% 100%;
}
.musicmv4divdivimg4{
    width:211px;
    height:135px;
    background-image:url('./musicmv/gangtai/4.jpg');
    background-size:100% 100%;
}
.musicmv4divdivimg5{
    width:211px;
    height:135px;
    background-image:url('./musicmv/gangtai/5.jpg');
    background-size:100% 100%;
}
.musicmv4divdivimg6{
    width:211px;
    height:135px;
    background-image:url('./musicmv/gangtai/6.jpg');
    background-size:100% 100%;
}
.musicmv4divdivimg7{
    width:211px;
    height:135px;
    background-image:url('./musicmv/gangtai/7.jpg');
    background-size:100% 100%;
}
.musicmv4divdivimg8{
    width:211px;
    height:135px;
    background-image:url('./musicmv/gangtai/8.jpg');
    background-size:100% 100%;
}
.musicmv4divdivimg9{
    width:211px;
    height:135px;
    background-image:url('./musicmv/gangtai/9.jpg');
    background-size:100% 100%;
}
.musicmv4divdivimg10{
    width:211px;
    height:135px;
    background-image:url('./musicmv/gangtai/10.jpg');
    background-size:100% 100%;
}
/*欧美*/
.musicmv5{
    width:1200px;
    height:426px;
}
/*欧美十张图片*/
.musicmv5divdivimg1{
    width:211px;
    height:135px;
    background-image:url('./musicmv/oumei/1.jpg');
    background-size:100% 100%;
}
.musicmv5divdivimg2{
    width:211px;
    height:135px;
    background-image:url('./musicmv/oumei/2.jpg');
    background-size:100% 100%;
}
.musicmv5divdivimg3{
    width:211px;
    height:135px;
    background-image:url('./musicmv/oumei/3.jpg');
    background-size:100% 100%;
}
.musicmv5divdivimg4{
    width:211px;
    height:135px;
    background-image:url('./musicmv/oumei/4.jpg');
    background-size:100% 100%;
}
.musicmv5divdivimg5{
    width:211px;
    height:135px;
    background-image:url('./musicmv/oumei/5.jpg');
    background-size:100% 100%;
}
.musicmv5divdivimg6{
    width:211px;
    height:135px;
    background-image:url('./musicmv/oumei/6.jpg');
    background-size:100% 100%;
}
.musicmv5divdivimg7{
    width:211px;
    height:135px;
    background-image:url('./musicmv/oumei/7.jpg');
    background-size:100% 100%;
}
.musicmv5divdivimg8{
    width:211px;
    height:135px;
    background-image:url('./musicmv/oumei/8.jpg');
    background-size:100% 100%;
}
.musicmv5divdivimg9{
    width:211px;
    height:135px;
    background-image:url('./musicmv/oumei/9.jpg');
    background-size:100% 100%;
}
.musicmv5divdivimg10{
    width:211px;
    height:135px;
    background-image:url('./musicmv/oumei/10.jpg');
    background-size:100% 100%;
}
/*韩语*/
.musicmv6{
    width:1200px;
    height:426px;
}
/*韩语十张图片*/
.musicmv6divdivimg1{
    width:211px;
    height:135px;
    background-image:url('./musicmv/hanyu/1.jpg');
    background-size:100% 100%;
}
.musicmv6divdivimg2{
    width:211px;
    height:135px;
    background-image:url('./musicmv/hanyu/2.jpg');
    background-size:100% 100%;
}
.musicmv6divdivimg3{
    width:211px;
    height:135px;
    background-image:url('./musicmv/hanyu/3.jpg');
    background-size:100% 100%;
}
.musicmv6divdivimg4{
    width:211px;
    height:135px;
    background-image:url('./musicmv/hanyu/4.jpg');
    background-size:100% 100%;
}
.musicmv6divdivimg5{
    width:211px;
    height:135px;
    background-image:url('./musicmv/hanyu/5.jpg');
    background-size:100% 100%;
}
.musicmv6divdivimg6{
    width:211px;
    height:135px;
    background-image:url('./musicmv/hanyu/6.jpg');
    background-size:100% 100%;
}
.musicmv6divdivimg7{
    width:211px;
    height:135px;
    background-image:url('./musicmv/hanyu/7.jpg');
    background-size:100% 100%;
}
.musicmv6divdivimg8{
    width:211px;
    height:135px;
    background-image:url('./musicmv/hanyu/8.jpg');
    background-size:100% 100%;
}
.musicmv6divdivimg9{
    width:211px;
    height:135px;
    background-image:url('./musicmv/hanyu/9.jpg');
    background-size:100% 100%;
}
.musicmv6divdivimg10{
    width:211px;
    height:135px;
    background-image:url('./musicmv/hanyu/10.jpg');
    background-size:100% 100%;
}
/*韩语*/
.musicmv7{
    width:1200px;
    height:426px;
}
/*韩语十张图片*/
.musicmv7divdivimg1{
    width:211px;
    height:135px;
    background-image:url('./musicmv/riyu/1.jpg');
    background-size:100% 100%;
}
.musicmv7divdivimg2{
    width:211px;
    height:135px;
    background-image:url('./musicmv/riyu/2.jpg');
    background-size:100% 100%;
}
.musicmv7divdivimg3{
    width:211px;
    height:135px;
    background-image:url('./musicmv/riyu/3.jpg');
    background-size:100% 100%;
}
.musicmv7divdivimg4{
    width:211px;
    height:135px;
    background-image:url('./musicmv/riyu/4.jpg');
    background-size:100% 100%;
}
.musicmv7divdivimg5{
    width:211px;
    height:135px;
    background-image:url('./musicmv/riyu/5.jpg');
    background-size:100% 100%;
}
.musicmv7divdivimg6{
    width:211px;
    height:135px;
    background-image:url('./musicmv/riyu/6.jpg');
    background-size:100% 100%;
}
.musicmv7divdivimg7{
    width:211px;
    height:135px;
    background-image:url('./musicmv/riyu/7.jpg');
    background-size:100% 100%;
}
.musicmv7divdivimg8{
    width:211px;
    height:135px;
    background-image:url('./musicmv/riyu/8.jpg');
    background-size:100% 100%;
}
.musicmv7divdivimg9{
    width:211px;
    height:135px;
    background-image:url('./musicmv/riyu/9.jpg');
    background-size:100% 100%;
}
.musicmv7divdivimg10{
    width:211px;
    height:135px;
    background-image:url('./musicmv/riyu/10.jpg');
    background-size:100% 100%;
}
</style>