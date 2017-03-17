const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(3000);

app.get('/', (request, response) => {
	response.sendFile( __dirname + '/index.html'); 
});


io.on('connection', (socket) => {
	console.log('A connection has made');

	socket.on('chat.message', (message)=>{
		io.emit('chat.message', message)
	}) 

})

