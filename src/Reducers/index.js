import { combineReducers } from 'redux';
import settings from './SettingsReducer.js';
import positions from './PositionsReducer.js';
import size from './SizeReducer.js';

export default combineReducers({
  settings,
  positions,
  size
});
