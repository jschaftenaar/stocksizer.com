/* action types */

export const Settings = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const Positions = {};

export const Size = {
  SET_POSITION: 'SIZE_POSITION_SET',
  SET_TICKER: 'SIZE_TICKER_SET'
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
