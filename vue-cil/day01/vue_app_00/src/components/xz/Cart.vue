<template>
   <!--Cart.vue-->
  <div class="cart">
    <div class="selectAll">
     <!--全选-->
      全选
     <input type="checkbox" @change="selectAll"/>
    </div>
    <div class="cart-item" v-for="(item,i) of list" :key="i">
     <!--商品列表 15:41-->
     <div class="leftImgText">
       <input type="checkbox" v-model="item.cb"/>
       <img :src="'http://127.0.0.1:3000/img/'+item.img_url" />
       <div class="price">
          <span>
            {{item.price}}
          </span>
       </div>
     </div>
     <mt-button :data-id="item.id" @click="delItem"
     >删除</mt-button>
    </div>
    <div>
    <!--删除选中商品-->
      <mt-button @click="delAll">
       删除选中商品
      </mt-button>
      <h3>
        购物车数量:
        <span style="color:red">
        {{$store.getters.getCartCount}}
        </span>
      </h3>
    </div>
  </div>  
</template>
<script>
  export default {
    data(){
      return {
        list:[]
      }
    },
    created() {
      this.loadMore();
    },
    methods:{
     delAll(){
      //删除多个商品 1,2,3
      //1:创建变量保存空字符串
      var str = "";
      //2:创建循环拼接字符串内容
      for(var item of this.list){
         if(item.cb){
           str += item.id+","
         }
      }
      //截取最后逗号之前内容
      str = str.substring(0,str.length-1);
      //3:判断如果用户没选商品提示
      if(str.length==0){
       this.$toast("请选中商品");
       return;
      }
      //4:发送ajax请求404
      var url = "delAll";
      var obj = {ids:str};
      this.axios.get(url,{params:obj}).then(result=>{
        //获取没有删除商品
        this.loadMore();
      });
      //5:重新加载数据
     },
     delItem(e){
     //1:获取当前商品id
     var id = e.target.dataset.id;
     //2:显示交互确认框 27
     //3:如果用户选择 "确认"
     this.$messagebox.confirm("是否删除指定数据").then(action=>{
        var url = "delItem";
        var obj = {id:id};
        this.axios.get(url,{params:obj}).then(result=>{
          //重新加载数据相当刷新
          this.loadMore();
        })
     }).catch(err=>{
       return;
     })

     //4:发送ajax删除数据
     //5:如果用户选择 "取消"
      },
      selectAll(e){
     //全选按钮状态
     var cb =  e.target.checked;
     //依据状态修改列表cb
     for(var item of this.list){
        item.cb = cb;
     }
       

      },
      loadMore(){
        //1:创建url
        var url = "cart";
        //2:发送ajax请求
        this.axios.get(url).then(result=>{
          //this.list = //result.data.data;
          //1:获取服务器数组
          var rows = result.data.data;
          //2:创建循环为数组中每个//对象添加cb属性
          //cb控制商品前复选框
          for(var item of rows){
           //2.1:添加cb属性
           item.cb = false;
           //2.2:更新购物车数量
           //this.$tsore.commit获取修改函数
           //increment是修改的函数
          this.$store.commit("increment");
          }
          //3:将新数据保存
          this.list = rows;
        })
      }
    }
  }  
</script>
<style scoped>
  /*最外层弹性布局*/
 .cart-item{
  display:flex;/*弹性布局*/
  justify-content:space-between;
  align-items:center;/*垂直居中*/
  border-bottom:1px solid #ccc;
 }
 .leftImgText{
   /*默认子元素水平对齐*/
   display:flex;
   align-items:center;/*垂直居中*/
 }
 .leftImgText img{
   width:50px;
   height:50px;
 }
 .price{
   margin-left:25px;
 }
</style>