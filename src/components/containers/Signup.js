import React from 'react';
import { connect } from 'react-redux';
import UsernameAndPassForm from '../session/UsernameAndPassForm';
import PropTypes from 'prop-types';

const Signup = ({ handleSignup }) => {
  return (
    <UsernameAndPassForm buttonText='Sign up' handleSubmit={handleSignup} />
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
