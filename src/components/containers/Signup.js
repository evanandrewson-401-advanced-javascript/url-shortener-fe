import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import UsernameAndPassForm from '../session/UsernameAndPassForm';
import PropTypes from 'prop-types';
import { signup } from '../../actions/sessionActions';
import styles from './Auth.css';

const Signup = ({ handleSignup }) => {
  return (
    <div className={styles.auth}>
      <UsernameAndPassForm buttonText='Sign up' handleSubmit={handleSignup} />
      <Link to='/login'>Log in</Link>
    </div>
  );
};

Signup.propTypes = {
  handleSignup: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  handleSignup(event, username, password, history) {
    event.preventDefault();
    dispatch(signup(username, password));
    history.push('/input');
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Signup);
