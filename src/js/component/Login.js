import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/modules/login.module.css'; // Importa los estilos de los módulos CSS

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.loginTitle}>Iniciar sesión</h2>
      <form className={styles.loginForm}>
        {/* Campos de inicio de sesión */}
        <input type="text" placeholder="Correo electrónico" className={styles.loginInput} />
        <input type="password" placeholder="Contraseña" className={styles.loginInput} />
        <button className={styles.loginButton}>Iniciar sesión</button>
      </form>
      <p className={styles.signupLink}>
        ¿No tienes una cuenta? <Link to="/signup">Regístrate</Link>
      </p>
    </div>
  );
};

export default Login;
