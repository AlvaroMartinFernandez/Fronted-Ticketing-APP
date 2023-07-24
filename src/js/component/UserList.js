// UserList.js
import React from 'react';
import styles from '../../styles/modules/UserList.module.css';

const UserList = ({ users }) => {
  return (
    <div className={styles.container}>
      <h2>Lista de Usuarios</h2>
      <ul className={styles.userList}>
        {users.map(user => (
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
