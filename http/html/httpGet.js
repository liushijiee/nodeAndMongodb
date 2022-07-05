const http=require('http')
const url=require('url')
const fs=require('fs')
const serve=http.createServer((req,res)=>{
    
    let urlObj=url.parse(req.url,true)
    if(urlObj.pathname=='/'){
        if(urlObj.query.username=='123'&&urlObj.query.password=='123'){
            res.writeHead(200,{
                "Content-type":"text/html;charset=utf-8"
            })
            res.end('登陆成功')
        }else{
            res.writeHead(200,{
                "Content-type":"text/html;charset=utf-8"
            })
            res.end('登陆失败')
        }
        
    }else if(urlObj.pathname=='/favicon.ico'){
        // 要返回文件，那么创建一个读取流对象，然后把文件读取成数据流
        let readStream=fs.createReadStream('./1.jpg')
        //然后将其通过管道导入给响应对象
        readStream.pipe(res)
    }
    //这种通过地址栏来区分不同请求的思想就是“路由”
    
})
serve.listen(8000,()=>{
    console.log('http://localhost:8000')
}
)