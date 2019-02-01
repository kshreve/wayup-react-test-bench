import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import example from './ducks/example';
import chucknorris from './ducks/chucknorris';

export default combineReducers({
  example,
  chucknorris,
  routing,
});
