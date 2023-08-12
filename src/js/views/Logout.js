
import React, { useContext } from 'react';
import { Context } from '../../store/appContext';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const { actions } = useContext(Context);
  const history = useHistory();

  const handleLogout = async () => {
    const success = await actions.logout();

    if (success) {
      // Redirigir a la página de inicio o donde prefieras
      history.push('/home');
    }
  };

  return (
    <span onClick={handleLogout} className="nav-link">
      Cerrar Sesión
    </span>
  );
};

export default Logout;
