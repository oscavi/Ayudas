var trumpet = require('trumpet');
   var fs = require('fs');
   var through = require('through2');
   var tr = trumpet();



   fs.createReadStream('input.html').pipe(tr);
   var stream = tr.select('.beep').createStream();

   stream.pipe(through(function(buf, _, next) {
     this.push(buf.toString().toUpperCase());
     next();
   })).pipe(stream);

   tr.pipe(process.stdout);
