import React from 'react';
import './Faqs.css'; 

const Faq = () => {
  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#pregunta-1" aria-expanded="true" aria-controls="pregunta-1">
            ¿Qué es WizzMail y cómo puede beneficiar a mi empresa?
          </button>
        </h2>
        <div id="pregunta-1" className="accordion-collapse collapse show" aria-labelledby="headingOne">
          <div className="accordion-body">
            WizzMail es una innovadora aplicación diseñada para transformar la forma en que las empresas gestionan sus tickets y correos electrónicos. Nuestra plataforma ofrece una gestión integral al centralizar todas las comunicaciones en un solo lugar, lo que proporciona a los administradores una visión completa y control total...
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pregunta-2" aria-expanded="false" aria-controls="pregunta-2">
            ¿Cómo funciona la integración de inteligencia artificial en WizzMail?
          </button>
        </h2>
        <div id="pregunta-2" className="accordion-collapse collapse" aria-labelledby="headingTwo">
          <div className="accordion-body">
            La integración de inteligencia artificial en WizzMail permite respuestas inteligentes en tiempo real a correos electrónicos y tickets. Nuestra IA está preparada para interactuar y resolver consultas, incluso cuando tu equipo no está disponible. Esto garantiza que cada cliente se sienta valorado y atendido en todo momento, mejorando significativamente la satisfacción del cliente...
          </div>
        </div>
      </div>

      
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pregunta-3" aria-expanded="false" aria-controls="pregunta-3">
            ¿Cuáles son los beneficios del Plan Básico de WizzMail?
          </button>
        </h2>
        <div id="pregunta-3" className="accordion-collapse collapse" aria-labelledby="headingThree">
          <div className="accordion-body">
            El Plan Básico de WizzMail, con un precio de 49€ al mes, es ideal para usuarios o departamentos individuales. Este plan incluye:
            <ul>
              <li>1 cuenta de usuario</li>
              <li>1 cuenta de correo asociada</li>
              <li>Acceso completo a la plataforma</li>
              <li>Respuestas inteligentes en tiempo real</li>
              <li>Atención al cliente las 24 horas</li>
            </ul>
          </div>
        </div>
      </div>

     

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pregunta-4" aria-expanded="false" aria-controls="pregunta-4">
            ¿Qué ofrece el Plan Empresarial de WizzMail?
          </button>
        </h2>
        <div id="pregunta-4" className="accordion-collapse collapse" aria-labelledby="headingFour">
          <div className="accordion-body">
            El Plan Empresarial, con un precio de 199€ al mes, es perfecto para hasta tres usuarios o departamentos. Este plan ofrece:
            <ul>
              <li>Hasta 3 cuentas de usuario</li>
              <li>3 cuentas de correo asociadas (una por usuario)</li>
              <li>Acceso jerárquico personalizado</li>
              <li>Integración de inteligencia artificial</li>
              <li>Respuestas instantáneas</li>
              <li>Atención al cliente las 24 horas</li>
            </ul>
          </div>
        </div>
      </div>

     

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pregunta-5" aria-expanded="false" aria-controls="pregunta-5">
            ¿Cómo puedo obtener el Plan Personalizado de WizzMail?
          </button>
        </h2>
        <div id="pregunta-5" className="accordion-collapse collapse" aria-labelledby="headingFive">
          <div className="accordion-body">
            Si tu empresa cuenta con tres o más usuarios y departamentos, el Plan Personalizado es la opción ideal. El precio de este plan es personalizado y adaptado a tus necesidades específicas. Las características incluidas son:
            <ul>
              <li>Múltiples cuentas de usuario y correo</li>
              <li>Acceso flexible y adaptado</li>
              <li>Funciones avanzadas de gestión</li>
              <li>Integración completa de IA</li>
              <li>Soluciones personalizadas</li>
              <li>Atención al cliente dedicada</li>
            </ul>
          </div>
        </div>
      </div>

    

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pregunta-6" aria-expanded="false" aria-controls="pregunta-6">
            ¿Cómo puedo unirme a la Revolución Empresarial con WizzMail?
          </button>
        </h2>
        <div id="pregunta-6" className="accordion-collapse collapse" aria-labelledby="headingSix">
          <div className="accordion-body">
            Unirte a la Revolución Empresarial con WizzMail es sencillo. Contáctanos hoy mismo para una demostración personalizada y 
            descubre cómo WizzMail puede transformar tu empresa. Nuestros planes están diseñados para satisfacer tus necesidades y brindarte 
            un servicio excepcional las 24 horas del día. Tu éxito es nuestra prioridad...
          </div>
        </div>
      </div>

     

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pregunta-7" aria-expanded="false" aria-controls="pregunta-7">
            ¿Qué garantías tengo de que WizzMail mejorará la gestión de mis tickets y correos electrónicos?
          </button>
        </h2>
        <div id="pregunta-7" className="accordion-collapse collapse" aria-labelledby="headingSeven">
          <div className="accordion-body">
            En WizzMail, estamos apasionados por impulsar la excelencia empresarial a través de la innovación tecnológica. Nuestra plataforma está 
            diseñada para optimizar la comunicación, mejorar la eficiencia y elevar la satisfacción del cliente a niveles inimaginables. Confía en WizzMail para liberar el potencial de tu equipo y llevar tu atención al cliente a nuevas alturas...
          </div>
        </div>
      </div>

     

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pregunta-8" aria-expanded="false" aria-controls="pregunta-8">
            ¿Cómo puedo poner en marcha WizzMail en mi empresa?
          </button>
        </h2>
        <div id="pregunta-8" className="accordion-collapse collapse" aria-labelledby="headingEight">
          <div className="accordion-body">
            Para comenzar a disfrutar de los beneficios de WizzMail en tu empresa, simplemente contáctanos para una demostración personalizada. 
            Nuestro equipo estará encantado de mostrarte cómo puedes ahorrar tiempo, recursos y brindar un servicio excepcional las 24 horas del día, 
            los 7 días de la semana. Tu éxito es nuestra prioridad, y estamos aquí para ayudarte en cada paso del proceso...
          </div>
        </div>
      </div>

      
      
    </div>
  );
}

export default Faq;





// const Faq = () => {
//   return (
//     <div className={styles.faqContainer}>
//       <h1 className={styles.faqTitle}>
//         Bienvenidos a nuestra aplicación de gestión de tickets con ChatGPT
//       </h1>
//       <p className={styles.faqText}>
//         Nuestra aplicación está diseñada para ofrecerte una solución eficiente y efectiva para manejar tus tickets de soporte y atención al cliente.
//         Con la ayuda de ChatGPT, una potente inteligencia artificial de procesamiento del lenguaje natural, la gestión de tickets nunca ha sido tan fácil y rápida.
//       </p>

//       <div className={styles.faqItem}>
//         <h2 className={styles.question}>
//           ¿Qué es ChatGPT y cómo ayuda en la gestión de tickets?
//         </h2>
//         <p className={styles.answer}>
//           ChatGPT es una potente inteligencia artificial de procesamiento del lenguaje natural desarrollada por OpenAI.
//           En nuestra aplicación de gestión de tickets, ChatGPT actúa como un asistente virtual inteligente que proporciona
//           respuestas precisas y contextualizadas a los tickets de soporte y atención al cliente. Ayuda a automatizar y
//           agilizar el proceso de respuesta, lo que mejora la eficiencia y la satisfacción del cliente.
//         </p>
//       </div>

//       <div className={styles.faqItem}>
//         <h2 className={styles.question}>
//           ¿Cómo se integra nuestra aplicación con los sistemas existentes en nuestra empresa?
//         </h2>
//         <p className={styles.answer}>
//           Entendemos la importancia de la integración con tus sistemas existentes. Nuestra aplicación cuenta con funciones
//           de integración personalizadas que permiten conectar fácilmente con tus herramientas de CRM, plataformas de gestión
//           de proyectos y otros sistemas clave. Esto facilita la sincronización de datos y la colaboración entre equipos,
//           optimizando tus operaciones.
//         </p>
//       </div>
//     </div>
//   );
// };
