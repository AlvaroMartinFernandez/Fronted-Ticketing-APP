import React, { useState } from 'react';
import axios from 'axios'; // Asegúrate de importar axios

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
    <div>
      {isPasswordRecovered ? (
        <p>Se ha enviado un correo para recuperar la contraseña.</p>
      ) : (
        <form onSubmit={handleRecoverPassword}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
          />
          <button type="submit">Recuperar contraseña</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default PasswordRecoveryForm;
