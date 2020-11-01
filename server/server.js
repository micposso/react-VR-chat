const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');

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
  socket.on('join', ({ name, room }) => {
    console.log(name, room);
  });

  io.on('disconnect', () => {
    console.log("User has left");
  })
});


// connect to express router
app.use(router);

// run the server in a port and add console log to confirm is running
server.listen(PORT, () => console.log(`server is running in ${PORT}`));