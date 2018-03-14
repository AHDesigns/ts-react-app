import * as React from 'react';

import './style.css';

import Column from '../../components/Column';

interface Idetails { name: string; }

export interface Iticket { name: string; body: string; }

export interface Icolumn { details: Idetails; tickets: Iticket[]; }

export interface AppProps {
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export default function HomePage({ enthusiasmLevel, onDecrement, onIncrement }: AppProps): JSX.Element {
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
    <div className="homoepage-wrapper">
      <div className="greeting">
        Hello {enthusiasmLevel}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
      {columns}
    </div>
  );
}
