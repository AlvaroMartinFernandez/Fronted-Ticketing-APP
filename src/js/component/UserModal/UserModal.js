import React, { useState } from 'react';
import styles from './UserModal.module.css';

const UserModal = ({ closeModal, createUser }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar validaciones adicionales antes de crear el nuevo usuario
    createUser({ firstName, lastName, email, password });
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={closeModal}>&times;</span>
        <h2>Crear Nuevo Usuario</h2>
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          <label>Apellido:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <div className={styles.buttonContainer}>
            <button type="submit">Crear Usuario</button>
            <button type="button" onClick={closeModal}>Cerrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
