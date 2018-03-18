import { createStore, combineReducers, applyMiddleware, Store as StoreT } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { enthusiasm, initialState as enthusiasmIS } from '../reducers/enthusiasm';
import mySaga from './gitSaga';
import { tickets, initialState as ticketsIS } from '../reducers/tickets';
import { Store } from '../types';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers<Store.All>({
    enthusiasm,
    tickets
});

export const store: StoreT<Store.All>  = createStore(
    reducers,
    {
        enthusiasm: enthusiasmIS,
        tickets: ticketsIS
    },
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga);