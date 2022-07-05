const fs=require('fs')
fs.readFile('./text.txt','utf-8',(error,data)=>{
    console.log(data,1);
});//异步的
/*异步为什么不用返回值，因为读取文件异步读取的话，拿到返回值的时候还在异步读取
是没有内容的，所以异步无法用返回值*/
console.log(1);
const result=fs.readFileSync('./text.txt','utf-8')//同步的，没有回调
console.log(2);
console.log(result,2);
console.log(3);
