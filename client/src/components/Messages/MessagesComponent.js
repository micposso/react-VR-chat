import React from 'react';
// connect to react scroll to botton
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/MessageComponent.js'

const Messages = ({messages, name}) => (
  <ScrollToBottom>
    {
      messages.map((message, i) => 
      <div key={i}>
        <Message message={message} name={name} />
      </div>)
    }

  </ScrollToBottom>
);

export default Messages;