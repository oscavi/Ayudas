var duplex = require('duplexer');

var spawn = require('child_process').spawn;

    module.exports = function (cmd, args) {
          // spawn the process and return a single stream
        // joining together the stdin and stdout here

        var com  = spawn(cmd,args );
        console.log('Spawned child pid: ' + com.pid);
        console.log('cmd: '+cmd);
        console.log('args: '+args);
        return duplex(com.stdin, com.stdout);
  };
