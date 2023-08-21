import { useContext } from 'react';
import { DepartmentContext } from '../../store/DepartmentContext';

export const useDepartmentContext = () => {
  const context = useContext(DepartmentContext);
  if (!context) {
    throw new Error('useDepartmentContext debe ser utilizado dentro de un proveedor DepartmentContext');
  }
  return context;
};
