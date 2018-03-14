import * as React from 'react';

import Ticket from '../Ticket';

import { Icolumn } from '../../containers/HomePage';

export default function Column(column: Icolumn): JSX.Element {
  const { details, tickets } = column;
  const transformedTickets = tickets.map((ticket, idx) => (<Ticket key={idx} name={ticket.name} body={ticket.body} />));
  return (
    <div>
      <div>{details.name}</div>
      {transformedTickets}
    </div>
  );
}