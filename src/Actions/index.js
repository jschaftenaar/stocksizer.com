/* action types */
export const Settings = {
  initialState: {
    accountSize: '1000',
    accountStoplossPercentage: '1',
    profitPercentage: '10',
    positionStoplossPercentage: '3',
    stockPurchaseCommission: '6.95',
    stockSellCommission: '6.95'
  },
  CURRENT_SETTING_CHANGE: 'CURRENT_SETTING_CHANGE',
  SAVE_CURRENT_SETTINGS: 'SAVE_CURRENT_SETTINGS',
  RESET_CURRENT_SETTINGS: 'RESET_CURRENT_SETTINGS',

};

export const Positions = {};

export const Size = {
  initialState: {
    positionType: 'long'
  },
  POSITION_TYPE_CHANGE: 'POSITION_TYPE_CHANGE',
  TICKER_CHANGE: 'SIZE_TICKER_SET',
  SET_PRICE_LOADING: 'SIZE_SET_PRICE_LOADING',
  PRICE_CHANGE: 'SIZE_SET_PRICE',
  ADD_TO_POSITIONS: 'SIZE_ADD_TO_POSITIONS',
  PROFIT_CHANGE: 'SIZE_PROFIT_CHANGE',
  STOPLOSS_CHANGE: 'SIZE_STOPLOSS_CHANGE',
  COMMISSIONS_CHANGE: 'SIZE_COMMISSIONS_CHANGE',
  SHARES_CHANGE: 'SIZE_SHARES_CHANGE'
};
