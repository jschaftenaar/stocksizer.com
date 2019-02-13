import React from 'react';
import style from './style.module.scss';
import Textinput from '../../Textinput';
import Tooltip from '../../Tooltip';

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
          label='Commissions'
          placeholder='Commissions'
          onChange={commissionsChange}
          value={commissions}
          appendLabel={(<i className="fas fa-dollar-sign"></i>)}
        />

        <div className="form-group row">
          <label className="col-sm-6 col-form-label">
            Minimum shares for profit
            <Tooltip content='Minimum nr of shares to offset commissions'>
              <i className="fas fa-info-circle"></i>
            </Tooltip>
          </label>
          <div className="col-sm-6 input-group">10</div>
        </div>


        <div className="form-group row">
          <label className="col-sm-6 col-form-label">
            Maximum shares for account size
            <Tooltip content='based on combination of position stop loss, account size and account max loss.'>
              <i className="fas fa-info-circle"></i>
            </Tooltip>
          </label>
          <div className="col-sm-6 input-group">10</div>
        </div>



        <Textinput
          label='Shares'
          placeholder='Shares'
          onChange={sharesChange}
          value={shares}
        />
        <p className="card-text">Determine the position size, potential profit, and potential loses. To trade without commissions and increase your overal profits use <a href="https://share.robinhood.com/jeroens5" target="_blank" rel="noopener noreferrer">Robinhood</a></p>
      </div>
  </div>
  );
};

export default PositionTotal;
