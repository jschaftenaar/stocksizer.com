import React from 'react';
import PropTypes from 'prop-types';
import Textinput from '../../Textinput';
import Radioinput from '../../Radioinput';

const PositionBasics = ({
  positionTypeChange,
  positionType,
  ticker,
  tickerChange,
  onAction,
  price,
  priceChange
}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Position Type &amp; Price</h5>
        <h6 className="card-subtitle mb-2 text-muted">Set the price you purchases your stock at</h6>
        <Radioinput
          value = {positionType}
          options = {[
            {
              value: 'long',
              label: 'Long'
            }, {
              value: 'short',
              label: 'Short'
            }
          ]}
          onChange={positionTypeChange}
          label='Position Type'
        />
        <Textinput
          label='Ticker'
          placeholder='Ticker'
          onChange={tickerChange}
          value={ticker}
          actionLabel={(<i className="fas fa-arrow-alt-circle-down"></i>)}
          onAction={event => { onAction(event, ticker); }}
        />
        <Textinput
          label='Price'
          onChange={priceChange}
          value={price}
          placeholder='Price'
          appendLabel={(<i className="fas fa-dollar-sign"></i>)}
        />
        <p>Use the ticker symbol to retrieve the latest market price from iex</p>        
      </div>
    </div>
  );
};

PositionBasics.defaultProps = {
  positionTypeChange: () => {},
  priceChange: () => {},
  tickerChange: () => {},
  price: '',
  ticker: '',
  positionType: ''
};

PositionBasics.propTypes = {
  positionType: PropTypes.string,
  ticker: PropTypes.string,
  tickerChange: PropTypes.func,
  price: PropTypes.string,
  priceChange: PropTypes.func,
  positionTypeChange: PropTypes.func
};

export default PositionBasics;
