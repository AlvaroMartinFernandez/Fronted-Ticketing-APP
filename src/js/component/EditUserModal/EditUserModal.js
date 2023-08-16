import React, { useState, useEffect } from 'react';
import styles from './EditUserModal.module.css';

const EditUserModal = ({ user, onSave, onCancel }) => {
  const [editedUser, setEditedUser] = useState(user);

  useEffect(() => {
    setEditedUser(user);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedUser);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Editar Usuario</h2>
        <form onSubmit={handleSave}>
          <div className={styles.formGroup}>
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Correo:</label>
            <input
              type="email"
              name="email"
              value={editedUser.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Rol:</label>
            <select
              name="role"
              value={editedUser.role}
              onChange={handleChange}
            >
              <option value="Director">Directivo</option>
              <option value="Admin">Administrador</option>
              <option value="Employee">Empleado</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Contraseña:</label>
            <input
              type="password"
              name="password"
              value={editedUser.password}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Departamento:</label>
            <select
              name="department"
              value={editedUser.department}
              onChange={handleChange}
            >
               <option value="Atencion al cliente">Atencion al cliente</option>
              <option value="Facturacion">Facturacion</option>
              <option value="Postventa">Postventa</option>
            </select>
          </div>
          <div className={styles.modalButtons}>
            <button type="submit">Guardar</button>
            <button type="button" onClick={onCancel} className={styles.cancelButton}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;
