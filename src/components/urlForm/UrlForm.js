import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { shortenUrl, postUrl } from '../../services/shorten';

const submitUrl = (event, url) => {
  event.preventDefault();
  postUrl(shortenUrl(url));
};

const UrlForm = () => {
  const [url, setUrl] = useState('url');

  return (
    <form onSubmit={event => submitUrl(event, url)}>
      <input type='text' value={url} onChange={({ target }) => setUrl(target.value)} />
      <button>Submit</button>
    </form>
  );
};

// UrlForm.propTypes = {
//   handleSubmit: PropTypes.func.isRequired
// };

// const mapDispatchToProps = dispatch => ({
//   handleSubmit(event, url) {
//     event.preventDefault();
//     dispatch(shortenUrlAction(url));
//   }
// });

// export default connect(
//   null,
//   mapDispatchToProps
// )(UrlForm);

export default UrlForm;
