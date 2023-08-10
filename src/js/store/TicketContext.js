import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || null);

  useEffect(() => {
    if (accessToken) {
      loadAllTicketsData();
    }
  }, [accessToken]);

  const loadAllTicketsData = async () => {
    try {
      const response = await axios.get('https://backend-ticketing-app-production.up.railway.app/tickets/', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 200) {
        setTickets(response.data);
      } else {
        console.error('Error al cargar datos de tickets:', response.statusText);
      }
    } catch (error) {
      console.error('Error al cargar datos de tickets:', error);
    }
  };

  const createNewTicket = async (ticketData) => {
    try {
      const response = await axios.post(
        'https://backend-ticketing-app-production.up.railway.app/tickets/',
        ticketData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 201) {
        loadAllTicketsData(); // Actualizar la lista de tickets
        return true;
      } else {
        console.error('Error al crear el ticket:', response.statusText);
        return false;
      }
    } catch (error) {
      console.error('Error al crear el ticket:', error);
      return false;
    }
  };

  const updateTicket = async (ticketId, ticketData) => {
    try {
      const response = await axios.put(
        `https://backend-ticketing-app-production.up.railway.app/tickets/${ticketId}`,
        ticketData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        loadAllTicketsData(); // Actualizar la lista de tickets
        return true;
      } else {
        console.error('Error al actualizar el ticket:', response.statusText);
        return false;
      }
    } catch (error) {
      console.error('Error al actualizar el ticket:', error);
      return false;
    }
  };

  const deleteTicket = async (ticketId) => {
    try {
      const response = await axios.delete(`https://backend-ticketing-app-production.up.railway.app/tickets/${ticketId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 200) {
        setTickets(tickets.filter((ticket) => ticket.id !== ticketId)); // Actualizar la lista de tickets
        return true;
      } else {
        console.error('Error al eliminar el ticket:', response.statusText);
        return false;
      }
    } catch (error) {
      console.error('Error al eliminar el ticket:', error);
      return false;
    }
  };

  const contextValue = {
    tickets,
    createNewTicket,
    updateTicket,
    deleteTicket,
    
  };

  return (
    <TicketContext.Provider value={contextValue}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTicketContext = () => useContext(TicketContext);
