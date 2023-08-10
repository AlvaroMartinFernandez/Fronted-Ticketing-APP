import { useContext } from 'react';
import { UserContext } from '../../store/UserContext'; 

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext debe ser utilizado dentro de un proveedor UserContext');
  }
  return context;
};
