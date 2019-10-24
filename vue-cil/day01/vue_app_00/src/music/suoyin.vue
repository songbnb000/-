<template>
<div>
    <div style="width: 100%;"
                    :data="songlist2.slice((currentPage-1)*pagesize,currentPage*pagesize)">
    </div>
   <!-- <div class="songlistdiv1" :data="songlist2.slice((currentPage-1)*pagesize,currentPage*pagesize)">
                <img v-for="(item1,i) in songlist2" :key="i+'1'" :src="item1.coverImgUrl"   class="imgsize">
                <a :href="'https://music.163.com/#/playlist?id='+item2.id" v-for="(item2,index2) in songlist2" :key="index2+'2'" class="songlista">
         {{item2.name}}
         </a>
            </div>-->
            
    <el-table style="width: 100%;"
                    :data="songlist2.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                    >
      
                        <el-table-column type="index" width="50" label="序号">    
                        </el-table-column>
                       
                        <el-table-column label="歌单名字" prop="name" width="300"> 
                      
                        </el-table-column>
             
                        <el-table-column label="用户评论" prop="description" width="300">    
                        </el-table-column>
                        <el-table-column label="邮箱" prop="commentId" width="180">
                            
                        </el-table-column>
                        <el-table-column label="地址" prop="address" width="200">    
                        </el-table-column>    
                    </el-table>-->
    <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="[5, 10, 20, 40]"
    :page-size="pagesize" 
    background
    layout="total, sizes, prev, pager, next, jumper"
    :total="songlist2.length">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    data(){
      return {
         currentPage:1, //初始页
         pagesize:10,    //    每页的数据
         userList:[],
         songlist2:[]
      }
    },
        methods:{
       // 初始页currentPage、初始每页数据数pagesize和数据data
        handleSizeChange: function (size) {
                this.pagesize = size;
                console.log(this.pagesize)  //每页下拉显示数据
        },
        handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
                console.log(this.currentPage)  //点击第几页
        },
        handleUserList(){this.axios.get("/comment/hot?id=1396162013&type=0").then(res=>{
            var regebang5=res.data.hotComments
           /* for(var i=0;toplist.length<=10;i++){
                    this.toplistsong=toplist
                   
            }*/
            this.userList=regebang5
           var userList=[]
           for(var i in userList){
            userList.push(userList[i]);
            //转成了数组
}           console.log(this.userList)
            return this.userList
        })
        },
        bfsonglist1(){this.axios.get("/top/playlist?limit=50&order=new").then(res=>{
            var songlistdata1=res.data.playlists
            this.songlist2=songlistdata1
            var songlist2=[]
           for(var i in songlist2){
            userList.push(songlist2[i])}
            console.log(this.songlist2)
            return this.songlist2
        })
        },
    },
    created(){
        this.handleUserList()
        this.bfsonglist1()
    },
  }
</script>
<style scoped>
*{padding:0;margin:0}
    .songlistdiv{
        margin:0 auto;
    }
    .songlistdiv1{
        /*页面的高*/
        width:1200px;
        height:2700px;
        flex-wrap:wrap;
        display:flex;
        justify-content:space-between;
        margin:0 auto;
    }
       .songlistdiv2{
        /*页面的高*/
        width:1200px;
        height:2700px;
        flex-wrap:wrap;
        display:flex;
        justify-content:space-between;
        margin:0 auto;
    }
    .imgsize{
        background-size:100% 100%;
        width:220px;
        height:220px;
        margin-bottom:49px;
    }
    .songlista{
        width:220px;
        height:20px;
        display:block;
        overflow: hidden;
        bottom:2700px;
        padding-top:247px;
        flex-wrap:wrap;
        display:flex;
        justify-content:space-between;
        position:relative;
        text-decoration:none;
    }
    .songlista1{
         width:220px;
        height:20px;
        display:block;
        overflow:hidden;
        bottom:2700px;
        padding-top:247px;
        flex-wrap:wrap;
        display:flex;
        justify-content:space-between;
        position:relative;
        text-decoration:none;
    }
    .songlista1:hover{
        overflow:visible;
    }
    .songlistfooter1div{
        width:1200px;
        height:41px;
        margin:10px auto;
    }
    .musicheadtag{
        margin-bottom:30px;
    }
   /*.buttontag:hover{
    color:#fff;*/
    /*background: -webkit-linear-gradient(red, blue);  Safari 5.1 - 6.0 
    background: -o-linear-gradient(red, blue);  Opera 11.1 - 12.0 
    background: -moz-linear-gradient(red, blue);  Firefox 3.6 - 15 
    background: linear-gradient(red, blue);  标准的语法（必须放在最后）
    }*/
</style>   