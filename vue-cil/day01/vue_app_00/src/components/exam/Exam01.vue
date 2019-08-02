<template>
<div>
第一个组件，唯一根元素 div
<button @click="openToast">显示提示消息</button>
</div>
</template>
<script>
export default{
    //data:function(){}
    data(){//当前组件共享数据
        return{}//数据
    },
    methods:{
        openToast(){
            //显示短消息
            console.log(this)
            this.$toast({
                //消息内容
                message:"操作成功",
                //消息位置
                //middlen中间
                position:"middlen",
                //持续时间
                duration:1500,
                //添加样式
                className:"mytoast",
                //图标样式
                //iconfont是iconfont这个文件
                //.icon-food-cookie是iconfont这个文件中的样式的意思
                iconClass:"iconfont icon-food-cookie"
            })
        }
    }
}

</script>
<style>
/*存放样式*/
.mytoast{
    background-color:#fff
    !important;
    color:red
    !important;
    font-size:19px
    !important;
    border:1px solid yellow
    !important;
}
</style>