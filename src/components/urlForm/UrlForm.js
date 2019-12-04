import React, { useState } from 'react';
import { shortenUrl, postUrl } from '../../services/shorten';
import styles from './UrlForm.css';


const UrlForm = () => {
  const [url, setUrl] = useState('url');
  
  const submitUrl = (event, url) => {
    event.preventDefault();
    postUrl(shortenUrl(url));
    alert('URL submitted');
    setUrl('url');
  };
  
  return (
    <form className={styles.UrlForm} onSubmit={event => submitUrl(event, url)}>
      <input type='text' value={url} onChange={({ target }) => setUrl(target.value)} />
      <button>Submit</button>
    </form>
  );
};

export default UrlForm;
