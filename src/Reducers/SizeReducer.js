import { Size } from '../Actions'

const SettingsReducer = (state = {positionType: 'long'} , action) => {
  switch (action.type) {
    case Size.SET_POSITION_TYPE:
      return Object.assign({}, state, { positionType: action.positionType });
    case Size.SET_TICKER:
      return Object.assign({}, state, { ticker: action.ticker });
    case Size.SET_PRICE:
      return Object.assign({}, state, { price: action.price });
    case Size.PROFIT_CHANGE:
      return Object.assign({}, state, { profit: action.profit });
    case Size.STOPLOSS_CHANGE:
      return Object.assign({}, state, { stoploss: action.stoploss });
    default:
      return state;
  }
}

export default SettingsReducer;
