// src/components/HeroSection.js
import React from 'react';
import styles from '../../styles/modules/heroSection.module.css'; // Importa los estilos con CSS modules
import empresa4 from "../../img/empresa4.jpg";
import empresa1Hover from '../../img/empresa2.jpg';



const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles['hero-content']}>
        <h1>¡Bienvenidos a nuestra aplicación de gestión de tickets, impulsada por ChatGPT!</h1>
        <p>
        Nuestra aplicación está diseñada para ofrecerte una solución eficiente y efectiva para manejar tus tickets de soporte y atención al cliente. Con la ayuda de ChatGPT, una inteligencia artificial de procesamiento del lenguaje natural, la gestión de tickets nunca ha sido tan fácil y rápida.
        </p>
        <button className={styles['start-button']}>Empezar</button>
      </div>
      <div className={styles['hero-image']}>
      <img src={empresa4} alt="Imagen de bienvenida" />
      </div>
    </section>
  );
};

export default HeroSection;
