// Sidebar.js
import React, { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ handleSectionChange, activeSection }) => {
  return (
    <div className={styles.sidebar}>
      <h2>Dashboard</h2>

      {/* Enlaces del sidebar */}
      <ul className={styles.sidebarNav}>
        {/* Evento onClick para cambiar la sección activa */}
        <li onClick={() => handleSectionChange('Tickets')} className={activeSection === 'Tickets' ? styles.active : ''}>
          Tickets
        </li>
        <li onClick={() => handleSectionChange('Usuarios')} className={activeSection === 'Usuarios' ? styles.active : ''}>
          Usuarios
        </li>
        <li onClick={() => handleSectionChange('Ajustes')} className={activeSection === 'Ajustes' ? styles.active : ''}>
          Ajustes
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
