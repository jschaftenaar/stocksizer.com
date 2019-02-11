import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import PositionPercentages from '../../../Components/Size/PositionPercentages';
import axios from 'axios';
import { profitChange, stoplossChange } from '../../../Actions/Size';

const  mapStateToProps = ({size}, {match}) => {
  return {
    profit: size.profit,
    stoploss: size.stoploss
  };
}

const mapDispatchToProps = dispatch => {
  return {
    profitChange: event => dispatch(profitChange(event.target.value)),
    stoplossChange: event => dispatch(stoplossChange(event.target.value)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PositionPercentages);
