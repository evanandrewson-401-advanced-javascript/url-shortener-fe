export const signupFetch = (username, password) => {
  return fetch('http://localhost:7890/api/v1/auth/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password }),
    credentials: 'include'
  })
    .then(res => res.json());
};
