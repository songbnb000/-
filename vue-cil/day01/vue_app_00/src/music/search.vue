<template>
    <div class="songlistdiv">
                <div class="songlistdiv1-2">
                    <button @click="gqxc4" >{{c}}</button>
                    <input type="text" class="songlistdiv1input" placeholder="请输入歌名、歌手、或者专辑名字" id="input1">
                    <span id="span1"></span>
                    <a :href="'https://music.163.com/#/search/m/?id=27955653&s='+c">132</a>
                    <i></i>
                </div>
        </div>
</template>
  <script>
  export default {
      data(){
          return{
              nihao:{name:"海阔天空"},
              c:{}
          }
      },
      methods:{            
          gqxc4(){this.axios.get("/search/suggest?keywords=%20海阔天空").then(res=>{
                var Chinaboy=res.data.result
                this.Chinaboy4=Chinaboy
                var a=document.getElementById("input1")
                var b=document.getElementById("span1")
                 b.innerHTML=a.value   
                 var c=b.innerHTML
                console.log(c)
                console.log(this.Chinaboy4)
                return this.c
       })
        }
      },
    mounted(){

    },
  }
  </script>  
  <style scoped>
      
  </style>