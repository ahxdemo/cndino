'use strict';

var server = require('./server');
var port = process.env.PORT || 3001;

server.listen(port, function () {
  console.log('Server running on port %d', port);
});


//comment
