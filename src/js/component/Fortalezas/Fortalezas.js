import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './fortalezas.module.css';

import fortaleza1 from "../../../img/fortaleza1.jpg";
import fortaleza2 from "../../../img/fortaleza2.jpg";
import fortaleza3 from "../../../img/fortaleza3.jpg";

const fortalezasData = [
  {
    id: 1,
    text: '1. Resolución rápida de problemas: En nuestra aplicación, nos enorgullecemos de brindar una resolución rápida y eficiente de problemas. Nuestra avanzada inteligencia artificial está diseñada para analizar y responder a los tickets con precisión y rapidez. Olvídate de esperar largas horas o días para recibir una respuesta. Con nuestra plataforma, obtendrás soluciones rápidas y efectivas para cualquier consulta o incidencia.',
    imageUrl: fortaleza1,
  },
  {
    id: 2,
    text: '2. Interfaz intuitiva y fácil de usar: Queremos que tu experiencia con nuestra app sea lo más sencilla y agradable posible. Por eso, hemos desarrollado una interfaz intuitiva y fácil de usar, pensada para que cualquier usuario, sin importar su nivel de conocimientos técnicos, pueda utilizarla sin dificultades. Con unos pocos clics, podrás generar tickets y obtener respuestas automáticas de nuestra IA, sin complicaciones ni confusiones.',
    imageUrl: fortaleza2,
  },
  {
    id: 3,
    text: '3. Personalización y adaptabilidad: Sabemos que cada empresa tiene necesidades únicas, y nuestra app se adapta perfectamente a ellas. Ofrecemos opciones de personalización que te permiten configurar los tickets y las respuestas de acuerdo con los requerimientos específicos de tu negocio. Además, nuestra plataforma se adapta a diferentes industrias y tamaños de empresas. No importa cuál sea tu sector o el tamaño de tu organización, nuestra app se ajustará perfectamente a tus necesidades.',
    imageUrl: fortaleza3,
  },
];

const Fortalezas = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % fortalezasData.length);
  };

  const currentFortaleza = fortalezasData[currentIndex];

  return (
    <div id='fortalezas' className={styles.container}>
      <div className={styles['fortaleza-container']} onClick={handleNext}>
        <motion.div
          className={styles['fortaleza-text-container']}
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -1000, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles['fortaleza-title']}>
            Wizz-Mail {currentFortaleza.id}
          </h2>
          <p className={styles['fortaleza-text']}>
            {currentFortaleza.text}
          </p>
        </motion.div>
        <motion.img
          src={currentFortaleza.imageUrl}
          alt={`Fortaleza ${currentFortaleza.id}`}
          className={styles['fortaleza-image']}
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 1000, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};

export default Fortalezas;
