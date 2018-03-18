import * as React from 'react';

import * as actions from '../../actions';
import { connect, Dispatch } from 'react-redux';

import './style.css';

import { Icolumn, AppProps, Store } from '../../types';

const logo = require('./logo.svg');
import Column from '../../components/Column';

function App({ enthusiasm, tickets, onDecrement, onIncrement }: AppProps): JSX.Element {
  const columns = tickets.tickets.map((column: Icolumn) => (
    <Column key={column.details.name} {...column} />
  ));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">chuff</h1>
      </header>
      <div className="homepage-wrapper">
        <div className="greeting">
          Hello {enthusiasm.enthusiasmLevel}
        </div>
        <div>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
        {columns}
      </div>
    </div>
  );
}

export function mapStateToProps({ enthusiasm, tickets }: Store.All) {
  return { enthusiasm, tickets };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);