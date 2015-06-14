var ws = require('websocket-stream');
var stream = ws('ws://localhost:8099');
var through = require('through2');


stream.write(new Buffer("hello\n"));
