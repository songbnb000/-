<template>
<!--子组件可以自己写函数，写在父组件的话，有一个比较好的好处就是别的子组件也可以使用。子组件自己也有methods的功能-->
<!--props,就是一个拿来放东西的功能-->
    <div>
        <h3>子组件 S09.vue</h3>
        <h3>{{msg}}</h3>
        <img :src="img_url">
        <button @click="add3"></button>
    </div>
</template>
<script>
export default {
    props:{
        //接收父组件数据
        msg:{default:""},//接收消息--空字符
        img_url:{default:""},//接收url地址--空字符
    },  
    data(){
        return{}
    },
    methods:{
         add3(){
             console.log(123)
         }
    }
}
</script>