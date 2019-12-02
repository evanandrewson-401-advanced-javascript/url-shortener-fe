import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UsernameAndPassForm = ({ handleSubmit, buttonText }) => {
  const [username, updateUsername] = useState('Username');
  const [password, updatePassword] = useState('Password');

  return (
    <form onSubmit={event => handleSubmit(event, buttonText, username, password)}>
      <input type='text' value={username} onChange={({ target }) => updateUsername(target.value)} />
      <input type='password' value={password} onChange={({ target }) => updatePassword(target.value)} />
      <button>{buttonText}</button>
    </form>
  );
};

UsernameAndPassForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default UsernameAndPassForm;
