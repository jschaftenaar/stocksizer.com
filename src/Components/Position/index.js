import React from 'react';
import Content from '../Content';
import PositionBasics from '../../Containers/Position/PositionBasics';
import PositionPercentages from '../../Containers/Position/PositionPercentages';
import PositionTotal from '../../Containers/Position/PositionTotal';
import PropTypes from 'prop-types';

const Size = ({
  position,
  settings,
  points
}) => {
  return (
    <Content title={position.ticker}
      actionLabel='Delete'
      actionIcon='fa-refresh'
    >
      <div className="card-columns">
        <PositionBasics/>
        <PositionPercentages/>
        <PositionTotal/>
      </div>
    </Content>
  );
}

Size.defaultProps = {
  position: {
    type: '',
    ticker: '',
    price: '',
    profit: '',
    stoploss: '',
    shares: '',
    commissions: ''
  }
}

Size.propTypes = {
  position: PropTypes.shape({
    type: PropTypes.string,
    ticker: PropTypes.string,
    price: PropTypes.string,
    profit: PropTypes.string,
    stoploss: PropTypes.string,
    shares: PropTypes.string,
    commissions: PropTypes.string
  })
};

export default Size;
