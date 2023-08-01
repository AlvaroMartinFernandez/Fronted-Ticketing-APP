import React from 'react';
import { Link } from 'react-router-dom';
import styles from './dashboardEntry.module.css'; 

const DashboardEntry = () => {
  return (
    <div className={styles['dashboard-entry']}>
      <Link to="/dashboard" className={styles['cta-link']}>
      Ver Dashboard
      </Link>
    </div>
  );
};

export default DashboardEntry;
