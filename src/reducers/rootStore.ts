import { createStore } from 'redux';
import { enthusiasm } from '../reducers';
import { StoreState } from '../types';

export const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1
});