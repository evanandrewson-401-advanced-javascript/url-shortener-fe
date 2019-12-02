import { signupFetch } from '../services/session';

export const SET_SESSION = 'SET_SESSION';
export const signup = (username, password) => dispatch => {
  return signupFetch(username, password)
    .then(user => {
      dispatch({
        type: SET_SESSION,
        payload: user
      });
    });
};
