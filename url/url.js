const url = require('url')
let urlStr='http://www.abc.com/a/b/index.html?username="张三"#abc'

let urlObj=url.parse(urlStr,true)
/*
url.parse(网址字符串,是否将参数字符串解析成参数对象(也就是query部分))

urlObj.query:username="张三"
urlObj.pathname:/a/b/index.html(也就是路由)
urlObj.path:/a/b/index.html?username="张三"
http模块中的req.url：/a/b/index.html?username="张三"(端口号之后，hash之前)
*/
console.log(urlObj.query.username);