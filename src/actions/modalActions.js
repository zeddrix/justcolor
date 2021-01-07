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
