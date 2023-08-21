import React from 'react';
import { FaClipboardList, FaComments, FaChartBar, FaRobot } from 'react-icons/fa';
import styles from './features.module.css';

const Features = () => {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.feature}>
        <i className={styles.icon}><FaClipboardList /></i>
        <h3 className={styles['feature-title']}>Gestión de tickets</h3>
        <p className={styles['feature-description']}>Organiza y responde a los tickets de tus clientes de manera eficiente.</p>
      </div>
      <div className={styles.feature}>
        <i className={styles.icon}><FaComments /></i>
        <h3 className={styles['feature-title']}>Chat en vivo</h3>
        <p className={styles['feature-description']}>Ofrece soporte en tiempo real a través de un chat en vivo integrado.</p>
      </div>
      <div className={styles.feature}>
        <i className={styles.icon}><FaChartBar /></i>
        <h3 className={styles['feature-title']}>Paneles de control</h3>
        <p className={styles['feature-description']}>Obtén información valiosa con paneles de control y análisis en tiempo real.</p>
      </div>
      <div className={styles.feature}>
        <i className={styles.icon}><FaRobot /></i>
        <h3 className={styles['feature-title']}>Respuestas IA</h3>
        <p className={styles['feature-description']}>Contesta correos automáticamente mediante inteligencia artificial.</p>
      </div>
    </section>
  );
};

export default Features;
