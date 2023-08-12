import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { Context } from "../../store/appContext.js";
import TicketDetailsCard from '../TicketDetails/TicketDetailsCard.js';

const TicketDetailView = () => {
  const { id } = useParams(); 
  const { store, actions } = useContext(Context);
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    // Realiza una solicitud para obtener los detalles del ticket por su ID
    const ticket = store.tickets.find(ticket => ticket.id === Number(id));
    setSelectedTicket(ticket);
  }, [id, store.tickets]);

  return (
    <div>
      {/* Renderiza la tarjeta de detalles del ticket */}
      <TicketDetailsCard
        ticket={selectedTicket}
        onClose={() => setSelectedTicket(null)}
      />
    </div>
  );
};

export default TicketDetailView;
