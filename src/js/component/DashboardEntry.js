// src/components/DashboardEntry.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/modules/dashboardEntry.module.css'; // Ruta correcta para importar los estilos CSS modules

const DashboardEntry = () => {
  return (
    <div className={styles['dashboard-entry']}>
      <Link to="/dashboard" className={styles['cta-link']}>
        Acceder al Dashboard
      </Link>
    </div>
  );
};

export default DashboardEntry;
