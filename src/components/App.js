import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Signup from './containers/Signup';
import Login from './containers/Login';
import UrlForm from './urlForm/UrlForm';
import { sessionVerify } from '../actions/sessionActions';
import { getSessionId, getSessionLoading } from '../selectors/sessionSelectors';
import LinkList from './links/LinkList';
import Header from './header/Header';

const PrivateRoute = ({ ...rest }) => {
  const sessionId = useSelector(getSessionId);
  const loading = useSelector(getSessionLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!sessionId) dispatch(sessionVerify());
  }, []);

  if(loading) return <h1>Loading...</h1>;

  if(!loading && !sessionId) return <Redirect to='/' />;

  return <Route { ...rest } />;
};

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Signup} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/input' component={UrlForm} />
        <PrivateRoute path='/links' component={LinkList} />
      </Switch>
    </Router>
  );
};

export default App;
