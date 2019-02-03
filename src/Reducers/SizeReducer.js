import { Size } from '../Actions'

const SettingsReducer = (state = {position: 'long'} , action) => {
  switch (action.type) {
    case Size.SET_POSITION :
      return Object.assign({}, state, { position: action.position });
    case Size.SET_TICKER :
      return Object.assign({}, state, { ticker: action.ticker });
    default:
      return state;
  }
}

export default SettingsReducer;
