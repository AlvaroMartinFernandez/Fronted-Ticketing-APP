import React from 'react';
import { FaUser, FaEnvelope, FaBriefcase, FaClock } from 'react-icons/fa';
import styles from './MiPerfil.module.css';

const MiPerfil = ({ user }) => {
  if (!user) {
    return <div>No se encontró información de usuario.</div>;
  }

  const { name, email, role, departments, createdAt } = user;

  return (
    <div className={styles.miPerfilContainer}>
      <h2>Mi Perfil</h2>
      <div className={styles.profileItem}>
        <FaUser className={styles.profileIcon} />
        <span>{name}</span>
      </div>
      <div className={styles.profileItem}>
        <FaEnvelope className={styles.profileIcon} />
        <span>{email}</span>
      </div>
      <div className={styles.profileItem}>
        <FaBriefcase className={styles.profileIcon} />
        <span>{role}</span>
      </div>
      <div className={styles.profileItem}>
        <FaClock className={styles.profileIcon} />
        <span>Fecha de Creación: {new Date(createdAt).toLocaleString()}</span>
      </div>
      <div className={styles.profileItem}>
        <h4>Departamentos:</h4>
        {departments.map(dep => (
          <span key={dep.id} className={styles.departmentItem}>
            {dep.name_department}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MiPerfil;
