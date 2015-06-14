
    var through = require('through2');
    var concat=require('concat-stream');
     var tr = through(function (buf, _, next) {
         this.push(buf);
         next();
     });



     process.stdin.pipe(tr).pipe(concat(function(str){
       var aux = str.toString().split('').reverse().join('');
       console.log(aux);
}));
