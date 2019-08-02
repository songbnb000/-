<template>
<div>
    <!--面板-->
    <!--image;a;button;submit;img;绑定事件，需要阻止默认行为，不然的话，会跳转地址。能不用就不用
    prevent阻止行为
    -->
<div>
        <!--active的值和哪个子面板id的值一样，那个子面板就显示-->
    <mt-tab-container v-model="active">
    <!--子面板1-->
    <mt-tab-container-item id="tab1">
    子面板1
    </mt-tab-container-item>   
    <!--子面板2-->
    <mt-tab-container-item id="tab2">
    子面板2
    </mt-tab-container-item>
    <!--子面板3-->
    <mt-tab-container-item id="tab3">
    子面板3
    </mt-tab-container-item> 
    </mt-tab-container>
    <mt-button type="danger" size="small" @click.prevent="itemTab1">面板1</mt-button>
    <mt-button type="danger" size="small" @click.prevent="itemTab2">面板2</mt-button>
    <mt-button size="small" type="danger"
    @click.prevent="itemTab3">面板3</mt-button>
</div>
    <!--三个按钮-->
    <!--面板[一个父面板->三个子面板]-->
</div>
</template>
<script>
export default {
    data(){
        return{
            active:"tab1"
        }
    },
    methods:{
        itemTab1(){
            this.active="tab1"
        },
         itemTab2(){
                 this.active="tab2"
        },
         itemTab3(){
            this.active="tab3"
        }
    }
}
</script>