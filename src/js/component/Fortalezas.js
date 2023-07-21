import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/modules/fortalezas.module.css';

import fortaleza1 from "../../img/fortaleza1.jpg";
import fortaleza2 from "../../img/fortaleza2.jpg";
import fortaleza3 from "../../img/fortaleza3.jpg";

const fortalezasData = [
  {
    id: 1,
    text: 'Resolución rápida de problemas.',
    imageUrl: fortaleza1,
  },
  {
    id: 2,
    text: 'Interfaz intuitiva y fácil de usar',
    imageUrl: fortaleza2,
  },
  {
    id: 3,
    text: 'Personalización y adaptabilidad.',
    imageUrl: fortaleza3,
  },
  // Agrega más fortalezas si es necesario
];

const Fortalezas = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % fortalezasData.length);
  };

  const currentFortaleza = fortalezasData[currentIndex];

  return (
    <div className={styles.container}>
      <div className={styles['fortaleza-container']} onClick={handleNext}>
        <motion.img
          src={currentFortaleza.imageUrl}
          alt={`Fortaleza ${currentFortaleza.id}`}
          className={styles['fortaleza-image']}
          whileHover={{ scale: 1.1 }}
        />
        <motion.div
          className={styles['fortaleza-text-container']}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className={styles['fortaleza-text']}>
            {currentFortaleza.text}
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default Fortalezas;
