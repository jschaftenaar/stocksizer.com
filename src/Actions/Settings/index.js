import { Settings } from '..';

export const currentSettingChange = (key, value) => ({
  type: Settings.CURRENT_SETTING_CHANGE,
  key,
  value
});

export const resetCurrentSettings = () => ({
  type: Settings.RESET_CURRENT_SETTINGS
});

export const saveCurrentSettings = () => ({
  type: Settings.SAVE_CURRENT_SETTINGS
});