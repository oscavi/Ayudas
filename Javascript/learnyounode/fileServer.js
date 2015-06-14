var http = require('http')
var fs = require('fs')
var file = process.argv[3]

var server = http.createServer(function (req, res) {
  var src = fs.createReadStream(file)

  res.writeHead(200, { 'content-type': 'text/plain' })

  src.on('open', function () {
    src.pipe(res)
  })

  src.on('error', function (err) {
    res.end(err)
  })
})
server.listen(Number(process.argv[2]))
