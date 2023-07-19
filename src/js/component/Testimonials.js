import React from 'react';
import styles from '../../styles/modules/testimonials.module.css';

import person1 from '../../img/person1.jpg';
import person3 from '../../img/person3.jpg';

const Testimonials = () => {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2 className={styles['section-title']}>Testimonios de nuestros clientes</h2>
      <div className={styles.testimonial}>
        <img src={person1} alt="Cliente 1" className={styles['testimonial-image']} />
        <blockquote className={styles['testimonial-quote']}>"¡La plataforma ha transformado nuestra forma de brindar soporte al cliente! Es fácil de usar y altamente eficiente."</blockquote>
        <cite className={styles['testimonial-author']}>- Cliente 1</cite>
      </div>
      <div className={styles.testimonial}>
        <img src={person3} alt="Cliente 2" className={styles['testimonial-image']} />
        <blockquote className={styles['testimonial-quote']}>"Gracias a esta plataforma, hemos mejorado la satisfacción de nuestros clientes y hemos reducido los tiempos de respuesta."</blockquote>
        <cite className={styles['testimonial-author']}>- Cliente 2</cite>
      </div>
    </section>
  );
};

export default Testimonials;
