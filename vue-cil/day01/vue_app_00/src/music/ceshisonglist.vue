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
    </div>
    <!--页头下-->
    <div class="songlistfooter">
        <div class="songlistfooter1div">
            <!--<a href="javascript:;" class="songlistfooter1diva">最新</a>
            <a href="javascript:;" class="songlistfooter1diva">最热</a>-->
            <mt-button v-for="(item,i) of list" :key="i" :data-idx="i" @click="setActive">
                                            {{item}} 
            </mt-button>
        </div>
<mt-tab-container v-model="active">
    <!--第一个子面板-->
    <mt-tab-container-item id="tab1">
        <div class="songlistfooter2div">
            <div class="songlistfooter2div-div">
                <div class="songlistfooter2div-div-1div"></div>
                <div class="songlistfooter2div-div-div2">
                     <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        世间天籁下课铃
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                 <div class="songlistfooter2div-div-2div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        春风吹拂侧脸过
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                <div class="songlistfooter2div-div-3div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        睡醒望夕阳，原是一场梦
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                <div class="songlistfooter2div-div-4div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        词牌复词牌
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                <div class="songlistfooter2div-div-5div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        听君歌一曲,请君侧耳听
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                 <div class="songlistfooter2div-div-6div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        不盼缘尽,仍留慈悲
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                <div class="songlistfooter2div-div-7div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        原来留不住,揣在兜里记得住
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                 <div class="songlistfooter2div-div-8div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        反反复复思过往，进进退退看如今
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                <div class="songlistfooter2div-div-9div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        文字多不过许多愁，载不动心烦忧
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                 <div class="songlistfooter2div-div-10div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        多是伤春悲秋人
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                <div class="songlistfooter2div-div-11div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        最好的离别其实是记住
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                 <div class="songlistfooter2div-div-12div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        草长莺飞柳絮飘
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                <div class="songlistfooter2div-div-13div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        稚童书声随风杨
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                 <div class="songlistfooter2div-div-14div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        多音、妄言、臆想
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                <div class="songlistfooter2div-div-15div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        但求无错，便是大对
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                 <div class="songlistfooter2div-div-16div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        意义
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                <div class="songlistfooter2div-div-17div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        胭脂
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                 <div class="songlistfooter2div-div-18div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        多是心关难过,与自己难合
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                <div class="songlistfooter2div-div-19div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        与自己和解
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                 <div class="songlistfooter2div-div-20div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        步步前行步步轻,慢慢轻轻步步新
                    </a>
                </div>
            </div>
        </div>
    </mt-tab-container-item>
    <!--第二个子面板-->
        <mt-tab-container-item id="tab2">
        <div class="songlistfooter2div">
            <div class="songlistfooter2div-div">
                <div class="songlistfooter2div-div-21div"></div>
                <div class="songlistfooter2div-div-div2">
                     <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        大风吹烟
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                 <div class="songlistfooter2div-div-22div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        给你没说的,却想要的
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                <div class="songlistfooter2div-div-23div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        更漏子
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                <div class="songlistfooter2div-div-24div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        鹧鸪天
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                <div class="songlistfooter2div-div-25div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        念奴娇
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                 <div class="songlistfooter2div-div-26div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        众里寻他千百度
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                <div class="songlistfooter2div-div-27div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        一笑倾人城
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                 <div class="songlistfooter2div-div-28div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        再笑倾人国
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                <div class="songlistfooter2div-div-29div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        纸书慢送,一生只等一人
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                 <div class="songlistfooter2div-div-30div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        多等多念多想
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                <div class="songlistfooter2div-div-31div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        不说不想不坏
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                 <div class="songlistfooter2div-div-32div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        春、夏、秋、冬
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                <div class="songlistfooter2div-div-33div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        炊烟袅袅拌童声
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                 <div class="songlistfooter2div-div-34div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        兜兜转转，不再迷路
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                <div class="songlistfooter2div-div-35div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        猛猛猛
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                 <div class="songlistfooter2div-div-36div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        善善善
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                <div class="songlistfooter2div-div-37div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        挥手，挥手
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                 <div class="songlistfooter2div-div-38div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        多是心关难过,与自己难合
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                <div class="songlistfooter2div-div-39div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        与自己和解
                    </a>
                </div>
            </div>
            <div class="songlistfooter2div-div">
                 <div class="songlistfooter2div-div-40div"></div>
                <div class="songlistfooter2div-div-div2">
                    <a href="javascript:;" class="songlistfooter2div-div-div2-a">
                        步步前行步步轻,慢慢轻轻步步新
                    </a>
                </div>
            </div>
        </div>
    </mt-tab-container-item>
</mt-tab-container>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {
            list:["最新","最热",],
            active:"tab1",
                }
            },
            methods:{
                setActive(e){
                    //e指所有事件
                    //target指触发事件
                    //dataset指所有自定义属性库
                    //上面自己写的idx自定义属性名
                  var idx=parseInt(e.target.dataset.idx)  
                  //自定义属性拿过来是一个字符串，所以需要转换一下
                  this.active="tab"+(idx+1)
        }
    }
}
</script>
<style scoped>
*{margin:0;padding:0;}
.songlistdiv{
    width:1200px;
    height:120px;
    margin:0 auto;
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
/*20张图片鼠标移入放大效果*/
.songlistfooter2div-div-1div:hover{
    background-size:110%;
}
.songlistfooter2div-div-2div:hover{
    background-size:110%;
}
.songlistfooter2div-div-3div:hover{
    background-size:110%;
}
.songlistfooter2div-div-4div:hover{
    background-size:110%;
}
.songlistfooter2div-div-5div:hover{
    background-size:110%;
}
.songlistfooter2div-div-6div:hover{
    background-size:110%;
}
.songlistfooter2div-div-7div:hover{
    background-size:110%;
}
.songlistfooter2div-div-8div:hover{
    background-size:110%;
}
.songlistfooter2div-div-9div:hover{
    background-size:110%;
}
.songlistfooter2div-div-10div:hover{
    background-size:110%;
}
.songlistfooter2div-div-11div:hover{
    background-size:110%;
}
.songlistfooter2div-div-12div:hover{
    background-size:110%;
}
.songlistfooter2div-div-13div:hover{
    background-size:110%;
}
.songlistfooter2div-div-14div:hover{
    background-size:110%;
}
.songlistfooter2div-div-15div:hover{
    background-size:110%;
}
.songlistfooter2div-div-16div:hover{
    background-size:110%;
}
.songlistfooter2div-div-17div:hover{
    background-size:110%;
}
.songlistfooter2div-div-18div:hover{
    background-size:110%;
}
.songlistfooter2div-div-19div:hover{
    background-size:110%;
}
.songlistfooter2div-div-20div:hover{
    background-size:110%;
}
/*第一个子面板20张图片*/
.songlistfooter2div-div-1div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/1.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-2div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/2.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-3div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/3.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-4div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/4.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-5div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/5.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-6div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/6.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-7div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/7.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-8div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/8.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-9div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/9.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-10div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/10.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-11div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/11.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-12div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/12.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-13div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/13.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-14div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/14.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-15div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/15.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-16div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/16.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-17div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/17.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-18div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/18.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-19div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/19.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-20div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/20.jpg');
    background-size:100% 100%;
}
/*第二个子面板20张图片*/
.songlistfooter2div-div-21div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/21.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-22div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/22.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-23div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/23.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-24div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/24.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-25div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/25.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-26div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/26.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-27div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/27.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-28div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/28.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-29div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/29.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-30div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/30.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-31div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/31.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-32div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/32.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-33div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/33.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-34div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/34.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-35div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/35.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-36div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/36.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-37div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/37.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-38div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/38.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-39div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/39.jpg');
    background-size:100% 100%;
}
.songlistfooter2div-div-40div{
    width:220px;
    height:220px;
    background-image:url('./songlist/footer/40.jpg');
    background-size:100% 100%;
}
/*图片下面的div样式*/
.songlistfooter2div-div-div2{
    width:220px;
    height:40px;
    text-align:center;
    line-height:40px;
    margin:0 auto;
}
/*二十张图片下面的文字样式*/
.songlistfooter2div-div-div2-a{
    text-decoration:none;
    text-align:center;
    color:#ababab;
    font-size:14px;
}
</style>