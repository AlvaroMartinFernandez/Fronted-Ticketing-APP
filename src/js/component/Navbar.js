import React from 'react';
import { Link } from 'react-router-dom';
import { BiRocket } from 'react-icons/bi';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <BiRocket size={32} />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/products">Productos</Link>
        </li>
        <li>
          <Link to="/prices">Precios</Link>
        </li>
        <li>
          <Link to="/solutions">Soluciones</Link>
        </li>
        <li>
          <Link to="/demo">Demostración</Link>
        </li>
        <li>
          <Link to="/services">Servicios</Link>
        </li>
        <li>
          <Link to="/resources">Recursos</Link>
        </li>
        <li>
          <Link to="/free-trial" className="button">
            Prueba gratuita
          </Link>
        </li>
      </ul>
      <Link to="/login" className="login-button">
        Iniciar sesión
      </Link>
      <Link to="/signup" className="signup-button">
        Registrarse
      </Link>
    </nav>
  );
};

export default Navbar;
