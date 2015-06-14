var fs = require('fs')
var path = require('path')

module.exports = function (dir,ext,callback){


  var ldf=[];


   fs.readdir(dir, function (err, list) {

  if(err) return callback(err,null);

     list.forEach(function (file) {
       if (path.extname(file) === '.' + ext)
         ldf.push(file)
     })

   callback(null,ldf);
   })



}
