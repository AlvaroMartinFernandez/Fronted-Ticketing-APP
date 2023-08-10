import React from 'react';

const TicketDetails = ({ ticket }) => {
  return (
    <div>
      <h3>Detalles del Ticket</h3>
      <p>ID: {ticket.id}</p>
      <p>Estado: {ticket.status}</p>
      <p>Fecha de Creación: {new Date(ticket.createdAt).toLocaleString()}</p>
      
      {/* Mostrar detalles del cliente */}
      <h4>Cliente:</h4>
      <p>Nombre: {ticket.client.name}</p>
      <p>Email: {ticket.client.email}</p>
      <p>Dirección: {ticket.client.address}</p>
      {/* Agregar más propiedades del cliente según sea necesario */}
      
      {/* Mostrar detalles del mensaje */}
      <h4>Mensaje:</h4>
      <p>Contenido: {ticket.message.contenido}</p>
      {/* Agregar más propiedades del mensaje según sea necesario */}
    </div>
  );
};

export default TicketDetails;
