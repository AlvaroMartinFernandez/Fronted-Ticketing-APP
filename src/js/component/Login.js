import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form>
        {/* Campos de inicio de sesión */}
        <input type="text" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button className="login-button">Iniciar sesión</button>
      </form>
      <p>
        ¿No tienes una cuenta? <Link to="/signup">Regístrate</Link>
      </p>
    </div>
  );
};

export default Login;
