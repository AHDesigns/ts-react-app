import * as actions from '../../actions';
import { StoreState } from '../../types';
import { connect, Dispatch } from 'react-redux';

import './style.css';
import HomePage from '../HomePage';

export function mapStateToProps({ enthusiasmLevel }: StoreState) {
  return {
    enthusiasmLevel
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);