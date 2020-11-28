const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js');
// declare port
const PORT = process.env.PORT || 5000;

// declare the express app
const app = express();
// initialize the server for the app
const server = http.createServer(app);
// initialize a socker in the server
const io = socketio(server);

// use socketio to register user connect and disconnect, the connection is managed from inside the socket, now its ready to be implemented in the frontend
io.on('connection', (socket) => {

  console.log("We have a new connection ");
  // listen for the event that is being emmited, reference by string
  socket.on('join', ({ name, room }, callback) => {
    // error log
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);
    // now we have access on the backend to this info and are emmiting it to the frontend
    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}`});

    // broadcast sends a message to everyone. use when user joins chat
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined`});

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    // run the callback with no error
    callback();

  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    console.log(user);

    //io.to(user.room).emit('message', { user: user.name, text: message});

    callback();

  });

  socket.on('disconnect', () => {
    console.log("User has left");
  })
});


// connect to express router
app.use(router);

// run the server in a port and add console log to confirm is running
server.listen(PORT, () => console.log(`server is running in ${PORT}`));