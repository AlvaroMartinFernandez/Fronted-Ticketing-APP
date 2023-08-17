import React from 'react';
import styles from './heroSection.module.css'; 
import empresa4 from "../../../img/empresa4.jpg";


const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles['hero-content']}>
        <h1>¡Bienvenidos a nuestra aplicación de gestión de tickets, impulsada por ChatGPT!</h1>
      </div>
      <div className={styles['hero-image']}>
      <img src={empresa4} alt="Imagen de bienvenida" />
      </div>
    </section>
  );
};

export default HeroSection;
