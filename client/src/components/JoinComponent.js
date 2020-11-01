import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// hooks allow you to use lifecycle methods on functional components insted of class based components. easier to write less code and impoved readability

const JoinComponent = () => {

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div><input className="joinInput" type="text" placeholder="Name" onChange={(event) => setName(event.target.value) } /></div>
        <div><input className="joinInput mt-20" type="text" placeholder="Room" onChange={(event) => setRoom(event.target.value) } /></div>
        {/* Pass the parameters to the URL in the Link router from the state */}
        {/* if there are not entries, disable the Link to the next page by preventin button click */}
        <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room }`}>
          <button className="button mt-20" type="submit">Submit</button>
        </Link>
      </div>
    </div>
  )
}

export default JoinComponent;