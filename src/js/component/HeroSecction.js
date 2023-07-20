// src/components/HeroSection.js
import React from 'react';
import styles from '../../styles/modules/heroSection.module.css'; // Importa los estilos con CSS modules
import empresa4 from "../../img/empresa4.jpg";
import empresa1Hover from '../../img/empresa2.jpg';



const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles['hero-content']}>
        <h1>Bienvenido a nuestra aplicación</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget justo non turpis
          pharetra luctus. Etiam eu nunc quis justo luctus malesuada. Nunc auctor, tortor ac
          placerat dapibus, mauris arcu ultrices velit, non fringilla mi magna nec mauris.
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
