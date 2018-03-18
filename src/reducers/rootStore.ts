import { createStore, combineReducers } from 'redux';
import { enthusiasm } from '../reducers/enthusiasm';
import { tickets } from '../reducers/tickets';

const reducers = combineReducers({
    enthusiasm,
    tickets
});

export const store = createStore(reducers, {});