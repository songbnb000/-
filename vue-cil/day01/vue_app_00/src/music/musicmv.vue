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
                <a href="http://127.0.0.1:8080/#/index" class="songlist2div1a">首页</a>
                <a href="http://127.0.0.1:8080/#/songlist1" class="songlist2div1a">歌单</a>
                <a href="http://127.0.0.1:8080/#/singer" class="songlist2div1a">歌手</a>
                <a href="http://127.0.0.1:8080/#/musicsort" class="songlist2div1a">分类</a>
                <a href="http://127.0.0.1:8080/#/musictop" class="songlist2div1a">榜单</a>
                <a href="http://127.0.0.1:8080/#/musicmv" class="songlist2div1a">MV</a>
                <a href="javascript:;" class="songlist2div1a">演出</a>
                <a href="http://127.0.0.1:8080/#/musicredrank" class="songlist2div1a">U榜</a>
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
                   <img :src="item.cover" v-for="(item,i) in musicmv1" :key="i" alt="" class="musicmv2divdivimg1" >
                   <div class="musicmv2divdiv1">
                   <a :href="'https://music.163.com/#/mv?id='+items.id" v-for="(items,index1) in musicmv1" :key="index1" class="musicmv2divdivimg1a">{{items.name}}</a>
                   </div>
                </div>
            </div>
        </div>
        <!--热门主播-->
        <!--<div class="musicmv2">
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
        </div>-->
        <!--内地-->
   <div class="musicmv1">
            <div class="musicmv1div">
                <span class="musicmv1divspan">内地MV</span>
            </div>
            <div class="musicmv2div">
               <div class="musicmv2divdiv">
                   <img :src="item3.cover" v-for="(item3,i1) in musicmv2" :key="i1" alt="" class="musicmv2divdivimg2" >
                   <div class="musicmv2divdiv2">
                   <a :href="'https://music.163.com/#/mv?id='+items1.id" v-for="(items1,index2) in musicmv2" :key="index2" class="musicmv2divdivimg1a1">{{items1.name}}</a>
                   </div>
                </div>
            </div>
        </div>
        <!--港台-->
        <div class="musicmv1">
            <div class="musicmv1div">
                <span class="musicmv1divspan">港台MV</span>
            </div>
            <div class="musicmv2div">
               <div class="musicmv2divdiv">
                   <img :src="item4.cover" v-for="(item4,i2) in musicmv3" :key="i2" alt="" class="musicmv2divdivimg2" v-if="i2<10"> 
                   <div class="musicmv2divdiv2">
                   <a :href="'https://music.163.com/#/mv?id='+items2.id" v-for="(items2,index3) in musicmv3" :key="index3" class="musicmv2divdivimg1a1" v-if="index3<10">
                   {{items2.name}}
                  <!-- <a :href="'https://music.163.com/#/mv?id='+items2.id" v-if="index3<10" class="musicmv2divdivimg1a2">
                   {{items2.name}}
                   </a>-->
                   </a>
                   </div>
                </div>
            </div>
        </div>
        <!--欧美-->
         <div class="musicmv1">
            <div class="musicmv1div">
                <span class="musicmv1divspan">欧美MV</span>
            </div>
            <div class="musicmv2div">
               <div class="musicmv2divdiv">
                   <img :src="item5.cover" v-for="(item5,i3) in musicmv4" :key="i3" alt="" class="musicmv2divdivimg2" v-if="i3<10"> 
                   <div class="musicmv2divdiv2">
                   <a :href="'https://music.163.com/#/mv?id='+items3.id" v-for="(items3,index4) in musicmv4" :key="index4" class="musicmv2divdivimg1a1" v-if="index4<10">
                   {{items3.name}}
                   </a>
                   </div>
                </div>
            </div>
        </div>
        <!--韩语-->
                 <div class="musicmv1">
            <div class="musicmv1div">
                <span class="musicmv1divspan">韩国MV</span>
            </div>
            <div class="musicmv2div">
               <div class="musicmv2divdiv">
                   <img :src="item6.cover" v-for="(item6,i4) in musicmv5" :key="i4" alt="" class="musicmv2divdivimg2" v-if="i4<10"> 
                   <div class="musicmv2divdiv2">
                   <a :href="'https://music.163.com/#/mv?id='+items4.id" v-for="(items4,index5) in musicmv5" :key="index5" class="musicmv2divdivimg1a1" v-if="index5<10">
                   {{items4.name}}
                   </a>
                   </div>
                </div>
            </div>
        </div>
        <!--日本-->
        <div class="musicmv1">
            <div class="musicmv1div">
                <span class="musicmv1divspan">日本MV</span>
            </div>
            <div class="musicmv2div">
               <div class="musicmv2divdiv">
                   <img :src="item6.cover" v-for="(item6,i5) in musicmv6" :key="i5" alt="" class="musicmv2divdivimg2" v-if="i5<10"> 
                   <div class="musicmv2divdiv2">
                   <a :href="'https://music.163.com/#/mv?id='+items5.id" v-for="(items5,index6) in musicmv6" :key="index6" class="musicmv2divdivimg1a1" v-if="index6<10">
                   {{items5.name}}
                   </a>
                   </div>
                </div>
            </div>
        </div>
        <!--现场-->
         <div class="musicmv1">
            <div class="musicmv1div">
                <span class="musicmv1divspan">现场MV</span>
            </div>
            <div class="musicmv2divtj">
               <div class="musicmv2divdivtj">
                   <img :src="item7.cover" v-for="(item7,i6) in musicmv7" :key="i6" alt="" class="musicmv2divdivimg2tj"> 
                   <div class="musicmv2divdiv2tj">
                   <a :href="'https://music.163.com/#/mv?id='+items6.id" v-for="(items6,index7) in musicmv7" :key="index7" class="musicmv2divdivimg1a1tj">
                   {{items6.name}}
                  <!-- <a :href="'https://music.163.com/#/mv?id='+items2.id" v-if="index3<10" class="musicmv2divdivimg1a2">
                   {{items2.name}}
                   </a>-->
                   </a>
                   </div>
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
        return{
            musicmv1:{},
            musicmv2:{},
            musicmv3:{},
            musicmv4:{},
            musicmv5:{},
            musicmv6:{},
            musicmv7:{},
        }
    },
    methods:{
        musicmv(){this.axios.get("/mv/exclusive/rcmd").then(res=>{
                var musicmv=res.data.data
                this.musicmv1=musicmv
                return this.musicmv1
       })
    },
        musicmvnd(){this.axios.get("/mv/first?limit=10").then(res=>{
                var musicmv=res.data.data
                this.musicmv2=musicmv
                return this.musicmv2
       })
    },
    
        musicmvgt(){this.axios.get("/mv/all?area=港台").then(res=>{
                var musicmv=res.data.data
                this.musicmv3=musicmv
                return this.musicmv3
       })
    },
        musicmvom(){this.axios.get("/mv/all?area=欧美").then(res=>{
                var musicmv=res.data.data
                this.musicmv4=musicmv
                return this.musicmv4
       })
    },
        musicmvhg(){this.axios.get("/mv/all?area=韩国").then(res=>{
                var musicmv=res.data.data
                this.musicmv5=musicmv
                return this.musicmv5
       })
    },
        musicmvrb(){this.axios.get("/mv/all?area=日本").then(res=>{
                var musicmv=res.data.data
                this.musicmv6=musicmv
                return this.musicmv6
       })
    },
        musicmvxc(){this.axios.get("/mv/all?type=现场版").then(res=>{
                var musicmv=res.data.data
                this.musicmv7=musicmv
                console.log(this.musicmv7)
                return this.musicmv7
       })
    }
    },
    mounted(){
        this.musicmv()
        this.musicmvnd()
        this.musicmvgt()
        this.musicmvom()
        this.musicmvhg()
        this.musicmvrb()
        this.musicmvxc()
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
    /*全部的高*/
    height:4750px;
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
    color:#fff;
    font-family:微软雅黑;
    font-size:25px;
    font-weight:400;
    background-color:cyan;
}
.musicmv1div{
    width:1200px;
    height:71px;
    margin-top:20px;
    margin-left:20px;
}
.musicmv2div{
    width:1200px;
    height:352px;
    flex-direction:row;
	display:flex;
	justify-content:space-between;
	flex-wrap:wrap;
}
.musicmv2divtj{
    width:1200px;
    height:352px;
    flex-direction:row;
	display:flex;
	justify-content:space-between;
	flex-wrap:wrap;
}   
.musicmv2divdiv2tj{
    width:1200px;
    height:1300px;
    flex-direction:row;
	display:flex;
	/*justify-content:space-between;*/
	flex-wrap:wrap;
    margin-top:-1145px;
}
.musicmv2divdivtj{
    width:1200px;
    height:350px;
    flex-direction:row;
	display:flex;
	/*justify-content:space-between;*/
	flex-wrap:wrap;
}
/*现场版mv图片大小样式*/
.musicmv2divdivimg2tj{
    width:211px;
    height:145px;
    background-size:100% 100%;
    margin-left:25px;
    margin-bottom:70px;
}
/*现场版文字样式*/
.musicmv2divdivimg1a1tj{
    width:211px;
    height:20px;
    text-decoration:none;
    font-size:16px;
    color:#000000;
    display:block;
    text-align:center;
    margin-left:25px;
}
/*每个模块的样式*/
.musicmv2divdiv{
    width:1200px;
    height:350px;
    flex-direction:row;
	display:flex;
	/*justify-content:space-between;*/
	flex-wrap:wrap;

}
.musicmv2divdiv1{
    width:1200px;
    height:360px;
    flex-direction:row;
	display:flex;
	/*justify-content:space-between;*/
	flex-wrap:wrap;
    margin-top:-215px;

}
/*添加十张图片*/
.musicmv2divdivimg1{
    width:211px;
    height:145px;
    background-size:100% 100%;
    margin-left:25px;
    margin-bottom:40px;
}
/*推荐mv下面的文字*/
.musicmv2divdivimg1a{
    width:211px;
    height:20px;
    text-decoration:none;
    font-size:16px;
    color:#000000;
    display:block;
    text-align:center;
    overflow:hidden;
    margin-left:25px;
}
.musicmv2divdivimg1a:hover{
    overflow:visible;
}
.musicmv2divdivimg2a{
    text-decoration:none;
    font-size:14px;
    color:#999999;
    display:block;
    text-align:center;
}
/*内地mv*/
.musicmv2divdivimg1a1{
    width:211px;
    height:20px;
    text-decoration:none;
    font-size:16px;
    color:#000000;
    display:block;
    text-align:center;
    overflow:hidden;
    margin-left:25px;
}
.musicmv2divdiv2{
    width:1200px;
    height:360px;
    flex-direction:row;
	display:flex;
	/*justify-content:space-between;*/
	flex-wrap:wrap;
    margin-top:-215px;
}
.musicmv2divdivimg1a1:hover{
    overflow:visible;
}
.musicmv2divdivimga1{
    text-decoration:none;
    font-size:14px;
    color:#999999;
    display:block;
    text-align:center;
}
.musicmv2divdivimg2{
    width:211px;
    height:145px;
    background-size:100% 100%;
    margin-left:25px;
    margin-bottom:40px;
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
</style>