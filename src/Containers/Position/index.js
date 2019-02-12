import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import Position from '../../Components/Position';
import { points as calcPoints } from '../../Utils/Determine';

function mapStateToProps(state, {match}) {
  const position = state.positions.find(item => {
    return item.uuid === match.params.uuid;
  });


  const points = calcPoints(position);

  console.log(points);

  return {
    ...position,
    settings: state.settings,
    points
  }
}

export default connect(mapStateToProps)(Position);
