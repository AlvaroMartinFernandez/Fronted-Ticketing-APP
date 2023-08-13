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
      <div className={styles.modal}>
        <h2>Editar Usuario</h2>
        <form onSubmit={handleSave}>
          <div className={styles.formGroup}>
            <label>Nombre:</label>
            <input type="text" name="name" value={editedUser.name} onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label>Correo:</label>
            <input type="email" name="email" value={editedUser.email} onChange={handleChange} />
          </div>
          {/* Agrega más campos de edición aquí */}
          <div className={styles.modalButtons}>
            <button type="submit" className={styles.saveButton}>
              Guardar
            </button>
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
