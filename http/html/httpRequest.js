const http=require('http')
const url=require('url')
const fs=require('fs')
const serve=http.createServer((req,res)=>{
    
    if(req.method=='GET'){
        let urlObj=url.parse(req.url,true)
        if(urlObj.pathname=='/get'){

        }
        
        else if(urlObj.pathname=='/js'){
            res.writeHead(200,{
                "Content-Type":"text/html"
            })
            res.end('<script src="http://localhost:8002/script"></script>')
        }else if(urlObj.pathname=='/script'){
            let readStream=fs.createReadStream('./script.js')
            readStream.pipe(res)
        }
        
        else if(urlObj.pathname=='/html'){
            res.writeHead(200,{
                "Content-Type":"text/html"
            })
            let readStream=fs.createReadStream('./html_post.html')
            readStream.pipe(res)
        }
        
        else if(urlObj.pathname=='/css'){
            res.writeHead(200,{
                "Content-Type":"text/html"
            })
            res.end("<link type='text/css' rel='stylesheet' href='http://localhost:8002/style'></link>")
            // let readStream=fs.createReadStream('./style.css')
            // readStream.pipe(res) //这种是返回文本了，没有css效果
        }else if(urlObj.pathname=='/style'){
            let readStream=fs.createReadStream('./style.css')
            readStream.pipe(res) //要让link标签来请求，返回的就是css样式，而不是返回文本
        }
        
        else if(urlObj.pathname=='/img'){

        }else if(urlObj.pathname=='/favicon.ico'){
            let readStream=fs.createReadStream('./1.jpg')
            readStream.pipe(res)
        }
        
    }else if(req.method=='POST'){

    }
    
})
serve.listen(8002,()=>{
    console.log('http://localhost:8002')
})