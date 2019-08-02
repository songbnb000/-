<template>
    <div class="product_app">
        <!--Product.vue-->
        <div class="goods-item"></div>
            <img :src="require('../../assets/iconfont/02.png')">
            <h4>海尔洗衣机</h4>
            <div class="info">
            <span class="now">111</span>
        </div>
        <div class="goods-item"
        v-for="(item,i) of list" :key="i">
            <img :src="'http://127.0.0.1:3000/img/'+item.img_url">
            <h4>{{item.title}}</h4>
            <div class="info">
                <span class="now">1111</span>
            </div>
        </div>
        <mt-button size="large" type="primary" @click="loadMore">
            <!--加载更多-->
        </mt-button>
    </div>
</template>
<script>
export default {
    data(){return {list:[],
    //页数
    pno:0,
    pageSize:4
    }
    },
    methods:{
        loadMore(){
            //加载更多的数据
            var url="product";
            //将当前的页码+1
            this.pno++;
            var obj={pno:this.pno,pageSize:this.pageSize};

            this.axios.get(url,{params:obj}).then(result=>{
                console.log(result);
                //数据覆盖
                this.list=result.data.data
                //数据追加
                var rows=this.list.concat
                //concat()数组或者数组对象连接的功能比如concat(数组1(数组2))
                (result.data.data);
                    this.list=rows
            })
        }
    },
    created(){this.loadMore()}
    }
</script>
<style scoped>
    .product_app{
        /*最外层父元素*/
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        padding:4px;
    }
   .product_app .goods-item{
       width:49%;
       border:1px solid #ccc;
       box-sizing:border-box;
       margin:2px 0;
       padding:2px;
       display:flex;/*弹性布局*/
       flex-direction:column;/*按照列*/
       min-height:247px;/*最小高度*/
       border-radius:5px/*圆角*/
    }
    .product_app .goods-item img{
        width:100%
    }
</style>
