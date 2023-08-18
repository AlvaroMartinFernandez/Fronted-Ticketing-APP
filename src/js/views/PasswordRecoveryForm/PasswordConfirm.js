import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PasswordConfirmation = () => {
  const { id } = useParams();
  const [password, setPassword] = useState('');
  const [confirmationSuccess, setConfirmationSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handlePasswordConfirmation = async () => {
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

};

export default PasswordConfirmation;
