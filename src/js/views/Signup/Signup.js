import React, { useState, useContext } from 'react';
import { Context } from '../../store/appContext.js';
import { Link, useNavigate } from 'react-router-dom';
import styles from './signup.module.css';

const Signup = () => {
  const { actions } = useContext(Context);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAdress] = useState('');
  const [city, setCity] = useState('');
  const [cp, setCp] = useState('');
  const [plan, setPlan] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (name && email && password && country && address && city && cp && plan && phone) {
      try {
        const signupSuccess = await actions.signup(name, email, password, country, address, city, cp, plan, phone);
        if (signupSuccess) {
          setName('');
          setEmail('');
          setPassword('');
          setCountry('');
          setAdress('');
          setCity('');
          setCp('');
          setPlan('');
          setPhone('');
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
        <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />

        <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="text" placeholder="País" value={country} onChange={(e) => setCountry(e.target.value)} />
        <input type="text" placeholder="Dirección" value={address} onChange={(e) => setAdress(e.target.value)} />
        <input type="text" placeholder="Ciudad" value={city} onChange={(e) => setCity(e.target.value)} />
        <input type="text" placeholder="Código Postal" value={cp} onChange={(e) => setCp(e.target.value)} />
        <input type="text" placeholder="Plan" value={plan} onChange={(e) => setPlan(e.target.value)} />
        <input type="number" placeholder="Teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
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
