import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './containers/Signup';
import Login from './containers/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Signup} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
