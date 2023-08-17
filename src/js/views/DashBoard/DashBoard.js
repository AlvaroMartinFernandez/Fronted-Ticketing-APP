import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../../store/appContext.js";
import axios from 'axios';
import Sidebar from '../../component/Sidebar/Sidebar.js';
import UserList from '../../component/UserList/UserList.js';
import TicketList from '../../component/TicketList/TicketList.js';
import DepartmentList from '../../component/DepartmentList/DepartmentList.js';
import MiPerfil from '../../component/MiPerfil/MiPerfil.js';
import styles from './dashboard.module.css';
import { Navigate } from "react-router-dom";




const Dashboard = () => {
  const { store, actions } = useContext(Context);
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [activeSection, setActiveSection] = useState('Tickets');
  const [selectedUser, setSelectedUser] = useState(null);

  // Comprobar si el usuario está autenticado
  if (!store.isLoggedIn) {
    // Si el usuario no está autenticado, redirigir al inicio de sesión
    return <Navigate to="/login" />;
  }


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
          <TicketList tickets={tickets} />
        )}

        {activeSection === 'Departamentos' && (
          <DepartmentList departments={departments} />
        )}
        {activeSection === 'MiPerfil' && (

          <MiPerfil user={selectedUser} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;