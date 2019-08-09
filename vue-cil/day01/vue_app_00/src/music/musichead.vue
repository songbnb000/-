<template>
    <div class="headdiv">
        <div class="headdiv1">
            <h1>
                <a href="javascript:;">
                    <img src="./headimg/1.png" alt="千千音乐" class="headdivimg">
                </a>
            </h1>
            <nav class="headnav">
                <a href="javascript:;" class="headnav-a">发现音乐</a>
                <a href="javascript:;" class="headnav-a">随心听</a>
                <a href="javascript:;" class="headnav-a">客户端</a>
                <a href="javascript:;" class="headnav-a">VIP</a>
                <a href="javascript:;" class="headnav-a">音乐人</a>
                <a href="javascript:;" class="headnav-a">演出</a>
            </nav>
            <div class="headdiv1-2">
                <input type="text" class="headinput" placeholder="请输入歌名、歌词、歌手或专辑">
                <div class="headdiv2i">
                <i class="el-icon-search"></i>
                </div>
            </div>
            <div class="loginblock" id="loginxianshi">
                <a href="javascript:;" class="loginblocka">欢迎回来{{uname}}</a>
                <a href="javascript:;">,</a>
                <button class="loginblockspan" @click.prevent="Tuichu">退出登录</button>
            </div>
            <div class="headdiv1-3" id="yincang">
            <div>
            <div>
            </div>
            <div id="shade" class="c1 hide"></div>
            <div id="modal" class="c2 hide">
            <div class="login_container">
            <div class="login_container_div">
                账号密码登录
            </div>
            <mt-field   label="用户名"
            :placeholder="unameplaceholder" v-model="uname">
            </mt-field>
            <mt-field label="密码" type="password" :placeholder="upwdplaceholder" v-model="upwd">
            </mt-field>
            <button class="button1" @click="login">登录</button>
            <button class="button1" @click="Hide">取消</button>
            <!--<input type="button" value="取消" @click="Hide">-->
            <!-- <div class="random">123</div>-->
            </div>
            <!--<p>
            <input type="button" value="确定">
            <input type="button" value="取消" @click="Hide">
            </p>-->
            </div>
            </div>
            <p href="javascript:;" class="headdiv3-a" @click="Show">登录</p>
                |
                <a href="javascript:;" class="headdiv3-a">注册</a>
            </div>           
        </div>
        <div class="headdiv2">
            <nav class="headnav2">
                <a href="javascript:;" class="headnav2-a">推荐</a>
                <a href="http://127.0.0.1:8080/#/songlist" class="headnav2-a1">歌单</a>
                <a href="http://127.0.0.1:8080/#/singer" class="headnav2-a1">歌手</a>
                <a href="http://127.0.0.1:8080/#/musictop" class="headnav2-a1">榜单</a>
                <a href="http://127.0.0.1:8080/#/musicsort" class="headnav2-a1">分类</a>
                <a href="http://127.0.0.1:8080/#/musicmv" class="headnav2-a1">MV</a>
                <a href="http://127.0.0.1:8080/#/musicredrank" class="headnav2-a1">U榜</a>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            unameplaceholder:"请输入用户名",
            upwdplaceholder:"请输入密码",
            uname:"",
            upwd:"",
            //想要一开始填好账号密码，就使用下面的uname和upwd
            //uname:"tom",
            //upwd:"123"
        }
    },
    methods:{
   Tuichu(){
       //触发这个事件的时候，登录注册模块显示，欢迎回来模块隐藏
        document.getElementById('loginxianshi').classList.add('loginblock');
        document.getElementById('yincang').classList.remove('divyincang');   
        document.getElementById('shade').classList.add('hide');
        document.getElementById('modal').classList.add('hide'); 
    },
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
                alert("恭喜您登录成功,点击确定,1秒后自动跳转回首页")
                //这边需要使用箭头函数才可以拿到this原来的写法是
                //setTimeout(function(){this.$router.push("/index")},3000)，这边自己修改为箭头函数
                setTimeout(()=>{this.$router.push("/index");
                document.getElementById('yincang').classList.add('divyincang');
                document.getElementById('loginxianshi').classList.remove('loginblock');

                },1000)  
                
            }else{this.$messagebox("提示","用户名或密码错误")}
            });
        }
    }
}
</script>
<style scoped>
*{margin:0;padding:0}
    .headdiv{
        width:1200px;
        height:133px;
        margin:0 auto;
    }
    /*千千音乐图片*/
    .headdivimg{
        width:123px;
        margin-right:90px;
        margin-bottom:-10px;
        
    }
    .headdiv1{
        width:1200px;
        height:95px;
        line-height:95px;
        display:flex;
        display:-webkit-flex;
        flex-wrap:wrap;
    }
    .headnav{
        width:452px;
        height:31px;
        display:flex;
        display:-webkit-flex;
        flex-wrap:wrap;
        justify-content:space-between;
    }
    .headnav-a{
        text-decoration:none;
        color:#333333;
        font-size:16px;
        text-decoration:none;

    }
    .headinput{
        width:300px;
        height:30px;
        margin:0 0 0 0;
        margin-bottom:1px;
        border:1px solid gainsboro;
        border-radius:5px;
    }
    .headdiv1-2{
        width:330px;
        height:30px;
        line-height:30px;
        margin:35px 0 0 30px;
        display:flex;
        display:-webkit-flex;
        flex-wrap:wrap;

    }
    .el-icon-search{
        font-size:150%;
        margin:0 0 0 0;
        color:orangered;
    }
    .headdiv1-3{
        width:130px;
        height:34px;
        line-height:34px;
        margin:32px 0 0 5px;


    }
    .headdiv3-a{
        text-decoration:none;
        color:#333333;
        padding:0 13px 0 13px;
        display:inline;
        cursor:pointer;
    }
    .headdiv2i{
        width:34px;
        height:30px;
        margin-top:4px;
        margin-left:-30px;
    }
    .headdiv2{
        width:1200px;
        height:40px;
        background-color:snow;
        line-height:40px;
    }
    .headnav2{
        width:800px;
        height:40px;
        margin:0 auto;
        display:flex;
        display:-webkit-flex;
        flex-wrap:wrap;
        justify-content:space-between;
    }
    .headnav2-a{
        text-decoration:none;
        font-size:16px;
        font-family:PingFangSC-Regular,poppin,Tahoma,Arial,sans-serif;
        color:orangered;
        letter-spacing:1px;
    }
    .headnav2-a1{
        text-decoration:none;
        font-size:16px;
        font-family:PingFangSC-Regular,poppin,Tahoma,Arial,sans-serif;
        color:#333;
        letter-spacing:1px;
    }
    input{
            width:60px;
            height:50px;
        }
        .hide{
            display:none;
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
        background-color:#ddd;
        text-align:center;
        width:400px;
        height:147px;
        }
    .random{
        width:100px;
        height:100px;
    }
    .button1{
        width:60px;
        height:50px;
    }
    /*登录完成添加这个模块*/
    .divyincang{
        display:none;
    }
    .loginblock{
        width:130px;
        height:34px;
        display:none;
    }
    .loginblocka{
        width:130px;
        height:10px;
        
    }
    /*整个登录框*/
    .login_container{
        width:400px;
        height:220px;
        padding-top:0px;
        
    }
    /*用户账号密码登录*/
    .login_container_div{
        width:400px;
        height:46px;
        line-height:46px;
        color:crimson;
    }
    /*登录,取消按钮*/
    .button1{
        width:60px;
        height:30px;
        margin-top:20px;
    }
</style>