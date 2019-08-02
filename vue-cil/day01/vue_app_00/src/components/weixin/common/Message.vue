<template>
<div @click="itemClick(id)"
        class="rootstyle">   
    <div class="leftImgAndTxt">
        <img :src="imgurl"
        class="imgstyle">
        <div class="rightOfImg">
            <span class="title">
            {{title}}
            </span>
            <span class="subtitle">
            {{subtitle}}
            </span>
        </div>
    </div>
    <span>
        {{sendtime}}
    </span>
</div>
</template>
<script>
export default {
    props:{
        qwe:{default:""},
        imgurl:{default:""},
        title:{default:""},
        subtitle:{default:""},
        sendtime:{default:""},
        id:{default:""},
        itemClick:{typr:Function}
    },
    data(){
        return{}
    },
}
</script>
<style>
    /*1.根元素样式*/
    .rootstyle{
        display:flex;
        justify-content:space-between;
        /*弹性布局中，垂直方向居中*/
        align-items:center;
    }
    /*2.图片与文本样式*/
    .leftImgAndTxt{
     display:flex;   
    }
    /*3.图片样式*/
    .imgstyle{
        width:50px;
        height:50px;
    }
    /*4.图片右侧文本*/
    .rightOfImg{display:flex;
    flex-direction:column;/*按照列排列*/
    justify-content:center;/*文字居中*/
    margin-left:7px;
    }
    .subtitle{margin-top:5px;color:gray}
</style>