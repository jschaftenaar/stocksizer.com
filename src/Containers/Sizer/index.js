import React from 'react';
import { connect } from 'react-redux';
import Sizer from '../../Components/Sizer';

function mapStateToProps(state, {match}) {
  return {
    title: match.params.id
  };
}

export default connect(mapStateToProps)(Sizer);
