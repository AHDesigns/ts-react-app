import * as React from 'react';

import { Iticket } from '../../containers/HomePage';

function Ticket(ticket: Iticket) {
  return (
    <div>
      {ticket.name}
      {ticket.body}
    </div>
  );
}

export default Ticket;
