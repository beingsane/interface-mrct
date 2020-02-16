import { combineReducers } from 'redux';

import favorite from './favorites/reducer';

export default combineReducers({
  favorite,
});
