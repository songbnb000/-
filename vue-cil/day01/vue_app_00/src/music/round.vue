<template>
    <div class="borderradius">
        <div class="borderradius-1">
            <h2 class="borderradiu-h2">
                <a href="javascript:;" class="borderradiu-h2-a">热门歌手</a>
                <a href="javascript:;" class="borderradiu-h2-a-1">更多</a>
            </h2>
            <div class="borderradiu-div">
                <div class="borderradiu-div-1">
                    <a @click="gqss" id="bfss" class="borderradiu-div-1-h3-a">
                    <div class="borderradiu-div-1-1"></div>
                    <h3 class="borderradiu-div-1-h3">
                        薛之谦-绅士
                    </h3>
                   
                        </a>
                </div>
                <div class="borderradiu-div-2">
                    <a @click="gqnndj" id="bfnndj" class="borderradiu-div-1-h3-a">
                    <div class="borderradiu-div-2-1"></div>
                    <h3 class="borderradiu-div-1-h3">
                            周华健-难念的经
                    </h3>
                    </a>
                </div>
                <div class="borderradiu-div-3">
                    <div class="borderradiu-div-3-1"></div>
                    <h3 class="borderradiu-div-1-h3">
                        <a href="javascript:;" class="borderradiu-div-1-h3-a">
                            别梳妆
                        </a>
                    </h3>
                </div>
                <div class="borderradiu-div-4">
                    <a @click="gqts" id="bfts" class="borderradiu-div-1-h3-a">
                    <div class="borderradiu-div-4-1"></div>
                    <h3 class="borderradiu-div-1-h3">
                            林俊杰-她说
                    </h3>
                    </a>
                </div>
                <div class="borderradiu-div-5">
                    <a @click="gqqc" id="bfqc" class="borderradiu-div-1-h3-a">
                    <div class="borderradiu-div-5-1"></div>
                    <h3 class="borderradiu-div-1-h3">
                            许嵩-浅唱
                    </h3>
                    </a>
                </div>
                <div class="borderradiu-div-6">
                    <a @click="gqxtr" id="bfxtr" class="borderradiu-div-1-h3-a">
                    <div class="borderradiu-div-6-1"></div>
                    <h3 class="borderradiu-div-1-h3">                       
                            任贤齐-心太软                     
                    </h3>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>    
<script>
export default {
    data(){
        return {}
    },
    methods:{
        gqss(){this.axios.get("song/url?id=1374061038").then(res=>{
                var x=document.getElementById("bfss")  
                var musicurl=res.data.data[0].url;
                var c=x.href=musicurl
                console.log(c)
       })
    },
    gqnndj(){this.axios.get("song/url?id=5271858").then(res=>{
                var x=document.getElementById("bfnndj")  
                var musicurl=res.data.data[0].url;
                var c=x.href=musicurl
                console.log(c)
       })
    },
    gqts(){this.axios.get("song/url?id=108242").then(res=>{
                var x=document.getElementById("bfts")  
                var musicurl=res.data.data[0].url;
                var c=x.href=musicurl
                console.log(c)
       })
    },
    gqqc(){this.axios.get("song/url?id=27646697").then(res=>{
                var x=document.getElementById("bfqc")  
                var musicurl=res.data.data[0].url;
                var c=x.href=musicurl
                console.log(c)
       })
    },
    gqxtr(){this.axios.get("song/url?id=144619").then(res=>{
                var x=document.getElementById("bfxtr")  
                var musicurl=res.data.data[0].url;
                var c=x.href=musicurl
                console.log(c)
       })
    }
    }
}
</script>
<style scoped>
    .borderradius{
        width:100%;
        height:224px;
    }
    .borderradius-1{
        margin:0 auto;
        width:1200px;
        height:224px;
    }
    .borderradiu-h2{
        width:1200px;
        height:38px;
    }
    .borderradiu-div{
        width:1224px;
        height:161px;
        margin-left:10px;
        display:flex;
        display:-webkit-flex;
        flex-wrap:wrap;
        justify-content:space-between;
    }
    .borderradiu-div-1{
        width:126.91px;
        height:158.91px;
    }
    .borderradiu-div-1-1{
        width:124.96px;
        height:124.96px;
        border-radius:50%;
        background-image:url('./round/1.jpg');
        background-size:100% 100%;
    }
    .borderradiu-div-2{
        width:126.91px;
        height:158.91px;
    }
    .borderradiu-div-2-1{
        width:124.96px;
        height:124.96px;
        border-radius:50%;
        background-image:url('./round/2.jpg');
        background-size:100% 100%;
    }
    .borderradiu-div-3{
        width:126.91px;
        height:158.91px;
    }
    .borderradiu-div-3-1{
        width:124.96px;
        height:124.96px;
        border-radius:50%;
        background-image:url('./round/3.jpg');
        background-size:100% 100%;
    }
    .borderradiu-div-4{
        width:126.91px;
        height:158.91px;
    }
    .borderradiu-div-4-1{
        width:124.96px;
        height:124.96px;
        border-radius:50%;
        background-image:url('./round/4.jpg');
        background-size:100% 100%;
    }
    .borderradiu-div-5{
        width:126.91px;
        height:158.91px;
    }
    .borderradiu-div-5-1{
        width:124.96px;
        height:124.96px;
        border-radius:50%;
        background-image:url('./round/5.jpg');
        background-size:100% 100%;
    }
    .borderradiu-div-6{
        width:126.91px;
        height:158.91px;      
    }  
    .borderradiu-div-6-1{
        width:124.96px;
        height:124.96px;
        border-radius:50%;
        background-image:url('./round/6.jpg');
        background-size:100% 100%;
    }      
    .borderradiu-h2-a{
        text-decoration:none;
        color:#333333;
        font-family:PingFangSC-Regular,poppin,Tahoma,Arial,sans-serif;
        font-size:24px;
        padding-right:10px;
    }
    .borderradiu-h2-a-1{
        text-decoration:none;
        color:#333333;
        font-size:14px;
        font-family:PingFangSC-Regular,poppin,Tahoma,Arial,sans-serif;
        letter-spacing:1px;
    }
    /*包含圆形图片下方文字a标签的h3*/
    .borderradiu-div-1-h3{
        width:126px;
        height:91px;
        margin:10px 0 0;
        text-align:center
    }
    /*圆形图片下方的a标签*/
    .borderradiu-div-1-h3-a{
        text-decoration:none;
        font-size:14px;
        font-family:PingFangSC-Regular,poppin,Tahoma,Arial,sans-serif;
        color:#333;
    }
    /*鼠标移入的放大效果*/
    .borderradiu-div-1:hover{
        font-size:120%;
        
    }
    .borderradiu-div-1-1:hover{
        background-size:120%;
    }
    .borderradiu-div-2:hover{
        font-size:120%;
    }
    .borderradiu-div-2-1:hover{
        background-size:120%;
    }
    .borderradiu-div-3:hover{
        font-size:120%;
    }
    .borderradiu-div-3-1:hover{
        background-size:120%;
    }
    .borderradiu-div-4:hover{
        font-size:120%;
    }
    .borderradiu-div-4-1:hover{
        background-size:120%;
    }
    .borderradiu-div-5:hover{
        font-size:120%;
    }
    .borderradiu-div-5-1:hover{
        background-size:120%;
    }
    .borderradiu-div-6:hover{
        font-size:120%;
    }
    .borderradiu-div-6-1:hover{
        background-size:120%;
    }
</style>