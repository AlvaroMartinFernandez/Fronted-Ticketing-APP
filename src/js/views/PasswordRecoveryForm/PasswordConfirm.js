import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from "./PasswordRecoveryForm.module.css"

const PasswordConfirmation = () => {
  const { id } = useParams();
  const [password, setPassword] = useState('');
  const [confirmationSuccess, setConfirmationSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handlePasswordConfirmation = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `https://backend-ticketing-app-production.up.railway.app/users/recoverpassword/${id}`,
        { password: password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        setConfirmationSuccess(true);
      } else {
        setError('No se pudo confirmar la contraseña. Por favor, intenta de nuevo más tarde.');
      }
    } catch (error) {
      setError('Ocurrió un error al intentar confirmar la contraseña. Por favor, intenta de nuevo más tarde.');
    }
  };

  return (
    <div className={styles['password-confirmation-form']}>
      {confirmationSuccess ? (
        <p>¡Contraseña confirmada con éxito!</p>
      ) : (
        <form onSubmit={handlePasswordConfirmation}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nueva contraseña"
            className={styles['input']}
          />
          <button type="submit" className={styles['button']}>Confirmar contraseña</button>
          {error && <p className={styles['error-message']}>{error}</p>}
        </form>
      )}
      {/* Agrega una alerta de error */}
      {error && <div className={styles['alert-error']}>{error}</div>}
    </div>
  );
};

export default PasswordConfirmation;
