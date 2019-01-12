import { Settings } from '../Actions'

const SettingsReducer = (state = Settings.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default SettingsReducer;
