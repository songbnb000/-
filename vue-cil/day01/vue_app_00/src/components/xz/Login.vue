<template>
<div class="login_container">
    <mt-field   label="用户名"
    :placeholder="unameplaceholder" v-model="uname">
    </mt-field>
    <mt-field label="密码" type="password" :placeholder="upwdplaceholder" v-model="upwd">
    </mt-field>
    <button class="button1" @click="login">登录</button>
    <div class="random">123</div>
</div>

</template>
<script>
export default {
    data(){
        return{
            unameplaceholder:"请输入用户名",
            upwdplaceholder:"请输入密码",
            uname:"tom",
            upwd:"123"
        }
    },
    methods:{
        login(){
            //完成登录
            //1.获取用户名和密码
            var u=this.uname;
            var p=this.upwd;
            //创建一个正则表达式 字母数字下划线3-12
            var reg=/^[a-z0-9_]{3,12}$/i;
            //验证用户名
            if(!reg.test(u)){
                this.$toast("用户名格式不正确");
                return;}
            if(!reg.test(p)){
                this.$toast("密码格式不正确");
                return;
            }
            //5.发送axios请求
            //请求地址要跟服务器端接收的地址一样，服务器端app.js中的server.get
            var url="login";
            var obj={uname:u,upwd:p};
            this.axios.get(url,{params:obj}).then(result=>{console.log(result);
            //data是result中的一个数组，存在code
            //用户只要成功输出一次数据，code就会+1
            if(result.data.code>0){
                this.$router.push("/Home1");
            }else{this.$messagebox("提示","用户名或密码错误")}
            });


        }
    }
}
</script>
<style>
    .login_container{padding-top:40px;background-color:#ddd;text-align:center;}
    .random{
        width:100px;
        height:100px;
    }
</style>