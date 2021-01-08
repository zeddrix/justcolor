import { combineReducers } from "redux";

import {
  toggleShowSettingsReducer,
  toggleShowAppendModalReducer
} from "./reducers/modalReducers";

const reducer = combineReducers({
  toggleShowSettingsState: toggleShowSettingsReducer,
  toggleShowAppendModalState: toggleShowAppendModalReducer,
});

export default reducer;
