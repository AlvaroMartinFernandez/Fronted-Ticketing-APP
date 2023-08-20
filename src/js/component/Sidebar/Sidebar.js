import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { FiClipboard } from 'react-icons/fi';

const Sidebar = ({ handleSectionChange, activeSection }) => {
  return (
    <div className={styles.sidebar}>
      <h2>Dashboard</h2>

      <ul className={styles.sidebarNav}>
        {/* Evento onClick para cambiar la sección activa */}
        <li onClick={() => handleSectionChange('Tickets')} className={activeSection === 'Tickets' ? styles.active : ''}>
        <FiClipboard className={styles.icon} /> Tickets
        </li>
        <li onClick={() => handleSectionChange('Usuarios')} className={activeSection === 'Usuarios' ? styles.active : ''}>
          <i className="fa fa-users" aria-hidden="true"></i> Usuarios
        </li>
        <li onClick={() => handleSectionChange('Departamentos')} className={activeSection === 'Departamentos' ? styles.active : ''}>
          <i className="fa fa-building" aria-hidden="true"></i> Departamentos
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
