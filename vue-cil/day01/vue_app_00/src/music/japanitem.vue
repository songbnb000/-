<template>
    <div class="singer">
        <musicsinger>
        </musicsinger>
        <div class="singerdiv">
            <div class="singerdiv1">
                <div class="singerdiv1div1">
                    <a href="http://127.0.0.1:8080/#/singer" class="singerdiv1diva">全部歌手</a>
                </div>
                <!--华语-->
                <div class="singerdiv1div2">
                    <ul>
                        <li>
                            <a href="javascript:;" class="singerdiv1div21a">华语</a>
                        </li>
                        <li>
                            <a href="http://127.0.0.1:8080/#/singerboy1" class="singerdiv1div2a">华语男歌手</a>
                        </li>
                        <li>
                            <a href="http://127.0.0.1:8080/#/singergril" class="singerdiv1div2a">华语女歌手</a>
                        </li>
                        <li>
                            <a href="http://127.0.0.1:8080/#/Chinaband" class="singerdiv1div2a">华语乐队组合</a>
                        </li>
                        <li>
                            <a href="http://127.0.0.1:8080/#/musicoriginal" class="singerdiv1div2a">原创音乐人</a>
                        </li>
                    </ul>
                </div>
                <!--欧美-->
                <div class="singerdiv1div3">
                    <ul>
                       <li>
                           <a href="javascript:;" class="singerdiv1div21a">欧美</a>
                        </li>
                        <li>
                            <a href="http://127.0.0.1:8080/#/oumeiboy" class="singerdiv1div2a">欧美男歌手</a>
                        </li>
                        <li>
                            <a href="http://127.0.0.1:8080/#/oumeigril" class="singerdiv1div2a">欧美女歌手</a>
                        </li>
                        <li>
                            <a href="http://127.0.0.1:8080/#/oumeiitem" class="singerdiv1div2a">欧美乐队组合</a>    
                        </li>
                    </ul>
                </div>
                <!--日韩-->
                <div class="singerdiv1div4">
                    <ul>
                        <li>
                            <a href="javascript:;" class="singerdiv1div21a">日韩</a>
                        </li>
                        <li>
                            <a href="http://127.0.0.1:8080/#/hanguoboy" class="singerdiv1div2a">韩国男歌手</a>
                        </li>
                        <li>
                            <a href="http://127.0.0.1:8080/#/hanguogril" class="singerdiv1div2a">韩国女歌手</a>
                        </li>
                        <li>
                            <a href="http://127.0.0.1:8080/#/hanguoitem" class="singerdiv1div2a">韩国乐队组合</a>
                        </li>
                        <li>
                            <a href="http://127.0.0.1:8080/#/japanboy" class="singerdiv1div2a">日本男歌手</a>
                        </li>
                        <li>
                            <a href="http://127.0.0.1:8080/#/japangril" class="singerdiv1div2a">日本女歌手</a>
                        </li>
                        <li>
                            <a href="http://127.0.0.1:8080/#/japanitem" class="singerdiv1div2a">日本乐队组合</a>
                        </li>
                    </ul>
                </div>
                <!--其它歌手-->
                <div class="singerdiv1div5">
                    <a href="http://127.0.0.1:8080/#/other" class="singerdiv1div5a">其它歌手</a>
                </div>
            </div>
            <!--z主体内容-->
            <div class="singerdiv2">
                <div class="singerdiv2div1">
                    <h2 class="singerdiv2div1h2"><a href="http://127.0.0.1:8080/#/oumeiboy">欧美男歌手</a></h2>
                    <div class="singerdiv2div1div">
                        <h3>索引:</h3>
                        <a href="">热门</a>
                        <a href="#A">A</a>
                        <a href="#B">B</a>
                        <a href="#C">C</a>
                        <a href="#D">D</a>
                        <a href="#E">E</a>
                        <a href="#F">F</a>
                        <a href="#G">G</a>
                        <a href="">H</a>
                        <a href="">I</a>
                        <a href="">Z</a>
                        <a href="">K</a>
                        <a href="">L</a>
                        <a href="">M</a>
                        <a href="">N</a>
                        <a href="">O</a>
                        <a href="">P</a>
                        <a href="">Q</a>
                        <a href="">R</a>
                        <a href="">S</a>
                        <a href="">T</a>
                        <a href="">U</a>
                        <a href="">V</a>
                        <a href="">W</a>
                        <a href="">X</a>
                        <a href="">Y</a>
                        <a href="">Z</a>
                        <a href="">其他</a>
                    </div>
                </div>
            <!--热门-->
                <div class="singerdiv2div2">
                    <h3 class="singerdiv2div2h3">
                        热门
                    </h3>
                    <img v-for="(item,i) in Chinaboy12" :key="i" :src="item.picUrl" class="Chinaboyimg">
                </div>
                <div class="singerdiv2div3">
                    <a :href="'https://music.163.com/artist?id='+items.id" v-for="(items,index) in Chinaboy12" :key="index" class="Chinaboya">{{items.name}}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import musicsinger from "./musicsinger.vue"
export default {
    data(){
        return{
            Chinaboy12:{}
        }
    },
    methods:{
       gqxc12(){this.axios.get("/artist/list?cat=6003").then(res=>{
                var Chinaboy=res.data.artists
                this.Chinaboy12=Chinaboy
                console.log(this.Chinaboy12)
                return this.Chinaboy12
       })
    }
    },
    mounted(){
        this.gqxc12()
    },
    components:{
    "musicsinger":musicsinger
    }
}
</script>
<style scoped>
*{
    margin:0;
    padding:0;
}
/*去除li标签的小点*/
li{
    list-style:none;
}
/*每个li标签的上左外边距*/
li{
    margin-top:17px;
    margin-left:10px;
}
/*取消a标签下划线*/
a{
    text-decoration:none;
}
.singer{
    margin:0 auto;
}
    .singerdiv{
        margin:0 auto;
        width:1200px;
        height:13000px;
        flex-direction:row;
	    display:flex;
	    /*justify-content:space-between;*/
	    flex-wrap:wrap;
    }
    .singerdiv1{
        width:208px;
        height:13000px;
    }
    .singerdiv2{
        width:992px;
        height:13000px;
    }
    /*全部歌手*/
    .singerdiv1div1{
        width:208px;
        height:37px;
        line-height:37px;
        margin-left:7px;
    }
    .singerdiv1diva{
        text-decoration:none;
    }
    /*华语文字样式*/
    .singerdiv1div21a{
        color:#333;
        font-size:16px;

    }
    /*华语原创音乐人div*/
    .singerdiv1div2{
        width:208px;
        height:183px;
    }
    /*欧美*/
    .singerdiv1div3{
        width:208px;
        height:183px;
    }
    /*日韩*/
    .singerdiv1div4{
        width:208px;
        height:257px;
    }
    /*其它歌手*/
    .singerdiv1div5{
        width:208px;
        height:37px;
        line-height:37px;
    }
    /*其它歌手文字样式*/
    .singerdiv1div5a{
        margin:10px;
    }
    /*主体部分*/
    .singerdiv2div1{
        width:992px;
        height:103px;
    }
    .singerdiv2div1h2{
        width:992px;
        height:30px;
    }
    .singerdiv2div1div{
        width:992px;
        height:73px;
        display:flex;
        flex-direction:row;
	    justify-content:space-between;
	    flex-wrap:wrap;
        line-height:73px;
        border-bottom:1px solid dimgrey;
    }
    /*热门文字样式*/
    .singerdiv2div2h3{
        width:992px;
        height:91.5px;
        line-height:91.5px;
        font-size:20px;
    }
    .singerdiv2div2div{
        width:992px;
        height:500px;
        display:flex;
        flex-direction:row;
	    justify-content:space-between;
	    flex-wrap:wrap;

    }
    /*热门下面的图片div*/
   .singerdiv2div2a{
    color:#2d64e3;
    }
    /*a索引*/
    .singerdiv2div7h3{
        width:998px;
        height:10px;
    }
    /*热门*/
    .singerdiv2div2{
        width:992px;
        height:257px;
        display:flex;
       /* justify-content:space-between;*/
        flex-wrap:wrap;  
    }
    .Chinaboyimg{
        background-size:100% 100%;
        width:220px;
        height:220px;
        margin:0 25px 30px 0;
        
    }
    .singerdiv2div3{
        width:992px;
        height:257px;
        display:flex;
       /* justify-content:space-between;*/
        flex-wrap:wrap;  
        margin:62px 0 0 0px;
    }
    .Chinaboya{
        width:200px;
        height:220px;
        margin:0 45px 30px 0;
        display:block;
        text-align:center;
    }
</style>
