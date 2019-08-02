<template>
    <div class="cnd-table">
        <el-table :data="table" stripe border class="el-table01"
                            ref="table">
          <el-table-column type="index" label="序号" width="56" align="center"></el-table-column>
          <el-table-column prop="name" label="用户名" min-width="140" align="center"></el-table-column>
          <el-table-column prop="mobile" label="手机号" min-width="100" align="center"></el-table-column>
                        
          <p slot="append" style="text-align:center; line-height:50px;" v-loading="loading">
            <a href="javascript:;"  @click="getMData()" class="blue01">点击加载更多</a>
          </p>
        </el-table>
      </div>
</template>
<script>
export default {
  data(){
    return{
         loading: true,
        table:[],
        pageIndex:1
    }
  },
  method:{
     getData() {
        let me = this;
        //获取数据，在获取数据成功后，则关闭loading效果
        me.slotloading=false;
},
 
    getMData() {
            let me = this;
            me.pageIndex++;
            self.loading = true;
            me.getData();
        },
  }
}
</script>
<style scoped>
  
</style>
