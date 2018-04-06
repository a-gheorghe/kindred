import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'


import rootReducer from '../reducers';

export function configureStore(initialState) {
    return createStore(
        combineReducers({
          rootReducer,
          routing: routerReducer
        }),
        initialState
    );
}
