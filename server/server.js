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
  socket.on('join', ({ name, room }, callback) => {
    // now we have access on the backend to this info
    console.log(name, room);
    // trigger a response when the join event is detected
    // do some error fake handling here
    const error = false;
    if(error){
    callback({ error: 'error'});
    }
  });

  io.on('disconnect', () => {
    console.log("User has left");
  })
});


// connect to express router
app.use(router);

// run the server in a port and add console log to confirm is running
server.listen(PORT, () => console.log(`server is running in ${PORT}`));