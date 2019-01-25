import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Overview from '../../Components/Overview';

function mapStateToProps(state) {
  // console.log(state);
  // logic to only pass what is needed for the view
  return state;
}

export default connect(mapStateToProps)(Overview);



