var through = require('through2');
var split = require('split');
var line = 0;

var tr = through(function(buf, _, next) {


  if (line % 2 == 0) {
    this.push(buf.toString().toLowerCase() + '\n');


  } else {

    this.push(buf.toString().toUpperCase() + '\n');
  }


  line++;
  next();
});
process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
