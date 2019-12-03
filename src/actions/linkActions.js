import { fetchLinks } from '../services/links';

export const UPDATE_LINKS = 'UPDATE_LINKS';
export const linksActionCreator = () => dispatch => {
  return fetchLinks()
    .then(links => {
      dispatch({
        type: UPDATE_LINKS,
        payload: links
      });
    });
};
