import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import Settings from '../../Components/Settings';
import { currentSettingChange, saveCurrentSettings, resetCurrentSettings } from '../../Actions/Settings';

function mapStateToProps(state, {match}) {
  const currentSettings = Object.assign({}, state.settings.currentSettings);
  const keys = Object.keys(state.settings);
  keys.forEach(key => {
    if (key==='currentSettings') {
      return;
    }
    if (!currentSettings.hasOwnProperty(key)) {
      currentSettings[key] = state.settings[key];
    }
  });
  return currentSettings;
}

const mapDispatchToProps = dispatch => {
  return {
    currentSettingChange: (event, key) => {
      event.preventDefault();
      dispatch(currentSettingChange(key, event.target.value));
    },
    saveCurrentSettings: (event) => {
      event.preventDefault();
      dispatch(saveCurrentSettings());
    },
    resetCurrentSettings: (event) => {
      event.preventDefault();
      dispatch(resetCurrentSettings());
    }
  }
};

export default connect(mapStateToProps,  mapDispatchToProps)(Settings);
