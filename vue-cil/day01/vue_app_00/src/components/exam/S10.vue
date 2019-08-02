<template>
    <div>
        <h3>父组件 F10</h3>
        <s09 msg="微信(11)"
        :img_url="require('../../assets/iconfont/01.png')"
        ></s09>
    </div>
</template>
<script>
//引入子组件
import S09 from "./S09.vue";
export default{
    data(){
        return{}
    },
    //methods:{
      //  myadd(){
        //    console.log(123)
        //}
    //},
    components:{
        //注册子组件
        //s09是相当于标签名
    "s09":S09
}
}
</script>
