
 import React from 'react';
 import './pricing.module.css';


 const Pricing = () => {
  return (
    <div>
      <h2 id="title">Pricing table - with hover effect</h2>
      <div className="hover-table-layout">
        <div className="listing-item">
          <figure className="image">
            <img src="https://i.ytimg.com/vi/MTrzTABzLfY/maxresdefault.jpg" alt="image" />
            <figcaption>
              <div className="caption">
                <h1>$10000</h1>
                <p>lorem</p>
              </div>
            </figcaption>
          </figure>
          <div className="listing">
            <h4>Show catalogue listing</h4>
            <h4>Email signatures and banners</h4>
            <h4>E-invitations</h4>
            <h4>Online brochures</h4>
          </div>
        </div>
        <div className="listing-item">
          <figure className="image">
            <img src="https://i.ytimg.com/vi/MTrzTABzLfY/maxresdefault.jpg" alt="image" />
            <figcaption>
              <div className="caption">
                <h1>$ 2000</h1>
                <p>lorem</p>
              </div>
            </figcaption>
          </figure>
          <div className="listing">
            <h4>Press releases</h4>
            <h4>Company logos for online listings</h4>
            <h4>Product categories</h4>
            <h4>Using the ADIPEC logo on exhibitor advertising</h4>
            <h4>Commercial opportunities in the preview and show dailies</h4>
          </div>
        </div>
        <div className="listing-item">
          <figure className="image">
            <img src="https://i.ytimg.com/vi/MTrzTABzLfY/maxresdefault.jpg" alt="image" />
            <figcaption>
              <div className="caption">
                <h1>$100</h1>
                <p>lorem</p>
              </div>
            </figcaption>
          </figure>
          <div className="listing">
            <h4>Mobile app listing</h4>
            <h4>Order visitor badges</h4>
            <h4>Global meetings programme</h4>
            <h4>Get Social</h4>
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
