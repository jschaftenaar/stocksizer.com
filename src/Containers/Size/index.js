import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import Size from '../../Components/Size';
import axios from 'axios';
import { addToPositions } from '../../Actions/Size';

const mapStateToProps = ({size}) => {
  return {
    position: size
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
