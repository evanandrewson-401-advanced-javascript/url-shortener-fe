import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import UsernameAndPassForm from '../session/UsernameAndPassForm';
import PropTypes from 'prop-types';
import { login } from '../../actions/sessionActions';
import { getSessionId, getSessionError } from '../../selectors/sessionSelectors';

const Login = ({ handleLogin, sessionError, sessionId }) => {
  if(sessionId) return <Redirect to='/input' />;
  return (
    <>
      <UsernameAndPassForm buttonText='Log in' handleSubmit={handleLogin} />
      <Link to='/'>Sign up</Link>
      {sessionError && <p>{sessionError}</p>}
    </>
  );
};

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  sessionError: PropTypes.string,
  sessionId: PropTypes.string
};

const mapStateToProps = state => ({
  sessionError: getSessionError(state),
  sessionId: getSessionId(state)
});

const mapDispatchToProps = dispatch => ({
  handleLogin(event, username, password) {
    event.preventDefault();
    dispatch(login(username, password));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
