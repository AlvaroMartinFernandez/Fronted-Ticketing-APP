import React from 'react';
import { FaClipboardList, FaComments, FaChartBar } from 'react-icons/fa';

const Features = () => {
  return (
    <section id="features" className="features">
      <h2 className="section-title">Características destacadas</h2>
      <div className="feature">
        <i className="icon"><FaClipboardList /></i>
        <h3 className="feature-title">Gestión de tickets</h3>
        <p className="feature-description">Organiza y responde a los tickets de tus clientes de manera eficiente.</p>
      </div>
      <div className="feature">
        <i className="icon"><FaComments /></i>
        <h3 className="feature-title">Chat en vivo</h3>
        <p className="feature-description">Ofrece soporte en tiempo real a través de un chat en vivo integrado.</p>
      </div>
      <div className="feature">
        <i className="icon"><FaChartBar /></i>
        <h3 className="feature-title">Paneles de control</h3>
        <p className="feature-description">Obtén información valiosa con paneles de control y análisis en tiempo real.</p>
      </div>
    </section>
  );
};

export default Features;

