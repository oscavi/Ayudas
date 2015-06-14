var duplex = require('duplexer2');

module.exports = function (counter) {

        console.log(counter);


        return duplex(counter.buffer, counter.setCounts);
  };
