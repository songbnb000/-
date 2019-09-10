<template>
<div class="login_container">
   <!-- <mt-field   label="用户名"
    :placeholder="unameplaceholder" v-model="uname">
    </mt-field>
    <mt-field label="密码" type="password" :placeholder="upwdplaceholder" v-model="upwd">
    </mt-field>-->
    <a class="button1" @click="mvone" id="bf">登陆</a>
   <!-- <div class="random">123</div>-->
   
</div>

</template>
<script>
export default {
    data(){
        return{
           // unameplaceholder:"请输入用户名",
            //upwdplaceholder:"请输入密码",
            //uname:"tom",
            //upwd:"123"
        }
    },
    methods:{
        tosong(i){
            var id=this.recs[i].id;
            console.log(recs)
            //转换路径，添加路由
            this.$router.push({
                path:'/song',
                query:{
                    id
                }
            })
        },
        bofang(){
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
        },
        created(){
            this.bofanger()
            this.bofang()
            this.songurl()
        },
        mounted(){
            var x=document.getElementById("bf")    
            console.log(x)
        }
    }
}
</script>
<style>
    .login_container{
        padding-top:40px;
        background-color:#ddd;
        text-align:center;
        width:1200px;
        height:147px;
        }
    .random{
        width:100px;
        height:100px;
    }
    .button1{
        width:1200px;
        height:50px;
    }
</style>