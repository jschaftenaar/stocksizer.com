import React from 'react';
import { connect } from 'react-redux';
import Size from '../../Components/Size';
import { SizePositionChange, SizeTickerChange } from '../../Actions';

const  mapStateToProps = ({size}, {match}) => {
  return {
    position: size.position,
    ticker: size.ticker
  };
}

const mapDispatchToProps = dispatch => {
  const preventDefaultDispatch = (event, value) => {
    event.preventDefault();
    return dispatch(value);
  };
  return {
    positionChange: event => dispatch(SizePositionChange(event.target.value)),
    tickerChange: event => preventDefaultDispatch(event, SizeTickerChange(event.target.value))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Size);
