import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './PasswordRecoveryForm.module.css';

const PasswordRecoveryForm = () => {
  const [email, setEmail] = useState('');
  const [isPasswordRecovered, setIsPasswordRecovered] = useState(false);
  const [error, setError] = useState(null);

  // Obtiene la función navigate para redirigir
  const navigate = useNavigate();

  const handleRecoverPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        'https://backend-ticketing-app-production.up.railway.app/users/recoverpassword',
        { email: email },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        setIsPasswordRecovered(true);
        setError(null); // Limpia cualquier mensaje de error existente
      } else {
        setError('No se pudo recuperar la contraseña. Por favor, intenta de nuevo más tarde.');
      }
    } catch (error) {
      setError('Ocurrió un error al intentar recuperar la contraseña. Por favor, intenta de nuevo más tarde.');
    }
  };

  return (
    <div className={styles['password-recovery-form']}>
      {isPasswordRecovered ? (
        <div className={styles['success-message']}>
          Se ha enviado un correo para recuperar la contraseña.
        </div>
      ) : (
        <form onSubmit={handleRecoverPassword}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
            className={styles['input']}
          />
          <button type="submit" className={styles['button']}>
            Recuperar contraseña
          </button>
          {error && <p className={styles['error-message']}>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default PasswordRecoveryForm;
