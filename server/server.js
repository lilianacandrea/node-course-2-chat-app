const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

// This is the path that we'll provide to Express static middleware.
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);

// io - it's our web socket server.
var io = socketIO(server);

app.use(express.static(publicPath));

// Connection event: this lets you listen for a new connection meaning tat a client connected to the server and it lets you do something when that connection comes.
// In order to do something you provide a callaback fuction as the second argument and this callback func. is going to get called with a socket.
io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', (socket) => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
