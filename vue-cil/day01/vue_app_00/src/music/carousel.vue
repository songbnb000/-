<template>

  <el-carousel :interval="1000" type="card" height="300px">
    <a id="mv1" @click="mvone">
      <el-carousel-item class="carousel1">
      </el-carousel-item>
    </a>
    <a id="mv2" @click="mvtwo">
      <el-carousel-item class="carousel2">
      </el-carousel-item>
    </a>
    <a id="mv3" @click="mvthree">
      <el-carousel-item class="carousel3">
      </el-carousel-item>
    </a>
    <a id="mv4" @click="mvfour">
       <el-carousel-item class="carousel4">
       </el-carousel-item>
    </a>
  </el-carousel>
</template>
<script>
export default {
  data(){
    return {}
  },
  methods:{
     mvone(){this.axios.get("/mv/detail?mvid=5436500").then(res=>{
                var x=document.getElementById("mv1")  
                var musicurl=res.data.data.brs["1080"]
                x.href=musicurl
                console.log(musicurl)
        })
        },
        mvtwo(){this.axios.get("/mv/detail?mvid=5436501").then(res=>{
                var x=document.getElementById("mv2")  
                var musicurl=res.data.data.brs["1080"]
                x.href=musicurl
                console.log(musicurl)
        })
        },
        mvthree(){this.axios.get("/mv/detail?mvid=5436502").then(res=>{
                var x=document.getElementById("mv3")  
                var musicurl=res.data.data.brs["1080"]
                x.href=musicurl
                console.log(musicurl)
        })
        },
        mvfour(){this.axios.get("/mv/detail?mvid=5436503").then(res=>{
                var x=document.getElementById("mv4")  
                var musicurl=res.data.data.brs["1080"]
                x.href=musicurl
                console.log(musicurl)
        })
        },
    },
    
}
</script>
<style scoped>
*{margin:0;padding:0;}
  .el-carousel{
    width:1200px;
    margin:60px auto;

  }
  .el-carousel__item h3 {
    color:#475669;
    font-size:14px;
    opacity:0.75;
    line-height:300px;
    margin:0;

  }
  
  .el-carousel__item:nth-child(2n) {
    background-color:darkgrey

  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  /*轮播1*/
  .carousel1{
    width:700px;
    background-image:url('./carousel/1.jpg');
    background-size:100% 100%;
  }
  /*轮播2*/
  .carousel2{
    width:700px;
    background-image:url('./carousel/2.jpg');
    background-size:100% 100%;
  }
  /*轮播3*/
  .carousel3{
    width:700px;
    background-image:url('./carousel/3.jpg');
    background-size:100% 100%;
  }
  /*轮播4*/
  .carousel4{
    background-image:url('./carousel/4.jpg');
    background-size:100% 100%;
  }
/*.indicator-position{
    margin-top:50px;
  }
  .el-carousel__arrow-left{
    margin-right:30px;

  }
  .el-carousel__arrow{
    margin:30px!important;
  }*/
</style>