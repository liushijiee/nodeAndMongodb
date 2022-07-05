const http=require('http')
const url=require('url')
const serve=http.createServer((req,res)=>{
    if(url.parse(req.url,true).query.username){
        console.log(url.parse(req.url,true).query.username);
        //url模块：url.parse()第一个参数是url，第二个参数true可以让query从字符串转换成对象
        //req.url：因为在地址栏带参数的话，就是get请求
        //req.url表示端口号之后到哈希之前
        //true可以让query从字符串转换成对象
        //req.method
    }
    //res.write可以写多次
    //res.end是终止响应，只能一次。两种只能传字符串类型和buffer类型
    //得设置格式或者解析标签，所用用到res.writeHead()设置响应头
    res.writeHead(200,{
        "Content-Type":"text/html;charset=utf-8",
        //表示返回数据有html标签，前端需要解析;表示有中文
        
    })
    res.write('<h1>23232323</h1>')
    res.write('123')
    res.write('456')
    res.end('hello')
    
})
serve.listen(8000,()=>{
    console.log('http://localhost:8000')
})