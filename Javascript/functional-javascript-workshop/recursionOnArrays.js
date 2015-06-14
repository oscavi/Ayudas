function toUpperArray(items) {
       if (!items.length) return []             // end condition
       var head = items[0]                      // item to operate on
       head = head.toUpperCase()                // perform action
       var tail = items.slice(1)                // next
       return [head].concat(toUpperArray(tail)) // recursive step
    }



console.log(toUpperArray(['hello', 'world'])) // => ['HELLO', 'WORLD']


function reduce(array,fn,initial) {


       if (!array.length) return initial             // end condition
       var tail = array.slice(1)                // next
       initial = fn(initial,array[0],array.length,tail)        // perform action

       console.log('Called reduce(['+array+'],fn,'+initial+')')

       return reduce(tail, fn, initial) // recursive step
    }




/*
console.log(reduce([1,2,3,4,5,6,7,8,9], function(prev, curr, index, arr) {
    console.log('Into fn:')
      console.log('prev ='+ prev)
      console.log('curr ='+curr)
      console.log('index ='+index)
      console.log('arr = ['+arr+']')

      return prev + curr
    }, 0))
*/
