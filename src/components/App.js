import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './containers/Signup';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Signup} />
      </Switch>
    </Router>
  );
};

export default App;
