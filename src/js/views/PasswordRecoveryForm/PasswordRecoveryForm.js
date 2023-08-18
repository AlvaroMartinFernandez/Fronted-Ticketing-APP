import React, { useState } from 'react';
import axios from 'axios';
import styles from './PasswordRecoveryForm.module.css'; // Asegúrate de tener un archivo CSS para los estilos

const PasswordRecoveryForm = () => {
  const [email, setEmail] = useState('');
  const [isPasswordRecovered, setIsPasswordRecovered] = useState(false);
  const [error, setError] = useState(null);

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
        <p>Se ha enviado un correo para recuperar la contraseña.</p>
      ) : (
        <form onSubmit={handleRecoverPassword}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
            className={styles['input']}
          />
          <button type="submit" className={styles['button']}>Recuperar contraseña</button>
          {error && <p className={styles['error-message']}>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default PasswordRecoveryForm;
