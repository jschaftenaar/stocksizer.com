import React from 'react';
import { PropTypes } from 'prop-types';
import Content from '../Content';
import Textinput from '../Textinput';
import Radioinput from '../Radioinput';

const Position = ({ticker, positionType, price, profit, stoploss, shares, commissions}) => {
  const onChange=(event) => {

  }

  return (
  	<Content
      title={ticker}
      actionLabel='Delete'

      >
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
          onChange={onChange}
          label='Position Type'
        />
        <Textinput 
          label='Price'
          onChange={onChange}
          value={price}
          placeholder='Price'
        />
        <Textinput 
          label='Ticker'
          onChange={onChange}
          value={ticker}
          placeholder='Ticker'
        />
        <Textinput 
          label='Profit Percentage'
          onChange={onChange}
          value={profit}
          placeholder='Profit Percentage'
        />
        <Textinput 
          label='Stop loss Percentage'
          onChange={onChange}
          value={stoploss}
          placeholder='Stop loss Percentage'
        />
        <Textinput 
          label='Shares'
          onChange={onChange}
          value={shares}
          placeholder='Shares'
        />
        <Textinput 
          label='Commissions'
          onChange={onChange}
          value={commissions}
          placeholder='Commissions'
        />
    </Content>
  );
}

Position.defaultProps = {
  ticker: '',
  price: '',
  profit: '',
  stoploss: '',
  shares: '',
  commissions: '',
  positionType: 'long'
};

Position.propTypes = {
  ticker: PropTypes.string,
  commissions: PropTypes.string,
  shares: PropTypes.string,
  stoploss: PropTypes.string,
  profit: PropTypes.string,
  price: PropTypes.string,
  positionType:PropTypes.string
};

export default Position;
