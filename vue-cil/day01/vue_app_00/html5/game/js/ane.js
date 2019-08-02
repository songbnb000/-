//创建海葵构造函数aneObj
var aneObj=function(){
    this.x=[];//保存海葵x坐标
    this.len=[];//保存海葵高度
}
var aneObj=function(){
console.log(1)
}
//为构造函数原型添加属性
aneObj.prototype.num=50
//为构造函数原型添加方法init
aneObj.prototype.init=function(){
    //为海葵的x和高度赋一个随机值
    for(var i=0;i<this.num;i++){
    this.x[i]=i*16+Math.random()*20//设置海葵x，让海葵x随机
    this.len[i]=200+Math.random()*50//设置海葵高度，让海葵高度随机
}
}
ctx.globalAlpha=0.5;
//为构造函数原型添加方法draw
aneObj.prototype.draw=function(){
    //保存状态
    ctx2.save();
    //设置边线样式紫色
    ctx.strokStyle="3b154e";
    //设置边线宽度
    ctx2.lineWidth=20;
    //设置边线顶端样式 圆角
    ctx2.lineCap-"round"
    //设置透明度
    ctx2.globalAlpha=0.5;
    
    for(var i=0;i<this.num;i++){
        //开始一条新路径
        ctx2.beginPath()
        //讲画笔移动到画布的顶端
        ctx2.moveTo(this.x[i],canHeight)
        //向上画一条直线
        ctx2.lineTo(this.x[i],canHeight-this.len[i]);
        //描边
        ctx2.stroke();
    }
    //恢复状态
    ctx2.restore();
    //不然画笔的弧度会一直叠加
}
//将ane.js添加到index.html