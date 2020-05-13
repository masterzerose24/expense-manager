import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers';
import thunk from 'redux-thunk';

const initialState = {};

const middleWares = [thunk];

const store = createStore(
	rootReducers,
	initialState,
	applyMiddleware(...middleWares)
);

export default store;
