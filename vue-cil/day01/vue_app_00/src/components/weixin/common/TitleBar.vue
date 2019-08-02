<template>
<div>
    <!--1大div里面嵌套span和一个div，第二个div包含两个div，两个div里面各自嵌套一个img-->
    <div class="page-head">
        <span>{{leftTitle}}</span>
        <div class="right-head"> 
            <div @click="search"
            class="searchdiv">
                <img :src="rightFirstImg" style="width:25px">
            </div>
            <div @click="add3"
            class="searchdiv"
            style="margin-left:20px">
                <img :src="rightSecondImg"
                style="width:25px;margin-right:15px">
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    //左侧图片 左右两张图片
    props:{
        leftTitle:{default:""},
        rightFirstImg:{default:""},
        rightSecondImg:{default:""},
        search:{type:Function},
        add3:{type:Function},
    },
    data(){
        return{}
    }
}
</script>
<style scoped>
    /*1.最外层父元素*/
    .page-head{display:flex;
    /*弹性布局*/
    position:fixed;
    /*固定定位*/
    z-index:999;
    /*堆叠*/
    width:100%;
    /*填充100*/
    justify-content:space-between;
    /*没有空间*/
    align-items:center;
    /*垂直居中对齐*/
    background-color:#3e3a39;
    padding-left:7px;
    padding-right:7px;
    height:48px;
    color:#fff;
    font-size:18px;}
    /*2.右侧图片区域*/
    .right-head{display:flex;}
    /*图片*/
    .searchdiv{
    display:fiex;
    align-items:center;}
</style>