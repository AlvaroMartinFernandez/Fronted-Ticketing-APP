// UserList.js
import React, { useState } from 'react';
import styles from './UserList.module.css';

const UserList = ({ users }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = e => {
    setSearchQuery(e.target.value);
  };

  // Filtrar los usuarios que coincidan con el valor de búsqueda
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <ul className={styles.userList}>
        {filteredUsers.map(user => (
          <li key={user.id} className={styles.userItem}>
            <h3>{user.name}</h3>
            <p>Correo: {user.email}</p>
            <p>Nombre de usuario: {user.user_name}</p>
            {/* Aquí puedes mostrar más detalles del usuario si lo deseas */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
