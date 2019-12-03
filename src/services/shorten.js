import shortid from 'shortid';

export const shortenUrl = (url) => {
  const id = shortid.generate();
  return ({
    original_url: url,
    code: id
  });
};

export const postUrl = ({ original_url, code }) => {
  return fetch('http://localhost:7890/api/v1/link/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ original_url, code }),
    credentials: 'include'
  })
    .then(res => res.json());
};
