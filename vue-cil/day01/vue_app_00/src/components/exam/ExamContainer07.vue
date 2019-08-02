<template>
<div>
    <!--:key="i"用来进行排序-->
<div>
<mt-button v-for="(item,i) of list" :key="i" :data-idx="i" @click="setActive">
{{item}} 
 </mt-button>   
</div>
<div>
    <!--父面板-->
<mt-tab-container v-model="active">
    <!--子面板-->
    <mt-tab-container-item id="tab1">
        美食
    </mt-tab-container-item>
    <!--子面板-->
    <mt-tab-container-item id="tab2">
        购物
    </mt-tab-container-item>
    <!--子面板-->
    <mt-tab-container-item id="tab3">
        休闲
    </mt-tab-container-item>
</mt-tab-container>
</div>
</div>
</template>
<script>
export default {
    data(){
        return {
            list:["美食","购物","休闲","吃饭"],
            active:"tab1",
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
                  this.active="tab"+(idx+1)
        }
    }
}
</script>