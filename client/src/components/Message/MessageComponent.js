import React from 'react';
import './message.css';

const Message = ({message: { user, text }, name}) => {
  let isSentByCurrentUser = false;

  const trimmedName = user.trim().toLowerCase();
  
  console.log('from message component', trimmedName);

  if( name === trimmedName ) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser ? 
    (
      <div className="messageContainer justtifyEnd">
        <p className="sentText pr-10">{trimmedName}</p>
        <div className="messageBox backgroundBlue">
          <p className="messageText colorWhite">{text}</p>
        </div>
      </div>
    )
    :
    (
      <div className="messageContainer justifyStart">
        <div className="messageBox backgroundLight">
          <p className="messageText colorDark">{text}</p>
        </div>
        <p className="sentText pl-10">{trimmedName}</p>
      </div>
    )
  );

}

export default Message;