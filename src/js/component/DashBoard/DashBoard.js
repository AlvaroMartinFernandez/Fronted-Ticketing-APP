import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import UserList from '../UserList/UserList';
import TicketList from '../TicketList/TicketList';
import DepartmentList from '../DepartmentList/DepartmentList';
import MiPerfil from '../MiPerfil/MiPerfil';
import styles from './dashboard.module.css';



const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [activeSection, setActiveSection] = useState('Tickets');
  const [selectedUser, setSelectedUser] = useState(null);

  // Agregar una función para manejar la selección de un usuario
  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setActiveSection('MiPerfil'); // Cambiar a la sección "MiPerfil" cuando se selecciona un usuario
  };

  const createNewUser = async (userData) => {
    try {
      const response = await axios.post('https://backend-ticketing-app-production.up.railway.app/users/', userData);
      setUsers([...users, response.data]);
      closeModal();
    } catch (error) {
      console.error('Error al crear el usuario:', error);
    }
  };

  const createNewTicket = async (ticketData) => {
    try {
      const response = await axios.post('https://backend-ticketing-app-production.up.railway.app/tickets/', ticketData);
      setTickets([...tickets, response.data]);
      closeModal();
    } catch (error) {
      console.error('Error al crear el ticket:', error);
    }
  };

  

  const createNewDepartment = async (departmentData) => {
    try {
      const response = await axios.post('https://backend-ticketing-app-production.up.railway.app/departments/', departmentData, {
        headers: {
          Authorization: `Bearer ${getStore().accessToken}`,
        },
      });
      setDepartments([...departments, response.data]);
      closeModal();
    } catch (error) {
      console.error('Error al crear el departamento:', error);
    }
  };

  useEffect(() => {
    fetchUsersData();
    fetchTicketsData();
    fetchDepartmentsData();
  }, []);

  const fetchUsersData = async () => {
    try {
      const response = await axios.get('https://backend-ticketing-app-production.up.railway.app/users/');
      setUsers(response.data);
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
    }
  };

  const fetchTicketsData = async () => {
    try {
      const response = await axios.get('https://backend-ticketing-app-production.up.railway.app/tickets/');
      setTickets(response.data);
    } catch (error) {
      console.error('Error al obtener los tickets:', error);
    }
  };

  const fetchDepartmentsData = async () => {
    try {
      const response = await axios.get('https://backend-ticketing-app-production.up.railway.app/departments/');
      setDepartments(response.data);
    } catch (error) {
      console.error('Error al obtener los departamentos:', error)
    }
  }

 
  

  const handleSectionChange = section => {
    setActiveSection(section);
  };

  return (
    <div className={styles.dashboard}>
      <Sidebar activeSection={activeSection} handleSectionChange={handleSectionChange} />
      <div className={styles.content}>
        {activeSection === 'Usuarios' && (
          <UserList users={users} createUser={createNewUser} onSelectUser={handleSelectUser} />
        )}

        {activeSection === 'Tickets' && (
          <TicketList tickets={tickets} createNewTicket={createNewTicket} />
        )}

        {activeSection === 'Departamentos' && (
          <DepartmentList departments={departments} createDepartment={createNewDepartment} />
        )}
        {activeSection === 'MiPerfil' && (
          
          <MiPerfil user={selectedUser} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;