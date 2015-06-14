var through = require('through2');
var http = require('http');

var server = http.createServer(function(req, res) {
  if (req.method === 'POST') {
    req.pipe(tr).pipe(res);
  } else res.end('send me a POST\n')
});
server.listen(process.argv[2]);


var tr = through(function(buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
});
