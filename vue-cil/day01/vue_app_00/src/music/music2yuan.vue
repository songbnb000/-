<template>
    <div class="yuan">
            <div class="yuan1" @click="fanhui()" title="返回顶部"></div>
            <div class="yuan2"></div>
            <div id="btn" class="yuan3"> 
                <img id="showCont" ref="showCont" :src="this.i==0?srcs:nosrc" @click="showCont()" /> 
            </div>
    </div> 
</template>
<script>
export default {
  data () {
    return {
      i:0,
      srcs:require('./musicheadimg/4.png'),
      nosrc:require('./musicheadimg/5.png'),
    }
  },
  mounted() {
      setInterval(this.showCont,1000)

  },
  methods:{
    showCont(){
       if(this.i==0){
           this.i=1;
       }else{
           this.i=0;
       }
    },
    fanhui(){
        //点击回到顶部
        scrollTo(0,0)
        },
  },
   components: {
   }
}
</script>

<style scoped>
 .yuan{
        width:71px;
        height:300px;
        position:fixed;
        top:500px;
        left:1800px;
    }
    .yuan1{
        width:71px;
        height:64.7px;
        background-image:url('./musicheadimg/1.png');
        background-size:100% 100%;
    }
    .yuan2{
        width:71px;
        height:64.7px;
        background-image:url('./musicheadimg/2.png');
        background-size:100% 100%;
        margin-top:10px;
        margin-left:2px;
    }
    .yuan3{
        width:61px;
        height:61px;
       /* background-image:url('./musicheadimg/4.png');
        background-size:100% 100%;*/
        margin-top:10px;
        margin-left:6px;
    }
    
</style>
