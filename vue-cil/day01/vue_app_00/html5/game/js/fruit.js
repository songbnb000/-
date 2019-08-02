//ftuit.js
//功能:创建食物
//1.创建构造函数 fruitObj
var fruitObj=function(){
    console.log(1)
}
//为构造函数添加属性num=30
fruitObj.prototype.num=30;
fruitObj.prototype.init=function(){
    console.log(2)
}
fruitObj.prototype.draw=function(){
    console.log(3)
}
//将fruit.js添加index.html
//在main.js创建对象并且调用相应方法
