<template>
    <div>
        <h1>A.vue使用vuex中集中保存共享的数据</h1>
        <h1>{{$store.getters.getAge}}</h1>
        <!--输出23-->
        <h1>{{$store.getters.getList}}</h1>
        <h1>{{$store.mutations.updateAge}}</h1>
        <button @click="upAge">点击改变age</button>



    </div>
</template>
<script>
export default {
     created(){
        console.log(this)//==>this等于当前vuexa组件
    },
    methods:{
        upAge(){
            //调用修改共享数据方式
            //括号里面放main.js函数的名字
            //commit后面放main.js要调用的函数名字
            this.$store.commit("updateAge")
        }
    }
}
</script>