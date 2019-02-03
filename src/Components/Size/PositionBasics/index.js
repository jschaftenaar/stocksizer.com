import React from 'react';
import style from './style.module.scss';
import PropTypes from 'prop-types';

const PositionBasics = ({positionChange, position, ticker, tickerChange}) => {
  return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Position Type &amp; Price</h5>

          <div className="form-group row">
            <div className="col-form-label col-sm-6">Position Type</div>
            <div className="col-sm-6">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="positionRadios" id="positionRadio1" value="long" onChange={positionChange} checked={position=='long'}/>
                <label className="form-check-label" htmlFor="positionRadio1">
                  Long
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="positionRadios" id="positionRadio2" value="short" onChange={positionChange} checked={position=='short'}/>
                <label className="form-check-label" htmlFor="positionRadio2">
                  Short
                </label>
              </div>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="tickerInput" className="col-sm-6 col-form-label">Ticker</label>
            <div className="col-sm-6">
              <input type="text" className="form-control" id="tickerInput" placeholder="Ticker" value={ticker} onChange={tickerChange}/>
            </div>
          </div>

        </div>
      </div>
  );
};

PositionBasics.defaultProps = {
  positionChange: () => {},
  tickerChange: () => {},
  ticker: '',
  position: ''
};

PositionBasics.propTypes = {
  position: PropTypes.string,
  ticker: PropTypes.string,
  tickerChange: PropTypes.func,
  positionSelect: PropTypes.func
};

export default PositionBasics;