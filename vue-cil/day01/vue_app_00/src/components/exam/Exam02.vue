<template>
<div>
        交互提示框
<button @click="openAlert">简写提示框</button>
<button @click="openConfirm">提示确认</button>
<button @click="openPromt">输入确认</button>
</div>
</template>
<script>
//exports输出
//default系统设定值
export default{
    data(){
        return {}
    },
    methods:{
        openAlert(){
            console.log(123)
            this.$messagebox({
                //标准写法
                //提示框的上方的消息
                //title:"消息",
                //提示框的你饿哦让
                //message:"执行操作成功"
            }),
                        //简写：
             this.$messagebox("删除成功","确认")
        },
        openConfirm(){
            //action=>{}===(action)=>{},action是vue里面自带的一个参数对应按钮中的确定
            console.log(this)
            this.$messagebox.confirm("是否删除指定数据").then(action=>{console.log(action);console.log("数据删除成功");})
            console.log("111")
        },
        openPromt(){
            this.$messagebox.prompt("请输入年龄").then(({value,action})=>{console.log(value);
            console.log(action);
            })
        }
    }
}
</script>