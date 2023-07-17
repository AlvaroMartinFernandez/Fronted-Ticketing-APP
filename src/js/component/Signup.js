import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="signup-container">
      <h2>Registrarse</h2>
      <form>
        {/* Campos de registro */}
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button className="signup-button">Registrarse</button>
      </form>
      <p>
        ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
      </p>
    </div>
  );
};

export default Signup;
