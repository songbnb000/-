<template>
    <div class="yuan">
            <div class="yuan1" @click="fanhui()"></div>
            <div class="yuan2"></div>
            <div class="yuan3"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
    }
    },
    methods:{
    fanhui(){
        //点击回到顶部
        scrollTo(0,0) 
        },
    }
}
</script>
<style scoped>
*{
margin:0;
padding:0;
}
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
        background-image:url('./musicheadimg/4.png');
        background-size:100% 100%;
        margin-top:10px;
        margin-left:3px;
    }
</style>