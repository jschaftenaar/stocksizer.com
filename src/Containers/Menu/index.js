import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import Menu from '../../Components/Menu';

function mapStateToProps(state) {
  return {
    positions: state.positions
  };
}

export default connect(mapStateToProps)(Menu);
