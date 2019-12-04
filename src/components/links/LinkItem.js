import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getHit } from '../../services/hit';
import styles from './LinkItem.css';


const BASE_URL = 'http://localhost:7890/api/v1/link/';

const LinkItem = ({ link }) => {
  const [hit, setHit] = useState({});
  
  useEffect(() => {
    getHit(link._id).then(result => {
      setHit(result);
    });
  }, []);

  return (
    <div className={styles.LinkItem}>
      <p>Original URL: {link.original_url}</p>
      <p>Shortened URL: {BASE_URL}{link.code}</p>
      <p>Hits: {hit.hits}</p>
    </div>
  );
};

LinkItem.propTypes = {
  link: PropTypes.shape({
    _id: String.isRequired,
    original_url: String.isRequired,
    code: String.isRequired
  }).isRequired
};

export default LinkItem;
