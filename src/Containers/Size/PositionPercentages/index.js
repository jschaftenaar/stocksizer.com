import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import PositionPercentages from '../../../Components/Size/PositionPercentages';
import axios from 'axios';
import { SizeProfitChange, SizeStoplossChange } from '../../../Actions';

const  mapStateToProps = ({size}, {match}) => {
  return {
    profit: size.profit,
    stoploss: size.stoploss
  };
}

const mapDispatchToProps = dispatch => {
  return {
    profitChange: event => dispatch(SizeProfitChange(event.target.value)),
    stoplossChange: event => dispatch(SizeStoplossChange(event.target.value)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PositionPercentages);
