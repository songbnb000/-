<template>
<div class="weixin_container">
    <titlebar leftTitle="微信(11)" :rightFirstImg="require('../../assets/ic_search.png')" 
    :rightSecondImg="require('../../assets/ic_add.png')"
    :search="mysearch"
    :add3="myadd3"
    >
    </titlebar>
    <!--防止顶部内溢出-->
    <div style="margin-top:48px"></div>
    <!--面板-->
    <mt-tab-container v-model="active">
        <mt-tab-container-item id="message" fixed>
        </mt-tab-container-item>
    </mt-tab-container> 
    <messagelist>
    </messagelist>
            <!--导航条-->
    <mt-tabbar v-model="active" fixed>
        <!--第一个底部导航条-->
        <mt-tab-item id="message">
            <!--图片-->
            <!--focused为ture就使用:selectedImage(色绿图片)否则使用:normalImage(白色图片)-->
            <tabbaricon
            :selectedImage="require('../../assets/ic_weixin_selected.png')"
            :normalImage="require('../../assets/ic_weixin_normal.png')"
            :focused="isSelected">
            </tabbaricon>
            微信
        </mt-tab-item>
            <!--第二个底部导航条-->
        <mt-tab-item id="">
            <!--图片-->
            <tabbaricon
            :selectedImage="require('../../assets/ic_weixin_selected.png')"
            :normalImage="require('../../assets/ic_weixin_normal.png')">
            </tabbaricon>
            微信
        </mt-tab-item>
            <!--第三个底部导航条-->
        <mt-tab-item id="">
            <!--图片-->
            <tabbaricon
            :selectedImage="require('../../assets/ic_contacts_selected.png')"
            :normalImage="require('../../assets/ic_contacts_normal.png')"
            >
            </tabbaricon>
            通讯录
        </mt-tab-item>
            <!--第四个底部导航条-->
            <mt-tab-item id="">
            <!--图片-->
            <tabbaricon
            :selectedImage="require('../../assets/ic_weixin_selected.png')"
            :normalImage="require('../../assets/ic_weixin_normal.png')">
            </tabbaricon>
            微信
        </mt-tab-item>
    </mt-tabbar>  
</div>
</template>
<script>
//引入顶部导航条子组件
import TitleBar from "./common/TitleBar.vue"
//引入消息列表子组件
//import Message from "./common/Message.vue"
//引入消息列表子组件
import MessageList from "./common/MessageList.vue"
//调用顶部导航条子组件
import TabBarIcon from "./common/TabBarIcon.vue"
export default {
    data(){
        return {
            active:"message",
            isSelected:true,
            //使用数据保存图片焦点状态
            currenIndex:[{isSelect:true},{isSelect:false}]
}
    },
    methods:{
        mysearch(){console.log("搜索")},
        myadd3(){console.log("添加")
        }
    },
        //注册顶部导航条子组件
    components:{
        //放子组件
        //标签名称
        "titlebar":TitleBar,
        "messagelist":MessageList,
        "tabbaricon":TabBarIcon
    }
}
</script>
<style scoped>
    /*溢出隐藏*/
    .weixin_container{
    overflow:hidden;
}
    .page-wrap{
    overflow:auto;
    padding-bottom:60px;}   
    /*当active和id的值不一样时，会出现默认文字颜色*/
    /*修改tabbar默认的文字颜色*/
    .mint-tabbar>.mint-tab-item{
        color:#999999
    }
    /*当鼠标点击的时候为选中，
    应该是使用toggle这个功能，如果点击的时候，id有message自动去掉。没有的话，就自动添加
    修改tabbar选中颜色*/
        /*在f12中，文字样式为.mint-tabbar下面的.mint-tab-item.is-selected这个为选中的字体颜色，所以修改这个等同于修改文字颜色*/
    .mint-tabbar>.mint-tab-item.is-selected{
        background-color:transparent;/*导航条的背景框*/
        color:#45c018;

    }
</style>