import React from 'react';
import style from './style.module.scss';
import Textinput from '../../Textinput';

const PositionTotal = ({
  shares,
  commissions,
  commissionsChange,
  sharesChange
}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Commission &amp; Shares</h5>
        <h6 className="card-subtitle mb-2 text-muted">Set shares count and commission amount</h6>
        <Textinput
          label='Shares'
          placeholder='Shares'
          onChange={sharesChange}
          value={shares}
        />


        <Textinput
          label='Commissions'
          placeholder='Commissions'
          onChange={commissionsChange}
          value={commissions}
        />
        <p className="card-text">Determine the position size, potential profit, and potential loses. To trade without commissions and increase your overal profits use <a href="https://share.robinhood.com/jeroens5" target="_blank" rel="noopener noreferrer">Robinhood</a></p>
      </div>
  </div>
  );
};

export default PositionTotal;
