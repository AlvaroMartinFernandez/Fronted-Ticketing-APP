import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import UserList from '../UserList/UserList';
import styles from './dashboard.module.css';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [activeSection, setActiveSection] = useState('Tickets');

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
      <Sidebar activeSection={activeSection} handleSectionChange={handleSectionChange} />
      <div className={styles.content}>
        {/* Mostramos el contenido según la sección activa */}
        {activeSection === 'Usuarios' && (
          <UserList users={users} createUser={createNewUser} />
        )}

      </div>
    </div>
  );
};

export default Dashboard;