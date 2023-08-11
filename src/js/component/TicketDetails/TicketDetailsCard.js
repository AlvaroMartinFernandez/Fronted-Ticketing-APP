import React from 'react';
import styles from './TicketDetailsCard.module.css';

const TicketDetailsCard = ({ ticket, onClose }) => {
  if (!ticket) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h3 className={styles.cardTitle}>Detalles del Ticket</h3>
          <button className={styles.closeButton} onClick={onClose}>
            X
          </button>
        </div>
        
        <div className={styles.messageDetails}>
          <h4 className={styles.messageHeader}>Detalles de los Mensajes</h4>
          <ul className={styles.messageList}>
            {ticket.messages.map((message) => (
              <li key={message.id} className={styles.messageItem}>
                <span className={styles.messageId}>ID: {message.id}</span>
                <br />
                <span className={styles.messageSubject}>{message.subject}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TicketDetailsCard;
