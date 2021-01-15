import { combineReducers } from "redux";

import {
  toggleShowSettingsReducer,
  toggleShowAppendModalReducer,
  toggleShowEditModalReducer
} from "./reducers/modalReducers";
import {
  renderAllColorsReducer,
  appendNewColorReducer
} from './reducers/colorReducer';

const reducer = combineReducers({
  toggleShowSettingsState: toggleShowSettingsReducer,
  toggleShowAppendModalState: toggleShowAppendModalReducer,
  toggleShowEditModalState: toggleShowEditModalReducer,
  renderAllColorsState: renderAllColorsReducer,
  appendNewColorState: appendNewColorReducer,
});

export default reducer;
