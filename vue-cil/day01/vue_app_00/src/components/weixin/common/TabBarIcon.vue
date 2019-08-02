<template>
    <div>
        <!--如果focused是ture的话显示selectedImage不然就显示normalImage-->
        <img :src="focused?selectedImage:normalImage" class="imgstyle">
    </div>
</template>
<script>
export default {
    data(){
        return{} 
    },
    props:{
        focused:true,
        selectedImage:{default:""},
        normalImage:{default:""}
    }

}
</script>
<style scoped>
     .imgstyle{width:30px;height:30px;}
</style>