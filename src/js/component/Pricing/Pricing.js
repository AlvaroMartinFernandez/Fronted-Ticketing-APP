
 import React from 'react';
 import './pricing.module.css';


 const Pricing = () => {
  return (
    <div>
  


  <div className="pricing-wrapper clearfix">
   
    <h1 className="pricing-table-title">Tabla de Precios <a href="http://creaticode.com">Creaticode.com</a></h1>

    <div className="pricing-table">
      <h3 className="pricing-title">Basico</h3>
      <div className="price">$60<sup>/ mes</sup></div>
    
      <ul className="table-list">
        <li>10 GB <span>De almacenamiento</span></li>
        <li>1 Dominio <span>incluido</span></li>
        <li>25 GB <span>De transferencia mensual</span></li>
        <li>Base de datos <span className="unlimited">ilimitadas</span></li>
        <li>Cuentas de correo <span className="unlimited">ilimitadas</span></li>
        <li>CPanel <span>incluido</span></li>
      </ul>
    
      <div className="table-buy">
        <p>$60<sup>/ mes</sup></p>
        <a href="#" className="pricing-action">Comprar</a>
      </div>
    </div>
    
    <div className="pricing-table recommended">
      <h3 className="pricing-title">Premium</h3>
      <div className="price">$100<sup>/ mes</sup></div>
    
      <ul className="table-list">
        <li>35 GB <span>De almacenamiento</span></li>
        <li>5 Dominios <span>incluidos</span></li>
        <li>100 GB <span>De transferencia mensual</span></li>
        <li>Base de datos <span className="unlimited">ilimitadas</span></li>
        <li>Cuentas de correo <span className="unlimited">ilimitadas</span></li>
        <li>CPanel <span>incluido</span></li>
      </ul>
     
      <div className="table-buy">
        <p>$100<sup>/ mes</sup></p>
        <a href="#" className="pricing-action">Comprar</a>
      </div>
    </div>

    <div className="pricing-table">
      <h3 className="pricing-title">Ultimate</h3>
      <div className="price">$200<sup>/ mes</sup></div>
    
      <ul className="table-list">
        <li>100 GB <span>De almacenamiento</span></li>
        <li>8 Dominios <span>incluidos</span></li>
        <li>200 GB <span>De transferencia mensual</span></li>
        <li>Base de datos <span className="unlimited">ilimitadas</span></li>
        <li>Cuentas de correo <span className="unlimited">ilimitadas</span></li>
        <li>CPanel <span>incluido</span></li>
      </ul>
    
      <div className="table-buy">
        <p>$200<sup>/ mes</sup></p>
        <a href="#" className="pricing-action">Comprar</a>
      </div>
    </div>
  </div>


    </div>
  );
};




//  const Pricing = () => {
//    return (
//      <section id="pricing" className={`${styles.pricing} ${styles.blueBackground}`}>
//        <h2 className={styles['section-title']}>Planes de precios</h2>
//        <div className={styles['pricing-plan']}>
//          <h3 className={styles['plan-title']}>Plan Básico</h3>
//          <p className={styles['plan-description']}>
//            Respuestas automáticas básicas para la gestión de correos de clientes.
//          </p>
//          <p className={styles['plan-benefit']}>
//            Beneficios clave:
//          </p>
//          <ul className={styles['plan-benefits-list']}>
//            <li>Respuestas rápidas y automáticas.</li>
//            <li>Mejora de la eficiencia en la atención al cliente.</li>
//          </ul>
//          <p className={styles['plan-price']}>Precio: $X/mes</p>
//          <button className={styles['plan-button']}>Seleccionar</button>
//        </div>
//        <div className={styles['pricing-plan']}>
//          <h3 className={styles['plan-title']}>Plan Premium</h3>
//          <p className={styles['plan-description']}>
//            Respuestas personalizadas y adaptadas a las necesidades de cada cliente.
//          </p>
//          <p className={styles['plan-benefit']}>
//            Beneficios clave:
//          </p>
//          <ul className={styles['plan-benefits-list']}>
//            <li>Respuestas personalizadas con inteligencia artificial avanzada.</li>
//            <li>Análisis de datos para mejorar la comunicación con los clientes.</li>
//          </ul>
//         <p className={styles['plan-price']}>Precio: $Y/mes</p>
//          <button className={styles['plan-button']}>Seleccionar</button>
//        </div>
//        <div className={`${styles['pricing-plan']} ${styles['business-plan']}`}>
//          <h3 className={`${styles['plan-title']} ${styles['business-plan-title']}`}>Plan Business Ilimitado</h3>
//          <p className={`${styles['plan-description']} ${styles['business-plan-description']}`}>
//            Todas las características del plan Empresarial con uso ilimitado.
//          </p>
//          <p className={`${styles['plan-benefit']} ${styles['business-plan-benefit']}`}>
//            Beneficios clave:
//          </p>
//          <ul className={styles['plan-benefits-list']}>
//            <li>Uso ilimitado de la plataforma para todos tus usuarios y departamentos.</li>
//            <li>Soporte prioritario y atención personalizada.</li>
//          </ul>
//          <p className={`${styles['plan-price']} ${styles['business-plan-price']}`}>Precio: Contáctanos</p>
//          <button className={`${styles['plan-button']} ${styles['business-plan-button']}`}>Seleccionar</button>
//        </div>
//      </section>
//    );
//  };

 export default Pricing;
