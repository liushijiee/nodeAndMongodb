const EventEmitter=require('events')
//events模块是一个构造函数

const event = new EventEmitter()

event.on('abc',(args)=>{
    console.log(args);
    console.log('监听到abc事件触发');
})

event.emit('abc','value')
//触发事件的第二个参数是传的值
