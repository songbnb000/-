<template>
    <div>
        <div class="ceshidiv">
            <a href="javascript:;" class="yincang" id="ayincang">我的用户</a>
        </div>
    <div>
        <table>
            <tr>
                <td><input type="button" value="登录" @click="Show"></td>
            </tr>
        </table>
    </div>
    <div id="shade" class="c1 hide"></div>
    <div id="modal" class="c2 hide">
        <!--登录框样式-->
        <div class="login_container">
            <div class="login_containerdiv">
                <span class="login_containerdiv_p">账号密码登录</span>
            </div>
            <mt-field   label="用户名" :placeholder="unameplaceholder" v-model="uname">
            </mt-field>
            <mt-field label="密码" type="password" :placeholder="upwdplaceholder" v-model="upwd">
            </mt-field>
    <button class="button1" @click="login">登录</button>
    <input type="button" value="取消" @click="Hide" class="inputhide" >
   <!-- <div class="random">123</div>-->
</div>
    <!--<p>
    <input type="button" value="确定">
    <input type="button" value="取消" @click="Hide">
</p>-->
</div>
</div>
</template>
<style scoped>
        input{
            width:60px;
            height:50px;
        }
        .hide{
            display: none;
        }
        .c1{
            position: fixed;
            top:0;
            bottom: 0;
            left:0;
            right: 0;
            background: rgba(0,0,0,.5);
            z-index: 2;
        }
        .c2{
            background-color: white;
            position: fixed;
            width: 400px;
            height: 147px;
            top:50%;
            left: 50%;
            z-index: 3;
            margin-top: -150px;
            margin-left: -200px;
        }
		#modal p {
			margin-left:80px;
		}
        .login_container{
        padding-top:40px;
        background-color:#fff;
        text-align:center;
        width:400px;
        height:300px;
        }
    .random{
        width:100px;
        height:100px;
    }
    /*登录按钮样式*/
    .button1{
        width:60px;
        height:30px;
    }
    /*取消按钮样式*/
    .inputhide{
        width:60px;
        height:30px;
    }
    .ceshidiv{
        background-color:aqua;
        width:130px;
        height:34px;
        }
    .yincang{
        display:none
    }
    .login_container_field1{
        margin:0 auto;
    }
    .login_containerdiv{
        width:400px;
        height:50px;
        text-align:center;
        line-height:50px;
        color:red;
        font-size:17px;
    }
    .login_containerdiv_p{
        margin:0;
    }
</style>

<script>
export default {
    data(){
        return{
            unameandupwdplaceholder:"请输入账号密码",
            unameandupwd:"账号密码登录",
            unameplaceholder:"请输入用户名",
            upwdplaceholder:"请输入密码",
            uname:"tom",
            upwd:"123"
        }
    },
    methods:{
        Show(){
        document.getElementById('shade').classList.remove('hide');
        document.getElementById('modal').classList.remove('hide');
    },
     Hide(){
				 //点击的时候获得id为shade的元素，然后classList会返回类名，add是追加类名，也就是点击的时候在id为shade元素中追加class="hide"
				 //class="hide"为元素隐藏
        document.getElementById('shade').classList.add('hide');
        document.getElementById('modal').classList.add('hide');
    },
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
                //原来写的
                //this.$router.push("/Home1");
                //自己修改的
                //this.$messagebox
                alert("点击确定,1秒后自动跳转回首页")
                //这边需要使用箭头函数才可以拿到this原来的写法是
                //setTimeout(function(){this.$router.push("/index")},3000)，这边自己修改为箭头函数
                setTimeout(()=>{
                    //this.$router.push("/index");
                document.getElementById('ayincang').classList.remove('yincang')
                }
                
                ,1000)  
            }else{this.$messagebox("提示","用户名或密码错误")}
            });
        }
    }
}

</script>
