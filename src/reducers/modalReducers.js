import * as c from '../actions/constants';

export const toggleShowSettingsReducer = (state = false, action) => {
  switch (action.type) {
    case c.SHOW_SETTINGS:
      return { show: true };
    case c.HIDE_SETTINGS:
      return { show: false };
    default:
      return state;
  }
};
