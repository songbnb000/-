//ane2.js
//此文件:海葵第二个版本(动态曲线)
//创建海葵构造函数aneObj
var aneObj=function(){
    //创建一组起点坐标
    //起点坐标y可以通过计算得出
    this.rootx=[];
    this.headx=[];
    this.heady=[];
}
//为构造函数添加属性num=50
aneObj.prototype.num=50
//为构造函数添加函数init
aneObj.prototype.init=function(){
    //创建循环遍历所有的海葵
    for(var i=0;i<this.num;i++){
    this.rootx[i]=i*16+Math.random()*20
    //初始化终点坐标x,y
    this.head[i]=this.rootx[i];
    this.heady[i]=canHeight-200+Math.random()*50
    this.amp[i]=20+Math.random()*20
    }
}
//为构造函数添加函数draw
aneObj.prototype.draw=function(){
    //保存画笔2状态
    ctx2.save()
    //设置路径线宽,圆角，透明度，颜色
    ctx2.strokeStyle="#3b154e";
    ctx2.lineWidth=20;
    //通过alpha返回-1~1
    ctx2.lineCap="round";
    ctx2.globalAlpha=0.5;
    //累加非常小数alpha
    this.alpha+=0.0008*36;
    var p=Math.sin(this.alpha)
    //创建循环遍历每个海葵
    for(var i=0;i<this.num;i++){
    //开始新路径/重新计算终点
    ctx2.beginPath();
    this.headx[i]=this.rootx[i]+this.amp[i]*p;
    //将画笔2移动起点坐标
    ctx2.moveTo(this.rootx[i],canHeight);
    //创建贝塞尔曲线
ctx.quadraticCurveTo(
    this.rootx[i],canHeight-100,
    this.headx[i],this.heady[i]
)
    //描边
    ctx2.stroke();
    }
    //恢复画笔
    ctx2.restore();
}
