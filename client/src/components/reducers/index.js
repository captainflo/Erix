import { combineReducers } from 'redux';
import strains from './strains';

export default combineReducers({
  flowers: strains,
});
