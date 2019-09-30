<template>
<div class="djradiodiv">
    <div class="djradiodiv1">
        <img :src="items.pic56x56Url" alt="" v-for="(items,i) in djradio1" :key="i" class="djradiodivimg">
    </div>
    <div class="djradiodiv2">
        <a href="javascript:;" v-for="(item,index) in djradio1" :key="index" class="djradiosa" @click="setActive" :data-idx="index">{{item.name}}</a>
    </div>
    <div class="djradiodiv2dt">
        <span class="djradiodiv2dtspan">你要的电台都在这里</span>
    </div>
    <mt-tab-container v-model="active">
        <!--第一个子面板-->
        <mt-tab-container-item id="tab1">
            <div class="djradiodiv3">
                <div class="djradiodiv3div">
                    <img :src="items1.picUrl" v-for="(items1,i1) in djradio2" :key="i1+'index1'" class="djradiodiv3img">
                </div>
                <div class="djradiodiv3div1">
                    <a :href="'https://music.163.com/#/djradio?id='+items2.id" v-for="(items2,i2) in djradio2" :key="i2+'index2'"                   class="djradiodiv3div1a">
                    {{items2.name}}
                    </a>
                </div>
            </div>
        </mt-tab-container-item>
        <!--第二个子面板-->
        <mt-tab-container-item id="tab2">
            <div class="djradiodiv3">
                <div class="djradiodiv3div">
                    <img :src="items2.picUrl" v-for="(items2,i2) in djradio3" :key="i2+'index1'" class="djradiodiv3img">
                </div>
                <div class="djradiodiv3div1">
                    <a :href="'https://music.163.com/#/djradio?id='+items3.id" v-for="(items3,i3) in djradio3" :key="i3+'index2'"                   class="djradiodiv3div1a">
                    {{items3.name}}
                    </a>
                </div>
            </div>
        </mt-tab-container-item>
        <!--第三个子面板-->
        <mt-tab-container-item id="tab3">
            <div class="djradiodiv3">
                <div class="djradiodiv3div">
                    <img :src="items3.picUrl" v-for="(items3,i3) in djradio4" :key="i3+'index1'" class="djradiodiv3img">
                </div>
                <div class="djradiodiv3div1">
                    <a :href="'https://music.163.com/#/djradio?id='+items4.id" v-for="(items4,i4) in djradio4" :key="i4+'index2'"                   class="djradiodiv3div1a">
                    {{items4.name}}
                    </a>
                </div>
            </div>
        </mt-tab-container-item>
        <!--第四个子面板-->
        <mt-tab-container-item id="tab4">
            <div class="djradiodiv3">
                <div class="djradiodiv3div">
                    <img :src="items5.picUrl" v-for="(items5,i5) in djradio5" :key="i5+'index1'" class="djradiodiv3img">
                </div>
                <div class="djradiodiv3div1">
                    <a :href="'https://music.163.com/#/djradio?id='+items6.id" v-for="(items6,i6) in djradio5" :key="i6+'index2'"                   class="djradiodiv3div1a">
                    {{items6.name}}
                    </a>
                </div>
            </div>
        </mt-tab-container-item>
        <!--第五个子面板-->
        <mt-tab-container-item id="tab5">
            <div class="djradiodiv3">
                <div class="djradiodiv3div">
                    <img :src="items7.picUrl" v-for="(items7,i7) in djradio6" :key="i7+'index1'" class="djradiodiv3img">
                </div>
                <div class="djradiodiv3div1">
                    <a :href="'https://music.163.com/#/djradio?id='+items8.id" v-for="(items8,i8) in djradio6" :key="i8+'index2'"                   class="djradiodiv3div1a">
                    {{items8.name}}
                    </a>
                </div>
            </div>
        </mt-tab-container-item>
        <!--第六个子面板-->
        <mt-tab-container-item id="tab6">
            <div class="djradiodiv3">
                <div class="djradiodiv3div">
                    <img :src="items9.picUrl" v-for="(items9,i9) in djradio7" :key="i9+'index1'" class="djradiodiv3img">
                </div>
                <div class="djradiodiv3div1" style="margin-top:-29px">
                    <a :href="'https://music.163.com/#/djradio?id='+items10.id" v-for="(items10,i10) in djradio7" :key="i10+'index2'"                   class="djradiodiv3div1a">
                    {{items10.name}}
                    </a>
                </div>
            </div>
        </mt-tab-container-item>
        <!--第七个子面板-->
        <mt-tab-container-item id="tab7">
            <div class="djradiodiv3">
                <div class="djradiodiv3div">
                    <img :src="items11.picUrl" v-for="(items11,i11) in djradio8" :key="i11+'index1'" class="djradiodiv3img">
                </div>
                <div class="djradiodiv3div1">
                    <a :href="'https://music.163.com/#/djradio?id='+items12.id" v-for="(items12,i12) in djradio8" :key="i12+'index2'"                   class="djradiodiv3div1a">
                    {{items12.name}}
                    </a>
                </div>
            </div>
        </mt-tab-container-item>
        <!--第八个子面板-->
        <mt-tab-container-item id="tab8">
            <div class="djradiodiv3">
                <div class="djradiodiv3div">
                    <img :src="items13.picUrl" v-for="(items13,i13) in djradio9" :key="i13+'index1'" class="djradiodiv3img">
                </div>
                <div class="djradiodiv3div1">
                    <a :href="'https://music.163.com/#/djradio?id='+items14.id" v-for="(items14,i14) in djradio9" :key="i14+'index2'"                   class="djradiodiv3div1a">
                    {{items14.name}}
                    </a>
                </div>
            </div>
        </mt-tab-container-item>
        <!--第九个子面板-->
        <mt-tab-container-item id="tab9">
            <div class="djradiodiv3">
                <div class="djradiodiv3div">
                    <img :src="items15.picUrl" v-for="(items15,i15) in djradio10" :key="i15+'index1'" class="djradiodiv3img">
                </div>
                <div class="djradiodiv3div1">
                    <a :href="'https://music.163.com/#/djradio?id='+items16.id" v-for="(items16,i16) in djradio10" :key="i16+'index2'"                   class="djradiodiv3div1a">
                    {{items16.name}}
                    </a>
                </div>
            </div>
        </mt-tab-container-item>
        <!--第十个子面板-->
        <mt-tab-container-item id="tab10">
            <div class="djradiodiv3">
                <div class="djradiodiv3div">
                    <img :src="items17.picUrl" v-for="(items17,i17) in djradio11" :key="i17+'index1'" class="djradiodiv3img">
                </div>
                <div class="djradiodiv3div1">
                    <a :href="'https://music.163.com/#/djradio?id='+items18.id" v-for="(items18,i18) in djradio11" :key="i18+'index2'"                   class="djradiodiv3div1a">
                    {{items18.name}}
                    </a>
                </div>
            </div>
        </mt-tab-container-item>
        <!--第十一个子面板-->
        <mt-tab-container-item id="tab11">
            <div class="djradiodiv3">
                <div class="djradiodiv3div">
                    <img :src="items19.picUrl" v-for="(items19,i19) in djradio12" :key="i19+'index1'" class="djradiodiv3img">
                </div>
                <div class="djradiodiv3div1">
                    <a :href="'https://music.163.com/#/djradio?id='+items20.id" v-for="(items20,i20) in djradio12" :key="i20+'index2'"                   class="djradiodiv3div1a">
                    {{items20.name}}
                    </a>
                </div>
            </div>
        </mt-tab-container-item>
        <!--第十二个子面板-->
        <mt-tab-container-item id="tab12">
            <div class="djradiodiv3">
                <div class="djradiodiv3div">
                    <img :src="items21.picUrl" v-for="(items21,i21) in djradio13" :key="i21+'index1'" class="djradiodiv3img">
                </div>
                <div class="djradiodiv3div1">
                    <a :href="'https://music.163.com/#/djradio?id='+items22.id" v-for="(items22,i22) in djradio13" :key="i22+'index2'"                   class="djradiodiv3div1a">
                    {{items22.name}}
                    </a>
                </div>
            </div>
        </mt-tab-container-item>
         <!--第十三个子面板-->
        <mt-tab-container-item id="tab13">
            <div class="djradiodiv3">
                <div class="djradiodiv3div">
                    <img :src="items23.picUrl" v-for="(items23,i23) in djradio14" :key="i23+'index1'" class="djradiodiv3img">
                </div>
                <div class="djradiodiv3div1">
                    <a :href="'https://music.163.com/#/djradio?id='+items24.id" v-for="(items24,i24) in djradio14" :key="i24+'index2'"                   class="djradiodiv3div1a">
                    {{items24.name}}
                    </a>
                </div>
            </div>
        </mt-tab-container-item>
        <!--第十四个子面板-->
        <mt-tab-container-item id="tab14">
            <div class="djradiodiv3">
                <div class="djradiodiv3div">
                    <img :src="items25.picUrl" v-for="(items25,i25) in djradio15" :key="i25+'index1'" class="djradiodiv3img">
                </div>
                <div class="djradiodiv3div1">
                    <a :href="'https://music.163.com/#/djradio?id='+items26.id" v-for="(items26,i26) in djradio15" :key="i26+'index2'"                   class="djradiodiv3div1a">
                    {{items26.name}}
                    </a>
                </div>
            </div>
        </mt-tab-container-item>
        <!--第十五个子面板广播剧-->
        <mt-tab-container-item id="tab15">
            <div class="djradiodiv3">
                <div class="djradiodiv3div">
                    <img :src="items27.picUrl" v-for="(items27,i27) in djradio16" :key="i27+'index1'" class="djradiodiv3img">
                </div>
                <div class="djradiodiv3div1">
                    <a :href="'https://music.163.com/#/djradio?id='+items28.id" v-for="(items28,i28) in djradio16" :key="i28+'index2'"                   class="djradiodiv3div1a">
                    {{items28.name}}
                    </a>
                </div>
            </div>
        </mt-tab-container-item>
        <!--第十六个子面板明星-->
        <mt-tab-container-item id="tab16">
            <div class="djradiodiv3">
                <div class="djradiodiv3div">
                    <img :src="items29.picUrl" v-for="(items29,i29) in djradio17" :key="i29+'index1'" class="djradiodiv3img">
                </div>
                <div class="djradiodiv3div1">
                    <a :href="'https://music.163.com/#/djradio?id='+items30.id" v-for="(items30,i30) in djradio17" :key="i30+'index2'"                   class="djradiodiv3div1a">
                    {{items30.name}}
                    </a>
                </div>
            </div>
        </mt-tab-container-item>
        <!--第十七个子面板娱乐-->
        <mt-tab-container-item id="tab17">
            <div class="djradiodiv3">
                <div class="djradiodiv3div">
                    <img :src="items31.picUrl" v-for="(items31,i31) in djradio18" :key="i31+'index1'" class="djradiodiv3img">
                </div>
                <div class="djradiodiv3div1">
                    <a :href="'https://music.163.com/#/djradio?id='+items32.id" v-for="(items32,i32) in djradio18" :key="i32+'index2'"                   class="djradiodiv3div1a">
                    {{items32.name}}
                    </a>
                </div>
            </div>
        </mt-tab-container-item>
        <!--第十八个子面板科技-->
        <mt-tab-container-item id="tab18">
            <div class="djradiodiv3">
                <div class="djradiodiv3div">
                    <img :src="items33.picUrl" v-for="(items33,i33) in djradio19" :key="i33+'index1'" class="djradiodiv3img">
                </div>
                <div class="djradiodiv3div1">
                    <a :href="'https://music.163.com/#/djradio?id='+items34.id" v-for="(items34,i34) in djradio19" :key="i34+'index2'"                   class="djradiodiv3div1a">
                    {{items34.name}}
                    </a>
                </div>
            </div>
        </mt-tab-container-item>
        <!--第十九个子面板科技-->
        <mt-tab-container-item id="tab19">
            <div class="djradiodiv3">
                <div class="djradiodiv3div">
                    <img :src="items35.picUrl" v-for="(items35,i35) in djradio20" :key="i35+'index1'" class="djradiodiv3img">
                </div>
                <div class="djradiodiv3div1">
                    <a :href="'https://music.163.com/#/djradio?id='+items36.id" v-for="(items36,i36) in djradio20" :key="i36+'index2'"                   class="djradiodiv3div1a">
                    {{items36.name}}
                    </a>
                </div>
            </div>
        </mt-tab-container-item>
        <!--第二十个子面板科技-->
        <mt-tab-container-item id="tab20">
            <div class="djradiodiv3">
                <div class="djradiodiv3div">
                    <img :src="items37.picUrl" v-for="(items37,i37) in djradio21" :key="i37+'index1'" class="djradiodiv3img">
                </div>
                <div class="djradiodiv3div1">
                    <a :href="'https://music.163.com/#/djradio?id='+items38.id" v-for="(items38,i38) in djradio21" :key="i38+'index2'"                   class="djradiodiv3div1a">
                    {{items38.name}}
                    </a>
                </div>
            </div>
        </mt-tab-container-item>
    </mt-tab-container>
</div>
</template>
<script>
export default {
    data(){
        return {
            djradio1:{},
            djradio2:{},
            djradio3:{},
            djradio4:{},
            djradio5:{},
            djradio6:{},
            djradio7:{},
            djradio7:{},
            djradio8:{},
            djradio9:{},
            djradio10:{},
            djradio11:{},
            djradio12:{},
            djradio13:{},
            djradio14:{},
            djradio15:{},
            djradio16:{},
            djradio17:{},
            djradio18:{},
            djradio19:{},
            djradio20:{},
            djradio21:{},
            active:"tab1"
        }
    },
    methods:{
        setActive(e){
                    //e指所有事件
                    //target指触发事件
                    //dataset指所有自定义属性库
                    //上面自己写的idx自定义属性名
                  var idx=parseInt(e.target.dataset.idx)  
                  //自定义属性拿过来是一个字符串，所以需要转换一下
                  this.active="tab"+(idx+1);
        },
        djradios(){this.axios.get("/dj/catelist").then(res=>{
                var djradio=res.data.categories
                this.djradio1=djradio
                console.log(this.djradio1)
                return this.djradio1
       })
    },
        djradiocz(){this.axios.get("/dj/recommend/type?type=2001").then(res=>{
                var djradio=res.data.djRadios
                this.djradio2=djradio
                return this.djradio2
       })
    },
        djradio3d(){this.axios.get("/dj/recommend/type?type=10002").then(res=>{
                var djradio=res.data.djRadios
                this.djradio3=djradio
                return this.djradio3
       })
    },
        djradioqg(){this.axios.get("/dj/recommend/type?type=3").then(res=>{
                var djradio=res.data.djRadios
                this.djradio4=djradio
                return this.djradio4
       })
    },
        djradioyy(){this.axios.get("/dj/recommend/type?type=2").then(res=>{
                var djradio=res.data.djRadios
                this.djradio5=djradio
                return this.djradio5
       })
    },
        djradioecy(){this.axios.get("/dj/recommend/type?type=3001").then(res=>{
                var djradio=res.data.djRadios
                this.djradio6=djradio
                return this.djradio6
       })
    },
        djradioeyss(){this.axios.get("/dj/recommend/type?type=10001").then(res=>{
                var djradio=res.data.djRadios
                this.djradio7=djradio
                return this.djradio7
       })
    },  
        djradioeyzs(){this.axios.get("/dj/recommend/type?type=453050").then(res=>{
                var djradio=res.data.djRadios
                this.djradio8=djradio
                return this.djradio8
       })
    },
        djradioeysy(){this.axios.get("/dj/recommend/type?type=453051").then(res=>{
                var djradio=res.data.djRadios
                this.djradio9=djradio
                return this.djradio9
       })
    },  
        djradioeyrw(){this.axios.get("/dj/recommend/type?type=11").then(res=>{
                var djradio=res.data.djRadios
                this.djradio10=djradio
                return this.djradio10
       })
    },
        djradioeywy(){this.axios.get("/dj/recommend/type?type=13").then(res=>{
                var djradio=res.data.djRadios
                this.djradio11=djradio
                return this.djradio11
       })
    },
        djradioeyqz(){this.axios.get("/dj/recommend/type?type=14").then(res=>{
                var djradio=res.data.djRadios
                this.djradio12=djradio
                return this.djradio12
       })
    },
        djradioeyxs(){this.axios.get("/dj/recommend/type?type=8").then(res=>{
                var djradio=res.data.djRadios
                this.djradio13=djradio
                return this.djradio13
       })
    },
        djradioeymw(){this.axios.get("/dj/recommend/type?type=6").then(res=>{
                var djradio=res.data.djRadios
                this.djradio14=djradio
                return this.djradio14
       })
    },
        djradiotkx(){this.axios.get("/dj/recommend/type?type=5").then(res=>{
                var djradio=res.data.djRadios
                this.djradio15=djradio
                return this.djradio15
       })
    },
        djradioeygbj(){this.axios.get("/dj/recommend/type?type=7").then(res=>{
                var djradio=res.data.djRadios
                this.djradio16=djradio
                return this.djradio16
       })
    },
        djradioeymx(){this.axios.get("/dj/recommend/type?type=1").then(res=>{
                var djradio=res.data.djRadios
                this.djradio17=djradio
                return this.djradio17
       })
    },
        djradioyl(){this.axios.get("/dj/recommend/type?type=4").then(res=>{
                var djradio=res.data.djRadios
                this.djradio18=djradio
                return this.djradio18
       })
    },
        djradiokj(){this.axios.get("/dj/recommend/type?type=453052").then(res=>{
                var djradio=res.data.djRadios
                this.djradio19=djradio
                return this.djradio19
       })
    },
        djradioxy(){this.axios.get("/dj/recommend/type?type=4001").then(res=>{
                var djradio=res.data.djRadios
                this.djradio20=djradio
                return this.djradio20
       })
    },  
         djradiolt(){this.axios.get("/dj/recommend/type?type=12").then(res=>{
                var djradio=res.data.djRadios
                this.djradio21=djradio
                return this.djradio21
       })
    },
    },
    mounted(){
        this.djradios()
        this.djradiocz()  
        this.djradio3d()
        this.djradioqg()
        this.djradioyy()
        this.djradioecy()
        this.djradioeyss()
        this.djradioeyzs()
        this.djradioeysy()
        this.djradioeyrw()
        this.djradioeywy()
        this.djradioeyqz()
        this.djradioeyxs()
        this.djradioeymw()
        this.djradiotkx()
        this.djradioeygbj()
        this.djradioeymx()
        this.djradioyl()
        this.djradiokj()
        this.djradioxy()
        this.djradiolt()
        
    },
}
</script>
<style scoped>
    /*图标的div */
    .djradiodiv1{
        width:1200px;
        height:60px;
        margin:0 auto;
    }
/*文字的div */
    .djradiodiv2{
        width:1200px;
        height:270px;
        margin:0 auto;
        top:0px;
    }
/*下面电台的div */
    .djradiodiv3{
        width:1200px;
        height:2000px;
        margin:0 auto;
}
/*你要的电台都在这里*/
    .djradiodiv2dt{
        width:200px;
        height:60px;
        text-align:center;
        margin-bottom:20px;
        line-height:60px;
        border-radius:50px;
        background-image:linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
        margin-left:50px;
}
    .djradiodiv2dtspan{
        font-size:20px;
        padding-top:20px;
        margin:0 auto;
    }
/*包含电台图片的div */
    .djradiodiv3div{
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
}
    .djradiodiv3div1{
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        margin-top:-270px;
    }
    .djradiosa{
        display:block;
        width:75px;
        height:60px;
        padding-right:35px;
        padding-bottom:45px;
        float:left;
        text-align:center;
        text-decoration:none;
    }
    .djradiodivimg{
        width:65px;
        height:60px;
        padding-right:46px;
        padding-bottom:40px;
    }
    /*电台的图片 */
    .djradiodiv3img{
        width:220px;
        height:200px;
        padding-bottom:40px;
    }
    .djradiodiv3div1a{
        display:flex;
        justify-content:space-between;
        display:block;
        width:220px;
        height:240px;
        text-align:center;
        text-decoration:none;
    }
</style>