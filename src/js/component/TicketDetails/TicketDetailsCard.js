import React from "react";
import styles from './TicketDetailsCard.module.css';

const TicketDetailsCard = ({ ticket, onClose }) => {
  if (!ticket) {
    return null;
  }

  return (
    <div className={styles.detailsCard}>
      <h3>Detalles del Ticket</h3>
      <div>
        <strong>ID:</strong> {ticket.id}
      </div>
      <div>
        <strong>Asunto:</strong> {ticket.subject}
      </div>
      {/* Mostrar otros detalles del ticket según sea necesario */}
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default TicketDetailsCard