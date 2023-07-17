import React from 'react';

const TicketList = () => {
  // Ejemplo de datos de tickets
  const ticketData = [
    { id: 1, subject: 'Ticket 1', status: 'Open' },
    { id: 2, subject: 'Ticket 2', status: 'Pending' },
    { id: 3, subject: 'Ticket 3', status: 'Closed' },
  ];

  return (
    <div>
      <h2>Ticket List</h2>
      {ticketData.map((ticket) => (
        <div key={ticket.id}>
          <h3>{ticket.subject}</h3>
          <p>Status: {ticket.status}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TicketList;
