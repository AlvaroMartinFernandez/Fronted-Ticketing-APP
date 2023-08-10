import React from 'react';

const UserDetail = ({ user }) => {
  return (
    <div>
      <h3>Detalles del Usuario</h3>
      <p>ID del Usuario: {user.id}</p>
      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Rol: {user.role}</p>
      <h4>Tickets Asociados:</h4>
      {user.tickets.map((ticket) => (
        <div key={ticket.id}>
          <p>ID del Ticket: {ticket.id}</p>
          <p>Estado: {ticket.status}</p>
          <p>Fecha de Creación: {ticket.createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default UserDetail;
