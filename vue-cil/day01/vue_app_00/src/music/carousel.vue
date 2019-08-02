<template>

  <el-carousel :interval="1000" type="card" height="300px">
    <el-carousel-item class="carousel1">
    </el-carousel-item>
    <el-carousel-item class="carousel2">
    </el-carousel-item>
    <el-carousel-item class="carousel3">
    </el-carousel-item>
    <el-carousel-item class="carousel4">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  data(){
    return {}
  }
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