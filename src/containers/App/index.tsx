import * as React from 'react';

import * as actions from '../../actions';
import { StoreState } from '../../types';
import { connect, Dispatch } from 'react-redux';

import './style.css';

const logo = require('./logo.svg');
import Column from '../../components/Column';

interface Idetails { name: string; }

export interface Iticket { name: string; body: string; }

export interface Icolumn { details: Idetails; tickets: Iticket[]; }

export interface AppProps {
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function App({ enthusiasmLevel, onDecrement, onIncrement }: AppProps): JSX.Element {
  const list1: Icolumn = {
    details: {
      name: 'Chuff!',
    },
    tickets: [
      { name: 'ticket1 title', body: 'ticket body' },
      { name: 'ticket2 title', body: 'ticket body' },
      { name: 'ticket2 title', body: 'ticket body' },
      { name: 'ticket2 title', body: 'ticket body' },
      { name: 'ticket2 title', body: 'ticket body' },
      { name: 'ticket2 title', body: 'ticket body' },
      { name: 'ticket2 title', body: 'ticket body' },
      { name: 'ticket2 title', body: 'ticket body' },
    ],
  };

  const list2: Icolumn = {
    details: { name: 'list2' }, tickets: [
      { name: 'ticket1 title', body: 'ticket body' },
      { name: 'ticket2 title', body: 'ticket body' },
    ],
  };

  const allColumns: Icolumn[] = [
    list1,
    list2,
  ];

  const columns = allColumns.map((column: Icolumn) => (
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
          Hello {enthusiasmLevel}
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

export default connect(mapStateToProps, mapDispatchToProps)(App);