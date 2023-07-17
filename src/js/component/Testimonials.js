import React from 'react';


const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2 className="section-title">Testimonios de nuestros clientes</h2>
      <div className="testimonial">
        <img src="imagen-cliente1" alt="Cliente 1" className="testimonial-image" />
        <blockquote className="testimonial-quote">"¡La plataforma ha transformado nuestra forma de brindar soporte al cliente! Es fácil de usar y altamente eficiente."</blockquote>
        <cite className="testimonial-author">- Cliente 1</cite>
      </div>
      <div className="testimonial">
        <img src="imagen-cliente2" alt="Cliente 2" className="testimonial-image" />
        <blockquote className="testimonial-quote">"Gracias a esta plataforma, hemos mejorado la satisfacción de nuestros clientes y hemos reducido los tiempos de respuesta."</blockquote>
        <cite className="testimonial-author">- Cliente 2</cite>
      </div>
    </section>
  );
};

export default Testimonials;

