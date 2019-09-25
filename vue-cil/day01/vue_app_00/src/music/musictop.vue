<template>
    <div>
        <musicsinger>
        </musicsinger>
        <div class="musictop">
            <!--全部榜单 208-->
            <div class="musictopdiv1">
                <div class="musictopdiv1div1">
                    <h3><a href="http://127.0.0.1:8080/#/musictop" class="musictopdiv1div1a">全部榜单</a></h3>
                </div>
                <div class="musictopdiv1div2">
                    <h3>主打榜单</h3>
                    <a href="http://127.0.0.1:8080/#/home2" class="musictopdiv1div2a">热歌榜</a>
                    <a href="http://127.0.0.1:8080/#/home1" class="musictopdiv1div2a">新歌榜</a>
                    <a href="http://127.0.0.1:8080/#/ychome3" class="musictopdiv1div2a">网络歌曲榜</a>
                    <a href="http://127.0.0.1:8080/#/lghome4" class="musictopdiv1div2a">经典老歌榜</a>
                </div>
                <div class="musictopdiv1div3">
                    <h3>其他榜单</h3>
                    <a href="http://127.0.0.1:8080/#/djyyhome5" class="musictopdiv1div3a">中国说唱榜</a>
                    <a href="http://127.0.0.1:8080/#/ituneshome6" class="musictopdiv1div3a">iTunes音乐榜</a>
                    <a href="http://127.0.0.1:8080/#/ukhome7" class="musictopdiv1div3a">UK排行榜周榜</a>
                    <a href="http://127.0.0.1:8080/#/sshome8" class="musictopdiv1div3a">音乐上升榜</a>
                    <a href="http://127.0.0.1:8080/#/musicredrank" class="musictopdiv1div3a">U榜</a>
                </div>
            </div>
            <!--包含热歌榜这些榜单-->
            <div class="musictopdiv2">
               <div class="musictopdiv2div">
                    <div class="musictopdiv2divdiv1">
                        <h2>热歌榜</h2>
                        <a href="http://127.0.0.1:8080/#/home2" class="musictopdiv2divdiv1a">更多</a>
                    </div>
                    <div class="musictopdiv2divdiv2">
                            <span class="musictopdiv2divdiv2span">
                                <a href="javascript:;" class="musictopdiv2divdiv2spana" v-for="(item1,index1) in 10" :key="index1">
                                    {{item1}}</a>
                            </span>
                        <div class="xgbdiv1">
                            <a :href="'https://music.163.com/song?id='+item.id" v-for="(item,index) in toplistsong2"  :key="index"  class="namea">
                                <a :href="'https://music.163.com/song?id='+item.id" v-if="index<10" class="namea2">
                                     <i class="el-icon-minus"></i>
                            {{item.name}}
                                </a>
                            </a>
                        </div>
                        <div class="xgbdiv2">
                            <a :href="'https://music.163.com/song?id='+item3.id" v-for="(item3,index3) in toplistsong2" :key="index3" class="arname1">
                                <a :href="'https://music.163.com/song?id='+item3.id" v-if="index3<10">
                                {{item3.ar[0].name}}
                                </a>
                            </a>
                         </div>   
                         <div class="xgbdiv3">
                             <a id="aid" v-for="(item4,index4) in toplistsong2" :key="index4"  :href="'https://music.163.com/song?id='+item4.id" class="xgbdiv3a" title="点击播放">
                                <a :href="'https://music.163.com/song?id='+item4.id" v-if="index4<10">
                                    <i class="el-icon-caret-left"></i>
                                </a>
                             </a>
                         </div>
                        <div class="divmusictop">
                                <a href="http://127.0.0.1:8080/#/home2" class="divmusictopa">
                                <div class="divmusictopdiv">
                                    <i class="el-icon-caret-right"></i>
                                    播放榜单
                                </div>
                                </a>
                            </div>
                    </div>
                </div>
                <div class="musictopdiv2div">
                    <div class="musictopdiv2divdiv1">
                        <h2>新歌榜</h2>
                        <a href="http://127.0.0.1:8080/#/home1" class="musictopdiv2divdiv1a">更多</a>
                    </div>
                    <div class="musictopdiv2divdiv2">
                            <span class="musictopdiv2divdiv2span">
                                <a href="javascript:;" class="musictopdiv2divdiv2spana" v-for="(item1,index1) in 10" :key="index1">
                                    {{item1}}</a>
                            </span>
                        <div class="xgbdiv1">
                            <a :href="'https://music.163.com/song?id='+item.id" v-for="(item,index) in toplistsong1"  :key="index"  class="namea">
                                <a :href="'https://music.163.com/song?id='+item.id" v-if="index<10" class="namea2">
                                     <i class="el-icon-minus"></i>
                            {{item.name}}
                                </a>
                            </a>
                        </div>
                        <div class="xgbdiv2">
                            <a :href="'https://music.163.com/song?id='+item3.id" v-for="(item3,index3) in toplistsong1" :key="index3" class="arname1">
                                <a :href="'https://music.163.com/song?id='+item3.id" v-if="index3<10">
                                {{item3.ar[0].name}}
                                </a>
                            </a>
                         </div>   
                         <div class="xgbdiv3">
                             <a id="aid" v-for="(item4,index4) in toplistsong1" :key="index4"  :href="'https://music.163.com/song?id='+item4.id" class="xgbdiv3a" title="点击播放">
                                <a :href="'https://music.163.com/song?id='+item4.id" v-if="index4<10">
                                    <i class="el-icon-caret-left"></i>
                                </a>
                             </a>
                         </div>
                        <div class="divmusictop">
                                <a href="http://127.0.0.1:8080/#/home1" class="divmusictopa">
                                <div class="divmusictopdiv">
                                    <i class="el-icon-caret-right"></i>
                                    播放榜单
                                </div>
                                </a>
                        </div>
                    </div>
                </div>
                <div class="musictopdiv2div">
                    <div class="musictopdiv2divdiv1">
                        <h2>网络歌曲榜</h2>
                        <a href="http://127.0.0.1:8080/#/ychome3" class="musictopdiv2divdiv1a">更多</a>
                    </div>
                    <div class="musictopdiv2divdiv2">
                            <span class="musictopdiv2divdiv2span">
                                <a href="javascript:;" class="musictopdiv2divdiv2spana" v-for="(item1,index1) in 10" :key="index1">
                                    {{item1}}</a>
                            </span>
                        <div class="xgbdiv1">
                            <a :href="'https://music.163.com/song?id='+item.id" v-for="(item,index) in toplistsong3"  :key="index"  class="namea">
                                <a :href="'https://music.163.com/song?id='+item.id" v-if="index<10" class="namea2">
                                     <i class="el-icon-minus"></i>
                            {{item.name}}
                                </a>
                            </a>
                        </div>
                        <div class="xgbdiv2">
                            <a :href="'https://music.163.com/song?id='+item3.id" v-for="(item3,index3) in toplistsong3" :key="index3" class="arname1">
                                <a :href="'https://music.163.com/song?id='+item3.id" v-if="index3<10">
                                {{item3.ar[0].name}}
                                </a>
                            </a>
                         </div>   
                         <div class="xgbdiv3">
                             <a id="aid" v-for="(item4,index4) in toplistsong3" :key="index4"  :href="'https://music.163.com/song?id='+item4.id" class="xgbdiv3a" title="点击播放">
                                <a :href="'https://music.163.com/song?id='+item4.id" v-if="index4<10">
                                    <i class="el-icon-service"></i>
                                </a>
                             </a>
                         </div>
                        <div class="divmusictop">
                                <a href="http://127.0.0.1:8080/#/ychome3" class="divmusictopa">
                                <div class="divmusictopdiv">
                                    <i class="el-icon-caret-right"></i>
                                    播放榜单
                                </div>
                                </a>
                        </div>
                    </div>
                </div>
                <div class="musictopdiv2div">
                    <div class="musictopdiv2divdiv1">
                        <h2>经典老歌榜</h2>
                        <a href="http://127.0.0.1:8080/#/lghome4" class="musictopdiv2divdiv1a">更多</a>
                    </div>
                    <div class="musictopdiv2divdiv2">
                            <span class="musictopdiv2divdiv2span">
                                <a href="javascript:;" class="musictopdiv2divdiv2spana" v-for="(item1,index1) in 10" :key="index1">
                                    {{item1}}</a>
                            </span>
                        <div class="xgbdiv1">
                            <a :href="'https://music.163.com/song?id='+item.id" v-for="(item,index) in toplistsong4"  :key="index"  class="namea">
                                <a :href="'https://music.163.com/song?id='+item.id" v-if="index<10" class="namea2">
                                     <i class="el-icon-minus"></i>
                            {{item.name}}
                                </a>
                            </a>
                        </div>
                        <div class="xgbdiv2">
                            <a :href="'https://music.163.com/song?id='+item3.id" v-for="(item3,index3) in toplistsong4" :key="index3" class="arname1">
                                <a :href="'https://music.163.com/song?id='+item3.id" v-if="index3<10">
                                {{item3.ar[0].name}}
                                </a>
                            </a>
                         </div>   
                         <div class="xgbdiv3">
                             <a id="aid" v-for="(item4,index4) in toplistsong4" :key="index4"  :href="'https://music.163.com/song?id='+item4.id" class="xgbdiv3a" title="点击播放">
                                <a :href="'https://music.163.com/song?id='+item4.id" v-if="index4<10">
                                    <i class="el-icon-service"></i>
                                </a>
                             </a>
                         </div>
                        <div class="divmusictop">
                                <a href="http://127.0.0.1:8080/#/lghome4" class="divmusictopa">
                                <div class="divmusictopdiv">
                                    <i class="el-icon-caret-right"></i>
                                    播放榜单
                                </div>
                                </a>
                        </div>
                    </div>
                </div>
                <div class="musictopdiv2div">
                    <div class="musictopdiv2divdiv1">
                        <h2>中国说唱榜</h2>
                        <a href="http://127.0.0.1:8080/#/djyyhome5" class="musictopdiv2divdiv1a">更多</a>
                    </div>
                    <div class="musictopdiv2divdiv2">
                            <span class="musictopdiv2divdiv2span">
                                <a href="javascript:;" class="musictopdiv2divdiv2spana" v-for="(item1,index1) in 10" :key="index1">
                                    {{item1}}</a>
                            </span>
                        <div class="xgbdiv1">
                            <a :href="'https://music.163.com/song?id='+item.id" v-for="(item,index) in toplistsong5"  :key="index"  class="namea">
                                <a :href="'https://music.163.com/song?id='+item.id" v-if="index<10" class="namea2">
                                     <i class="el-icon-minus"></i>
                            {{item.name}}
                                </a>
                            </a>
                        </div>
                        <div class="xgbdiv2">
                            <a :href="'https://music.163.com/song?id='+item3.id" v-for="(item3,index3) in toplistsong5" :key="index3" class="arname1">
                                <a :href="'https://music.163.com/song?id='+item3.id" v-if="index3<10">
                                {{item3.ar[0].name}}
                                </a>
                            </a>
                         </div>   
                         <div class="xgbdiv3">
                             <a id="aid" v-for="(item4,index4) in toplistsong5" :key="index4"  :href="'https://music.163.com/song?id='+item4.id" class="xgbdiv3a" title="点击播放">
                                <a :href="'https://music.163.com/song?id='+item4.id" v-if="index4<10">
                                    <i class="el-icon-service"></i>
                                </a>
                             </a>
                         </div>
                        <div class="divmusictop">
                                <a href="http://127.0.0.1:8080/#/djyyhome5" class="divmusictopa">
                                <div class="divmusictopdiv">
                                    <i class="el-icon-caret-right"></i>
                                    播放榜单
                                </div>
                                </a>
                        </div>
                    </div>
                </div>
                <div class="musictopdiv2div">
                    <div class="musictopdiv2divdiv1">
                        <!--获取数据方法有所不同-->
                        <h2>iTunes音乐榜</h2>
                        <a href="http://127.0.0.1:8080/#/ituneshome6" class="musictopdiv2divdiv1a">更多</a>
                    </div>
                    <div class="musictopdiv2divdiv2">
                            <span class="musictopdiv2divdiv2span">
                                <a href="javascript:;" class="musictopdiv2divdiv2spana" v-for="(item1,index1) in 10" :key="index1">
                                    {{item1}}</a>
                            </span>
                        <div class="xgbdiv1">
                            <a :href="'https://music.163.com/song?id='+item.id" v-for="(item,index) in toplistsong6"  :key="index"  class="namea">
                                <a :href="'https://music.163.com/song?id='+item.id" v-if="index<10" class="namea2">
                                     <i class="el-icon-minus"></i>
                            {{item.name}}
                                </a>
                            </a>
                        </div>
                        <div class="xgbdiv2">
                            <a :href="'https://music.163.com/song?id='+item3.id" v-for="(item3,index3) in toplistsong6" :key="index3" class="arname1">
                                <a :href="'https://music.163.com/song?id='+item3.id" v-if="index3<10">
                                {{item3.ar[0].name}}
                                </a>
                            </a>
                         </div>   
                         <div class="xgbdiv3">
                             <a id="aid" v-for="(item4,index4) in toplistsong6" :key="index4"  :href="'https://music.163.com/song?id='+item4.id" class="xgbdiv3a" title="点击播放">
                                <a :href="'https://music.163.com/song?id='+item4.id" v-if="index4<10">
                                    <i class="el-icon-service"></i>
                                </a>
                             </a>
                         </div>
                        <div class="divmusictop">
                                <a href="http://127.0.0.1:8080/#/ituneshome6" class="divmusictopa">
                                <div class="divmusictopdiv">
                                    <i class="el-icon-caret-right"></i>
                                    播放榜单
                                </div>
                                </a>
                        </div>
                    </div>
                </div>
                <div class="musictopdiv2div">
                    <div class="musictopdiv2divdiv1">
                        <!--获取数据方法有所不同-->
                        <h2>UK排行榜周榜</h2>
                        <a href="http://127.0.0.1:8080/#/ukhome7" class="musictopdiv2divdiv1a">更多</a>
                    </div>
                    <div class="musictopdiv2divdiv2">
                            <span class="musictopdiv2divdiv2span">
                                <a href="javascript:;" class="musictopdiv2divdiv2spana" v-for="(item1,index1) in 10" :key="index1">
                                    {{item1}}</a>
                            </span>
                        <div class="xgbdiv1">
                            <a :href="'https://music.163.com/song?id='+item.id" v-for="(item,index) in toplistsong7"  :key="index"  class="namea">
                                <a :href="'https://music.163.com/song?id='+item.id" v-if="index<10" class="namea2">
                                     <i class="el-icon-minus"></i>
                            {{item.name}}
                                </a>
                            </a>
                        </div>
                        <div class="xgbdiv2">
                            <a :href="'https://music.163.com/song?id='+item3.id" v-for="(item3,index3) in toplistsong7" :key="index3" class="arname1">
                                <a :href="'https://music.163.com/song?id='+item3.id" v-if="index3<10">
                                {{item3.ar[0].name}}
                                </a>
                            </a>
                         </div>   
                         <div class="xgbdiv3">
                             <a id="aid" v-for="(item4,index4) in toplistsong7" :key="index4"  :href="'https://music.163.com/song?id='+item4.id" class="xgbdiv3a" title="点击播放">
                                <a :href="'https://music.163.com/song?id='+item4.id" v-if="index4<10">
                                    <i class="el-icon-service"></i>
                                </a>
                             </a>
                         </div>
                        <div class="divmusictop">
                                <a href="http://127.0.0.1:8080/#/ukhome7" class="divmusictopa">
                                <div class="divmusictopdiv">
                                    <i class="el-icon-caret-right"></i>
                                    播放榜单
                                </div>
                                </a>
                        </div>
                    </div>
                </div>
                <div class="musictopdiv2div">
                    <div class="musictopdiv2divdiv1">
                        <!--获取数据方法有所不同-->
                        <h2>音乐上升榜</h2>
                        <a href="http://127.0.0.1:8080/#/sshome8" class="musictopdiv2divdiv1a">更多</a>
                    </div>
                    <div class="musictopdiv2divdiv2">
                            <span class="musictopdiv2divdiv2span">
                                <a href="javascript:;" class="musictopdiv2divdiv2spana" v-for="(item1,index1) in 10" :key="index1">
                                    {{item1}}</a>
                            </span>
                        <div class="xgbdiv1">
                            <a :href="'https://music.163.com/song?id='+item.id" v-for="(item,index) in toplistsong8"  :key="index"  class="namea">
                                <a :href="'https://music.163.com/song?id='+item.id" v-if="index<10" class="namea2">
                                     <i class="el-icon-minus"></i>
                            {{item.name}}
                                </a>
                            </a>
                        </div>
                        <div class="xgbdiv2">
                            <a :href="'https://music.163.com/song?id='+item3.id" v-for="(item3,index3) in toplistsong8" :key="index3" class="arname1">
                                <a :href="'https://music.163.com/song?id='+item3.id" v-if="index3<10">
                                {{item3.ar[0].name}}
                                </a>
                            </a>
                         </div>   
                         <div class="xgbdiv3">
                             <a id="aid" v-for="(item4,index4) in toplistsong8" :key="index4"  :href="'https://music.163.com/song?id='+item4.id" class="xgbdiv3a" title="点击播放">
                                <a :href="'https://music.163.com/song?id='+item4.id" v-if="index4<10">
                                    <i class="el-icon-service"></i>
                                </a>
                             </a>
                         </div>
                        <div class="divmusictop">
                                <a href="http://127.0.0.1:8080/#/sshome8" class="divmusictopa">
                                <div class="divmusictopdiv">
                                    <i class="el-icon-caret-right"></i>
                                    播放榜单
                                </div>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import musicsinger from "./musicsinger.vue"
import iconfont from "./bficon/iconfont.css"
export default {
    data(){
        return{
           toplistsong1:{},
           toplistsong2:{},
           toplistsong3:{},
           toplistsong4:{},
           toplistsong5:{},
           toplistsong6:{},
           toplistsong7:{},
           toplistsong8:{}
        }
    },
    components:{
    "musicsinger":musicsinger
    },
    methods:{
        artists1(){this.axios.get("/top/list?idx=0").then(res=>{
            var toplist=res.data.playlist.tracks
           /* for(var i=0;toplist.length<=10;i++){
                    this.toplistsong=toplist
                   
            }*/
            this.toplistsong1=toplist
           console.log(this.toplistsong1)
            return this.toplistsong1
        })
        },
        artists2(){this.axios.get("/top/list?idx=1").then(res=>{
            var toplist=res.data.playlist.tracks
            this.toplistsong2=toplist
            return this.toplistsong2
        })
        },
        artists3(){this.axios.get("/top/list?idx=2").then(res=>{
            var toplist=res.data.playlist.tracks
            this.toplistsong3=toplist
            return this.toplistsong3
        })
        },
        artists4(){this.axios.get("/top/list?idx=17").then(res=>{
            var toplist=res.data.playlist.tracks
            this.toplistsong4=toplist
            return this.toplistsong4
        })
        },
        artists5(){this.axios.get("/top/list?idx=23").then(res=>{
            var toplist=res.data.playlist.tracks
            this.toplistsong5=toplist
            return this.toplistsong5
        })
        },
        artists6(){this.axios.get("/top/list?idx=8").then(res=>{
            var toplist=res.data.playlist
            this.toplistsong6=toplist.tracks
            return this.toplistsong6

        })
        },
        artists7(){this.axios.get("/top/list?idx=5").then(res=>{
            var toplist=res.data.playlist
            this.toplistsong7=toplist.tracks
            return this.toplistsong7

        })
        },
        artists8(){this.axios.get("/top/list?idx=3").then(res=>{
            var toplist=res.data.playlist
            this.toplistsong8=toplist.tracks
            return this.toplistsong8

        })
        }
    },
    mounted(){
            this.artists1()
            this.artists2()
            this.artists3()
            this.artists4()
            this.artists5()
            this.artists6()
            this.artists7()
            this.artists8()
        },
}
</script>
<style scoped>
*{
    margin:0;
    padding:0;
}
a{text-decoration:none}
li{list-style:none}
.musictop{
    width:1200px;
    height:2200px;
    margin:0 auto;
    display:flex;
}
.musictopdiv1{
    width:208px;
    height:454px;
    border-right:1px dashed gainsboro;

}
.musictopdiv1div1{
    width:208px;
    height:36px;
    line-height:36px;
    background-color:#299de7;
}
.musictopdiv1div1a{
    color:#fff;
    font-size:17px;
    text-decoration:none;
    margin-left:15px;
}
.musictopdiv1div2a{
    color:deepskyblue;
    font-size:16px;
    text-decoration:none; 
    margin-top:15px;
    display:block;
}
.musictopdiv1div3a{
    color:deepskyblue;
    font-size:14px;
    text-decoration:none; 
    margin-top:15px;
    display:block;
}
.musictopdiv1div2{
    width:208px;
    height:183px;
}
.musictopdiv1div3{
    width:208px;
    height:183px;
}
.musictopdiv2{
    width:990px;
    height:100%;
    display:flex;
    flex-direction:row;
	flex-wrap:wrap;
    justify-content:space-between;

}
.musictopdiv2div{
    width:445px;
    height:494px;
    margin-left:20px;
    border-bottom:1px dashed gray;
    
}
.musictopdiv2divdiv1{
    width:445px;
    height:30px;
    line-height:30px;
}
.musictopdiv2divdiv2{
    width:445px;
    height:464px;
    display:flex;
    flex-wrap:nowrap;
    justify-content:space-between;
}
.musictopdiv2divdiv1a{
    text-decoration:none;
    float:right;
    margin-top:-30px;
}
/*调整歌曲前面数字的样式*/
.musictopdiv2divdiv2spana{
    margin-top:15.5px;
    font-size:20px;
    color:lightsalmon;
    float:left;
    display:block;
}
.musictopdiv2divdiv2span{
    width:21px;
    display:block;
}
.el-icon-caret-left{
    margin-left:25px;
    /*margin-right:25px;*/
}
/*3-7文字样式*/
.musictopdiv2divdiv2spana1{
    font-size:17px;
    color:gray
}
.divmusictop{
    width:105px;
    height:32px;
    background-color:deepskyblue;
    margin:425px 0 0 5px;
    line-height:32px;
    text-align:center;
    border-radius:5px;
}
.divmusictopdiv{
    color:#fff;
}
.namea{
    width:150px;
    margin-top:20px;
    display:block;
}
.arname1{
    margin-top:20px;
    display:block;
}
.xgbdiv3a{
    margin-top:20px;
    display:block;
}
.xgbdiv1{
    width:160px;
    
}
.xgbdiv2{
    float:left;
}
.xgbdiv3{
    width:30px;
}
/*歌曲名溢出隐藏点击展开*/
.namea2{
    display:block;
    width:150px;
    white-space:nowrap;
    overflow:hidden;
/*溢出省略号
text-overflow: ellipsis;
*/
}
.namea2:hover{
overflow:visible;
}
</style>
