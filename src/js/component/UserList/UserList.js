// UserList.js
import React, { useState } from 'react';
import styles from './UserList.module.css';

const UserList = ({ users }) => {
  const [searchQuery, setSearchQuery] = useState('');

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
     
    </div>
  );
};

export default UserList;
