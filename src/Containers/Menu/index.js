import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Menu from '../../Components/Menu';

function mapStateToProps(state) {
  return {
    positions: state.positions
  };
}

export default connect(mapStateToProps)(Menu);
