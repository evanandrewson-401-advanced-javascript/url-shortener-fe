export const fetchLinks = () => {
  return fetch('http://localhost:7890/api/v1/link/list', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
    .then(res => res.json());
};
