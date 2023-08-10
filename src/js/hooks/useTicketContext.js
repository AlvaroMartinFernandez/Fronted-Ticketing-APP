import { useContext } from 'react';
import { TicketContext } from '../../store/TicketContext'; 

export const useTicketContext = () => {
  const context = useContext(TicketContext);
  if (!context) {
    throw new Error('useTicketContext debe ser utilizado dentro de un proveedor TicketContext');
  }
  return context;
};
