export const round = (value, decimals) => {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

export const points = position => {
  const profitDelta = parseFloat(position.price)/100*parseFloat(position.profit);
  const stoplossDelta = parseFloat(position.price)/100*parseFloat(position.stoploss);
  const size = parseFloat(position.price)*parseFloat(position.shares);
  const cost = parseFloat(size)+parseFloat(position.commissions);
  let profitPrice = 0;
  let stoplossPrice = 0;
  if (position.positionType=='short') {
    profitPrice = parseFloat(position.price)-profitDelta;
    stoplossPrice = parseFloat(position.price)+stoplossDelta
  } else {
    profitPrice = parseFloat(position.price)+profitDelta;
    stoplossPrice = parseFloat(position.price)-stoplossDelta
  }
  const potentialProfit = profitDelta * parseFloat(position.shares) - parseFloat(position.commissions);
  const potentialLoss = stoplossDelta * parseFloat(position.shares) + parseFloat(position.commissions);
  return {
    profitDelta: round(profitDelta,3),
    stoplossDelta: round(stoplossDelta,3),
    size: round(size,3),
    cost: round(cost,3),
    profitPrice: round(profitPrice,3),
    stoplossPrice: round(stoplossPrice,3),
    potentialProfit: round(potentialProfit,3),
    potentialLoss: round(potentialLoss,3)
  }
}
