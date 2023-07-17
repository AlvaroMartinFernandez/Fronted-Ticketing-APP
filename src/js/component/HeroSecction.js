import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Bienvenido a nuestra aplicación</h1>
        <p>Descripción breve de la aplicación y sus beneficios.</p>
        <button className="start-button">Empezar</button>
      </div>
      <div className="hero-image">
        <img src="ruta-de-la-imagen" alt="Imagen de bienvenida" />
      </div>
    </section>
  );
};

export default HeroSection;
