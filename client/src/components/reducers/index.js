import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import strains from './strains';

export default combineReducers({
  // form: formReducer,
  flowers: strains,
});
