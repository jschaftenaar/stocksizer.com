import React from 'react';
import PropTypes from 'prop-types';
import Textinput from '../../Textinput';
import Radioinput from '../../Radioinput';

const PositionBasics = ({
  positionChange,
  position,
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
        <Radioinput
          value = {position}
          options = {[
            {
              value: 'long',
              label: 'Long'
            }, {
              value: 'short',
              label: 'Short'
            }
          ]}
          onChange={positionChange}
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
        />
      </div>
    </div>
  );
};

PositionBasics.defaultProps = {
  positionChange: () => {},
  priceChange: () => {},
  tickerChange: () => {},
  price: '',
  ticker: '',
  position: ''
};

PositionBasics.propTypes = {
  position: PropTypes.string,
  ticker: PropTypes.string,
  tickerChange: PropTypes.func,
  price: PropTypes.string,
  priceChange: PropTypes.func,
  positionSelect: PropTypes.func
};

export default PositionBasics;
