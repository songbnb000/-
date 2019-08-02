//声明所有全局变量
//创建函数game
//init
//gameloop
//将文件main.js添加index.html
var can1
var can2
var ctx1
var ctx2
var canWidth
var canHeight
var bgPic
//创建全局变量保存海葵
var ane
//创建全局变量保存食物
var fruit
//创建函数game第一个执行函数
function game(){
    init();
    gameloop();
}
function init(){
    can1=document.getElementById("canvas1")
    can2=document.getElementById("canvas2")
    ctx1=can1.getContext("2d")
    ctx2=can2.getContext("2d")
    canWidth=can1.wdith;
    canHeight=can1.height;
    bgPic=new Image()
    bgPic.src="src/background.jpg"
    //创建海葵对象并且初始化方法,这个方法调用了ane.js的函数，所以是构造函数
    ane=new aneObj()
    ane.init()
    //创建食物对象并且调用初始化方法
    fruit=new fruitObj();
    fruit.init();
}
function gameloop(){
    //大概12ms-100ms执行一次
    requestAnimationFrame(gameloop)
    drawBackground();
    //调用绘制海葵函数
    ane.draw()
    //调用绘制食物函数
    fruit.draw()
}
//页面加载调用game
document.body.onload=game