import { UPDATE_LINKS } from '../actions/linkActions';

const reducer = (state = [], action) => {
  switch(action.type) {
    case UPDATE_LINKS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
