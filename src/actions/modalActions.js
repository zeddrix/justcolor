import * as c from './constants';

export const showSettings = () => {
  return {
    type: c.SHOW_SETTINGS,
  };
};

export const hideSettings = () => {
  return {
    type: c.HIDE_SETTINGS,
  };
};

export const showAppendModal = () => {
  return {
    type: c.SHOW_APPEND_MODAL,
  };
};

export const hideAppendModal = () => {
  return {
    type: c.HIDE_APPEND_MODAL,
  };
};
