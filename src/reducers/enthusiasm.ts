// import { EnthusiasmAction } from '../actions';
// import { Store } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';
import { Ienthusiasm } from '../types';

const initialState: Ienthusiasm = {
  enthusiasmLevel: 4
};

export function enthusiasm(state: any = initialState, action: any) {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    default:
      return state;
  }
}
