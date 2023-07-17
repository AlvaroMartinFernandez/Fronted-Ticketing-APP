import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <h2 className="section-title">Planes de precios</h2>
      <div className="pricing-plan">
        <h3 className="plan-title">Plan Básico</h3>
        <p className="plan-description">Funcionalidad limitada</p>
        <p className="plan-price">Precio: $X/mes</p>
        <button className="plan-button">Seleccionar</button>
      </div>
      <div className="pricing-plan">
        <h3 className="plan-title">Plan Premium</h3>
        <p className="plan-description">Funcionalidad completa</p>
        <p className="plan-price">Precio: $Y/mes</p>
        <button className="plan-button">Seleccionar</button>
      </div>
      <div className="pricing-plan">
        <h3 className="plan-title">Plan Empresarial</h3>
        <p className="plan-description">Funcionalidad personalizada</p>
        <p className="plan-price">Precio: Contáctanos</p>
        <button className="plan-button">Seleccionar</button>
      </div>
    </section>
  );
};

export default Pricing;
