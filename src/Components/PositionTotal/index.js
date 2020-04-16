import React from 'react';
import Textinput from '../Textinput';
import Tooltip from '../Tooltip';
import Radioinput from '../Radioinput';

const PositionTotal = ({
  shares,
  commissions,
  commissionsChange,
  sharesChange,
  commissionsType,
  commissionsTypeChange,
  minimumShares,
  maximumShares
}) => {
  const commissionsTypIcon = commissionsType == 'monetary'
    ? (<i className="fas fa-dollar-sign"></i>)
    : (<i className="fas fa-percentage"></i>)
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Commission &amp; Shares</h5>
        <h6 className="card-subtitle mb-2 text-muted">Set shares count and commission amount</h6>
        <Radioinput
          value = {commissionsType}
          options = {[
            {
              value: 'monetary',
              label: 'Monetary'
            }, {
              value: 'percentage',
              label: 'Percentage'
            }
          ]}
          onChange={commissionsTypeChange}
          label='Commissions Type'
        />
        <Textinput
          label='Commissions'
          placeholder='Commissions'
          onChange={commissionsChange}
          value={commissions}
          appendLabel={commissionsTypIcon}
        />

        <div className="form-group row">
          <label className="col-sm-6 col-form-label">
            Minimum shares for profit
            <Tooltip content={(<div>Minimum number of shares to make a profit,<br/>this also takes any commissions into account.</div>)}>
              <i className="fas fa-info-circle"></i>
            </Tooltip>
          </label>
          <div className="col-sm-6 input-group">{minimumShares}</div>
        </div>

        <div className="form-group row">
          <label className="col-sm-6 col-form-label">
            Maximum shares for account size
            <Tooltip content={(<div>Depending on your account size, and overal acceptable account<br/> loss this is the maximum number of shares you should purchase.</div>)}>
              <i className="fas fa-info-circle"></i>
            </Tooltip>
          </label>
          <div className="col-sm-6 input-group">{maximumShares}</div>
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

PositionTotal.defaultProps = {
  commissions: '',
  shares: '',
  commissionsType: 'monetary',
  minimumShares: '',
  maximumShares: '',
  commissionsTypeChange: () => {},
  commissionsChange: () => {},
  sharesChange: () => {}
}

export default PositionTotal;
