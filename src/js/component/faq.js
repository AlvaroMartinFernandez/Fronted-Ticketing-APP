import React from 'react';

const Faq = () => {
  return (
    <div>
      <h1 style={{ color: '#004080', textAlign: 'center', marginBottom: '20px' }}>
        Bienvenidos a nuestra aplicación de gestión de tickets con ChatGPT
      </h1>
      <p style={{ textAlign: 'justify', marginBottom: '20px' }}>
        Nuestra aplicación está diseñada para ofrecerte una solución eficiente y efectiva para manejar tus tickets de soporte y atención al cliente.
        Con la ayuda de ChatGPT, una potente inteligencia artificial de procesamiento del lenguaje natural, la gestión de tickets nunca ha sido tan fácil y rápida.
      </p>

      <div style={{ backgroundColor: '#f0f8ff', padding: '20px', borderRadius: '5px', marginBottom: '30px' }}>
        <h2 className="question" style={{ color: '#004080', fontWeight: 'bold' }}>
          ¿Qué es ChatGPT y cómo ayuda en la gestión de tickets?
        </h2>
        <p className="answer" style={{ textAlign: 'justify' }}>
          ChatGPT es una potente inteligencia artificial de procesamiento del lenguaje natural desarrollada por OpenAI.
          En nuestra aplicación de gestión de tickets, ChatGPT actúa como un asistente virtual inteligente que proporciona
          respuestas precisas y contextualizadas a los tickets de soporte y atención al cliente. Ayuda a automatizar y
          agilizar el proceso de respuesta, lo que mejora la eficiencia y la satisfacción del cliente.
        </p>

        <h2 className="question" style={{ color: '#004080', fontWeight: 'bold' }}>
          ¿Cómo se integra nuestra aplicación con los sistemas existentes en nuestra empresa?
        </h2>
        <p className="answer" style={{ textAlign: 'justify' }}>
          Entendemos la importancia de la integración con tus sistemas existentes. Nuestra aplicación cuenta con funciones
          de integración personalizadas que permiten conectar fácilmente con tus herramientas de CRM, plataformas de gestión
          de proyectos y otros sistemas clave. Esto facilita la sincronización de datos y la colaboración entre equipos,
          optimizando tus operaciones.
        </p>

        <h2 className="question" style={{ color: '#004080', fontWeight: 'bold' }}>
          ¿Qué medidas de seguridad se aplican para proteger nuestros datos y la privacidad de nuestros clientes?
        </h2>
        <p className="answer" style={{ textAlign: 'justify' }}>
          La seguridad y la privacidad son nuestras principales prioridades. Implementamos medidas de seguridad avanzadas para proteger tus datos y la información de tus clientes.
          Utilizamos cifrado de extremo a extremo y seguimos las mejores prácticas de la industria para garantizar que la información confidencial esté protegida en todo momento.
        </p>

        <h2 className="question" style={{ color: '#004080', fontWeight: 'bold' }}>
          ¿Cuál es el nivel de personalización que ofrece la aplicación?
        </h2>
        <p className="answer" style={{ textAlign: 'justify' }}>
          Nuestra aplicación está diseñada para adaptarse a las necesidades específicas de tu empresa. Puedes personalizar el flujo de trabajo,
          las respuestas predeterminadas de ChatGPT, los campos de información en los tickets y más. Esto te permite mantener una comunicación coherente con los clientes y ajustar la aplicación según tus requerimientos.
        </p>

        {/* Agregar más preguntas y respuestas aquí */}
      </div>

      <p style={{ textAlign: 'justify', marginTop: '30px' }}>
        No esperes más para mejorar la experiencia de tus clientes y aumentar la eficiencia de tu equipo de soporte.
        ¡Únete a nosotros y descubre cómo nuestra aplicación de gestión de tickets con ChatGPT puede revolucionar tu negocio!
      </p>

    </div>
  );
};

export default Faq;
