<template>
<div class="tablediv">
<musichead></musichead>
<div class="tablediv-div1">
<span class="table-span">你要的歌单这里都有</span>
</div>
<div class="tablediv-div">
    <!-- <span style="width:100%;" height="180" class="divdiv">
      {{songlist3.slice((currentPage-1)*pagesize,currentPage*pagesize)}}
    </span>-->
            <!--这个页面要先看注释，每个表格的class都设置了左浮动，但是表格左浮动的class名字是一样的，如果第二个class设置左浮动，但是名字不一样，就会有一个莫名其妙的有边距，这就是个坑！！！！   为了避免分页功能不漂在上面，分页功能也设置了左浮动，但是分页功能的左浮动class名字跟表格不一样，写之前看看这段注释-->
    <el-table style="width:300px"
                    :data="songlist2.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                   class="tablenew">   
              <el-table-column width="230">
                        <template slot-scope="scope" width="300">
                        <img :src="scope.row.coverImgUrl" alt="" width="200" height="200">
                        <a :href="'https://music.163.com/#/playlist?id='+scope.row.id" class="nameelementa">{{scope.row.name}}</a>
                        </template>
              </el-table-column>
      </el-table>
      <el-table style="width:300px"
                    :data="songlist3.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                   class="tablenew">
              <el-table-column width="230">
                        <template slot-scope="scope" width="300">
                        <img :src="scope.row.coverImgUrl" alt="" width="200" height="200">
                        <a :href="'https://music.163.com/#/playlist?id='+scope.row.id" class="nameelementa">{{scope.row.name}}</a>
                        </template>
              </el-table-column>
      </el-table> 
      <el-table style="width:300px"
                    :data="songlist4.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                   class="tablenew">
              <el-table-column width="230">
                        <template slot-scope="scope" width="300">
                        <img :src="scope.row.coverImgUrl" alt="" width="200" height="200">
                        <a :href="'https://music.163.com/#/playlist?id='+scope.row.id" class="nameelementa">{{scope.row.name}}</a>
                        </template>
              </el-table-column>
      </el-table>
      <el-table style="width:300px"
                    :data="songlist5.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                   class="tablehot">
              <el-table-column width="230">
                        <template slot-scope="scope" width="300">
                        <img :src="scope.row.coverImgUrl" alt="" width="200" height="200">
                        <a :href="'https://music.163.com/#/playlist?id='+scope.row.id" class="nameelementa">{{scope.row.name}}</a>
                        </template>
              </el-table-column>
      </el-table>  
    <!--  <el-table style="width:300px"
                    :data="songlist6.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                   class="tablehot">
              <el-table-column width="230">
                        <template slot-scope="scope" width="300">
                        <img :src="scope.row.coverImgUrl" alt="" width="180">
                        <a :href="'https://music.163.com/#/playlist?id='+scope.row.id" class="nameelementa">{{scope.row.name}}</a>
                        </template>
              </el-table-column>
      </el-table>               --> 
                      <!--<el-table-column label="歌单名字" prop="name" width="300"> 
                      
                        </el-table-column>
             
                        <el-table-column label="用户评论" prop="description" width="300">    
                        </el-table-column>
                        <el-table-column label="邮箱" prop="commentId" width="180">
                            
                        </el-table-column>
                        <el-table-column label="地址" prop="address" width="200">    
                        </el-table-column> -->   
    <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="[5, 10, 20, 40]"
    :page-size="pagesize" 
    background
    layout="total, sizes, prev, pager, next, jumper"
    :total="50"
    >
    </el-pagination>
  </div>
  </div>
</template>
<script>
import musichead from "./musichead.vue"
  export default {
    data(){
      return {
         currentPage:1, //初始页
         pagesize:10,    //    每页的数据
         userList:[],
         songlist2:[],
         songlist3:[],
         songlist4:[],
         songlist5:[],
         songlist6:[]
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
           /* this.songlist2=songlistdata1*/
            var songlist2=[]
           for(var i in songlistdata1){
            this.songlist2.push(songlistdata1[i])}
            console.log(this.songlist2)
            return this.songlist2
        })
        },    
        bfsonglist2(){this.axios.get("/top/playlist?limit=50&order=hot").then(res=>{
            var songlistdata1=res.data.playlists
           /* this.songlist2=songlistdata1*/
            var songlist3=[]
           for(var i in songlistdata1){
            this.songlist3.push(songlistdata1[i])}
            console.log(this.songlist3)
            return this.songlist3
        })
        },
        bfsonglist3(){this.axios.get("/top/playlist/?cat=经典&limit=50").then(res=>{
            var songlistdata1=res.data.playlists
           /* this.songlist2=songlistdata1*/
            var songlist4=[]
           for(var i in songlistdata1){
            this.songlist4.push(songlistdata1[i])}
            console.log(this.songlist4)
            return this.songlist4
        })
        },   
        bfsonglist4(){this.axios.get("/top/playlist/?cat=摇滚&limit=50").then(res=>{
            var songlistdata1=res.data.playlists
           /* this.songlist2=songlistdata1*/
            var songlist5=[]
           for(var i in songlistdata1){
            this.songlist5.push(songlistdata1[i])}
            console.log(this.songlist5)
            return this.songlist5
        })
        },  
        bfsonglist5(){this.axios.get("/top/playlist/?cat=怀旧&limit=50").then(res=>{
            var songlistdata1=res.data.playlists
           /* this.songlist2=songlistdata1*/
            var songlist6=[]
           for(var i in songlistdata1){
            this.songlist6.push(songlistdata1[i])}
            console.log(this.songlist6)
            return this.songlist6
        })
        },
    },
      components:{
        "musichead":musichead,
    },
    created(){
        this.handleUserList()
        this.bfsonglist1()
        this.bfsonglist2()
        this.bfsonglist3()
        this.bfsonglist4()
        this.bfsonglist5()
    },
  }
</script>
<style scoped>
*{padding:0;margin:0}
    .songlistdiv{
        margin:0 auto;
    }
    
    .imagesize{
    background-size:100% 100%;
    }
    .divdiv{
      background-color:aquamarine
    }
    .nameelementa{
      height:43px;
      display:block;
      text-decoration:none;
      font-size:15px;
      
    }
    .nameelementa:hover{
      display:block
    }
   .tablenew{
      float:left;
    }
    .tablehow{
      float:left;
    }
    .tableliuxing{
      float:left;
    }
    .tablediv{
      width:100%;
      height:100%;

    }
    .tablediv-div{
      width:1350px;
      height:100%;
      margin:0 370px;
    }
    .tablediv-div1{
      width:1110px;
      height:100%;
      margin:0 370px;
    }
    .table-span{
      background: -webkit-linear-gradient(left,#23966c, #faaa54, #e23b4a, #db0768, #360670);
      background: linear-gradient(to right,#23966c, #faaa54, #e23b4a, #db0768, #360670);
      color:bisque;
      display:block;
      margin-top:30px;
      font-size:30px;
    }
</style>   