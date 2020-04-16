/* action types */
export const Settings = {
  initialState: {
    accountSize: '1000',
    accountStoplossPercentage: '1',
    profitPercentage: '10',
    positionStoplossPercentage: '3',
    stockPurchaseCommission: '6.95',
    stockSellCommission: '6.95',
    commissions: '',
    shares: ''
  },
  CURRENT_SETTING_CHANGE: 'CURRENT_SETTING_CHANGE',
  SAVE_CURRENT_SETTINGS: 'SAVE_CURRENT_SETTINGS',
  RESET_CURRENT_SETTINGS: 'RESET_CURRENT_SETTINGS',

};

export const Positions = {
  DELETE_POSITION: 'DELETE_POSITION',
  ADD_SIZE: 'POSITIONS_ADD_SIZE',
};

export const Size = {
  initialState: {
    positionType: 'long',
    commissionsType: 'monetary'
  },
  POSITION_TYPE_CHANGE: 'POSITION_TYPE_CHANGE',
  TICKER_CHANGE: 'SIZE_TICKER_SET',
  SET_PRICE_LOADING: 'SIZE_SET_PRICE_LOADING',
  PRICE_CHANGE: 'SIZE_SET_PRICE',
  PROFIT_CHANGE: 'SIZE_PROFIT_CHANGE',
  STOPLOSS_CHANGE: 'SIZE_STOPLOSS_CHANGE',
  COMMISSIONS_CHANGE: 'SIZE_COMMISSIONS_CHANGE',
  COMMISSIONS_TYPE_CHANGE: 'SIZE_COMMISSIONS_TYPE_CHANGE',
  SHARES_CHANGE: 'SIZE_SHARES_CHANGE',
  RESET: 'SIZE_RESET'
};
