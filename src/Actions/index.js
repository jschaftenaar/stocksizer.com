/* action types */

export const Settings = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const Positions = {};

export const Size = {
  SET_POSITION: 'SIZE_POSITION_SET',
  SET_TICKER: 'SIZE_TICKER_SET',
  SET_PRICE_LOADING: 'SIZE_SET_PRICE_LOADING',
  SET_PRICE: 'SIZE_SET_PRICE',
  ADD_TO_POSITIONS: 'SIZE_ADD_TO_POSITIONS',
  PROFIT_CHANGE: 'SIZE_PROFIT_CHANGE',
  STOPLOSS_CHANGE: 'SIZE_STOPLOSS_CHANGE',
  COMMISSIONS_CHANGE: 'SIZE_COMMISSIONS_CHANGE',
  SHARES_CHANGE: 'SIZE_SHARES_CHANGE'
};


/* Action creators */

export const SizePositionChange = position => ({
  type: Size.SET_POSITION,
  position
});

export const SizeTickerChange = ticker => ({
  type: Size.SET_TICKER,
  ticker
});

export const SizeSetPriceLoading = () => ({
  type: Size.SET_PRICE_LOADING
});

export const SizeSetPrice = price => ({
  type: Size.SET_PRICE,
  price
});

export const SizeAddToPositions = () => ({
  type: Size.ADD_TO_POSITIONS
});

export const SizeProfitChange = profit => ({
  type: Size.PROFIT_CHANGE,
  profit
});

export const SizeStoplossChange = stoploss => ({
  type: Size.STOPLOSS_CHANGE,
  stoploss
});

export const SizeCommissionsChange = commissions => ({
  type: Size.COMMISSIONS_CHANGE,
  commissions
});

export const SizeSharesChange = shares => ({
  type: Size.SHARES_CHANGE,
  shares
});