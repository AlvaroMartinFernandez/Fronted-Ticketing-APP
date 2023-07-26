import React, { useState, useEffect, useContext,  } from 'react';
import axios from 'axios';
import styles from './UserList.module.css';
import { Context } from "../../store/appContext.js";


const UserList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  const { store, actions } = useContext(Context); 

  useEffect(() => {
    // Carga los usuarios al montar el componente
    actions.loadAllUsersData(); // Llama a la función loadAllUsersData de las acciones
  }, [])

  // Modal state
  const [showModal, setShowModal] = useState(false);

  // Form state
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');

  // Function to add a new user
  const addUser = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the API to add the new user
      const response = await axios.post(
        'https://backend-ticketing-app-production.up.railway.app/users/',
        {
          name: name,
          lastName: lastName,
          company: company,
          role: role,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );

      // Check the response status and update the user list if successful
      if (response.status === 201) {
        // Reload the user data to show the updated list
        loadAllUsersData();
        // Clear the form fields
        setName('');
        setLastName('');
        setCompany('');
        setRole('');
        // Close the modal
        setShowModal(false);
      } else {
        setError('Error al agregar nuevo usuario.');
      }
    } catch (error) {
      setError('Error al agregar nuevo usuario.');
    }
  };

  // Function to delete a user
  const deleteUser = async (userId) => {
    try {
      // Make a DELETE request to the API to delete the user
      const response = await axios.delete(
        `https://backend-ticketing-app-production.up.railway.app/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );

      // Check the response status and update the user list if successful
      if (response.status === 200) {
        // Reload the user data to show the updated list
        loadAllUsersData();
      } else {
        setError('Error al eliminar usuario.');
      }
    } catch (error) {
      setError('Error al eliminar usuario.');
    }
  };

  const loadAllUsersData = async () => {
    try {
      const response = await axios.get('https://backend-ticketing-app-production.up.railway.app/users/', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      if (response.status === 200) {
        setUserData(response.data.results);
        setLoading(false);
      } else {
        setError('Error al cargar datos de usuarios.');
        setLoading(false);
      }
    } catch (error) {
      setError('Error al cargar datos de usuarios.');
      setLoading(false);
    }
  };

  useEffect(() => {
    // Carga los usuarios al montar el componente
    loadAllUsersData();
  }, []);

  const handleSearchChange = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h2>Lista de Usuarios</h2>
      {/* Barra de búsqueda */}
      <div className={styles.searchContainer}>
        <i className={`fa fa-search ${styles.searchIcon}`} aria-hidden="true"></i>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Buscar usuarios..."
          className={styles.searchInput}
        />
      </div>

      {/* Botón para mostrar el modal de agregar usuario */}
      <button className={styles.addButton} onClick={() => setShowModal(true)}>
        Agregar Nuevo Usuario
      </button>

      {/* Mostrar la lista de usuarios */}
      <ul>
        {userData &&
          userData.map(user => (
            <li key={user.id}>
              {user.name} {user.lastName} ({user.role})
              <button onClick={() => deleteUser(user.id)}>Eliminar</button>
            </li>
          ))}
      </ul>

      {/* Modal para agregar nuevo usuario */}
      {showModal && (
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <h2>Agregar Nuevo Usuario</h2>
            <form onSubmit={addUser}>
              <div className={styles.formGroup}>
                <label>Nombre:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className={styles.formGroup}>
                <label>Apellido:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
              <div className={styles.formGroup}>
                <label>Empresa:</label>
                <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
              </div>
              <div className={styles.formGroup}>
                <label>Rol:</label>
                <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
              </div>
              <div className={styles.formGroup}>
                <button type="submit">Agregar</button>
                <button className={styles.cancelButton} type="button" onClick={() => setShowModal(false)}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
