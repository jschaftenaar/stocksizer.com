import React from 'react';
import style from './style.module.scss';

const PositionTotal = () => {
  return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Commission &amp; Shares</h5>    

          <div className="form-group row">
            <label htmlFor="inputShares" className="col-sm-6 col-form-label">Shares</label>
            <div className="col-sm-6">
              <input type="text" className="form-control" id="inputShares" placeholder="Shares"/>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="inputCommissions" className="col-sm-6 col-form-label">Commissions</label>
            <div className="col-sm-6">
              <input type="text" className="form-control" id="inputCommissions" placeholder="Commissions"/>
            </div>
          </div>

        </div>
    </div>
  );
};

export default PositionTotal