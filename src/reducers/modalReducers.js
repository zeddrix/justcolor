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

export const toggleShowAppendModalReducer = (state = false, action) => {
  switch (action.type) {
    case c.SHOW_APPEND_MODAL:
      return { show: true };
    case c.HIDE_APPEND_MODAL:
      return { show: false };
    default:
      return state;
  }
};
