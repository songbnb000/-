<template>
<div>
    <message qwe="你好"
    v-for="(item,i) in list.data" :key="i"
    :imgurl="require('../../../assets/a_7.png')"
    :title="item.title"
    :subtitle="item.subtitle"
    :sendtime="item.time"
    :id="item.id"
    :itemClick="clickItem"
    class="itemstyle"
    >
    </message>
</div>
</template>
<script>
//引入子组件
import Message from "./Message.vue"
//引入json
//messagejson是自己命名的文件名称
import messagejson from "../json/messageList.json"
export default {
    data(){
        return{
            //list也是自己命名
            list:messagejson
        }
    },
    components:{
        "message":Message
    },
    methods:{
        clickItem(id){
            console.log(id)
        }
    }
}
</script>
<style>
.itemstyle{padding:5px;
border-bottom:1px solid #d9d9d9}
</style>
