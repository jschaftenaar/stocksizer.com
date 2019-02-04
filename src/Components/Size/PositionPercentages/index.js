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
        <Textinput
          label='Profit Percentage'
          placeholder='Profit Percentage'
          onChange={profitChange}
          value={profit}
        />
        <Textinput
          label='Stop Loss Percentage'
          placeholder='Stop Loss Percentage'
          onChange={stoplossChange}
          value={stoploss}
        />
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
