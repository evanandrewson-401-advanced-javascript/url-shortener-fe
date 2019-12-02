import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import UsernameAndPassForm from '../session/UsernameAndPassForm';
import PropTypes from 'prop-types';
import { signup } from '../../actions/sessionActions';

const Signup = ({ handleSignup }) => {
  return (
    <>
      <UsernameAndPassForm buttonText='Sign up' handleSubmit={handleSignup} />
      <Link to='/login'>Log in</Link>
    </>
  );
};

Signup.propTypes = {
  handleSignup: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  handleSignup(event, username, password) {
    event.preventDefault();
    dispatch(signup(username, password));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Signup);
