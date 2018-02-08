const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '/../public');
const {generateMessage, generateLocationMessage} = require('./utils/message');
var app = express();
var server = http.createServer((app));
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New User Connected');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the Chat App'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user Joined'));

  socket.on('createMessage', (message, callback) => {
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback();
  });

  socket.on('createLocationMessage', (coords) => {
    io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
