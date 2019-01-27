import React from 'react';
import { connect } from 'react-redux';
import Position from '../../Components/Position';

function mapStateToProps(state, {match}) {
  let position = state.positions.find(item => {
    if (item.uuid === match.params.uuid) {
      return true;
    }
  });
  return position;
}

export default connect(mapStateToProps)(Position);
