var fs = require('fs');
var file=process.argv[2];

var contents=fs.readFile(file,function(err,data){
  if(!err){
    console.log(data.toString().split('\n').length-1);
  }

});
