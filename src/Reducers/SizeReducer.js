import { Size } from '../Actions'

const SettingsReducer = (state = Size.initialState, action) => {
  switch (action.type) {
    case Size.POSITION_TYPE_CHANGE:
      return Object.assign({}, state, { positionType: action.positionType });
    case Size.TICKER_CHANGE:
      return Object.assign({}, state, { ticker: action.ticker });
    case Size.PRICE_CHANGE:
      return Object.assign({}, state, { price: action.price });
    case Size.PROFIT_CHANGE:
      return Object.assign({}, state, { profit: action.profit });
    case Size.STOPLOSS_CHANGE:
      return Object.assign({}, state, { stoploss: action.stoploss });
    case Size.SHARES_CHANGE:
      return Object.assign({}, state, { shares: action.shares });
    case Size.COMMISSIONS_TYPE_CHANGE:
      return Object.assign({}, state, { commissionsType: action.commissionsType });
    case Size.COMMISSIONS_CHANGE:
      return Object.assign({}, state, { commissions: action.commissions });
    case Size.RESET:
      return Object.assign({}, Size.initialState);
    default:
      return state;
  }
}

export default SettingsReducer;
