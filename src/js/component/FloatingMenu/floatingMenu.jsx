import React, { useState, useEffect } from 'react';
import { BiMenu } from 'react-icons/bi';
import styles from './floatingMenu.module.css';ç


const FloatingMenu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) { // Cambia este valor según cuándo quieras que aparezca el menú
      setIsMenuVisible(true);
    } else {
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.floatingMenu} ${isMenuVisible ? styles.show : ''}`}>
      {/* Coloca aquí el contenido del menú */}
      {/* ... */}
    </div>
  );
};

export default FloatingMenu;
