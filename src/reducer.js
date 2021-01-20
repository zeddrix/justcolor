import { combineReducers } from 'redux';

import {
	toggleShowSettingsReducer,
	toggleShowAppendModalReducer,
	toggleShowEditModalReducer,
	togglePaletteReducer,
} from './reducers/modalReducers';
import { colorsReducer, getColorIdReducer } from './reducers/colorReducer';

const reducer = combineReducers({
	// Modals
	toggleShowSettingsState: toggleShowSettingsReducer,
	toggleShowAppendModalState: toggleShowAppendModalReducer,
	toggleShowEditModalState: toggleShowEditModalReducer,
	togglePaletteState: togglePaletteReducer,

	// Colors
	colorsState: colorsReducer,
	colorIdState: getColorIdReducer,
});

export default reducer;
