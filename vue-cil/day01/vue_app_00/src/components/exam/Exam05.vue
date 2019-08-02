<template>
<div>   
<h3>表单练习</h3>
<h4>开关组件</h4>
<mt-switch v-model="val3">开关</mt-switch>
<h4>单选列表组件</h4>
<!--va14是选项的内容-->
<mt-radio v-model="val4" :options="['选项a','选项b','选项c']"></mt-radio>
<button @click="handleRadio">选中哪个</button>
<h4>复选列表组件</h4>
<mt-checklist v-model="val5" :options="['选项a','选项b','选项c']"></mt-checklist>
<button @click="handleCheck">读取复选框内容</button>
</div>
</template>
<script>
export default {
    data(){
        return {
            val3:true,
            val4:"",
            val5:[]
        }
    },
    methods:{
        handleRadio(){
            console.log(this.val4)
        },
        handleCheck(){
            console.log(this.val5)
        }
    }
}
</script>
