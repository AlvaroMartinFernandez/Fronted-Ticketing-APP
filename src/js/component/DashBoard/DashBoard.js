
import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import UserList from '../UserList/UserList';
import styles from './dashboard.module.css';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [activeSection, setActiveSection] = useState('Tickets');

  useEffect(() => {
    // Obtener los datos de usuarios al montar el componente
    fetchUsersData();
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

  // Función para cambiar la sección activa
  const handleSectionChange = section => {
    setActiveSection(section);
  };

  return (
    <div className={styles.dashboard}>
      {/* Aquí se coloca el Sidebar */}
      <Sidebar activeSection={activeSection} handleSectionChange={handleSectionChange} />

      {/* Aquí colocamos el contenido de la sección */}
      <div className={styles.content}>
        {/* Mostramos el contenido según la sección activa */}
        {activeSection === 'Usuarios' && (
          <UserList users={users} />
        )}

      </div>
    </div>
  );
};

export default Dashboard;
