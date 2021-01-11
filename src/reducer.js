import { combineReducers } from "redux";
import colorReducer from './reducers/colorReducer';

import {
  toggleShowSettingsReducer,
  toggleShowAppendModalReducer,
  toggleShowEditModalReducer
} from "./reducers/modalReducers";

const reducer = combineReducers({
  toggleShowSettingsState: toggleShowSettingsReducer,
  toggleShowAppendModalState: toggleShowAppendModalReducer,
  toggleShowEditModalState: toggleShowEditModalReducer,
  colorState: colorReducer,
});

export default reducer;
