import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import Position from '../../Components/Position';

function mapStateToProps(state, {match}) {
  return state.positions.find(item => {
    return item.uuid === match.params.uuid;
  });
}

export default connect(mapStateToProps)(Position);
