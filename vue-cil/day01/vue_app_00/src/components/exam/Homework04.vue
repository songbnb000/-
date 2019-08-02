<template>
<div>
    <h3>用户登录作业</h3>
    <div>
        <!--label等于span-->
        <mt-field label="用户名" placeholder="请输入用户名" v-model="uname"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    </div>
    <div>
        <button @click="btnLogin">登录</button>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {
            uname:"",
            password:""
        }
    },
    methods:{
        btnLogin(){
            console.log(this);
            var u=this.uname
            var upwd=this.password
            if(u==""){
                this.$toast({message:"用户名不能为空"});
                return //如果为空不执行下一步
            }else if(upwd==""){this.$toast({message:"小老弟，密码不能不填"});
            return
            }
            
        }

    }
}
</script>