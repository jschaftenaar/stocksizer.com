import React from 'react';
import style from './style.module.scss';

const PositionBasics = () => {
return (
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Position Type &amp; Price</h5>        
        <fieldset className="form-group row">
          <div className="row">
            <legend className="col-form-label col-sm-6 pt-0">Position Type</legend>
            <div className="col-sm-6">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                <label className="form-check-label" for="gridRadios1">
                  Long Position
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                <label className="form-check-label" for="gridRadios2">
                  Short Position
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="form-group row">
          <label for="inputEmail3" className="col-sm-6 col-form-label">Ticker</label>
          <div className="col-sm-6">
            <input type="email" className="form-control" id="inputEmail3" placeholder="Ticker"/>
          </div>
        </div>
        <div className="form-group row">
          <label for="inputPassword3" className="col-sm-6 col-form-label">Price Percentage</label>
          <div className="col-sm-6">
            <input type="password" className="form-control" id="inputPassword3" placeholder="Profit"/>
          </div>
        </div>
      </div>
    </div>
  </div>
)
};

export default PositionBasics