function reduce(array,fn,initial) {


       if (!array.length) return initial             // end condition
       var tail = array.slice(1)                // next
       initial = fn(initial,array[0],array.length,tail)        // perform action
       return reduce(tail, fn, initial) // recursive step
    }

module.exports = reduce
