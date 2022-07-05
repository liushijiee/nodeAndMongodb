const http=require('http')
const url=require('url')
const fs=require('fs')
const qs=require('querystring')
const serve=http.createServer((req,res)=>{
    if(req.method=='POST'){
        //获取post的数据需要事件监听来实现
        //让req对象去监听两个事件，分别是data和end事件
        let dataStr=""
        req.on('data',function(chunk){
            //前端传来了数据就会触发
            dataStr += chunk
        })
        req.on('end',function(){
            //本次数据传递结束就会触发
            let qsObj=qs.parse(dataStr)
            console.log(qsObj);
            res.writeHead(200,{
                "Content-Type":"text/html;charset=utf-8"
            })
            if(qsObj.username=='123'&&qsObj.password=='123'){
                
                res.end('登陆成功')
            }else{
                res.end('登陆失败')
            }
        })
    }else{
        let readStream=fs.createReadStream('./1.jpg')
        readStream.pipe(res)
    }
})
serve.listen(8001,()=>{
    console.log('http://localhost:8001')
})