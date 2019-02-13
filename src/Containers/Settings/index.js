import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import Settings from '../../Components/Settings';
import { points as calcPoints } from '../../Utils/Determine';

function mapStateToProps(state, {match}) {
  return {
    currentSettings: state.settings,
  }
}

export default connect(mapStateToProps)(Settings);
