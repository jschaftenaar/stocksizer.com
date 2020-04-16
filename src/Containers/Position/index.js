import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import Position from '../../Components/Position';
import { points as calcPoints } from '../../Utils/Determine';
import { deletePositionById } from '../../Actions/Positions';

function mapStateToProps(state, {match, history}) {
  const position = state.positions.find(item => {
    return item.uuid === match.params.uuid;
  });

  if(!position) {
    return { redirect: '/' }
  }

  const settings = Object.assign({}, state.settings);
  if (settings.hasOwnProperty('currentSettings')) {
    delete settings.currentSettings;
  }
  const points = calcPoints(position, settings);

  return {
    position,
    points
  }
}


const mapDispatchToProps = (dispatch)=> {
  return {
    onDelete: (event, uuid) => {
      event.preventDefault();
      dispatch(deletePositionById(uuid));
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Position);
