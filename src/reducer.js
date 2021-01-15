import { combineReducers } from "redux";

import {
  toggleShowSettingsReducer,
  toggleShowAppendModalReducer,
  toggleShowEditModalReducer,
  togglePaletteReducer
} from "./reducers/modalReducers";
import {
  renderAllColorsReducer,
  appendNewColorReducer
} from './reducers/colorReducer';

const reducer = combineReducers({
  // Modals
  toggleShowSettingsState: toggleShowSettingsReducer,
  toggleShowAppendModalState: toggleShowAppendModalReducer,
  toggleShowEditModalState: toggleShowEditModalReducer,
  togglePaletteState: togglePaletteReducer,

  // Colors
  renderAllColorsState: renderAllColorsReducer,
  appendNewColorState: appendNewColorReducer,
});

export default reducer;
