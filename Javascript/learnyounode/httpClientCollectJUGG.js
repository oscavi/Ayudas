var http = require('http')
var bl = require('bl')


var datos = ["", "", ];
var completo = 0;
http.get(process.argv[2], function(response) {


  response.pipe(bl(function(err, data) {

    if (err)
      return console.error(err)

    datos[0] = data.toString()
    completo += 1
    completado()

  }))

})

http.get(process.argv[3], function(response) {


  response.pipe(bl(function(err, data) {

    if (err)
      return console.error(err)

    datos[1] = data.toString()
    completo += 1
    completado()



  }))

})

http.get(process.argv[4], function(response) {


  response.pipe(bl(function(err, data) {

    if (err)
      return console.error(err)


    datos[2] = data.toString()
    completo += 1
    completado()
  }))

})

function completado() {
  if (completo == 3) {
    for (var i = 0; i < 3; i++)
      console.log(datos[i])
  }

}
