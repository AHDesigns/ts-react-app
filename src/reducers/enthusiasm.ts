import { EnthusiasmAction } from '../actions';
// import { Store } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';
import { Store } from '../types';

export const initialState: Store.Tenthusiasm = {
  enthusiasmLevel: 5
};

export function enthusiasm(state: Store.Tenthusiasm = initialState, action: EnthusiasmAction) {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    default:
      return state;
  }
}
