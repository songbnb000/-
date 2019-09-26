<template>
    <div class="singer">
        <musicsinger>
        </musicsinger>
        <!--左边部分-->
        <div class="singerdiv">
            <div class="singerdivdiv1">
                <h2 class="singerdivdiv1h2">标签</h2>
                <div class="singerdivdiv1div1">
                    <h4>语种</h4>
                    <div class="singerdivdiv1div1div">
                        <a class="singerdivdiv1div1divspan" :href="'http://127.0.0.1:8080/#/songlist'+index" v-for="(items,index) in musicsort" :key="index" v-if="items.category==0">
                            {{items.name}}
                        </a>
                    </div>
                </div>
                <div class="singerdivdiv1div1fg">
                    <h4>风格</h4>
                    <div class="singerdivdiv1div1div">
                        <a class="singerdivdiv1div1divspan" :href="'https://music.163.com/#/discover/playlist/?cat='+item1.name" v-for="(item1,i1) in musicsort" :key="i1" v-if="item1.category==1">{{item1.name}}</a>
                    </div>
                </div>
                <div class="singerdivdiv1divcj">
                    <h4>场景</h4>
                    <div class="singerdivdiv1div1div">
                        <a class="singerdivdiv1div1divspan" :href="'https://music.163.com/#/discover/playlist/?cat='+item2.name" v-for="(item2,i2) in musicsort" :key="i2" v-if="item2.category==2">
                            {{item2.name}}
                            </a>
                    </div>
                </div>
                <div class="singerdivdiv1divqg">
                    <h4>情感</h4>
                    <div class="singerdivdiv1div1div">
                        <a class="singerdivdiv1div1divspan" 
                        :href="'https://music.163.com/#/discover/playlist/?cat='+item3.name" v-for="(item3,i3) in musicsort" :key="i3" v-if="item3.category==3">
                            {{item3.name}}
                            </a>
                    </div>
                </div>
                <div class="singerdivdiv1divzt">
                    <h4>主题</h4>
                    <div class="singerdivdiv1div1div">
                        <a class="singerdivdiv1div1divspan" :href="'https://music.163.com/#/discover/playlist/?cat='+item4.name" v-for="(item4,i4) in musicsort" :key="i4" v-if="item4.category==4">
                            {{item4.name}}
                            </a>
                    </div>
                </div>
        </div>
       </div> 
        <!--右边部分-->
            <div class="singerdivdiv2">
            </div>
    </div>
</template>
<script>
import musicsinger from "./musicsinger.vue"
export default {
    data(){
        return{
           musicsort:{},
           musicsort1:{}
        }
    },
    methods:{
        musicmvsort(){this.axios.get("/playlist/catlist").then(res=>{
                var musicmv=res.data.sub
                this.musicsort=musicmv
                console.log(this.musicsort)
                return this.musicsort
       })
    },
        musicmvsort1(){this.axios.get("/playlist/catlist").then(res=>{
                var musicmv=res.data.categories
                this.musicsort1=musicmv
                console.log(this.musicsort1)
                return this.musicsort1
       })
    }
    },
    mounted(){
        this.musicmvsort()
        this.musicmvsort1()
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
/*包含下面两个div的大div*/
.singerdiv{
    width:1200px;
    height:5000px;
    margin:-20px auto;
    display:flex;
    flex-direction:row;
	justify-content:space-between;
	flex-wrap:wrap;
}
/*分类左边div*/
.singerdivdiv1{
    width:866px;
    height:5000px;
}
/*分类右边div*/
.singerdivdiv2{
    width:334px;
    height:5000px;
    background-color:bisque
}
/*标签h2文字样式*/
.singerdivdiv1h2{
    width:866px;
    height:39px;
    border-bottom:2px solid cornflowerblue;
}
.singerdivdiv1div1div{
    width:866px;
    height:100px;
    display:flex;
    flex-direction:row;
	/*justify-content:space-between;*/
	flex-wrap:wrap;
    margin-top:10px;
}

/*模块下面文字的样式*/
.singerdivdiv1div1divspan{
    width:144px;
    height:37px;
}
.singerdivdiv1div2span{
    width:144px;
    height:48px;
}
.singerdivdiv1div1{
    width:866px;
    height:90px;
}
.singerdivdiv1divqg{
    width:866px;
    height:150px;
}
.singerdivdiv1div1fg{
    width:866px;
    height:210px;
}
.singerdivdiv1divcj{
    width:866px;
    height:150px;
}

</style>
