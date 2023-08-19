import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Context } from '../../store/appContext.js';
import styles from './TicketDetailView.module.css';
import { DotLoader } from 'react-spinners';
import SelectStatus from '../../component/SelectStatus/SelectStatus.js'
import AddUser from '../../component/AddUser/AddUser.js';


const TicketDetailView = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isReplying, setIsReplying] = useState(false);

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

        setIsLoading(false); // Actualizar isLoading a false
      } catch (error) {
        console.error('Error al cargar los datos del ticket y los mensajes:', error);
      }
    };

    loadTicketAndMessages();
  }, []);

  // Función para acortar los asuntos largos

  const shortenSubject = (subject) => {
    return subject.replace(/(Re:)+/g, 'Re:'); // Reemplazar múltiples "Re:" con uno solo
  };

  // Funcion para contestar

  const handleReply = async () => {
    try {
      if (messageInput.trim() === '') {
        // Mostrar mensaje de advertencia si la respuesta está vacía
        alert('Por favor, escribe una respuesta.');
        return;
      }

      setIsReplying(true); // Iniciar indicador de carga al enviar

      const response = await actions.sendTicketReply(messageInput);

      if (response.status === 200) {
        // Respuesta enviada exitosamente, actualizar automáticamente el historial de mensajes
        await actions.loadTicketMessages(selectedTicket.id);
        setMessageInput('');
      } else {
        alert('Error al enviar la respuesta. Por favor, intenta nuevamente.'); // Mostrar mensaje de error al usuario
      }

      setIsReplying(false); // Finalizar indicador de carga al enviar
    } catch (error) {
      console.error('Error al enviar la respuesta:', error);
      setIsReplying(false); // Finalizar indicador de carga al enviar en caso de error
    }
  };

  return (
    <div className={styles.ticketDetailContainer}>
      {isLoading ? ( // Mostrar spinner mientras se carga
        <div className={styles.spinnerContainer}>
          <DotLoader color="#36d7b7" />
        </div>
      ) : selectedTicket ? (
        <div className={styles.ticketDetailContent}>
          <h2 className={styles.ticketHeader}>Detalles del Ticket</h2>
          <p className={styles.ticketInfo}><strong>ID:</strong> {selectedTicket.id}</p>
          <div className='d-inline-flex gap-2'>
            <p className={styles.ticketInfo}><strong>Estado:</strong> </p>
            <SelectStatus />
          </div>
          <AddUser />


          {selectedTicket.messages && selectedTicket.messages.length > 0 ? (
            <>
              <h3 className={styles.messageHistory}>Historial de Mensajes:</h3>
              <div className={styles.messageCardContainer}>
                {store.ticketDetails?.sort((a, b) => a.id - b.id) // Ordenar mensajes por ID ascendente
                  .map(message => (
                    <div key={message.id} className={styles.messageCard}>
                      <h4>
                        <button
                          className={`accordion-button ${styles.customAccordionButton}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#messageCollapse${message.id}`}
                          aria-expanded="false"
                        >
                          <div className="row d-flex justify-content-around">
                            <div className='col-8'>
                              <p>Remitente: {message.sender}</p>
                            </div>
                            <div className='col-4'>
                              <p>Fecha: {new Date(message.createdAt).toLocaleString()}</p>
                            </div>
                            <div className='col-12'>
                              Asunto: {shortenSubject(message.subject)}
                            </div>
                          </div>
                        </button>
                      </h4>
                      <div
                        id={`messageCollapse${message.id}`}
                        className="collapse"
                        data-bs-parent={`#messageCollapse${message.id}`}
                      >
                        <div className="accordion-body">
                          <p>{message.message}</p>
                          <div className="row d-flex justify-content-start">
                            {message.list_adjunts.map(adjunt => {
                              return (<img className='col-4' key={adjunt.id} src={adjunt.url_adjunt} />)
                            })}
                          </div>

                        </div>
                      </div>
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
