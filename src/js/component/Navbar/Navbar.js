import React from 'react';
import { Link } from 'react-router-dom';
import { BiRocket,BiUser } from 'react-icons/bi';
import styles from './navbar.module.css'; 
import { AiOutlineRobot,AiOutlineCheckCircle } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <AiOutlineRobot size={52} className={styles.icon} />
        </Link>
      </div>
      <ul className={styles['nav-links']}>
        <li>
          <Link to="/products" className={styles['nav-link']}>Productos</Link>
        </li>
        <li>
          <Link to="/prices" className={styles['nav-link']}>Precios</Link>
        </li>
        <li>
          <Link to="/solutions" className={styles['nav-link']}>Soluciones</Link>
        </li>
        <li>
          <Link to="/demo" className={styles['nav-link']}>Demostración</Link>
        </li>
        <li>
          <Link to="/services" className={styles['nav-link']}>Servicios</Link>
        </li>
        <li>
          <Link to="/resources" className={styles['nav-link']}>Recursos</Link>
        </li>
      </ul>
      <div className={styles['auth-buttons']}>
        <Link to="/login" className={styles['login-button']}><BiUser size={20} className={styles.userIcon} />
          Iniciar sesión</Link>
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
