
var http=require('http')

http.get(process.argv[2],function (response){

   response.setEncoding(encoding='utf8')
   response.on('data', function(d) {
       console.log(d);
   })

   response.on('error',console.error)

  })
