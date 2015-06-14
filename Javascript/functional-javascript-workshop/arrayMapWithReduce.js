
module.exports = function arrayMap(arr, fn) {

  return arr.reduce(function(resultArr, item) {
    resultArr.push(fn(item))
    return resultArr
  }, []) // second argument to reduce initialises resultArr to []
    }
