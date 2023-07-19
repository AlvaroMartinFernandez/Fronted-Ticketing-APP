// src/components/Pricing.js
import React from 'react';
import styles from '../../styles/modules/pricing.module.css'; // Ruta correcta para importar los estilos CSS modules

const Pricing = () => {
  return (
    <section id="pricing" className={styles.pricing}>
      <h2 className={styles['section-title']}>Planes de precios</h2>
      <div className={styles['pricing-plan']}>
        <h3 className={styles['plan-title']}>Plan Básico</h3>
        <p className={styles['plan-description']}>
          Respuestas automáticas básicas para la gestión de correos de clientes.
        </p>
        <p className={styles['plan-benefit']}>
          Beneficios clave:
        </p>
        <ul className={styles['plan-benefits-list']}>
          <li>Respuestas rápidas y automáticas.</li>
          <li>Mejora de la eficiencia en la atención al cliente.</li>
        </ul>
        <p className={styles['plan-price']}>Precio: $X/mes</p>
        <button className={styles['plan-button']}>Seleccionar</button>
      </div>
      <div className={styles['pricing-plan']}>
        <h3 className={styles['plan-title']}>Plan Premium</h3>
        <p className={styles['plan-description']}>
          Respuestas personalizadas y adaptadas a las necesidades de cada cliente.
        </p>
        <p className={styles['plan-benefit']}>
          Beneficios clave:
        </p>
        <ul className={styles['plan-benefits-list']}>
          <li>Respuestas personalizadas con inteligencia artificial avanzada.</li>
          <li>Análisis de datos para mejorar la comunicación con los clientes.</li>
        </ul>
        <p className={styles['plan-price']}>Precio: $Y/mes</p>
        <button className={styles['plan-button']}>Seleccionar</button>
      </div>
      <div className={styles['pricing-plan']}>
        <h3 className={styles['plan-title']}>Plan Empresarial</h3>
        <p className={styles['plan-description']}>
          Funcionalidad personalizada y acceso a características avanzadas de IA.
        </p>
        <p className={styles['plan-benefit']}>
          Beneficios clave:
        </p>
        <ul className={styles['plan-benefits-list']}>
          <li>Integración con sistemas de gestión empresarial.</li>
          <li>Automatización avanzada para optimizar procesos de atención al cliente.</li>
        </ul>
        <p className={styles['plan-price']}>Precio: Contáctanos</p>
        <button className={styles['plan-button']}>Seleccionar</button>
      </div>
    </section>
  );
};

export default Pricing;
