var fs = require('fs');
var dir=process.argv[2];
var ext=process.argv[3];

var contents=fs.readdir(dir,function(err,list){
  if(!err){


    var filtered = list.filter(function (item) {

            var pos = item.toString().search(ext);
            var expected = item.toString().length-ext.length;
            var isExt = item.toString()[expected-1] == '.';
            return ((pos == expected) && isExt);
          });

      for (i=0;i<filtered.length;i++) {
            console.log(filtered[i]);
        }
      }


  }

);
