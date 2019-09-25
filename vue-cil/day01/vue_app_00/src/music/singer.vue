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
                            <a href="javascript:;" class="singerdiv1div2a">韩国男歌手</a>
                        </li>
                        <li>
                            <a href="javascript:;" class="singerdiv1div2a">韩国女歌手</a>
                        </li>
                        <li>
                            <a href="javascript:;" class="singerdiv1div2a">韩国乐队组合</a>
                        </li>
                        <li>
                            <a href="javascript:;" class="singerdiv1div2a">日本男歌手</a>
                        </li>
                        <li>
                            <a href="javascript:;" class="singerdiv1div2a">日本女歌手</a>
                        </li>
                        <li>
                            <a href="javascript:;" class="singerdiv1div2a">日本乐队组合</a>
                        </li>
                    </ul>
                </div>
                <!--其它歌手-->
                <div class="singerdiv1div5">
                    <a href="javascript:;" class="singerdiv1div5a">其它歌手</a>
                </div>
            </div>
            <!--z主体内容-->
            <div class="singerdiv2">
                <div class="singerdiv2div1">
                    <h2 class="singerdiv2div1h2">全部歌手</h2>
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
                        <a href="#H">H</a>
                        <a href="#I">I</a>
                        <a href="#Z">Z</a>
                        <a href="#K">K</a>
                        <a href="#L">L</a>
                        <a href="#M">M</a>
                        <a href="#N">N</a>
                        <a href="#O">O</a>
                        <a href="#P">P</a>
                        <a href="#Q">Q</a>
                        <a href="#Q">R</a>
                        <a href="#S">S</a>
                        <a href="#T">T</a>
                        <a href="#U">U</a>
                        <a href="#V">V</a>
                        <a href="#W">W</a>
                        <a href="#X">X</a>
                        <a href="#Y">Y</a>
                        <a href="#Z">Z</a>
                    </div>
                </div>
            <!--热门-->
                <div class="singerdiv2div2">
                    <h3 class="singerdiv2div2h3">
                        热门
                    </h3>
                    <div class="singerdiv2div2div">
                        <a href="javascript:;">
                            <img v-for="(item,i) in Chinaboy1" :key="i" :src="item.picUrl" class="Chinaboyimg" v-if="i<8">
                        <div class="singerdiv2div3">
                            <a :href="'https://music.163.com/artist?id='+items.id" v-for="(items,index) in Chinaboy1" :key="index" class="Chinaboya">
                                <a v-if="index<8" >
                                {{items.name}}
                                </a>
                            </a>
                        </div>
                        </a>
                       <!--<a href="javascript:;">
                            <div class="singerdiv2div2div2"></div>
                            <a href="javascript:;" class="singerdiv2div2a">
                                周华健
                            </a>
                        </a>
                        <a href="javascript:;">
                            <div class="singerdiv2div2div3"></div>
                            <a href="javascript:;" class="singerdiv2div2a">
                                龙梅子
                            </a>
                        </a>
                       <a href="javascript:;">
                            <div class="singerdiv2div2div4"></div>
                            <a href="javascript:;" class="singerdiv2div2a">
                                林俊杰
                            </a>
                        </a>
                        <a href="javascript:;">
                            <div class="singerdiv2div2div5"></div>
                            <a href="javascript:;" class="singerdiv2div2a">
                                许嵩
                            </a>
                        </a>
                       <a href="javascript:;">
                            <div class="singerdiv2div2div6"></div>
                            <a href="javascript:;" class="singerdiv2div2a">
                                任贤齐
                            </a>
                        </a>
                        <a href="javascript:;">
                            <div class="singerdiv2div2div7"></div>
                            <a href="javascript:;" class="singerdiv2div2a">
                                刘若英
                            </a>
                        </a>
                       <a href="javascript:;">
                            <div class="singerdiv2div2div8"></div>
                            <a href="javascript:;" class="singerdiv2div2a">
                                梁静茹
                            </a>
                        </a>
                        <a href="javascript:;">
                            <div class="singerdiv2div2div9"></div>
                            <a href="javascript:;" class="singerdiv2div2a">
                                林忆莲
                            </a>
                        </a>
                       <a href="javascript:;">
                            <div class="singerdiv2div2div10"></div>
                            <a href="javascript:;" class="singerdiv2div2a">
                                李宗盛
                            </a>
                        </a>-->
                    </div>
                </div>
            <!--所有字母索引共用一个样式-->
            <!--a字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="A">A</a></h3>
                    <!--<div class="imgdiv">
                    <img :src="item.picUrl" v-for="(item,i) of singera" :key="i" class="imga">
                    </div>-->
                    <a :href="'https://music.163.com/artist?id='+item.id" v-for="(item,i) of singera" :key="i" class="singerdiv2div7a">
                    {{item.name}}</a>
                </div>
            <!--b字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="B">B</a></h3>
                    <a :href="'https://music.163.com/artist?id='+itemb.id" v-for="(itemb,ib) of singerb" :key="ib" class="singerdiv2div7a">{{itemb.name}}</a>
                </div>
            <!--c字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="C">C</a></h3>
                    <a :href="'https://music.163.com/artist?id='+itemc.id" v-for="(itemc,ic) of singerc" :key="ic" class="singerdiv2div7a">{{itemc.name}}</a>
                </div>
            <!--d字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="D">D</a></h3>
                    <a :href="'https://music.163.com/artist?id='+itemd.id" v-for="(itemd,id) of singerd" :key="id" class="singerdiv2div7a">{{itemd.name}}</a>
                </div>
            <!--e字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="E">E</a></h3>
                    <a :href="'https://music.163.com/artist?id='+iteme.id" v-for="(iteme,ie) of singere" :key="ie" class="singerdiv2div7a">{{iteme.name}}</a>
                </div>
            <!--f字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="F">F</a></h3>
                    <a :href="'https://music.163.com/artist?id='+itemf.id" v-for="(itemf,if1) of singerf" :key="if1" class="singerdiv2div7a">{{itemf.name}}</a>
                </div>
            <!--g字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="G">G</a></h3>
                    <a :href="'https://music.163.com/artist?id='+itemg.id" v-for="(itemg,ig) of singerg" :key="ig" class="singerdiv2div7a">{{itemg.name}}</a>
                </div>
            <!--h字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="H">H</a></h3>
                    <a :href="'https://music.163.com/artist?id='+itemh.id" v-for="(itemh,ih) of singerh" :key="ih" class="singerdiv2div7a">{{itemh.name}}</a>
                </div>
            <!--i字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="I">I</a></h3>
                    <a :href="'https://music.163.com/artist?id='+itemi.id" v-for="(itemi,ii) of singeri" :key="ii" class="singerdiv2div7a">{{itemi.name}}</a>
                </div>
            <!--z字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="Z">Z</a></h3>
                    <a :href="'https://music.163.com/artist?id='+itemz.id" v-for="(itemz,iz) of singerz" :key="iz" class="singerdiv2div7a">{{itemz.name}}</a>
                </div>
            <!--k字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="K">K</a></h3>
                    <a :href="'https://music.163.com/artist?id='+itemk.id" v-for="(itemk,ik) of singerk" :key="ik" class="singerdiv2div7a">{{itemk.name}}</a>
                </div>
            <!--L字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="L">L</a></h3>
                    <a :href="'https://music.163.com/artist?id='+iteml.id" v-for="(iteml,il) of singerl" :key="il" class="singerdiv2div7a">{{iteml.name}}</a>
                </div>
            <!--M字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="M">M</a></h3>
                    <a :href="'https://music.163.com/artist?id='+itemm.id" v-for="(itemm,im) of singerm" :key="im" class="singerdiv2div7a">{{itemm.name}}</a>
                </div>
            <!--n字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="N">N</a></h3>
                    <a :href="'https://music.163.com/artist?id='+itemn.id" v-for="(itemn,in1) of singern" :key="in1" class="singerdiv2div7a">{{itemn.name}}</a>
                </div>
            <!--o字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="O">O</a></h3>
                    <a :href="'https://music.163.com/artist?id='+itemo.id" v-for="(itemo,io) of singero" :key="io" class="singerdiv2div7a">{{itemo.name}}</a>
                </div>
            <!--p字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="P">P</a></h3>
                    <a :href="'https://music.163.com/artist?id='+itemp.id" v-for="(itemp,ip) of singerp" :key="ip" class="singerdiv2div7a">{{itemp.name}}</a>
                </div>
            <!--q字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="Q">Q</a></h3>
                    <a :href="'https://music.163.com/artist?id='+itemq.id" v-for="(itemq,iq) of singerq" :key="iq" class="singerdiv2div7a">{{itemq.name}}</a>
                </div>
            <!--r字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="R">R</a></h3>
                    <a :href="'https://music.163.com/artist?id='+itemr.id" v-for="(itemr,ir) of singerr" :key="ir" class="singerdiv2div7a">{{itemr.name}}</a>
                </div>
            <!--s字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="S">S</a></h3>
                    <a :href="'https://music.163.com/artist?id='+items.id" v-for="(items,is) of singers" :key="is" class="singerdiv2div7a">{{items.name}}</a>
                </div>
            <!--t字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="T">T</a></h3>
                    <a :href="'https://music.163.com/artist?id='+itemt.id" v-for="(itemt,it) of singert" :key="it" class="singerdiv2div7a">{{itemt.name}}</a>
                </div>
            <!--u字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="U">U</a></h3>
                    <a :href="'https://music.163.com/artist?id='+itemu.id" v-for="(itemu,iu) of singeru" :key="iu" class="singerdiv2div7a">{{itemu.name}}</a>
                </div>
            <!--v字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="V">V</a></h3>
                    <a :href="'https://music.163.com/artist?id='+itemv.id" v-for="(itemv,iv) of singerv" :key="iv" class="singerdiv2div7a">{{itemv.name}}</a>
                </div>
            <!--w字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="W">W</a></h3>
                    <a :href="'https://music.163.com/artist?id='+itemw.id" v-for="(itemw,iw) of singerw" :key="iw" class="singerdiv2div7a">{{itemw.name}}</a>
                </div>
            <!--x字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="X">X</a></h3>
                    <a :href="'https://music.163.com/artist?id='+itemx.id" v-for="(itemx,ix) of singerx" :key="ix" class="singerdiv2div7a">{{itemx.name}}</a>
                </div>
            <!--y字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="Y">Y</a></h3>
                    <a :href="'https://music.163.com/artist?id='+itemy.id" v-for="(itemy,iy) of singery" :key="iy" class="singerdiv2div7a">{{itemy.name}}</a>
                </div>
            <!--z字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="Z">Z</a></h3>
                    <a :href="'https://music.163.com/artist?id='+itemz.id" v-for="(itemz,iz) of singerz" :key="iz" class="singerdiv2div7a">{{itemz.name}}</a>
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
            Chinaboy1:{},
            singera:{},
            singerb:{},
            singerc:{},
            singerd:{},
            singere:{},
            singerf:{},
            singerg:{},
            singerh:{},
            singeri:{},
            singerz:{},
            singerk:{},
            singerl:{},
            singerm:{},
            singern:{},
            singero:{},
            singerp:{},
            singerq:{},
            singerr:{},
            singers:{},
            singert:{},
            singeru:{},
            singerv:{},
            singerw:{},
            singerx:{},
            singerz:{},
            singery:{},
            list:["金南玲","张国荣","冷漠","许巍 ","火箭少女101","陈淑桦","赵雷","齐豫","莫文蔚","五月天","阿杜","张震岳","王菲","赵传","崔子格","周深","展展与罗罗","Beyond","老狼","乌兰图雅","李玉刚","马良","张杰","黄品源","韩红","潘悦晨","蔡健雅","品冠","辛晓琪","凤凰传奇","龙飞","Christine Welch","金莎","曹格","伍佰","王绎龙","张艾嘉","By2","羽泉","万芳","樊桐舟","郑钧","李健","光良","李春花","张冬玲","刘德华","陈柯宇","群星","李圣杰"],
            list1:["蔡琴", "鞠婧祎", "阿宝", "李宇春", "刘惜君", "杜德伟", "成龙", "贵族乐团", "陈洁仪", "李丽芬", "徐怀钰", "潘越云", "卓文萱", "徐佳莹", "李雨儿", "郁可唯", "刘欢", "陈绮贞", "苏慧伦", "DJ小可", "朴树", "高安", "腾格尔", "娃娃", "艾索", "云飞", "杨乃文", "屠洪刚", "马旭成", "降央卓玛", "田震", "水木年华", "陈粒", "颜妹", "伍佰","门丽","黄英","后弦","8先生","好妹妹","张也","无印良品","沙漠五子D","卢冠廷","赵咏华","纳兰珠儿","路勇","筷子兄弟","Per-Olov Kindg..","任素汐"],
            list2:[
                "贝多芬", "张韶涵", "曹轩宾", "夏雨菲", "新雅室内空气乐..", "谢安琪", "梦鸽", "大庆小芳", "齐秦", "小蓓蕾组合", "贾乃亮", "张可", "毛宁", "Percy Fait", "张穆庭", "罗大佑", "MC Hotdog",  "陈燕", "陈瑞","王筝", "何炅", "周笔畅", "王七七","张碧晨", "胡彦斌", "汪苏泷", "戚薇", "纯音乐", "王二妮", "大张伟", "纵贯线", "DJ小鱼儿", "杨钰莹","林凡","孙露", "费玉清", "孙盛希", "虎二","宝宝巴士","回音哥","陈奕迅","张婧","华晨宇","罗百吉","霍尊","张紫豪","温妮","G.E.M.邓紫棋","唐朝乐队","赵泳鑫"
            ],
            list3:[
                "Various Artists", "顺子", "陈零九", "刘瑞琦", "莫艳琳", "窦唯", "阎维文", "方大同", "The Royal Con..", "棉花糖", "黑豹乐队", "庄心妍", "EnjiA魏恩佳", "SNH48_HO2","林宇中","李春波", "陶晶莹", "叶贺璞",  "张洪量", "杨宗纬","海来阿木", "林琳", "阿牛", "林志炫", "毛阿敏", "黑龙","温岚","花粥","玖月奇迹","锦绣二重唱","张信哲","赵天鸽","谭维维","刘强强","许景淳","大壮","孙楠","小臭","刘珂矣","乌兰托娅"
            ],
        }
    },
    methods:{
    asuoyin(){this.axios.get("/artist/list?cat=1001&initial=a").then(res=>{  var Chinaboy=res.data.artists
            this.singera=Chinaboy
            console.log(this.singera)
            return this.singera
       })
    },
    bsuoyin(){this.axios.get("/artist/list?cat=1001&initial=b").then(res=>{  var Chinaboy=res.data.artists
            this.singerb=Chinaboy
            return this.singerb
       })
    },
    csuoyin(){this.axios.get("/artist/list?cat=1001&initial=c").then(res=>{  var Chinaboy=res.data.artists
            this.singerc=Chinaboy
            return this.singerc
       })
    },
    dsuoyin(){this.axios.get("/artist/list?cat=1001&initial=d").then(res=>{  var Chinaboy=res.data.artists
            this.singerd=Chinaboy
            return this.singerd
       })
    },
    esuoyin(){this.axios.get("/artist/list?cat=1001&initial=e").then(res=>{  var Chinaboy=res.data.artists
            this.singere=Chinaboy
            return this.singere
       })
    },
    fsuoyin(){this.axios.get("/artist/list?cat=1001&initial=f").then(res=>{  var Chinaboy=res.data.artists
            this.singerf=Chinaboy
            return this.singerf
       })
    },
    gsuoyin(){this.axios.get("/artist/list?cat=1001&initial=g").then(res=>{  var Chinaboy=res.data.artists
            this.singerg=Chinaboy
            return this.singerg
       })
    },
    hsuoyin(){this.axios.get("/artist/list?cat=1001&initial=h").then(res=>{  var Chinaboy=res.data.artists
            this.singerh=Chinaboy
            return this.singerh
       })
    },
    isuoyin(){this.axios.get("/artist/list?cat=1001&initial=i").then(res=>{  var Chinaboy=res.data.artists
            this.singeri=Chinaboy
            return this.singeri
       })
    },
    zsuoyin(){this.axios.get("/artist/list?cat=1001&initial=z").then(res=>{  var Chinaboy=res.data.artists
            this.singerz=Chinaboy
            return this.singerz
       })
    },
    ksuoyin(){this.axios.get("/artist/list?cat=1001&initial=k").then(res=>{  var Chinaboy=res.data.artists
            this.singerk=Chinaboy
            return this.singerk
       })
    },
    lsuoyin(){this.axios.get("/artist/list?cat=1001&initial=l").then(res=>{  var Chinaboy=res.data.artists
            this.singerl=Chinaboy
            return this.singerl
       })
    },
    msuoyin(){this.axios.get("/artist/list?cat=1001&initial=m").then(res=>{  var Chinaboy=res.data.artists
            this.singerm=Chinaboy
            return this.singerm
       })
    },
    nsuoyin(){this.axios.get("/artist/list?cat=1001&initial=n").then(res=>{  var Chinaboy=res.data.artists
            this.singern=Chinaboy
            return this.singern
       })
    },
    osuoyin(){this.axios.get("/artist/list?cat=1001&initial=o").then(res=>{  var Chinaboy=res.data.artists
            this.singero=Chinaboy
            return this.singero
       })
    },
    psuoyin(){this.axios.get("/artist/list?cat=1001&initial=p").then(res=>{  var Chinaboy=res.data.artists
            this.singerp=Chinaboy
            return this.singerp
       })
    },
    qsuoyin(){this.axios.get("/artist/list?cat=1001&initial=q").then(res=>{  var Chinaboy=res.data.artists
            this.singerq=Chinaboy
            return this.singerq
       })
    },
    rsuoyin(){this.axios.get("/artist/list?cat=1001&initial=r").then(res=>{  var Chinaboy=res.data.artists
            this.singerr=Chinaboy
            return this.singerr
       })
    },
    ssuoyin(){this.axios.get("/artist/list?cat=1001&initial=s").then(res=>{  var Chinaboy=res.data.artists
            this.singers=Chinaboy
            return this.singers
       })
    },
    tsuoyin(){this.axios.get("/artist/list?cat=1001&initial=t").then(res=>{  var Chinaboy=res.data.artists
            this.singert=Chinaboy
            return this.singert
       })
    },
    usuoyin(){this.axios.get("/artist/list?cat=1001&initial=u").then(res=>{  var Chinaboy=res.data.artists
            this.singeru=Chinaboy
            return this.singeru
       })
    },
    vsuoyin(){this.axios.get("/artist/list?cat=1001&initial=v").then(res=>{  var Chinaboy=res.data.artists
            this.singerv=Chinaboy
            return this.singerv
       })
    },
    wsuoyin(){this.axios.get("/artist/list?cat=1001&initial=w").then(res=>{  var Chinaboy=res.data.artists
            this.singerw=Chinaboy
            return this.singerw
       })
    },
    xsuoyin(){this.axios.get("/artist/list?cat=1001&initial=x").then(res=>{  var Chinaboy=res.data.artists
            this.singerx=Chinaboy
            return this.singerx
       })
    },
    ysuoyin(){this.axios.get("/artist/list?cat=1001&initial=y").then(res=>{  var Chinaboy=res.data.artists
            this.singery=Chinaboy
            return this.singery
       })
    },
    zsuoyin(){this.axios.get("/artist/list?cat=1001&initial=z").then(res=>{  var Chinaboy=res.data.artists
            this.singerz=Chinaboy
            return this.singerz
       })
    },
    gqxc(){this.axios.get("/artist/list?cat=1001").then(res=>{
                var Chinaboy=res.data.artists
                this.Chinaboy1=Chinaboy
                console.log(this.Chinaboy1)
                return this.Chinaboy1
       })
    }
    },
    mounted(){
        this.gqxc()
        this.asuoyin()
        this.bsuoyin()
        this.csuoyin()
        this.dsuoyin()
        this.esuoyin()
        this.fsuoyin()
        this.gsuoyin()
        this.hsuoyin()
        this.isuoyin()
        this.zsuoyin()
        this.ksuoyin()
        this.lsuoyin()
        this.msuoyin()
        this.nsuoyin()
        this.osuoyin()
        this.psuoyin()
        this.qsuoyin()
        this.rsuoyin()
        this.ssuoyin()
        this.tsuoyin()
        this.usuoyin()
        this.vsuoyin()
        this.wsuoyin()
        this.xsuoyin()
        this.ysuoyin()
        this.zsuoyin()

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
        height:100%;
        flex-direction:row;
	    display:flex;
	    /*justify-content:space-between;*/
	    flex-wrap:wrap;
    }
    .singerdiv1{
        width:208px;
        height:13700px;
    }
    .singerdiv2{
        width:992px;
        height:13700px;

    }
    /*全部歌手*/
    .singerdiv1div1{
        width:208px;
        height:37px;
        line-height:37px;
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
    /*热门*/
    .singerdiv2div2{
        width:992px;
        height:514px;
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
    .singerdiv2div2div1{
        width:180px;
        height:180px;
        background-image:url('./singer/1.jpg');
        background-size:100% 100%;
        margin-bottom:10px;
        border-radius:5px;
    }
    .singerdiv2div2div2{
        width:180px;
        height:180px;
        background-image:url('./singer/2.jpg');
        background-size:100% 100%;
        margin-bottom:10px;
    }
    .singerdiv2div2div3{
        width:180px;
        height:180px;
        background-image:url('./singer/3.jpg');
        background-size:100% 100%;
        margin-bottom:10px;
    }
    .singerdiv2div2div4{
        width:180px;
        height:180px;
        background-image:url('./singer/4.jpg');
        background-size:100% 100%;
        margin-bottom:10px;
    }
    .singerdiv2div2div5{
        width:180px;
        height:180px;
        background-image:url('./singer/5.jpg');
        background-size:100% 100%;
        margin-bottom:10px;
    }
    .singerdiv2div2div6{
        width:180px;
        height:180px;
        background-image:url('./singer/6.jpg');
        background-size:100% 100%;
        margin-bottom:10px;
    }
    .singerdiv2div2div7{
        width:180px;
        height:180px;
        background-image:url('./singer/7.jpg');
        background-size:100% 100%;
        margin-bottom:10px;
    }
    .singerdiv2div2div8{
        width:180px;
        height:180px;
        background-image:url('./singer/8.jpg');
        background-size:100% 100%;
        margin-bottom:10px;
    }
    .singerdiv2div2div9{
        width:180px;
        height:180px;
        background-image:url('./singer/9.jpg');
        background-size:100% 100%;
        margin-bottom:10px;
    }
    .singerdiv2div2div10{
        width:180px;
        height:180px;
        background-image:url('./singer/10.jpg');
        background-size:100% 100%;
        margin-bottom:10px;
    }
   .singerdiv2div2a{
    color:#2d64e3;
    }

    /*一下其实共用一个样式就可以了，以后可以缩减代码量*/
    /*金南玲~~李圣杰*/

    .singerdiv2div3{
    width:992px;
    height:370px;
    display:flex;
    flex-direction:row;
	justify-content:space-between;
	flex-wrap:wrap;
    margin-top:100px;
    }

    .singerdiv2div3a{
    width:198.4px;
    height:3.5px;
    color:#2d64e3;
    font-size:14px; 
    display:block;
    line-height:3.5px;
    }

    /*蔡琴~~任素汐*/
    .singerdiv2div4{
    width:992px;
    height:370px;
    display:flex;
    flex-direction:row;
	justify-content:space-between;
	flex-wrap:wrap;
    margin-top:80px;
    }
    
    .singerdiv2div4a{
    width:198.4px;
    height:3.5px;
    color:#2d64e3;
    font-size:14px; 
    display:block;
    line-height:3.5px;
    }
    .singerdiv2div5{
    width:992px;
    height:370px;
    display:flex;
    flex-direction:row;
	justify-content:space-between;
	flex-wrap:wrap;
    margin-top:80px;  
    }
    .singerdiv2div5a{
    width:198.4px;
    height:3.5px;
    color:#2d64e3;
    font-size:14px; 
    display:block;
    line-height:3.5px;
    }
    .singerdiv2div6{
    width:992px;
    height:370px;
    display:flex;
    flex-direction:row;
	justify-content:space-between;
	flex-wrap:wrap;
    margin-top:80px;  
    border-bottom:1px solid darkgray;
    }
    .singerdiv2div6a{
    width:198.4px;
    height:3.5px;
    color:#2d64e3;
    font-size:14px; 
    display:block;
    line-height:3.5px;
    }
    .singerdiv2div7{
    width:992px;
    height:420px;
    display:flex;
    flex-direction:row;
	justify-content:space-between;
	flex-wrap:wrap;
    margin-top:80px;
    }
    .singerdiv2div7a{
    width:198.4px;
    height:3.5px;
    color:#2d64e3;
    font-size:14px; 
    display:block;
    line-height:3.5px;
    }
    /*a索引*/
    .singerdiv2div7h3{
        width:998px;
        height:10px;
    }
    .imga{
        width:50px;
        height:50px;
        background-size:100% 100%;
    }
  /*  .imgdiv{
        width:992px;
        height:420px;
        display:flex;
        flex-direction:row;
	    justify-content:space-between;
	    flex-wrap:wrap;
        margin-top:80px;
    }*/
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
        margin:-280px 0 0 0px;
    }
    .Chinaboya{
        width:200px;
        height:220px;
        margin:0 45px 30px 0;
        display:block;
        text-align:center;
        float:left;
    }
</style>
