import { signupFetch, loginFetch, verifySessionFetch } from '../services/session';

export const SET_SESSION = 'SET_SESSION';
export const SET_SESSION_LOADING = 'SET_SESSION_LOADING';
export const SET_SESSION_ERROR = 'SET_SESSION_ERROR';
export const signup = (username, password) => dispatch => {
  return signupFetch(username, password)
    .then(user => {
      dispatch({
        type: SET_SESSION,
        payload: user
      });
    });
};

export const login = (username, password) => dispatch => {
  return loginFetch(username, password)
    .then(user => {
      dispatch({
        type: SET_SESSION,
        payload: user
      });
    });
};

export const sessionVerify = () => dispatch => {
  dispatch({
    type: SET_SESSION_LOADING
  });

  return verifySessionFetch()
    .then(user => {
      dispatch({
        type: SET_SESSION,
        payload: user
      });
    })
    .catch(err => {
      dispatch({
        type: SET_SESSION_ERROR,
        payload: err
      });
    });
};

