<template>
<div>
<musichead></musichead>
<hotsong></hotsong>
<carousel></carousel>
<carousel2></carousel2>
<musicborder></musicborder>
<round></round>
<carousel3></carousel3>
<hotsonglist></hotsonglist>
<music2yuan></music2yuan>
</div>
</template>
<script>
import musichead from "./musichead.vue"
import hotsong from "./hotsong.vue"
import carousel from "./carousel.vue"
import hotsonglist from "./hotsonglist.vue"
import round from "./round.vue"
import carousel3 from "./carousel3.vue"
import carousel2 from "./carousel2.vue"
import musicborder from "./musicborder.vue"
import music2yuan from "./music2yuan.vue"
import jQuery from "./jquery/js/jquery-1.11.3.js"
export default {
    data(){
        return{}
    },
    components:{
        "musichead":musichead,
        "hotsong":hotsong,
        "carousel3":carousel3,
        "hotsonglist":hotsonglist,
        "carousel2":carousel2,
        "musicborder":musicborder,
        "round":round,
        "carousel":carousel,
        "music2yuan":music2yuan
    }
}
</script>
<style scoped>
</style>