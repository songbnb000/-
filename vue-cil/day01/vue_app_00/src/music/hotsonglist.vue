<template>
    <div class="hotsonglist">
        <h2 class="hotsonglist-h2">
            热门活动
            <a href="javascript:;" class="hotsonglist-h2-a">
                更多
            </a>
        </h2>
        <div class="hotdiv">
            <div class="hotdiv1">
                <a href="javascript:;" class="hotdiv1-h3-a1">
                    <!--放图片-->   
                </a>
                <h3 class="hotdiv1-h3">
                    <a href="javascript:;" class="hotdiv1-h3-a-1">
                        少年红星音乐计划
                    </a>
                </h3>
            </div>
            <div class="hotdiv2">
                <a href="javascript:;" class="hotdiv1-h3-a2">
                </a>
                <h3 class="hotdiv1-h3">
                    <a href="javascript:;" class="hotdiv1-h3-a-1">
                        千千nu创音乐榜
                    </a>
                </h3>
            </div>
            <div class="hotdiv3">
                <a href="javascript:;" class="hotdiv1-h3-a3">
                </a>
                <h3 class="hotdiv1-h3">
                    <a href="javascript:;" class="hotdiv1-h3-a-1">
                        蔡琴
                    </a>
                </h3>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    }
}
</script>
<style scoped>
    .hotsonglist{
        width:1200px;
        height:249px;
        margin:40px auto;

    }
    .hotsonglist-h2{
        width:1200px;
        height:38px;
        margin:0 0 25px;
        font-size:24px;
        font-family:PingFangSC-Regular,poppin,Tahoma,Arial,sans-serif;
        color:#333;
        letter-spacing:1px;
        font-weight:400;
    }
    .hotsonglist-h2-a{
        text-decoration:none;
        font-size:14px;
        font-family:PingFangSC-Regular,poppin,Tahoma,Arial,sans-serif;
        color:#999;
        letter-spacing:1px;
    }
    .hotdiv{
        width:1200px;
        height:186px;
        display:flex;
        display:-webkit-flex;
        flex-wrap:wrap;
    }
    .hotdiv1:hover{
        font-size:110%;
    }
    .hotdiv2:hover{
        font-size:110%;
    }
    .hotdiv3:hover{
        font-size:110%;
    }

    .hotdiv1{
        width:400px;
        height:185.17px;
    }
    .hotdiv2{
        width:400px;
        height:185.17px;
    }
    .hotdiv3{
        width:400px;
        height:185.17px;
        
    }
    .hotdiv1-h3{
        width:380px;
        height:22px;
        margin:0 auto;
        text-align:center;
    }
    .hotdiv1-h3-a-1{
        text-decoration:none;
        font-weight:400;
        color:#333;
        font-family: PingFangSC-Regular,poppin,Tahoma,Arial,sans-serif;
        font-size:16px;
    }
    .hotdiv1-h3-a1{
        display:block;
        width:378px;
        height:152px;
        background-image:url('./hotlist/1.jpg');
        background-size:100% 100%;
    }
    .hotdiv1-h3-a1:hover{
        background-size:105%;
    }
    .hotdiv1-h3-a2{
        display:block;
        width:378px;
        height:152px;
        background-image:url('./hotlist/2.jpg');
        background-size:100% 100%;
    }
    .hotdiv1-h3-a2:hover{
        background-size:105%;
    }
    .hotdiv1-h3-a3{
        display:block;
        width:378px;
        height:152px;
        background-image:url('./hotlist/3.jpg');
        background-size:100% 100%;
    }
    .hotdiv1-h3-a3:hover{
        background-size:105%;
    }
</style>