import { combineReducers } from "redux";

import {
  toggleShowSettingsReducer,
  toggleShowAppendModalReducer,
  toggleShowEditModalReducer
} from "./reducers/modalReducers";
import {
  getNewColorsFromLsReducer,
  appendNewColorReducer
} from './reducers/colorReducer';

const reducer = combineReducers({
  toggleShowSettingsState: toggleShowSettingsReducer,
  toggleShowAppendModalState: toggleShowAppendModalReducer,
  toggleShowEditModalState: toggleShowEditModalReducer,
  getNewColorsFromLsState: getNewColorsFromLsReducer,
  appendNewColorState: appendNewColorReducer,
});

export default reducer;
