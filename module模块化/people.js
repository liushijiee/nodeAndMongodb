/*
function say() {
    console.log('hello');
    
}
exports.say=say
*/

function say() {
    console.log('hello');
    
}
// exports.say=say;
module.exports.say=say
// module.exports={
    
// }
console.log(exports);