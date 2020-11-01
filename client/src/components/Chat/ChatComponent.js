// use effect is similar to componentDidMount and componentDidUpdate, good to set values at the start
import React, { useState, useEffect } from 'react';
// use to retrieve data from the URL
import queryString from 'query-string';
import io from 'socket.io-client';
// set socket variable that will change
let socket;

const ChatComponent = ( {location} ) => {
  // use hook to pass url parameters in useEffect as state of the component
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
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
    console.log(socket);
  }, [ENDPOINT, location.search]);
  // above, need to pass an argument to userEffect to only run when parameters change, this way. socket only runs once
  return (
    <h1>Chat</h1>
  )
}

export default ChatComponent;