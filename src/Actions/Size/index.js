import { Size } from '..';

export const positionTypeChange = positionType => ({
  type: Size.POSITION_TYPE_CHANGE,
  positionType
});

export const tickerChange = ticker => ({
  type: Size.TICKER_CHANGE,
  ticker
});

export const priceChange = price => ({
  type: Size.PRICE_CHANGE,
  price
});

export const profitChange = profit => ({
  type: Size.PROFIT_CHANGE,
  profit
});

export const stoplossChange = stoploss => ({
  type: Size.STOPLOSS_CHANGE,
  stoploss
});

export const commissionsChange = commissions => ({
  type: Size.COMMISSIONS_CHANGE,
  commissions
});

export const sharesChange = shares => ({
  type: Size.SHARES_CHANGE,
  shares
});

export const commissionsTypeChange = commissionsType => ({ 
  type: Size.COMMISSIONS_TYPE_CHANGE,
  commissionsType
});

export const reset = () => {
  return {
    type: Size.RESET
  }
}



