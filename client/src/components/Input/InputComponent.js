import React, { useState } from 'react';
import InputEmoji from "react-input-emoji";

import './input.css';

const Input = ({ message, setMessage, sendMessage }) => {

  //const [text, setText] = useState("");

  
  return (
    <div>
    <InputEmoji
      value={message} 
      onChange={(value) => setMessage(value)} 
      onKeyPress={event => event.key === 'Enter' ? (event) => sendMessage(event) : console.log('enter')}
      placeholder="Type a message"
      cleanOnEnter
    />
  </div>
  )
};

export default Input;