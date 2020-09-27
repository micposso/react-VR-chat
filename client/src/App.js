import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import JoinComponent from './components/JoinComponent';
import ChatComponent from './components/ChatComponent';

const App = () => (
  <Router>
    <Route path="/" exact component={JoinComponent} />
    <Route path="/chat" exact component={ChatComponent} />
  </Router>
)

export default App;
