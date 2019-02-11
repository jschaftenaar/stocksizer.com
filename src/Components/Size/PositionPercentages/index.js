import React from 'react';
import style from './style.module.scss';
import Textinput from '../../Textinput';

const PositionPercentages = ({
  profitChange,
  profit,
  stoplossChange,
  stoploss
}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Profit/Stop Loss Percentages</h5>
        <h6 className="card-subtitle mb-2 text-muted">Set your profit and stop loss percentages</h6>
        <Textinput
          label='Profit Percentage'
          placeholder='Profit Percentage'
          onChange={profitChange}
          value={profit}
          appendLabel='%'
        />
        <Textinput
          label='Stop Loss Percentage'
          placeholder='Stop Loss Percentage'
          onChange={stoplossChange}
          value={stoploss}
          appendLabel='%'
        />
        <p className="card-text">This is determined by your support and resistance. <a href="https://learn-plan-profit.teachable.com?affcode=140060_powg0qym" rel="noopener noreferrer" target="_blank">Learn more about support and resistance</a></p>
      </div>
    </div>
  );
};

PositionPercentages.defaultProps = {
  profit: '',
  stoploss: '',
  stoplossChange: () => {},
  profitChange: () => {}
}

export default PositionPercentages
