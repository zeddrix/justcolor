import { combineReducers } from "redux";

import {
  toggleShowSettingsReducer,
  toggleShowAppendModalReducer,
  toggleShowEditModalReducer
} from "./reducers/modalReducers";
import {
  getColorsReducer,
  appendNewColorReducer
} from './reducers/colorReducer';

const reducer = combineReducers({
  toggleShowSettingsState: toggleShowSettingsReducer,
  toggleShowAppendModalState: toggleShowAppendModalReducer,
  toggleShowEditModalState: toggleShowEditModalReducer,
  getColorsState: getColorsReducer,
  appendNewColorState: appendNewColorReducer,
});

export default reducer;
