import React, { useState } from 'react';
import recoverPassword from '../../store/flux';

const PasswordRecoveryForm = () => {
  const [email, setEmail] = useState('');
  const [isPasswordRecovered, setIsPasswordRecovered] = useState(false);

  const handleRecoverPassword = async (e) => {
    e.preventDefault();
    const success = await recoverPassword(email);
    setIsPasswordRecovered(success);
  };

  return (
    <div style={styles.container}>
      {isPasswordRecovered ? (
        <p style={styles.message}>Se ha enviado un correo para recuperar la contraseña.</p>
      ) : (
        <form onSubmit={handleRecoverPassword} style={styles.form}>
          <input
            style={styles.formInput}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
          />
          <div style={styles.buttonContainer}>
            <button style={styles.formButton} type="submit">
              Recuperar contraseña
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '25px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  message: {
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formInput: {
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  formButton: {
    padding: '10px 20px',
    backgroundColor: '#4ab19d',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default PasswordRecoveryForm;
