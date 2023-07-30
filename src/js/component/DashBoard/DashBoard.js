import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import UserList from '../UserList/UserList';
import TicketList from '../TicketList/TicketList'; // Importa el componente TicketList
import styles from './dashboard.module.css';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]); // Estado para los tickets
  const [activeSection, setActiveSection] = useState('Tickets');

  const fakeTickets = [
  {
    ticket_number: 'TCK001',
    subject: 'Problema con el servidor',
    status: 'Pendiente',
    created_by: 'John Doe',
    client: { name: 'Empresa A' },
  },
  {
    ticket_number: 'TCK002',
    subject: 'Error en la página de inicio',
    status: 'Resuelto',
    created_by: 'Jane Smith',
    client: { name: 'Empresa B' },
  },
  {
    ticket_number: 'TCK003',
    subject: 'Solicitud de nueva funcionalidad',
    status: 'En proceso',
    created_by: 'Michael Johnson',
    client: { name: 'Empresa C' },
  },
  {
    ticket_number: 'TCK004',
    subject: 'Problema con la base de datos',
    status: 'Finalizado',
    created_by: 'Emily Williams',
    client: { name: 'Empresa D' },
  },
  {
    ticket_number: 'TCK005',
    subject: 'Actualización del sistema',
    status: 'Sin asignar',
    created_by: 'David Lee',
    client: { name: 'Empresa E' },
  },
];


  const createNewUser = async (userData) => {
    try {
      // Realizar la solicitud POST a la API para crear un nuevo usuario
      const response = await axios.post('https://backend-ticketing-app-production.up.railway.app/users/', userData);
      // Actualizar el estado de usuarios con el nuevo usuario creado
      setUsers([...users, response.data]);
      // Cerrar el modal después de crear el usuario
      closeModal();
    } catch (error) {
      console.error('Error al crear el usuario:', error);
    }
  };

  const createNewTicket = async (ticketData) => {
    try {
      // Realizar la solicitud POST a la API para crear un nuevo ticket
      const response = await axios.post('https://backend-ticketing-app-production.up.railway.app/ticket/', ticketData);
      // Actualizar el estado de tickets con el nuevo ticket creado
      setTickets([...tickets, response.data]);
      // Cerrar el modal después de crear el ticket
      closeModal();
    } catch (error) {
      console.error('Error al crear el ticket:', error);
    }
  };

  useEffect(() => {
    // Obtener los datos de usuarios al montar el componente
    fetchUsersData();
    // Obtener los datos de tickets al montar el componente
    fetchTicketsData();
    
  }, []);

  const fetchUsersData = async () => {
    try {
      // Realizar la solicitud GET a la API para obtener los usuarios
      const response = await axios.get('https://backend-ticketing-app-production.up.railway.app/users/');
      setUsers(response.data);
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
    }
  };

  const fetchTicketsData = async () => {
    try {
      // Realizar la solicitud GET a la API para obtener los tickets
      const response = await axios.get('https://backend-ticketing-app-production.up.railway.app/ticket/');
      setTickets(response.data.results);
    } catch (error) {
      console.error('Error al obtener los tickets:', error);
    }
  };

  // Función para cambiar la sección activa
  const handleSectionChange = section => {
    setActiveSection(section);
  };

  return (
    <div className={styles.dashboard}>
      <Sidebar activeSection={activeSection} handleSectionChange={handleSectionChange} />
      <div className={styles.content}>
        {/* Mostramos el contenido según la sección activa */}
        {activeSection === 'Usuarios' && (
          <UserList users={users} createUser={createNewUser} />
        )}

        {activeSection === 'Tickets' && (
           <TicketList tickets={fakeTickets} createNewTicket={createNewTicket} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
