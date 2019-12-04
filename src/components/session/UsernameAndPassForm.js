import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styles from './UsernameAndPassForm.css';

const UsernameAndPassForm = ({ handleSubmit, buttonText, history }) => {
  const [username, updateUsername] = useState('Username');
  const [password, updatePassword] = useState('Password');

  return (
    <form className={styles.form} onSubmit={event => handleSubmit(event, username, password, history)}>
      <input type='text' value={username} onChange={({ target }) => updateUsername(target.value)} />
      <input type='password' value={password} onChange={({ target }) => updatePassword(target.value)} />
      <button>{buttonText}</button>
    </form>
  );
};

UsernameAndPassForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(UsernameAndPassForm);
