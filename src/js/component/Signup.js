import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/modules/signup.module.css';

const Signup = () => {
  return (
    <div className={styles['signup-container']}>
      <h2>Registrarse</h2>
      <form>
        {/* Campos de registro */}
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button className={styles['signup-button']}>Registrarse</button>
      </form>
      <p>
        ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
      </p>
    </div>
  );
};

export default Signup;
