function Spy(target, method) {
  var originalFunction = target[method]

  var result = {
    count: 0
  }

  // replace method with spy method
  target[method] = function() {
    result.count+=1 // track function was called
    return originalFunction.apply(this, arguments) // invoke original function
  }

  return result
}

module.exports = Spy

/*

var spy= Spy(console,"log")

console.log("");
console.log(spy.count)
*/
