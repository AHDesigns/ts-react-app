import * as React from 'react';
import './style.css';

import Column from '../../components/Column';

interface Idetails { name: string; }

export interface Iticket { name: string; body: string; }

export interface Icolumn { details: Idetails; tickets: Iticket[]; }

export default class HomePage extends React.PureComponent {
  render(): JSX.Element {
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
      <div className="homepage-wrapper">
        {columns}
      </div>
    );
  }
}
