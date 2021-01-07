import { combineReducers } from "redux";

import {
  toggleShowSettingsReducer
} from "./reducers/modalReducers";

const reducer = combineReducers({
  toggleShowSettingsState: toggleShowSettingsReducer,
});

export default reducer;
