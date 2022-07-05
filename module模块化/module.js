/*模块化是node的核心思想之一，也就是在一个js中引入另一个js
模块就是一个文件，绝大部分情况下是js文件，但是文件并不一定是模块
创建模块需要有一定的书写规范，commonjs规范

commonjs规范规定了node模块化需要遵循的语法规则
1.require() 作用：引入模块,引入的是别的模块的exports对象
2.exports/module.exports 作用：作为当前模块的唯一出口对象
区别:
exports只能在原对象的内存上写
module.exports可以开辟新对象空间,也可以在原对象内存上写
总结：exports是对module.exports的引用
exports=module.exports={}
外界引用的就是这个{}
*/

const people = require('./people')
people.say()