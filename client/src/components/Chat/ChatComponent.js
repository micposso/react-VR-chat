// use effect is similar to componentDidMount and componentDidUpdate, good to set values at the start
import React, { useState, useEffect } from 'react';
// use to retrieve data from the URL
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../Infobar/InfoBar.js';
import Input from '../Input/InputComponent.js';
import Messages from '../Messages/MessagesComponent.js';
import './chat.css';

// set socket variable that will change
let socket;

const ChatComponent = ( {location} ) => {
  // use hook to pass url parameters in useEffect as state of the component
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  // set endpoint, server must be running
  const ENDPOINT = 'localhost:5000';


  useEffect(() => {
    // get data from url
    // location comes from react router, and returns a prop
    // below returnt the url, but needs to be restructured into variables
    const {name, room} = queryString.parse(location.search);
    // start a scoket from the endpoint
    socket = io(ENDPOINT);
    //console.log(name, room);
    // pass the data from url saved in variables to the useState
    setName(name);
    setRoom(room);
    //console.log(socket);
    // emit event to the endpoint to be cought by the server, pass string and then object with data
    // grab error object from server socket io connection callback
    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error); 
      } 
    });

    // unmount useeffect hook, this will be triggered when the chat component is unmounted
    return () => {
      socket.emit('disconnect');

      socket.off();
    }

  }, [ENDPOINT, location.search]);
  // above, need to pass an argument to userEffect to only run when parameters change, this way. socket only runs once

  // user hook to handle message
  useEffect(() => {
    socket.on('message', (message) => {
    setMessages([...messages, message]);
    });
  }, [messages]);

  // function for sending message
  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  console.log(message, messages);

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  )
}

export default ChatComponent;