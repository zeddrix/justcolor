import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState();

const middleware = [thunk];

const store = createStore(
	rootReducer,
	persistedState,
	composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(
	throttle(() => {
		saveState({
			colorsState: store.getState().colorsState,
			togglePaletteState: store.getState().togglePaletteState,
		});
	})
);

export default store;
