import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

import './input.css';

const Input = ({ message, setMessage, sendMessage }) => {

  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <form className="form">
    <input
    className="input"
    type="text"
    placeholder="Type a message..."
    value={message} 
    onChange={({target : {value}}) => setMessage(value) } 
    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
        <div>
      {chosenEmoji ? (
        <span>You chose: {chosenEmoji.emoji}</span>
      ) : (
        <span>No emoji Chosen</span>
      )}
      <Picker onEmojiClick={onEmojiClick} />
    </div>
    <button className="sendButton" onClick={(event) => sendMessage(event)}>SEND</button>
  </form>
  )
};

export default Input;