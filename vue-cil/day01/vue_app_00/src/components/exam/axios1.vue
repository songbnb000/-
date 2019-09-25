<template>
<div class="login_container">
   <!-- <mt-field   label="用户名"
    :placeholder="unameplaceholder" v-model="uname">
    </mt-field>
    <mt-field label="密码" type="password" :placeholder="upwdplaceholder" v-model="upwd">
    </mt-field>-->
    <!--<a class="button1" @click="con" id="bf">登陆</a>
   <button class="button1" @click="mvplaylist" id="bfmy"></button>-->
   <div class="musicdiv">
   <div class="div1">
        <div class="div2" id="divele">
            <img :src="item.coverImgUrl" alt="" v-for="(item,i) of musicname" :key="i" class="div2img" id="imgchild">
        </div>  
       <div class="div3">
            <a href="javascript:;" a v-for="(item1,index) of musicname" :key="index" class="musicnamea">{{item1.name}}</a>
        </div>
   </div>
   </div>
</div>

</template>
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
<script>
export default {
    data(){
        return{
           // unameplaceholder:"请输入用户名",
            //upwdplaceholder:"请输入密码",
            //uname:"tom",
            //upwd:"123"
            musicname:{},
        }
    },
    methods:{
       /* tosong(i){
            var id=this.recs[i].id;
            console.log(recs)
            //转换路径，添加路由
            this.$router.push({
                path:'/song',
                query:{
                    id
                }
            })
        },*/
    /*    bofang(){
            //完成登录
            //1.获取用户名和密码
           // var u=this.uname;
            //var p=this.upwd;
            //创建一个正则表达式 字母数字下划线3-12
            //5.发送axios请求
            //请求地址要跟服务器端接收的地址一样，服务器端app.js中的server.get
            //var url="song/url?id=33894312";
            //var obj=result.data[0].url;
            //this.axios.get(url,{params:obj}).then
            this.axios.get('banner').then(res=>{
                var banners=res.data.banners;
                console.log(banners);
               for(var i of banners){
                 this.imageUrl.push(i.imageUrl);
               }
            })
            //(result=>{console.log(result.data[0].url);
            //(result=>{console.log(result.data[0].url);
            //data是result中的一个数组，存在code
            //用户只要成功输出一次数据，code就会+1
            //if(result.data.code>0){
                //原来写的
                //this.$router.push("/Home1");
                //自己修改的
                //this.$messagebox
                //alert("点击确定,1秒后自动跳转回首页")
                //这边需要使用箭头函数才可以拿到this原来的写法是
                //setTimeout(function(){this.$router.push("/index")},3000)，这边自己修改为箭头函数
              //  setTimeout(()=>{this.$router.push("/index")},1000)  
            //}else{this.$messagebox("提示","用户名或密码错误")}
            //});
        },
        //获得data数值
        bofanger(){
            this.axios.get("personalized").then(res=>{
                var recs=res.data.result;
                console.log(recs)
                for(var rec of recs){
                    this.recs.push(rec)
                }
            })
        },
       songurl(){this.axios.get("song/url?id=405998841").then(res=>{
                var x=document.getElementById("bf")  
                var musicurl=res.data.data[0].url;
                var c=x.href=musicurl
                console.log(c)
        })
        },
        mvone(){this.axios.get("/mv/detail?mvid=5436503").then(res=>{
                var x=document.getElementById("bf")  
                var musicurl=res.data.data.brs["1080"]
                var c=x.href=musicurl
                console.log(musicurl)
        })
        },*/ 
        con(){
            console.log("你好吗")
        },
        mvplaylist(){this.axios.get("/top/playlist").then(res=>{
            var musicurl=res.data.playlists
            var x=document.getElementById("bfmy") 
            for(var i=0;i<musicurl.length;i++){
                    this.musicname[i]=musicurl[i]
                    console.log(this.musicname)
            }
            return this.musicname
        })
        }, 
    },
    mounted(){    
            this.con();
            this.mvplaylist()
        }
}
</script>
<style scoped>
    .login_container{
        padding-top:40px;
        text-align:center;
        width:1500px;
        height:3000px;
        margin:0 auto;
        }
    .musicnamea{
    white-space:nowrap; 
    overflow:hidden;   
    text-decoration:none;
    text-align:center;
    color:black;
    font-size:14px;
    display:inline-block;
    width:180px;
    margin-right:20px;
    margin-bottom:225px;
    
    }
    .musicnamea:hover{
        text-overflow:inherit;
        overflow:visible;
    }
    .musicnamea1{
    width:1200px;
    height:100px;
    color:#2d64e3;
    font-size:14px; 
    display:block;
    line-height:3.5px;
    }
    .musicdiv{
        width:600px;
        height:700px;
    }
    .div1{
        width:1500px;
        height:270px;
        position:relative;
        margin:0 auto;
        
    }
    .div2{ 
        width:1300px;
        height:2200px;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        margin:0 auto;

    }
    .div2img{
        margin-bottom:30px;
        width:200px;
        height:200px;
        background-size:100% 100%;
        float:right;

    }
    .div3{
        width:1300px;
        height:230px;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        position:absolute;
        top:212px;
        left:100px;
        
    }
/*    .musicnamep{
        width:10px;
        height:20px;
    }*/
</style>