//让程序执行5s
//创建开始时间
//创建循环，创建结束时间
//判断条件：如果结束时间小于五秒就继续循环
//start只获取一次
var start=new Date().getTime()
do{
    var end=new Date().getTime()
}while(end-start<5000)
console.log(start)
console.log(end)
postMessage("执行完毕")