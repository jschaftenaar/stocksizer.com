import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import Position from '../../Components/Position';
import { points as calcPoints } from '../../Utils/Determine';

function mapStateToProps(state, {match}) {
  const position = state.positions.find(item => {
    return item.uuid === match.params.uuid;
  });
  const settings = Object.assign({}, state.settings);
  if (settings.hasOwnProperty('currentSettings')) {
    delete settings.currentSettings;
  }
  const points = calcPoints(position, settings);
  return {
    ...position,
    settings,
    points
  }
}

export default connect(mapStateToProps)(Position);
