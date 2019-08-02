//接收ui传递数值
onmessage=function(e){
 //2.计算累加和
 var n=e.data
 var sum=0;
 for(var i=1;i<=n;i++)
 sum+=i   
}
//将结果发送04.html
postMessage(sum)