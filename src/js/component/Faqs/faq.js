import React from 'react';
import styles from './Faqs.module.css';

const Faq = () => {
  return (
    <div className={styles.faqContainer}>
      <h1 className={styles.faqTitle}>
        Bienvenidos a nuestra aplicación de gestión de tickets con ChatGPT
      </h1>
      <p className={styles.faqText}>
        Nuestra aplicación está diseñada para ofrecerte una solución eficiente y efectiva para manejar tus tickets de soporte y atención al cliente.
        Con la ayuda de ChatGPT, una potente inteligencia artificial de procesamiento del lenguaje natural, la gestión de tickets nunca ha sido tan fácil y rápida.
      </p>

      <div className={styles.faqItem}>
        <h2 className={styles.question}>
          ¿Qué es ChatGPT y cómo ayuda en la gestión de tickets?
        </h2>
        <p className={styles.answer}>
          ChatGPT es una potente inteligencia artificial de procesamiento del lenguaje natural desarrollada por OpenAI.
          En nuestra aplicación de gestión de tickets, ChatGPT actúa como un asistente virtual inteligente que proporciona
          respuestas precisas y contextualizadas a los tickets de soporte y atención al cliente. Ayuda a automatizar y
          agilizar el proceso de respuesta, lo que mejora la eficiencia y la satisfacción del cliente.
        </p>
      </div>

      <div className={styles.faqItem}>
        <h2 className={styles.question}>
          ¿Cómo se integra nuestra aplicación con los sistemas existentes en nuestra empresa?
        </h2>
        <p className={styles.answer}>
          Entendemos la importancia de la integración con tus sistemas existentes. Nuestra aplicación cuenta con funciones
          de integración personalizadas que permiten conectar fácilmente con tus herramientas de CRM, plataformas de gestión
          de proyectos y otros sistemas clave. Esto facilita la sincronización de datos y la colaboración entre equipos,
          optimizando tus operaciones.
        </p>
      </div>
    </div>
  );
};

export default Faq;
