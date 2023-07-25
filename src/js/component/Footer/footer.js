import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        <div className={styles['footer-column']}>
          <h3>Atención al cliente</h3>
          <ul>
            <li>
              <FaPhone />
              <span>Teléfono: +1234567890</span>
            </li>
            <li>
              <FaEnvelope />
              <span>Correo electrónico: info@example.com</span>
            </li>
          </ul>
        </div>
        <div className={styles['footer-column']}>
          <h3>Soporte</h3>
          <ul>
            <li>
              <Link to="/faq">Preguntas frecuentes</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </div>
        <div className={styles['footer-column']}>
          <h3>Síguenos</h3>
          <ul className={styles['social-icons']}>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles['footer-bottom']}>
        <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
