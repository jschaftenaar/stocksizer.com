import React from 'react';
import style from './style.module.scss';

const PositionPercentages = () => {
  return (
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Profit/Stop Loss Percentages</h5>    
          <div className="form-group row">
            <label for="inputPassword3" className="col-xs-6 col-form-label">Profit Percentage</label>
            <div className="col-xs-6">
              <input type="password" className="form-control" id="inputPassword3" placeholder="Profit"/>
            </div>
          </div>
          <div className="form-group row">
            <label for="inputPassword3" className="col-xs-6 col-form-label">Stop Loss Percentage</label>
            <div className="col-xs-6">
              <input type="password" className="form-control" id="inputPassword3" placeholder="Stop Loss"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PositionPercentages