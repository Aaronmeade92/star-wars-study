import { createStore, combineReducers, applyMiddleware } from 'redux';
import dataReducer from '../reducer/data-reducer.js';
import filmReducer from '../reducer/film-reducer.js';
import shipReducer from '../reducer/ship-reducer.js';

import thunk from 'redux-thunk';

const appReducer = combineReducers({
    dataReducer, filmReducer, shipReducer
});

export default createStore(appReducer, applyMiddleware(thunk));