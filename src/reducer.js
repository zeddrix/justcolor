import { combineReducers } from 'redux';

import {
	toggleSettingsReducer,
	toggleAppendModalReducer,
	toggleEditModalReducer,
	togglePaletteReducer,
} from './reducers/modalReducers';
import { colorsReducer, getColorIdReducer } from './reducers/colorReducer';

const reducer = combineReducers({
	// Modals
	toggleSettingsState: toggleSettingsReducer,
	toggleAppendModalState: toggleAppendModalReducer,
	toggleEditModalState: toggleEditModalReducer,
	togglePaletteState: togglePaletteReducer,

	// Colors
	colorsState: colorsReducer,
	colorIdState: getColorIdReducer,
});

export default reducer;
