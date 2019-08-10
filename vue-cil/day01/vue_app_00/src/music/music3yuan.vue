<template>
    <div class="yuan">
            <div class="yuan1" @click="fanhui()"></div>
            <div class="yuan2"></div>
            <div class="yuan3" @click.stop="changeImg()">
             <!--   <img src="./musicheadimg/3.png" alt="" class="yuan3img" id="obj">-->
             <img :src="require('./musicheadimg/3.png')" alt="" class="yuan3img" id="obj">    
            </div>
            </div>   
</template>
<script>

export default{
    data(){
        return{
                curIndex:0,
                timeInterval:1000,
                arr:["require('./musicheadimg/3.png')","require('./musicheadimg/4.png')","require('./musicheadimg/5.png')"]
                }
    },
    methods:{
    fanhui(){
        //点击回到顶部
        scrollTo(0,0)
        },
    changeImg(){
        var obj=document.getElementById("obj");
        //console.log(obj.src)
        //console.log(this.arr)
        //console.log(this.curIndex)
        //console.log(this.arr[this.curIndex])
       if(this.curIndex==this.arr.length-1){
        this.curIndex=0;
		}else{
		this.curIndex+=1;
			}
        obj.src=this.arr[this.curIndex];
        },
    //setInterval(changeImg,timeInterval)
   mounted(){
           this.changeImg();
            setInterval(this.changeImg,1000)
       }    
    },
    

}
</script>
<style scoped>
*{
margin:0;
padding:0;
}
.dianji{
    width:1000px;
    height:1000px;
}
    .yuan{
        width:71px;
        height:300px;
        position:fixed;
        top:500px;
       /* left:1800px;*/
       left:1300px;
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
        margin-left:3px;
    }
    .yuan3img{
        width:61px;
        height:61px;
        background-color:aqua;
        margin-top:10px;
        margin-left:3px;
    }
</style>