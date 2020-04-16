import React from 'react';
import Content from '../Content';
import PositionBasics from '../../Containers/Position/PositionBasics';
import PositionPercentages from '../../Containers/Position/PositionPercentages';
import PositionTotal from '../../Containers/Position/PositionTotal';
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";

const Position = ({
  position,
  settings,
  onDelete,
  points,
  redirect
}) => {
  if (redirect) {
    return (<Redirect to={redirect} />);
  }

  return (
    <Content title={position.ticker}
      actionLabel='Delete'
      actionIcon='fa-refresh'
      onAction = {(event) => onDelete(event, position.uuid)}
    >
      <div className="card-columns">
        <PositionBasics/>
        <PositionPercentages/>
        <PositionTotal/>
      </div>
    </Content>
  );
}

Position.defaultProps = {
  redirect: undefined,
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

Position.propTypes = {
  redirect: PropTypes.string,
  onDelete: PropTypes.func,  
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

export default Position;
