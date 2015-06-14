var xinspect = require('./xinspect')

function Spy(target, method) {
  target[method].bind("sdf")
  console.log(xinspect(target,''))


  }

   module.exports = Spy
var spy = Spy(console,"log")
console.log("hola")
console.log("hola")
//Spy(console,"log")

//console.log(spy.count)
