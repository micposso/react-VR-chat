import React from 'react';
import './input.css';

const Input = ({ message, setMessage, sendMessage }) => (
  <form className="form">
    <input
    className="input"
    type="text"
    placeholder="Type a message..."
    value={message} 
    onChange={({target : {value}}) => setMessage(value) } 
    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButton" onClick={(event) => sendMessage(event)}>SEND</button>
  </form>
)

export default Input;