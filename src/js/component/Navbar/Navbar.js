import React from 'react';
import { Link } from 'react-router-dom';
import { BiRocket, BiUser } from 'react-icons/bi';
import styles from './navbar.module.css';
import { AiOutlineRobot, AiOutlineCheckCircle } from 'react-icons/ai';

const Navbar = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <AiOutlineRobot size={52} className={styles.icon} />
        </Link>
      </div>
      <ul className={styles['nav-links']}>
        <li>
          <span onClick={() => handleScrollTo('testimonials')} className={styles['nav-link']}>
            Testimonios
          </span>
        </li>
        <li>
          <span onClick={() => handleScrollTo('pricing')} className={styles['nav-link']}>
            Precios
          </span>
        </li>
        <li>
          <span onClick={() => handleScrollTo('demo')} className={styles['nav-link']}>
            Demostración
          </span>
        </li>
        <li>
          <span onClick={() => handleScrollTo('services')} className={styles['nav-link']}>
            Servicios
          </span>
        </li>
        <li>
          <span onClick={() => handleScrollTo('resources')} className={styles['nav-link']}>
            Recursos
          </span>
        </li>
      </ul>
      <div className={styles['auth-buttons']}>
        <Link to="/login" className={styles['login-button']}>
          <BiUser size={20} className={styles.userIcon} />
          Iniciar sesión
        </Link>
      </div>
      <div className={styles['auth-buttons']}>
        <Link to="/signup" className={`${styles['signup-button']} ${styles['button']}`}>
          Registrarse <AiOutlineCheckCircle size={20} className={styles.checkIcon} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
