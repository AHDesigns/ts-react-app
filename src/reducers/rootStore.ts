import { createStore, combineReducers, Store as StoreT } from 'redux';
import { enthusiasm, initialState as enthusiasmIS } from '../reducers/enthusiasm';
import { tickets, initialState as ticketsIS } from '../reducers/tickets';
import { Store } from '../types';

const reducers = combineReducers<Store.All>({
    enthusiasm,
    tickets
});

export const store: StoreT<Store.All> = createStore(reducers, {
    enthusiasm: enthusiasmIS,
    tickets: ticketsIS
});