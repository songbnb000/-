<template>  
<!--最大的框-->
<div class="musicborder">
    <!--大框-->
    <div class="musicborder-div">
        <!--第一个框-->
        <div class="musicborder-div-1">
            <h4 class="musicborder-div-h4">
                <a id="bf" @click="songurl" class="musicborder-div-h4-a">新歌榜</a>
                <i class="iconfont icon-bofanganniu1"></i>
            </h4>
            <div class="musicborder-div-div">
                    <a id="bfmor" @click="gqmor" class="musicborder-div-div-div-h3-a">
                <div class="musicborder-div-div-1">
                    <span class="musicborder-div-div-span">01</span>
                    <a href="javascript:;" class="musicborder-div-div-a">
                    </a>         
                    <div class="musicborder-div-div-div">
                        <h3 class="musicborder-div-div-div-h3">
                            木偶人
                        </h3>
                        <h4 class="musicborder-div-div-div-h4">
                           <!-- <a href="javascript:;" class="musicborder-div-div-div-h3-a">薛之谦</a>-->
                           薛之谦
                        </h4>
                        
                    </div>
                    <!--移入样式使用-->
                    <div class="musicborder-div-div-icon">
                        <i class="iconfont icon-bofanganniu"></i>
                        <i class="iconfont icon-new-arrival"></i>
                        <i class="iconfont icon-bofanganniu1"></i>
                    </div>
                </div>
                </a>
                <a class="musicborder-div-div-div-h3-a" id="bfmbp" @click="gqmbp">
                <div class="musicborder-div-div-1">
                    <span class="musicborder-div-div-span">02</span>
                    <a href="javascript:;" class="musicborder-div-div-a-1">
                    </a>
                    <div class="musicborder-div-div-div">
                        <h3 class="musicborder-div-div-div-h3">
                            慢半拍
                           <!-- <a class="musicborder-div-div-div-h3-a" >慢半拍</a>-->
                        </h3>
                        <h4 class="musicborder-div-div-div-h4">
                            薛之谦
                           <!-- <a class="musicborder-div-div-div-h3-a">薛之谦</a>-->
                        </h4>
                    </div>
                    <!--移入样式使用-->
                    <div class="musicborder-div-div-icon">
                        <i class="iconfont icon-bofanganniu"></i>
                        <i class="iconfont icon-new-arrival"></i>
                        <i class="iconfont icon-bofanganniu1"></i>
                    </div>
                </div>
                </a>
                <a @click="gqxdbhy" id="bfxdbhy" class="musicborder-div-div-div-h3-a">
                <div class="musicborder-div-div-1">
                    <span class="musicborder-div-div-span">03</span>
                    <a href="javascript:;" class="musicborder-div-div-a-2">
                    </a>
                    <div class="musicborder-div-div-div">
                        <h3 class="musicborder-div-div-div-h3">
                            兄弟不怀疑
                        </h3>
                        <h4 class="musicborder-div-div-div-h4">
                            刘德华/古天乐
                        </h4>
                    </div>
                    <!--移入样式使用-->
                    <div class="musicborder-div-div-icon">
                        <i class="iconfont icon-bofanganniu"></i>
                        <i class="iconfont icon-new-arrival"></i>
                        <i class="iconfont icon-bofanganniu1"></i>
                    </div>
                </div>
                </a>
                 <a @click="gqbjw" id="bfbjw" class="musicborder-div-div-div-h3-a">
                <div class="musicborder-div-div-1">
                    <span class="musicborder-div-div-span-1">04</span>
                    <a href="javascript:;" class="musicborder-div-div-a-3">
                    </a>
                    <div class="musicborder-div-div-div">
                        <h3 class="musicborder-div-div-div-h3">
                           抱紧我
                        </h3>
                        <h4 class="musicborder-div-div-div-h4">
                            冯建宇
                        </h4>
                    </div>
                    <!--移入样式使用-->
                    <div class="musicborder-div-div-icon">
                        <i class="iconfont icon-bofanganniu"></i>
                        <i class="iconfont icon-new-arrival"></i>
                        <i class="iconfont icon-bofanganniu1"></i>
                    </div>
                </div>
                </a>
                <a @click="gqywa" id="bfywa" class="musicborder-div-div-div-h3-a">
                <div class="musicborder-div-div-1">
                    <span class="musicborder-div-div-span-1">05</span>
                    <a href="javascript:;" class="musicborder-div-div-a-4">
                    </a>
                    <div class="musicborder-div-div-div">
                        <h3 class="musicborder-div-div-div-h3">
                            因为爱
                        </h3>
                        <h4 class="musicborder-div-div-div-h4">
                            赵传
                        </h4>
                    </div>
                    <!--移入样式使用-->
                    <div class="musicborder-div-div-icon">
                        <i class="iconfont icon-bofanganniu"></i>
                        <i class="iconfont icon-new-arrival"></i>
                        <i class="iconfont icon-bofanganniu1"></i>
                    </div>
                </div>
                </a>
                <a @click="gqbwcx" id="bfbwcx" class="musicborder-div-div-div-h3-a">
                <div class="musicborder-div-div-1">
                    <span class="musicborder-div-div-span-1">06</span>
                    <a href="javascript:;" class="musicborder-div-div-a-5">
                    </a>
                    <div class="musicborder-div-div-div">
                        <h3 class="musicborder-div-div-div-h3">
                            不忘初心
                        </h3>
                        <h4 class="musicborder-div-div-div-h4">
                            谭维维/韩磊
                        </h4>
                    </div>
                    <!--移入样式使用-->
                    <div class="musicborder-div-div-icon">
                        <i class="iconfont icon-bofanganniu"></i>
                        <i class="iconfont icon-new-arrival"></i>
                        <i class="iconfont icon-bofanganniu1"></i>
                    </div>
                </div>
                </a>
            </div>
            <h4 class="musicborder-div-h4-2">
                <a href="javascript:;" class="musicborder-div-div-div-h3-a">查看完整榜单></a>
            </h4>
        </div>
        <!--第二个框-->
        <div class="musicborder-div-2">
            <h4 class="musicborder-div-h4-1">
                <a href="javascript:;" class="musicborder-div-h4-a-1">热歌榜</a>
                <i class="iconfont icon-bofanganniu1"></i>
            </h4>
            
            <div class="musicborder-div-div">
                <a @click="gqwhys" id="bfwhys" class="musicborder-div-div-div-h3-a">
                <div class="musicborder-div-div-1">
                    <span class="musicborder-div-div-span-2">01</span>
                    <a href="javascript:;" class="musicborder-div-div-a">
                    </a>
                    <div class="musicborder-div-div-div">
                        <h3 class="musicborder-div-div-div-h3">
                            往后余生
                        </h3>
                        <h4 class="musicborder-div-div-div-h4">
                            马良/孙茜茹
                        </h4>
                    </div>
                </div>
               </a> 
               <a @click="gqyy" id="bfyy" class="musicborder-div-div-div-h3-a">
                <div class="musicborder-div-div-1">
                    <span class="musicborder-div-div-span-2">02</span>
                    <a href="javascript:;" class="musicborder-div-div-a-1">
                    </a>
                    <div class="musicborder-div-div-div">
                        <h3 class="musicborder-div-div-div-h3">
                            演员
                        </h3>
                        <h4 class="musicborder-div-div-div-h4">
                            徐薇(Cover 薛之谦)
                        </h4>
                    </div>
                </div>
                </a>
                <a @click="gqnlch" id="bfnlch" class="musicborder-div-div-div-h3-a">
                 <div class="musicborder-div-div-1">
                    <span class="musicborder-div-div-span-2">03</span>
                    <a href="javascript:;" class="musicborder-div-div-a-2">
                    </a>
                    <div class="musicborder-div-div-div">
                        <h3 class="musicborder-div-div-div-h3">
                            逆流成河
                        </h3>
                        <h4 class="musicborder-div-div-div-h4">
                            金南玲
                        </h4>
                    </div>
                </div>
                 </a>
                <div class="musicborder-div-div-1">
                    <span class="musicborder-div-div-span-1">04</span>
                    <a href="javascript:;" class="musicborder-div-div-a-3">
                    </a>
                    <div class="musicborder-div-div-div">
                        <h3 class="musicborder-div-div-div-h3">
                            <a href="javascript:;" class="musicborder-div-div-div-h3-a">山本无忧</a>
                        </h3>
                        <h4 class="musicborder-div-div-div-h4">
                            <a href="javascript:;" class="musicborder-div-div-div-h3-a">因雪白头</a>
                        </h4>
                    </div>
                </div>
                <div class="musicborder-div-div-1">
                    <span class="musicborder-div-div-span-1">05</span>
                    <a href="javascript:;" class="musicborder-div-div-a-4">
                    </a>
                    <div class="musicborder-div-div-div">
                        <h3 class="musicborder-div-div-div-h3">
                            <a href="javascript:;" class="musicborder-div-div-div-h3-a">愿得相随慢慢老</a>
                        </h3>
                        <h4 class="musicborder-div-div-div-h4">
                            <a href="javascript:;" class="musicborder-div-div-div-h3-a">白头忧是少年心</a>
                        </h4>
                    </div>
                </div>
                <div class="musicborder-div-div-1">
                    <span class="musicborder-div-div-span-1">06</span>
                    <a href="javascript:;" class="musicborder-div-div-a-5">
                    </a>
                    <div class="musicborder-div-div-div">
                        <h3 class="musicborder-div-div-div-h3">
                            <a href="javascript:;" class="musicborder-div-div-div-h3-a">人生天地人无醉</a>
                        </h3>
                        <h4 class="musicborder-div-div-div-h4">
                            <a href="javascript:;" class="musicborder-div-div-div-h3-a">情字生时眼朦胧</a>
                        </h4>
                    </div>
                </div>
            </div>
            <h4 class="musicborder-div-h4-2">
                <a href="javascript:;" class="musicborder-div-div-div-h3-a">查看完整榜单></a>
            </h4>
        </div>
        <!--第三个框-->
        <div class="musicborder-div-3">
            <h4 class="musicborder-div-h4-3">
                <a href="javascript:;" class="musicborder-div-h4-a-2">网络歌曲榜</a>
                <i class="iconfont icon-bofanganniu1"></i>
            </h4>
            <div class="musicborder-div-div">
                <div class="musicborder-div-div-1">
                    <span class="musicborder-div-div-span-3">01</span>
                    <a href="javascript:;" class="musicborder-div-div-a">
                    </a>
                    <div class="musicborder-div-div-div">
                        <h3 class="musicborder-div-div-div-h3">
                            <a href="javascript:;" class="musicborder-div-div-div-h3-a">情之一字</a>
                        </h3>
                        <h4 class="musicborder-div-div-div-h4">
                            <a href="javascript:;" class="musicborder-div-div-div-h3-a">不知所起</a>
                        </h4>
                    </div>
                </div>
                <div class="musicborder-div-div-1">
                    <span class="musicborder-div-div-span-3">02</span>
                    <a href="javascript:;" class="musicborder-div-div-a-1">
                    </a>
                    <div class="musicborder-div-div-div">
                        <h3 class="musicborder-div-div-div-h3">
                            <a href="javascript:;" class="musicborder-div-div-div-h3-a">不知所栖</a>
                        </h3>
                        <h4 class="musicborder-div-div-div-h4">
                            <a href="javascript:;" class="musicborder-div-div-div-h3-a">不知所结</a>
                        </h4>
                    </div>
                </div>
                <div class="musicborder-div-div-1">
                    <span class="musicborder-div-div-span-3">03</span>
                    <a href="javascript:;" class="musicborder-div-div-a-2">
                    </a>
                    <div class="musicborder-div-div-div">
                        <h3 class="musicborder-div-div-div-h3">
                            <a href="javascript:;" class="musicborder-div-div-div-h3-a">不知所解</a>
                        </h3>
                        <h4 class="musicborder-div-div-div-h4">
                            <a href="javascript:;" class="musicborder-div-div-div-h3-a">不知所踪</a>
                        </h4>
                    </div>
                </div>
                <div class="musicborder-div-div-1">
                    <span class="musicborder-div-div-span-1">04</span>
                    <a href="javascript:;" class="musicborder-div-div-a-3">
                    </a>
                    <div class="musicborder-div-div-div">
                        <h3 class="musicborder-div-div-div-h3">
                            <a href="javascript:;" class="musicborder-div-div-div-h3-a">山本无忧</a>
                        </h3>
                        <h4 class="musicborder-div-div-div-h4">
                            <a href="javascript:;" class="musicborder-div-div-div-h3-a">因雪白头</a>
                        </h4>
                    </div>
                </div>
                <div class="musicborder-div-div-1">
                    <span class="musicborder-div-div-span-1">05</span>
                    <a href="javascript:;" class="musicborder-div-div-a-4">
                    </a>
                    <div class="musicborder-div-div-div">
                        <h3 class="musicborder-div-div-div-h3">
                            <a href="javascript:;" class="musicborder-div-div-div-h3-a">草长莺飞</a>
                        </h3>
                        <h4 class="musicborder-div-div-div-h4">
                            <a href="javascript:;" class="musicborder-div-div-div-h3-a">杨柳依依</a>
                        </h4>
                    </div>
                </div>
                <div class="musicborder-div-div-1">
                    <span class="musicborder-div-div-span-1">06</span>
                    <a href="javascript:;" class="musicborder-div-div-a-5">
                    </a>
                    <div class="musicborder-div-div-div">
                        <h3 class="musicborder-div-div-div-h3">
                            <a href="javascript:;" class="musicborder-div-div-div-h3-a">君子坐而论道</a>
                        </h3>
                        <h4 class="musicborder-div-div-div-h4">
                            <a href="javascript:;" class="musicborder-div-div-div-h3-a">少年起而行之</a>
                        </h4>
                    </div>
                </div>
            </div>
            <h4 class="musicborder-div-h4-2">
                <a href="javascript:;" class="musicborder-div-div-div-h3-a">查看完整榜单></a>
            </h4>
        </div>
    </div> 
</div>  
</template>
<script>
import iconfont from "./musicborder/iconfont.css"
export default {
    data(){
        return{}
    },
    methods:{
        songurl(){this.axios.get("song/url?id=405998841").then(res=>{
                var x=document.getElementById("bf")  
                var musicurl=res.data.data[0].url;
                var c=x.href=musicurl
                console.log(c)
        })
        },
        gqmor(){this.axios.get("song/url?id=1374051000").then(res=>{
                var x=document.getElementById("bfmor")  
                var musicurl=res.data.data[0].url;
                var c=x.href=musicurl
                console.log(c)
        })
        },
        gqmbp(){this.axios.get("song/url?id=1374061028").then(res=>{
                var x=document.getElementById("bfmbp")  
                var musicurl=res.data.data[0].url;
                var c=x.href=musicurl
                console.log(c)
        })
        },
        gqxdbhy(){this.axios.get("song/url?id=1374483148").then(res=>{
                var x=document.getElementById("bfxdbhy")  
                var musicurl=res.data.data[0].url;
                var c=x.href=musicurl
                console.log(c)
        })
        },
        gqbjw(){this.axios.get("song/url?id=1387182731").then(res=>{
                var x=document.getElementById("bfbjw")  
                var musicurl=res.data.data[0].url;
                var c=x.href=musicurl
                console.log(c)
        })
        },
        gqywa(){this.axios.get("song/url?id=1387182731").then(res=>{
                var x=document.getElementById("bfywa")  
                var musicurl=res.data.data[0].url;
                var c=x.href=musicurl
                console.log(c)
        })
        },
        gqbwcx(){this.axios.get("song/url?id=456185079").then(res=>{
                var x=document.getElementById("bfbwcx")  
                var musicurl=res.data.data[0].url;
                var c=x.href=musicurl
                console.log(c)
        })
        },
        gqwhys(){this.axios.get("song/url?id=557584888").then(res=>{
                var x=document.getElementById("bfwhys")  
                var musicurl=res.data.data[0].url;
                var c=x.href=musicurl
                console.log(c)
        })
        },
        gqyy(){this.axios.get("song/url?id=431554149").then(res=>{
                var x=document.getElementById("bfyy")  
                var musicurl=res.data.data[0].url;
                var c=x.href=musicurl
                console.log(c)
        })
        },
        gqnlch(){this.axios.get("song/url?id=28978321").then(res=>{
                var x=document.getElementById("bfnlch")  
                var musicurl=res.data.data[0].url;
                var c=x.href=musicurl
                console.log(c)
        })
        },
        
}
}
</script>
<style scoped>  
    *{margin:0;padding:0}
    .musicborder{
        width:100%;
        height:607px;
        margin-top:50px;
    }
    .musicborder-div{
        margin:0 auto;
        width:1200px;
        height:607px;
        display:flex;
        display:-webkit-flex;
        flex-wrap:wrap;
        justify-content:space-between;
    }
    /*新歌榜边框*/
    .musicborder-div-1{
        width:379.95px;
        height:544px;
        border:1px solid rgba(91,148,0,.3);
    }
    /*热歌榜边框*/
    .musicborder-div-2{
        width:379.95px;
        height:544px;
        border:1px solid rgba(219,88,0,.3);
    }
    /*网络歌曲榜边框*/   
    .musicborder-div-3{
        width:379.95px;
        height:544px;
        border:1px solid rgba(33,191,166,.3);
    } 
    .musicborder-div-2{
        width:379.95px;
        height:544px;
    }
    .musicborder-div-3{
        width:379.95px;
        height:544px;
    }
    /*新歌榜*/
    .musicborder-div-h4{
        width:379.95px;
        height:64px;
        margin:0 0 14px;
        background-color:rgba(91,148,0,.1);
        line-height:64px;
    }
    /*热歌榜*/
    .musicborder-div-h4-1{
        width:379.95px;
        height:64px;
        margin:0 0 14px;
        background-color:rgba(219,88,0,.1);
        line-height:64px;
    }
    /*网络歌曲榜*/
    .musicborder-div-h4-3{
        width:379.95px;
        height:64px;
        margin:0 0 14px;
        background-color:rgba(33,191,166,.1);
        line-height:64px;
    }
    /*新歌榜文字*/
    .musicborder-div-h4-a{
        color:#5b9400;
        font-weight:700;
        font-size:22px;
        text-decoration:none;
        padding-left:20px;
    } 
    /*热歌榜文字*/
    .musicborder-div-h4-a-1{
        color:#db5800;
        font-weight:700;
        font-size:22px;
        text-decoration:none;
        padding-left:20px;
    }
    /*网络歌曲榜*/
    .musicborder-div-h4-a-2{
        color:#21bfa6;
        font-weight:700;
        font-size:22px;
        text-decoration:none;
        padding-left:20px;
    }
    .icon-bofanganniu1{
        font-size:200%;
        float:right;
        color:#5b9400;
    }
    /*音乐框里面的内容*/
    .musicborder-div-div{
        width:377.95px;
        height:408px;
    }
    .musicborder-div-div-1{
        width:377.95px;
        height:66px;
        padding:10px 10px 10px 20px;
        box-sizing: border-box;
        /*line-height:66px;*/
        float:left;
    }
    /*鼠标移入样式的div和效果*/
    .musicborder-div-div-icon:hover{
        width:160px;
        height:100px;
        margin-top:-30px;   
        float:right;
        opacity:0.9;
        display:flex;
        display:-webkit-flex;
        flex-wrap:wrap;
        justify-content:space-between;
    }
    .musicborder-div-div-icon{
        opacity:0;
    }
    /*图片*/
    .musicborder-div-div-a{
        width:48px;
        height:48px;
        display:block;
        background-image:url('musicborderimage/1.jpg');
        margin-left:5px;
        background-size:100% 100%;        
        float:left;
    }
    .musicborder-div-div-a-1{
        width:48px;
        height:48px;
        display:block;
        background-image:url('musicborderimage/2.jpg');
        margin-left:5px;
        background-size:100% 100%;        
        float:left;
    }
    .musicborder-div-div-a-2{
        width:48px;
        height:48px;
        display:block;
        background-image:url('musicborderimage/3.jpg');
        margin-left:5px;
        background-size:100% 100%;        
        float:left;
    }
    .musicborder-div-div-a-3{
        width:48px;
        height:48px;
        display:block;
        background-image:url('musicborderimage/4.jpg');
        margin-left:5px;
        background-size:100% 100%;
        float:left;
    }
    .musicborder-div-div-a-4{
        width:48px;
        height:48px;
        display:block;
        background-image:url('musicborderimage/5.jpg');
        margin-left:5px;
        background-size:100% 100%;
        float:left;
    }
    .musicborder-div-div-a-5{
        width:48px;
        height:48px;
        display:block;
        background-image:url('musicborderimage/6.jpg');
        margin-left:5px;
        background-size:100% 100%;
        float:left;
    }
    /*图片结束*/
    .musicborder-div-div-span{
        float:left;
        margin-top:10px;
        color:forestgreen;
        font-family:PingFangSC-Regular,poppin,Tahoma,Arial,sans-serif;
        font-size:20px;
    }
    .musicborder-div-div-span-2{
        float:left;
        margin-top:10px;
        color:#db5800;
        font-family:PingFangSC-Regular,poppin,Tahoma,Arial,sans-serif;
        font-size:20px;
    }
    .musicborder-div-div-span-3{
        float:left;
        margin-top:10px;
        color:#21bfa6;
        font-family:PingFangSC-Regular,poppin,Tahoma,Arial,sans-serif;
        font-size:20px;
    }
    .musicborder-div-div-span-1{
        float:left;
        margin-top:10px;
        color:#999999;
        font-family:PingFangSC-Regular,poppin,Tahoma,Arial,sans-serif;
        font-size:20px;
    }
    .musicborder-div-div-div{
        width:146.95px;
        height:48px;
        float:left;
    }
    .musicborder-div-div-div-h3{
        width:146.95px;
        height:16px;
        font-size:14px;
        font-family:"Times New Roman",Georgia,Serif;
        margin:9px 0 0 5px;
    }
    .musicborder-div-div-div-h4{
        width:146.95px;
        height:16px;
        margin:6px 0 0 5px;
        font-size:14px;
        font-family:"Times New Roman",Georgia,Serif;
    }
    /*a标签文字样式*/
    .musicborder-div-div-div-h3-a{
        text-decoration:none;
        color:black;
        font-size:15px;
        font-family:PingFangSC-Regular,poppin,Tahoma,Arial,sans-serif;
        font-style: normal;
        font-weight:400;
    }
    /*查看完整榜单，注意看清楚，不然容易和网络歌曲榜重复*/
    .musicborder-div-h4-2{
        width:377.95px;
        height:54px;
        padding:10px 20px 30px 0;
        text-align:right;

    }
</style>
