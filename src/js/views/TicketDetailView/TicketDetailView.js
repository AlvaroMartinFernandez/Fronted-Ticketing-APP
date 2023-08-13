import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Context } from "../../store/appContext.js";

const TicketDetailView = () => { // Cambio de nombre aquí
  const { id } = useParams(); 
  const { store, actions } = useContext(Context);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    // Buscamos el mensaje correspondiente por su ID en la lista de mensajes
    const message = store.messages.find(message => message.id === Number(id));
    setSelectedMessage(message);
  }, [id, store.messages]);

  return (
    <div>
      {selectedMessage ? (
        // Renderizamos los detalles del mensaje si se ha seleccionado uno
        <div>
          <h2>Detalles del Mensaje</h2>
          <p>Subject: {selectedMessage.subject}</p>
          {/* Otros detalles del mensaje */}
          <Link to={`/messages/${Number(id) + 1}`}>Siguiente Mensaje</Link>
        </div>
      ) : (
        // Si no se ha seleccionado un mensaje, mostrar un mensaje de carga o algo similar
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TicketDetailView; // Cambio de nombre aquí
