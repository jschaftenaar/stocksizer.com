import { combineReducers } from 'redux';
import settings from './SettingsReducer.js';
import positions from './PositionsReducer.js';

export default combineReducers({
  settings,
  positions
});