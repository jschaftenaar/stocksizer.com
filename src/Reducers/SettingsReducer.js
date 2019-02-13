import { Settings } from '../Actions'

const SettingsReducer = (state = Settings.initialState, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default SettingsReducer;
