const http = require('http');
const events = require('events');
const em = new events.EventEmitter();

em.on('knock', function (data) {
    console.log('Received the knock event: ' + data);
});

var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    em.emit('knock', "who's there?");
    response.end("Hi Condor \n");
});
server.listen(4000);
