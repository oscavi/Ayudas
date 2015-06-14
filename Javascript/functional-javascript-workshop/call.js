
 function duckCount() {

  var args = new Array();

  for (var arg in duckCount.arguments){

    args.push(arguments[arg]);

  }
  console.log("Arguments:")
  console.log(args);

  return reduce(args,function(prev, curr, index, arr) {
        console.log('objet number:'+index)
        console.log(curr);
        return Object.prototype.hasOwnProperty.call(curr, 'quack')?prev+1:prev
      }, 0)


  //   return (duckCount.arguments.map(function(arg){
  //     return arg.hasOwnProperty("quack")?count || count++:count || count
  //  }))
  }


  function reduce(array,fn,initial) {

         var value = initial
         if (!array.length) return value             // end condition
         var tail = array.slice(1)                // next
         value = fn(value,array[0],array.length,tail)        // perform action

  //       console.log('Called reduce(['+array+'],fn,'+value+')')

         return reduce(tail, fn, value) // recursive step
      }



   module.exports = duckCount

/*
    var notDuck = Object.create({quack: true})
    var duck = {quack: true}

    //console.log(notDuck.hasOwnProperty("quack"))
    //console.log(duck.hasOwnProperty("quack"))

    console.log(reduce([duck,notDuck,duck], function(prev, curr, index, arr) {

          return curr.hasOwnProperty("quack")?prev+1:prev
        }, 0))





    console.log(duckCount(duck, notDuck, duck,duck,duck))

    */
