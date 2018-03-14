import * as React from 'react';

import { Iticket } from '../../containers/App';

export default function Ticket(ticket: Iticket): JSX.Element {
  return (
    <div>
      {ticket.name}
      {ticket.body}
    </div>
  );
}