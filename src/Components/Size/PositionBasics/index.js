import React from 'react';
import PropTypes from 'prop-types';
import Textinput from '../../Textinput';
import Radioinput from '../../Radioinput';

const PositionBasics = ({positionChange, position, ticker, tickerChange}) => {
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
        />
        <Textinput
          label='Price'
          placeholder='Price'
        />
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
