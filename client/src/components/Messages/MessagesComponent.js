import React from 'react';
// connect to react scroll to botton
import ScrollToBottom from 'react-scroll-to-bottom';


const Messages = ({messages}) => (
  <ScrollToBottom>
    {
      messages.map((message, i) => 
      <div key={i}>
        {message}
      </div>)
    }

  </ScrollToBottom>
);

export default Messages;