<template>
<div id="lunbo">
   <h2 class="lunboh2">
     <a href="javascript:;" class="lunboh2a">新歌首发</a>
     <a href="javascript:;" class="lunboh2a1">更多</a>
    </h2>
  <el-carousel :interval="5000" arrow="always">
    <!--<el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>-->
    <el-carousel-item>
      <!--轮播第1张-->
        <div class="divcarousel5">
          <div class="divcarousel-1">
              <div class="divcarousel5-1"></div>
              <h4 class="h4carousel5-1">
                  <a @click="mvzgsjmgjl" id="bfzgsjmgjl" class="h4carousel5-1-a">走过世界每个角落</a>
              </h4>
              <h4 class="h4carousel5-2">
                  <a @click="mvzgsjmgjl" id="bfzgsjmgjl" class="h4carousel5-1-a">周笔畅</a>
              </h4>
          </div>
        <!--轮播第2张-->
          <div class="divcarousel-1">
            <div class="divcarousel5-2"></div>
              <h4 class="h4carousel5-1">
              <a @click="gqywyn" id="bfywyn" class="h4carousel5-1-a">因为有你</a>
              </h4>
              <h4 class="h4carousel5-2">
              <a @click="gqywyn" id="bfywyn" class="h4carousel5-1-a">毛阿敏</a>
              </h4>
          </div>
          <!--轮播第3张-->
          <div class="divcarousel-1">
            <div class="divcarousel5-3"></div>
            <h4 class="h4carousel5-1">
              <a @click="gqxcyy" id="bfxcyy" class="h4carousel5-1-a">西窗烟雨</a>
            </h4>
            <h4 class="h4carousel5-2">
              <a @click="gqxcyy" id="bfxcyy" class="h4carousel5-1-a">熙宝</a>
            </h4>
          </div>
          <!--轮播第4张-->
          <div class="divcarousel-1">
            <div class="divcarousel5-4"></div>
            <h4 class="h4carousel5-1">
              <a @click="mvbnhgn" id="bfbnhgn" class="h4carousel5-1-a">把你还给你</a>
            </h4>
            <h4 class="h4carousel5-2">
              <a @click="mvbnhgn" id="bfbnhgn" class="h4carousel5-1-a">方泂镔</a>
            </h4> 
          </div>  
          <!--轮播第5张-->
          <div class="divcarousel-1">
            <div class="divcarousel5-5"></div>
            <h4 class="h4carousel5-1">
              <a @click="gqnxdbsw" id="bfnxdbsw" class="h4carousel5-1-a">那些都不是我</a>
            </h4>
            <h4 class="h4carousel5-2">
              <a @click="gqnxdbsw" id="bfnxdbsw" class="h4carousel5-1-a">大张伟</a>
            </h4>
          </div>  
        </div>
    </el-carousel-item>
    <!--轮播2-->
    <el-carousel-item>
        <div class="carousel5div">
          <div class="divcarousel-1">
              <div class="divcarousel5-6"></div>
              <h4 class="h4carousel5-1">
                  <a href="javascript:;" class="h4carousel5-1-a">曰归曰归</a>
              </h4>
              <h4 class="h4carousel5-2">
                  <a href="javascript:;" class="h4carousel5-1-a">岁亦莫止</a>
              </h4>
          </div>
        <!--轮播第2张-->
          <div class="divcarousel-1">
            <div class="divcarousel5-7"></div>
              <h4 class="h4carousel5-1">
              <a href="javascript:;" class="h4carousel5-1-a">桃之夭夭</a>
              </h4>
              <h4 class="h4carousel5-2">
              <a href="javascript:;" class="h4carousel5-1-a">灼灼其华</a>
              </h4>
          </div>
          <!--轮播第3张-->
          <div class="divcarousel-1">
            <div class="divcarousel5-8"></div>
            <h4 class="h4carousel5-1">
              <a href="javascript:;" class="h4carousel5-1-a">桃之夭夭</a>
            </h4>
            <h4 class="h4carousel5-2">
              <a href="javascript:;" class="h4carousel5-1-a">有蕡其实</a>
            </h4>
          </div>
          <!--轮播第4张-->
          <div class="divcarousel-1">
            <div class="divcarousel5-9"></div>
            <h4 class="h4carousel5-1">
              <a href="javascript:;" class="h4carousel5-1-a">青青子佩</a>
            </h4>
            <h4 class="h4carousel5-2">
              <a href="javascript:;" class="h4carousel5-1-a">悠悠我思</a>
            </h4> 
          </div>  
          <!--轮播第5张-->
          <div class="divcarousel-1">
            <div class="divcarousel5-10"></div>
            <h4 class="h4carousel5-1">
              <a href="javascript:;" class="h4carousel5-1-a">采采卷耳</a>
            </h4>
            <h4 class="h4carousel5-2">
              <a href="javascript:;" class="h4carousel5-1-a">不盈顷筐</a>
            </h4>
           </div>  
      </div>
    </el-carousel-item>

        <!--轮播3-->
    <el-carousel-item>
        <div class="carousel5div">
          <div class="divcarousel-1">
              <div class="divcarousel5-11"></div>
              <h4 class="h4carousel5-1">
                  <a href="javascript:;" class="h4carousel5-1-a">视而不臧</a>
              </h4>
              <h4 class="h4carousel5-2">
                  <a href="javascript:;" class="h4carousel5-1-a">我思不远</a>
              </h4>
          </div>
        <!--轮播3第2张-->
          <div class="divcarousel-1">
            <div class="divcarousel5-12"></div>
              <h4 class="h4carousel5-1">
              <a href="javascript:;" class="h4carousel5-1-a">既见君子</a>
              </h4>
              <h4 class="h4carousel5-2">
              <a href="javascript:;" class="h4carousel5-1-a">云胡不夷</a>
              </h4>
          </div>
          <!--轮播3第3张-->
          <div class="divcarousel-1">
            <div class="divcarousel5-13"></div>
            <h4 class="h4carousel5-1">
              <a href="javascript:;" class="h4carousel5-1-a">今夕何夕</a>
            </h4>
            <h4 class="h4carousel5-2">
              <a href="javascript:;" class="h4carousel5-1-a">见此良人</a>
            </h4>
          </div>
          <!--轮播3第4张-->
          <div class="divcarousel-1">
            <div class="divcarousel5-14"></div>
            <h4 class="h4carousel5-1">
              <a href="javascript:;" class="h4carousel5-1-a">子兴视夜</a>
            </h4>
            <h4 class="h4carousel5-2">
              <a href="javascript:;" class="h4carousel5-1-a">明星有烂</a>
            </h4> 
          </div>  
          <!--轮播3第5张-->
          <div class="divcarousel-1">
            <div class="divcarousel5-15"></div>
            <h4 class="h4carousel5-1">
              <a href="javascript:;" class="h4carousel5-1-a">乐只君子</a>
            </h4>
            <h4 class="h4carousel5-2">
              <a href="javascript:;" class="h4carousel5-1-a">福履绥之</a>
            </h4>
           </div>  
      </div>
    </el-carousel-item>
  </el-carousel>
  </div>
</template>
<script>
export default {
  data(){
    return{}
  },
  methods:{
  mvzgsjmgjl(){this.axios.get("/mv/detail?mvid=10888602").then(res=>{
                var x=document.getElementById("bfzgsjmgjl")  
                var musicurl=res.data.data.brs["1080"]
                var c=x.href=musicurl
                console.log(musicurl)
        })
    },
    gqywyn(){this.axios.get("/song/url?id=1389005974").then(res=>{
                var x=document.getElementById("bfywyn")  
                var musicurl=res.data.data[0].url
                var c=x.href=musicurl
                console.log(musicurl)
        })
    },
    gqxcyy(){this.axios.get("/song/url?id=1388833150").then(res=>{
                var x=document.getElementById("bfxcyy")  
                var musicurl=res.data.data[0].url
                var c=x.href=musicurl
                console.log(musicurl)
        })
    },
    mvbnhgn(){this.axios.get("/mv/detail?mvid=10890676").then(res=>{
                var x=document.getElementById("bfbnhgn")  
                var musicurl=res.data.data[0].url
                var c=x.href=musicurl
                console.log(musicurl)
        })
    },
    gqnxdbsw(){this.axios.get("/song/url?id=1388664695").then(res=>{
                var x=document.getElementById("bfnxdbsw")  
                var musicurl=res.data.data[0].url
                var c=x.href=musicurl
                console.log(musicurl)
        })
    },
  }
}
</script>

<style scoped>
/**{margin:0;padding:0;}*/
.divcarousel5{
    /*background-color:bisque;*/
    width:1200px;
    height:231px;
    /*line-height:231px;*/
    display:flex;
    display:-webkit-flex;
    flex-wrap:wrap;
    justify-content:space-between;
    margin:20px auto;
}
.divcarousel-1{
  margin-top:30px;
  width:174px;
  height:229px;
}
.divcarousel5-1{
    width:174px;
    height:173px;
    background-image:url('carousel2/1.jpg');
    background-size:100% 100%
}
.h4carousel5-1{
  width:174px;
  height:22px;
  margin:0;
  text-align:center;
}
.h4carousel5-2{
  width:174px;
  height:22px;
  margin:0;
  text-align:center;
}
.h4carousel5-1-a{
  text-decoration:none;
  display:inline;
  font-family:"Times New Roman",Georgia,Serif;
  color:#000
}
.divcarousel5-2{    
    /*margin-left:30px;*/
    width:174px;
    height:173px;
    background-image:url('carousel2/2.jpg');
    background-size:100% 100%
    }
.divcarousel5-3{
    /*margin-left:30px;*/
    width:174px;
    height:173px;
    background-image:url('carousel2/3.jpg');
    background-size:100% 100%
}
.divcarousel5-4{
    /*margin-left:30px;*/
    width:174px;
    height:173px;
    background-image:url('carousel2/4.jpg');
    background-size:100% 100%
}
.divcarousel5-5{
    /*margin-left:30px;*/
    margin-right:30px;
    width:174px;
    height:173px;
    background-image:url('carousel2/5.jpg');
    background-size:100% 100%
}
/*轮播2*/
/*轮播2五张图*/
.carousel5div{
  width:1200px;
  height:231px;
  margin:0 auto;
  display:flex;
  display:-webkit-flex;
  flex-wrap:wrap;
  justify-content:space-between;
  margin:20px auto;
}
.divcarousel11{
    margin:20px auto;
    width:1200px;
    height:231px;
    display:flex;
    display:-webkit-flex;
    flex-wrap:wrap;
    justify-content:space-between;
}
.divcarousel5-6{  
    width:174px;
    height:173px;
    background-image:url('carousel2/6.jpg');
    background-size:100% 100%
    }
.divcarousel5-7{
    width:174px;
    height:173px;
    background-image:url('carousel2/7.jpg');
    background-size:100% 100%
}
.divcarousel5-8{
    width:174px;
    height:173px;
    background-image:url('carousel2/8.jpg');
    background-size:100% 100%
}
.divcarousel5-9{
    width:174px;
    height:173px;
    background-image:url('carousel2/9.jpg');
    background-size:100% 100%
}
.divcarousel5-10{
    width:174px;
    height:173px;
    background-image:url('carousel2/10.jpg');
    background-size:100% 100%;
}
/*轮播3  5张图*/
.divcarousel5-11{  
    width:174px;
    height:173px;
    background-image:url('carousel2/11.jpg');
    background-size:100% 100%
    }
.divcarousel5-12{
    width:174px;
    height:173px;
    background-image:url('carousel2/12.jpg');
    background-size:100% 100%
}
.divcarousel5-13{
    width:174px;
    height:173px;
    background-image:url('carousel2/13.jpg');
    background-size:100% 100%
}
.divcarousel5-14{
    width:174px;
    height:173px;
    background-image:url('carousel2/14.jpg');
    background-size:100% 100%
}
.divcarousel5-15{
    width:174px;
    height:173px;
    background-image:url('carousel2/15.jpg');
    background-size:100% 100%;
}

.el-carousel__item h3{
    width:700px;
    /*color: #475669;*/
    font-size:18px;
    opacity:0.75;
    line-height:300px;
    margin:0;
  }
  .el-carousel__item:nth-child(2n) {
      /*轮播颜色*/
    background-color:#fff
  } 
  .el-carousel__item:nth-child(2n+1) {
    /*轮播背景颜色*/
    background-color:#fff
  }
  #lunbo{
      width:1300px;
      margin:-10px auto;
      

  }
  .lunbo1{
      width:1300px;
      height:100px;
      background-color:antiquewhite
  }
  /*下面四个li的颜色*/
  .el-carousel__indicator li{
    background-color:black
  }
  .el-carousel__indicators{
    background-color:darkgray
  }
  .lunboh2a{
    text-decoration:none;
    font-family:PingFangSC-Regular,poppin,Tahoma,Arial,sans-serif;
    color:#333;
    letter-spacing:1px;
    font-weight:400;
    margin-right:20px;
  }
  .lunboh2a1{
    text-decoration:none;
    font-family:PingFangSC-Regular,poppin,Tahoma,Arial,sans-serif;
    color:#333;
    letter-spacing:1px;
    font-weight:400;
    font-size:14px;
  }
  .lunboh2{
    margin-left:50px;
    margin-top:10px;

  }
</style>