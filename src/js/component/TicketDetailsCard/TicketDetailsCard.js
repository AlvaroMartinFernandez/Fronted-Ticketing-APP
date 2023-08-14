import React from 'react';

const TicketDetailsCard = ({ ticket }) => {
  if (!ticket) {
    return <p>Cargando detalles del ticket...</p>;
  }

  return (
    <div>
      <h3>ID del Ticket: {ticket.id}</h3>
      <p>Estado: {ticket.status}</p>
      <p>Asunto: {ticket.message.subject}</p>
      <p>Departamento: {ticket.department[0].name_department}</p>
      {/* Agrega más detalles del ticket aquí */}
    </div>
  );
};

export default TicketDetailsCard;
