import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import { Context } from '../../store/appContext';
import styles from './login.module.css'; // Importa los estilos de los módulos CSS

const Login = () => {
  const { actions } = useContext(Context);
  const [email, setEmail] = useState(''); // Estado para almacenar el correo electrónico
  const [password, setPassword] = useState(''); // Estado para almacenar la contraseña

  const handleLogin = async () => {
    // Llamamos a la acción de inicio de sesión y esperamos el resultado
    const loginSuccess = await actions.login(email, password);
    if (loginSuccess) {

      console.log('Inicio de sesión exitoso');
    } else {
      console.log('Inicio de sesión fallido');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.loginTitle}>Iniciar sesión</h2>
      <form className={styles.loginForm}>
        {/* Campos de inicio de sesión */}
        <input
          type="text"
          placeholder="Correo electrónico"
          className={styles.loginInput}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className={styles.loginInput}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className={styles.loginButton}>
          Iniciar sesión
        </button>
      </form>
      <p className={styles.signupLink}>
        ¿No tienes una cuenta? <Link to="/signup">Regístrate</Link>
      </p>
    </div>
  );
};

export default Login;
