import { combineReducers } from "redux";

import {
  toggleShowSettingsReducer,
  toggleShowAppendModalReducer,
  toggleShowEditModalReducer
} from "./reducers/modalReducers";

const reducer = combineReducers({
  toggleShowSettingsState: toggleShowSettingsReducer,
  toggleShowAppendModalState: toggleShowAppendModalReducer,
  toggleShowEditModalState: toggleShowEditModalReducer,
});

export default reducer;
