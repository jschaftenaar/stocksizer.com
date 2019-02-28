import { Settings } from '../Actions'

const SettingsReducer = (state = Settings.initialState, action) => {
  const newState = Object.assign({}, state);
  const keys = Object.keys(Settings.initialState);
  if (!newState.hasOwnProperty('currentSettings')) {
    newState.currentSettings = {};
  }

  switch (action.type) {
    case Settings.CURRENT_SETTING_CHANGE:
      const result = {};
      result[action.key] = action.value;
      newState.currentSettings = Object.assign(newState.currentSettings, result);
      return newState;

    case Settings.SAVE_CURRENT_SETTINGS:
      keys.forEach(key => {
        newState[key] = newState.currentSettings[key];
      });
      return newState;

    case Settings.RESET_CURRENT_SETTINGS:
      keys.forEach(key => { 
        newState.currentSettings[key] = Settings.initialState[key];
      });
      return newState;

    default:
      return state;
  }
}

export default SettingsReducer;
