import * as React from 'react';

import Ticket from '../Ticket';

import { Icolumn } from '../../types';

export default function Column(column: Icolumn): JSX.Element {
  const { details, tickets } = column;
  const transformedTickets = tickets.map((ticket, idx) => (<Ticket key={idx} name={ticket.name} body={ticket.body} />));
  return (
    <div>
      <div className="qa-details">{details.name}</div>
      <div className="qa-tickets">{transformedTickets}</div>
    </div>
  );
}