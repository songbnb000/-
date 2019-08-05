<template>
    <div class="singer">
        <musicsinger>
        </musicsinger>
        <div class="singerdiv">
            <div class="singerdiv1">
                <div class="singerdiv1div1">
                    <a href="http://127.0.0.1:8080/#/singer" class="singerdiv1diva">全部歌手</a>
                </div>
                <!--华语-->
                <div class="singerdiv1div2">
                    <ul>
                        <li>
                            <a href="javascript:;" class="singerdiv1div21a">华语</a>
                        </li>
                        <li>
                            <a href="http://127.0.0.1:8080/#/singerboy" class="singerdiv1div2a">华语男歌手</a>
                        </li>
                        <li>
                            <a href="http://127.0.0.1:8080/#/singergril" class="singerdiv1div2a">华语女歌手</a>
                        </li>
                        <li>
                            <a href="http://127.0.0.1:8080/#/Chinaband" class="singerdiv1div2a">华语乐队组合</a>
                        </li>
                        <li>
                            <a href="http://127.0.0.1:8080/#/musicoriginal" class="singerdiv1div2a">原创音乐人</a>
                        </li>
                    </ul>
                </div>
                <!--欧美-->
                <div class="singerdiv1div3">
                    <ul>
                       <li>
                           <a href="javascript:;" class="singerdiv1div21a">欧美</a>
                        </li>
                        <li>
                            <a href="http://127.0.0.1:8080/#/oumeiboy" class="singerdiv1div2a">欧美男歌手</a>
                        </li>
                        <li>
                            <a href="http://127.0.0.1:8080/#/oumeigril" class="singerdiv1div2a">欧美女歌手</a>
                        </li>
                        <li>
                            <a href="http://127.0.0.1:8080/#/oumeiitem" class="singerdiv1div2a">欧美乐队组合</a>    
                        </li>
                    </ul>
                </div>
                <!--日韩-->
                <div class="singerdiv1div4">
                    <ul>
                        <li>
                            <a href="javascript:;" class="singerdiv1div21a">日韩</a>
                        </li>
                        <li>
                            <a href="javascript:;" class="singerdiv1div2a">韩国男歌手</a>
                        </li>
                        <li>
                            <a href="javascript:;" class="singerdiv1div2a">韩国女歌手</a>
                        </li>
                        <li>
                            <a href="javascript:;" class="singerdiv1div2a">韩国乐队组合</a>
                        </li>
                        <li>
                            <a href="javascript:;" class="singerdiv1div2a">日本男歌手</a>
                        </li>
                        <li>
                            <a href="javascript:;" class="singerdiv1div2a">日本女歌手</a>
                        </li>
                        <li>
                            <a href="javascript:;" class="singerdiv1div2a">日本乐队组合</a>
                        </li>
                    </ul>
                </div>
                <!--其它歌手-->
                <div class="singerdiv1div5">
                    <a href="javascript:;" class="singerdiv1div5a">其它歌手</a>
                </div>
            </div>
            <!--z主体内容-->
            <div class="singerdiv2">
                <div class="singerdiv2div1">
                    <h2 class="singerdiv2div1h2"><a href="http://127.0.0.1:8080/#/musicoriginal">原创音乐人</a></h2>
                    <div class="singerdiv2div1div">
                        <h3>索引:</h3>
                        <a href="">热门</a>
                        <a href="#A">A</a>
                        <a href="#B">B</a>
                        <a href="#C">C</a>
                        <a href="#D">D</a>
                        <a href="#E">E</a>
                        <a href="#F">F</a>
                        <a href="#G">G</a>
                        <a href="">H</a>
                        <a href="">I</a>
                        <a href="">Z</a>
                        <a href="">K</a>
                        <a href="">L</a>
                        <a href="">M</a>
                        <a href="">N</a>
                        <a href="">O</a>
                        <a href="">P</a>
                        <a href="">Q</a>
                        <a href="">R</a>
                        <a href="">S</a>
                        <a href="">T</a>
                        <a href="">U</a>
                        <a href="">V</a>
                        <a href="">W</a>
                        <a href="">X</a>
                        <a href="">Y</a>
                        <a href="">Z</a>
                        <a href="">其他</a>
                    </div>
                </div>
            <!--热门-->
                <div class="singerdiv2div2">
                    <h3 class="singerdiv2div2h3">
                        热门
                    </h3>
                    <div class="singerdiv2div2div">
                        <a href="javascript:;">
                            <div class="singerdiv2div2div1"></div>
                            <a href="javascript:;" class="singerdiv2div2a">
                                刘珂矣
                            </a>
                        </a>
                       <a href="javascript:;">
                            <div class="singerdiv2div2div2"></div>
                            <a href="javascript:;" class="singerdiv2div2a">
                                董贞
                            </a>
                        </a>
                        <a href="javascript:;">
                            <div class="singerdiv2div2div2"></div>
                            <a href="javascript:;" class="singerdiv2div2a">
                                墨明棋妙
                            </a>
                        </a> 
                       <a href="javascript:;">
                            <div class="singerdiv2div2div4"></div>
                            <a href="javascript:;" class="singerdiv2div2a">
                                庄心妍
                            </a>
                        </a>
                        <a href="javascript:;">
                            <div class="singerdiv2div2div5"></div>
                            <a href="javascript:;" class="singerdiv2div2a">
                                河图
                            </a>
                        </a>
                    </div>
                </div>
            <!--金南玲~~李圣杰-->
                <div class="singerdiv2div3">
                    <a href="javascript:;" v-for="(item,i) of list" :key="i" class="singerdiv2div3a">{{item}}</a>
                </div>
            <!--蔡琴~~任素汐-->
                <div class="singerdiv2div4">
                    <a href="javascript:;" v-for="(item,i) of list1" :key="i" class="singerdiv2div4a">{{item}}</a>
                </div>
            <!--贝多芬~~赵泳鑫-->  
                <div class="singerdiv2div5">
                    <a href="javascript:;" v-for="(item,i) of list2" :key="i" class="singerdiv2div5a">{{item}}</a>
                </div>
            <!--Various Artists~~乌兰托娅-->  
                <div class="singerdiv2div6">
                    <a href="javascript:;" v-for="(item,i) of list3" :key="i" class="singerdiv2div6a">{{item}}</a>
                </div>
            <!--所有字母索引共用一个样式-->
            <!--a字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="A">A</a></h3>
                    <a href="javascript:;" v-for="(item,i) of list4" :key="i" class="singerdiv2div7a">{{item}}</a>
                </div>
            <!--b字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="B">B</a></h3>
                    <a href="javascript:;" v-for="(item,i) of list5" :key="i" class="singerdiv2div7a">{{item}}</a>
                </div>
            <!--c字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="C">C</a></h3>
                    <a href="javascript:;" v-for="(item,i) of list6" :key="i" class="singerdiv2div7a">{{item}}</a>
                </div>
            <!--d字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="D">D</a></h3>
                    <a href="javascript:;" v-for="(item,i) of list7" :key="i" class="singerdiv2div7a">{{item}}</a>
                </div>
            <!--e字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="E">E</a></h3>
                    <a href="javascript:;" v-for="(item,i) of list8" :key="i" class="singerdiv2div7a">{{item}}</a>
                </div>
            <!--f字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="F">F</a></h3>
                    <a href="javascript:;" v-for="(item,i) of list9" :key="i" class="singerdiv2div7a">{{item}}</a>
                </div>
            <!--f字母索引-->
                <div class="singerdiv2div7">
                    <h3 class="singerdiv2div7h3"><a href="javascript:;" id="G">G</a></h3>
                    <a href="javascript:;" v-for="(item,i) of list10" :key="i" class="singerdiv2div7a">{{item}}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import musicsinger from "./musicsinger.vue"
export default {
    data(){
        return{
            list:["好妹妹","无印良品","沙漠五子D5","筷子兄弟","大庆小芳","小蓓蕾组合","宝宝巴士","传奇乐坊","南拳妈妈","五月天","咖啡因乐队","锦绣二重唱","草蜢","龙宽九段","南征北战NZBZ","玖壹壹","展展与罗罗","Beyond","女声四重唱","星月组合","夜猫组","风火海","飞石号","华夏民乐团","Awaken-F","19乐团","牛奶咖啡","SNH48","SNH48_BLUEV","鲍家街43号","兄弟本色","阿里郎","草原百灵合唱团","蛋糕炸弹","goldEN","ZOOM超能团","Hickey喜祺","清馨组合","八只眼","树屋女孩","N.P.E.自由引力","冉冉升起组合","山水组合","后海大鲨鱼乐队","WeWe","Ado","信乐团","脆乐团","非凡组合","乔紫乔"],
            list1:["蔡琴", "鞠婧祎", "阿宝", "李宇春", "刘惜君", "杜德伟", "成龙", "贵族乐团", "陈洁仪", "李丽芬", "徐怀钰", "潘越云", "卓文萱", "徐佳莹", "李雨儿", "郁可唯", "刘欢", "陈绮贞", "苏慧伦", "DJ小可", "朴树", "高安", "腾格尔", "娃娃", "艾索", "云飞", "杨乃文", "屠洪刚", "马旭成", "降央卓玛", "田震", "水木年华", "陈粒", "颜妹", "伍佰","门丽","黄英","后弦","8先生","好妹妹","张也","无印良品","沙漠五子D","卢冠廷","赵咏华","纳兰珠儿","路勇","筷子兄弟","Per-Olov Kindg..","任素汐"],
            list2:[
                "贝多芬", "张韶涵", "曹轩宾", "夏雨菲", "新雅室内空气乐..", "谢安琪", "梦鸽", "大庆小芳", "齐秦", "小蓓蕾组合", "贾乃亮", "张可", "毛宁", "Percy Fait", "张穆庭", "罗大佑", "MC Hotdog",  "陈燕", "陈瑞","王筝", "何炅", "周笔畅", "王七七","张碧晨", "胡彦斌", "汪苏泷", "戚薇", "纯音乐", "王二妮", "大张伟", "纵贯线", "DJ小鱼儿", "杨钰莹","林凡","孙露", "费玉清", "孙盛希", "虎二","宝宝巴士","回音哥","陈奕迅","张婧","华晨宇","罗百吉","霍尊","张紫豪","温妮","G.E.M.邓紫棋","唐朝乐队","赵泳鑫"
            ],
            list3:[
                "Various Artists", "顺子", "陈零九", "刘瑞琦", "莫艳琳", "窦唯", "阎维文", "方大同", "The Royal Con..", "棉花糖", "黑豹乐队", "庄心妍", "EnjiA魏恩佳", "SNH48_HO2","林宇中","李春波", "陶晶莹", "叶贺璞",  "张洪量", "杨宗纬","海来阿木", "林琳", "阿牛", "林志炫", "毛阿敏", "黑龙","温岚","花粥","玖月奇迹","锦绣二重唱","张信哲","赵天鸽","谭维维","刘强强","许景淳","大壮","孙楠","小臭","刘珂矣","乌兰托娅"
            ],
            list4:[
                "A-Lin", "A.N.D Taipei", "ABCstudio", "ACE", "ACEMAX-RED", "AK", "ALL ACOUSTIC", "ALL-RANGE", "ANM", "ANU", "ART-SCHOOL", "ASTRO12", "AXIS", "Abby Rose","Acid Candy","Acker Bilk", "Ackryte", "Acoustic Guitar..",  "Acoustic Hits", "Adele","Ado", "Afar陈侣帆", "Affonsinho", "Afterlife", "Aki阿杰", "Al Cohn","Al Haig","Alan Walker","Alana Davis","Alana Marie","Albert Bennett","Alejandra Cánepa","Alessia Cara","Alessio De Fran..","Alex Mason","Alexandre Desp..","Alfaluna","Alice Hart","Alienkey","Alina Eremia"
            ],
            list5:[
                "B.J. Thomas", "B.T. Express", "B.weave", "B1A4", "BBF", "BC221", "BEJ48", "BIN何舞阳", "BK532", "BLACK BOTTO..", "Baboo", "Baby", "Backstreet Boys", "Backtrack Blues","Bad Manners","Baden Powell", "Baggio", "Baghira",  "Baha Men", "Banda Do Sul","Bandari", "Bandit", "Barbara Mendes", "Barbara Tucker", "Barbie", "Barei","Bark Psychosis","Begin Transmis","Bel Air","Ben","Ben Arrows","Ben Hobbs","Ben Tavera King","Ben Tavera Kin","Benny Turner","Bentham","Bernard Herrm","Bernard Salles","Bernon","Bert Kaempfert"
            ],
            list6:[
                "崔天琪", "崔子格", "崔恕", "崔羽明", "崔苔菁", "崔苗", "崔阿扎", "川宝宝", "常思思", "常成", "常石磊", "常艾非", "成泉", "成龙","春雷","晨熙", "曹卉娟", "曹宇擎",  "曹庆跃", "曹方","曹智", "曹杨", "曹格", "纯音乐", "蔡依林", "赤龙","陈彼得","陈明韶","陈昕怡","Celine Dion","Carl Marshall","CRAY-G","Cailee Rae","Carlos Lyra","草蜢","蔡献华","陈威男","陈天红","Coffee Shop Jazz","岑宁儿"
            ],
            list7:[
                "D-Sisive", "D. Batistatos", "D.V. Alias Khryst", "党明毅", "多情流星", "多米", "大星", "戴荃", "杜德伟", "翟承寒", "淡小晴", "段丽阳", "董赫男", "董子健","邓海","邓丽欣", "蛋堡", "董文华",  "翟承寒", "董冬","淡小晴", "杜青", "栋梁", "董力", "杜婧荧", "打扰一下乐团","戴玉强","杜歌","董贞","逗儿旭","邓子辰","邓海","邓鼓","迪克牛仔","蝶长","董昱昆","董冬","杜元竣","戴荃","打扰一下乐团"
            ],
            list8:[
                "E-Tsing于晴", "E.T. Webster", "EAU", "EOS交响文献乐团", "EVO+", "EXID", "EXO", "Eagles", "Earl Hines", "Ed Sheeran", "Echo", "Echobelly", "Echos", "Ederson","Edie Carey","Edison Herbert", "Edith Piaf", "Eduardo Elia", "Egil Olsen", "Eileen Carr","Elisa Mutto", "Ellen Allien", "Elmara", "Elza Maria", "Emily Saliers", "Emma Re","Emma","Energy Club","Enrico Macias","EnjiA魏恩佳","Enrique Iglesias","Ennio Morricone","Erdal Kemahli","Enrico Donner","二手玫瑰","二珂","尔玛娜依","儿童歌曲","Eyedi","额尔古纳乐队"
            ],
            list9:[
                "4Futures", "F.I.R.", "FEM Prog Band", "Fly Project", "Flávio Nascimento", "Fools Garden", "Foozlebots", "傅淇月", "傅玺诺", "冯光", "傅薇", "冯文甜", "凤凰传奇", "冯可涵","冯建宇","冯立", "反光镜乐队", "方冉", "方季惟", "枫舞","符致逸", "范子明", "范宏伟", "范炜", "范逸臣", "范广慧","菲儿","范玉阳","陆廷荃","非凡组合","风风","风云","符禹迅","方琼","二手玫瑰","Fujiyama Ichiro","French Montana","Fresh8","From P60","Freewheel"
            ],
            list10:[
                "G-Dragon", "G.E.M.邓紫棋", "Gabriel Fauré", "光头李进", "关淑怡", "古天乐", "刚泽斌", "格格", "格桑嘉措", "格桑杰", "贡尕达哇", "谷村新司", "葛奕君", "葛家君","郭阳-郭亮","高乐荣", "高信", "高培华", "高敏", "高林生","高敏惠", "高荧", "高达", "龚玥菲", "龚琳娜", "高原","龚秋霞","郭美美","郭小静","郭子若","郭少杰","郭华","贡尕达哇","贵族乐团","关颖","光线合唱团","光泽","goldEN","gates","Gummy"
            ],
        }
    },
    components:{
    "musicsinger":musicsinger
    }
}
</script>
<style scoped>
*{
    margin:0;
    padding:0;
}
/*去除li标签的小点*/
li{
    list-style:none;
}
/*每个li标签的上左外边距*/
li{
    margin-top:17px;
    margin-left:10px;
}
/*取消a标签下划线*/
a{
    text-decoration:none;
}
.singer{
    margin:0 auto;
}
    .singerdiv{
        margin:0 auto;
        width:1200px;
        height:5000px;
        flex-direction:row;
	    display:flex;
	    /*justify-content:space-between;*/
	    flex-wrap:wrap;
    }
    .singerdiv1{
        width:208px;
        height:5000px;
    }
    .singerdiv2{
        width:992px;
        height:5000px;
    }
    /*全部歌手*/
    .singerdiv1div1{
        width:208px;
        height:37px;
        line-height:37px;
        margin-left:7px;
    }
    .singerdiv1diva{
        text-decoration:none;
    }
    /*华语文字样式*/
    .singerdiv1div21a{
        color:#333;
        font-size:16px;

    }
    /*华语原创音乐人div*/
    .singerdiv1div2{
        width:208px;
        height:183px;
    }
    /*欧美*/
    .singerdiv1div3{
        width:208px;
        height:183px;
    }
    /*日韩*/
    .singerdiv1div4{
        width:208px;
        height:257px;
    }
    /*其它歌手*/
    .singerdiv1div5{
        width:208px;
        height:37px;
        line-height:37px;
    }
    /*其它歌手文字样式*/
    .singerdiv1div5a{
        margin:10px;
    }
    /*主体部分*/
    .singerdiv2div1{
        width:992px;
        height:103px;
    }
    .singerdiv2div1h2{
        width:992px;
        height:30px;
    }
    .singerdiv2div1div{
        width:992px;
        height:73px;
        display:flex;
        flex-direction:row;
	    justify-content:space-between;
	    flex-wrap:wrap;
        line-height:73px;
        border-bottom:1px solid dimgrey;
    }
    /*热门*/
    .singerdiv2div2{
        width:992px;
        height:257px;
    }
    /*热门文字样式*/
    .singerdiv2div2h3{
        width:992px;
        height:91.5px;
        line-height:91.5px;
        font-size:20px;
    }
    .singerdiv2div2div{
        width:992px;
        height:500px;
        display:flex;
        flex-direction:row;
	    justify-content:space-between;
	    flex-wrap:wrap;

    }
    /*热门下面的图片div*/
    .singerdiv2div2div1{
        width:180px;
        height:180px;
        background-image:url('./singer/original/1.jpg');
        background-size:100% 100%;
        margin-bottom:10px;
        border-radius:5px;
    }
    .singerdiv2div2div2{
        width:180px;
        height:180px;
        background-image:url('./singer/original/2.jpg');
        background-size:100% 100%;
        margin-bottom:10px;
    }
    .singerdiv2div2div3{
        width:180px;
        height:180px;
        background-image:url('./singer/original/3.jpg');
        background-size:100% 100%;
        margin-bottom:10px;
    }
    .singerdiv2div2div4{
        width:180px;
        height:180px;
        background-image:url('./singer/original/4.jpg');
        background-size:100% 100%;
        margin-bottom:10px;
    }
    .singerdiv2div2div5{
        width:180px;
        height:180px;
        background-image:url('./singer/original/5.jpg');
        background-size:100% 100%;
        margin-bottom:10px;
    }
   .singerdiv2div2a{
    color:#2d64e3;
    }

    /*一下其实共用一个样式就可以了，以后可以缩减代码量*/
    /*金南玲~~李圣杰*/

    .singerdiv2div3{
    width:992px;
    height:370px;
    display:flex;
    flex-direction:row;
	justify-content:space-between;
	flex-wrap:wrap;
    margin-top:100px;
    }

    .singerdiv2div3a{
    width:198.4px;
    height:3.5px;
    color:#2d64e3;
    font-size:14px; 
    display:block;
    line-height:3.5px;
    }

    /*蔡琴~~任素汐*/
    .singerdiv2div4{
    width:992px;
    height:370px;
    display:flex;
    flex-direction:row;
	justify-content:space-between;
	flex-wrap:wrap;
    margin-top:80px;
    }
    
    .singerdiv2div4a{
    width:198.4px;
    height:3.5px;
    color:#2d64e3;
    font-size:14px; 
    display:block;
    line-height:3.5px;
    }
    .singerdiv2div5{
    width:992px;
    height:370px;
    display:flex;
    flex-direction:row;
	justify-content:space-between;
	flex-wrap:wrap;
    margin-top:80px;  
    }
    .singerdiv2div5a{
    width:198.4px;
    height:3.5px;
    color:#2d64e3;
    font-size:14px; 
    display:block;
    line-height:3.5px;
    }
    .singerdiv2div6{
    width:992px;
    height:370px;
    display:flex;
    flex-direction:row;
	justify-content:space-between;
	flex-wrap:wrap;
    margin-top:80px;  
    border-bottom:1px solid darkgray;
    }
    .singerdiv2div6a{
    width:198.4px;
    height:3.5px;
    color:#2d64e3;
    font-size:14px; 
    display:block;
    line-height:3.5px;
    }
    .singerdiv2div7{
    width:992px;
    height:420px;
    display:flex;
    flex-direction:row;
	justify-content:space-between;
	flex-wrap:wrap;
    margin-top:80px;
    }
    .singerdiv2div7a{
    width:198.4px;
    height:3.5px;
    color:#2d64e3;
    font-size:14px; 
    display:block;
    line-height:3.5px;
    }
    /*a索引*/
    .singerdiv2div7h3{
        width:998px;
        height:10px;
    }
</style>
