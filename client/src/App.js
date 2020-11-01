import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import JoinComponent from './components/Join/JoinComponent';
import ChatComponent from './components/Chat/ChatComponent';

const App = () => (
  <Router>
    <Route path="/" exact component={JoinComponent} />
    <Route path="/chat" exact component={ChatComponent} />
  </Router>
)

export default App;
