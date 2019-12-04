export const getHit = (id) => {
  return fetch(`http://localhost:7890/api/v1/hit/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
    .then(res => res.json());
};
