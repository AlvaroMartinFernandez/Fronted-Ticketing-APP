import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Context } from '../../store/appContext.js';
import styles from './TicketDetailView.module.css';

const TicketDetailView = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    const loadTicketAndMessages = async () => {
      try {
        // Cargar los datos del ticket y los mensajes
        await actions.loadAllTicketsData();
        const ticket = store.tickets.find(ticket => ticket.id === Number(id));
        setSelectedTicket(ticket);

        if (ticket) {
          await actions.loadTicketMessages(ticket.id);
        }
      } catch (error) {
        console.error('Error al cargar los datos del ticket y los mensajes:', error);
      }
    };

    loadTicketAndMessages();
  }, []);

  
  

  const handleReply = async () => {
    try {
      if (messageInput.trim() === '') {
        // No permitir enviar respuestas vacías
        return;
      }

      const response = await actions.sendTicketReply(selectedTicket.id, messageInput);

      if (response.status === 200) {
        // Respuesta enviada exitosamente, actualiza el historial de mensajes
        await actions.loadTicketMessages(selectedTicket.id);
        setMessageInput('');
      } else {
        console.error('Error al enviar la respuesta:', response.statusText);
        // Manejar el error según tus necesidades
      }
    } catch (error) {
      console.error('Error al enviar la respuesta:', error);
      // Manejar el error según tus necesidades
    }
  };


  return (
    <div className={styles.ticketDetailContainer}>
      {selectedTicket ? (
        <div className={styles.ticketDetailContent}>
          <h2 className={styles.ticketHeader}>Detalles del Ticket</h2>
          <p className={styles.ticketInfo}><strong>ID:</strong> {selectedTicket.id}</p>
          {/* ... Otros detalles del ticket ... */}

          {selectedTicket.messages && selectedTicket.messages.length > 0 ? (
            <>
              <h3 className={styles.messageHistory}>Historial de Mensajes:</h3>
              <div className={styles.messageCardContainer}>
                {store.ticketDetails?.sort((a, b) => a.id - b.id) // Ordenar mensajes por ID ascendente
                  .map(message => (
                    <div key={message.id} className={styles.messageCard}>
                      <h4>{message.subject}</h4>
                      <p>{message.message}</p>
                      {/* ... Otros detalles del mensaje ... */}
                      
                    </div>
                  ))}
              </div>
            </>
          ) : (
            <p>No hay mensajes disponibles.</p>
          )}

          {/* Agrega el botón de retroceso */}
          <Link to="/dashboard" className={`${styles.backButton} ${styles.customBackButton}`}>
            Volver al Dashboard
          </Link>

          {/* Sección de respuesta */}
          <div className={styles.messageReplyContainer}>
            <h3>Responder al Ticket</h3>
            <textarea
              className={styles.messageInput}
              value={messageInput}
              onChange={e => setMessageInput(e.target.value)}
              placeholder="Escribe tu respuesta aquí..."
            />
            <button className={styles.sendButton} onClick={handleReply}>
              Enviar
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TicketDetailView;
