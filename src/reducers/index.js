import { combineReducers } from 'redux';
import session from './sessionReducer';
import links from './linksReducer';

export default combineReducers({
  session,
  links
});
