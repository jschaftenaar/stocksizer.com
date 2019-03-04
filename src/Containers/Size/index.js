import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import Size from '../../Components/Size';
import { addToPositions } from '../../Actions/Size';
import { points as calcPoints } from '../../Utils/Determine';

const mapStateToProps = ({size, settings}) => {

  if (settings.hasOwnProperty('currentSettings')) {
    delete settings.currentSettings;
  }
  const points = calcPoints(size, settings);

  return {
    position: size,
    points
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: (event, position) => {
      event.preventDefault();
      dispatch(addToPositions(position))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Size);
