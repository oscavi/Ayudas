var http = require('http')
var fs = require('fs')
var url = require('url')


var server = http.createServer(function (req, res) {

  res.writeHead(200, { 'Content-Type': 'application/json' })

  var pet = url.parse(req.url, true)

  if (pet['pathname'] == '/api/parsetime'){
    if (pet['query']['iso'] != ''){


      var aux = new Date(pet['query']['iso']);


      var tiempo = {
                      hour: aux.getHours(),
                      minute: aux.getMinutes(),
                      second: aux.getSeconds()

                    }


        res.end(JSON.stringify(tiempo))

    }

  }

  if (pet['pathname'] == '/api/unixtime'){
    if (pet['query']['iso'] != ''){
      var aux = new Date(pet['query']['iso']);


      var tiempo = {
                      unixtime: aux.getTime(),

                    }


        res.end(JSON.stringify(tiempo))

    }

  }



})
server.listen(Number(process.argv[2]))
