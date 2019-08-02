<template>
<div>
    <!--vue中的id跟html的不一样，vue的id会自动转换，转换完成到页面中的时候，不是以id的形式展示，比如vue的id就只是给面板标签起个名称的意思-->
    <!--实现要求：点击下方导航栏的草莓或者别的图标的，显示对应的面板-->
    <!--实现原理：只要当父面板的selected=子面板的id，子面板就会显示。当点击下方导航草莓的时候，那么下方导航栏的id="草莓"，草莓就会给"selected"这个变量，那么父面板的selected自然就等于草莓，所以子面板草莓就会显示-->
    <!--父面板-->
    <mt-tab-container v-model="selected">
        <!--子面板-->
        <mt-tab-container-item id="草莓">
            草莓
        </mt-tab-container-item>
        <mt-tab-container-item id="皇冠">
            皇冠
        </mt-tab-container-item>
            <mt-tab-container-item id="布丁">
            布丁
        </mt-tab-container-item>
            <mt-tab-container-item id="蛋糕">
            蛋糕
        </mt-tab-container-item>
    </mt-tab-container>
    <!--nav导航栏-->
    <!--fiexd意思就是固定在导航的最下面-->
    <!--v-model="selected"  当点击按钮的时候selected这个变量会存放下面<mt-tab-item>标签里面id的属性值-->
    <mt-tabbar v-model="selected" fiexd>
        <mt-tab-item id="草莓">
            <!--slot添加的意思 添加icon~~-->
            <img slot="icon" src="../../assets/iconfont/02.png">   
            草莓
        </mt-tab-item> 
        <mt-tab-item id="皇冠">
            <!--slot添加的意思 添加icon~~-->
            <img slot="icon" src="../../assets/iconfont/03.png">   
            皇冠
        </mt-tab-item> 
        <mt-tab-item id="布丁">
            <!--slot添加的意思 添加icon~~-->
            <img slot="icon" src="../../assets/iconfont/04.png">   
            布丁
        </mt-tab-item> 
        <mt-tab-item id="蛋糕">
            <!--slot添加的意思 添加icon~~-->
            <img slot="icon" src="../../assets/iconfont/05.png">   
            蛋糕
        </mt-tab-item> 
    </mt-tabbar>  
</div>
</template>
<script>
export default {
    data(){
        return{
            selected:""
        }
    }
}
</script>