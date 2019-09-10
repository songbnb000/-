const http=require("http");
http.createServer(
(req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"})
    res.write("厦门 多云");
    res.write("目前天气没有问题");
    res.end();
}
).listen(4000);