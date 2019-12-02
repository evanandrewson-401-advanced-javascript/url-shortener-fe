import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import UsernameAndPassForm from '../session/UsernameAndPassForm';
import PropTypes from 'prop-types';
import { login } from '../../actions/sessionActions';

const Login = ({ handleLogin }) => {
  return (
    <>
      <UsernameAndPassForm buttonText='Log in' handleSubmit={handleLogin} />
      <Link to='/'>Sign up</Link>
    </>
  );
};

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  handleLogin(event, username, password) {
    event.preventDefault();
    dispatch(login(username, password));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
