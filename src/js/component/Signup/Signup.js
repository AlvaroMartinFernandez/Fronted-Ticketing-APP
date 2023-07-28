import React, { useState, useContext } from 'react';
import { Context } from '../../store/appContext.js';
import { Link, useNavigate } from 'react-router-dom';
import styles from './signup.module.css';

const Signup = () => {
  const { actions } = useContext(Context);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (firstName && lastName && email && password) {
      try {
        const signupSuccess = await actions.signup(firstName, lastName, email, password);
        if (signupSuccess) {
          setFirstName('');
          setLastName('');
          setEmail('');
          setPassword('');
          navigate('/login');
        } else {
          setErrorMessage('Error al registrarse. Por favor, inténtalo nuevamente más tarde.');
        }
      } catch (error) {
        console.error('Error al registrarse:', error);
        setErrorMessage('Error al registrarse. Por favor, inténtalo nuevamente más tarde.');
      }
    } else {
      setErrorMessage('Por favor, completa todos los campos.');
    }
  };

  return (
    <div className={styles['signup-container']}>
      <h2>Registrarse</h2>
      <form onSubmit={handleSignup}>
        {/* Campos de registro */}
        <input type="text" placeholder="Nombre" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" placeholder="Apellido" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={styles['signup-button']}>
          Registrarse
        </button>
      </form>
      <p>
        ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
      </p>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </div>
  );
};

export default Signup;
