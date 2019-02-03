import React from 'react';
import style from './style.module.scss';

const PositionPercentages = () => {
  return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Profit/Stop Loss Percentages</h5>    

          <div className="form-group row">
            <label htmlFor="inputProfitPercentage" className="col-sm-6 col-form-label">Profit Percentage</label>
            <div className="col-sm-6">
              <input type="text" className="form-control" id="inputProfitPercentage" placeholder="Profit"/>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="inputStopLossPercentage" className="col-sm-6 col-form-label">Stop Loss Percentage</label>
            <div className="col-sm-6">
              <input type="text" className="form-control" id="inputStopLossPercentage" placeholder="Stop Loss"/>
            </div>
          </div>

        </div>
    </div>
  );
};

export default PositionPercentages