<template>
    <div>
    表单
    <h1>输入域</h1>
    <div>
    <!--label自动转换为span标签 mt-field自动转换为input标签-->
    <mt-field label="用户名" placeholder="请输入用户名" :attr="{maxlength:10}"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" :attr="{maxlength:9}" type="password" v-model="passw"></mt-field>
    <mt-field label="生日" placeholder="生日年月" :attr="{maxlength:9}" type="date" v-model="salary"></mt-field>
    </div>
    </div>
</template>
<script>
export default {
    
    data(){return {
        uname:"lilei",
        passw:123,
        salary:"1994-07"
    }},
    methods:{openPromt(){
        this.$messagebox.prompt("请输入用户名").then(
            //(action)=>{}===action=>{}
            action=>{console.log(action);console.log("输入成功")}
        )
    }}
}
</script>