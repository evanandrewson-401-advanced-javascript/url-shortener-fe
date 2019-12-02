export const signupFetch = (username, password) => {
  return fetch('http://localhost:7890/api/v1/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password }),
    credentials: 'include'
  })
    .then(res => res.json());
};

export const loginFetch = (username, password) => {
  return fetch('http://localhost:7890/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password }),
    credentials: 'include'
  })
    .then(res => res.json());
};

export const verifySessionFetch = () => {
  return fetch('http://localhost:7890/api/v1/auth/verify', {
    method: 'GET',
    credentials: 'include'
  })
    .then(res => res.json());
};
