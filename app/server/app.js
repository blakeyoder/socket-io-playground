var app = require('express')();  
var server = require('http').Server(app);  
var io = require('socket.io')(server);

app.get('/', function(req, res) {  
    res.sendFile(__dirname + '/index.html');
});

server.listen(8080, function() {
	console.log('Server listening on port: ' + server.address().port);
});

io.on('connection', function(socket) {
	let connectedSockets = Object.keys(io.sockets.clients().sockets);
    io.emit('announcements', { connections: connectedSockets});
});