import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import Size from '../../Components/Size';
import axios from 'axios';
import { SizeAddToPositions } from '../../Actions';

const mapDispatchToProps = dispatch => {
  return {
    onAdd: event => dispatch(SizeAddToPositions(event.target.value))
  }
};

export default connect(
  mapDispatchToProps
)(Size);
