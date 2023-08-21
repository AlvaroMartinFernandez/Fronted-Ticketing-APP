import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const DepartmentContext = createContext();

export const DepartmentProvider = ({ children }) => {
  const [departments, setDepartments] = useState([]);
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || null);

  useEffect(() => {
    if (accessToken) {
      loadAllDepartmentsData();
    }
  }, [accessToken]);

  const loadAllDepartmentsData = async () => {
    try {
      const response = await axios.get('https://backend-ticketing-app-production.up.railway.app/departments/', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 200) {
        setDepartments(response.data.results);
      } else {
        console.error('Error al cargar datos de departamentos:', response.statusText);
      }
    } catch (error) {
      console.error('Error al cargar datos de departamentos:', error);
    }
  };

  const createNewDepartment = async (departmentData) => {
    try {
      const response = await axios.post(
        'https://backend-ticketing-app-production.up.railway.app/departments/',
        departmentData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 201) {
        loadAllDepartmentsData(); // Actualizar la lista de departamentos
        return true;
      } else {
        console.error('Error al crear el departamento:', response.statusText);
        return false;
      }
    } catch (error) {
      console.error('Error al crear el departamento:', error);
      return false;
    }
  };

  const updateDepartment = async (departmentId, departmentData) => {
    try {
      const response = await axios.patch(
        `https://backend-ticketing-app-production.up.railway.app/departments/${departmentId}`,
        departmentData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        loadAllDepartmentsData(); // Actualizar la lista de departamentos
        return true;
      } else {
        console.error('Error al actualizar el departamento:', response.statusText);
        return false;
      }
    } catch (error) {
      console.error('Error al actualizar el departamento:', error);
      return false;
    }
  };

  const deleteDepartment = async (departmentId) => {
    try {
      const response = await axios.delete(`https://backend-ticketing-app-production.up.railway.app/departments/${departmentId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 200) {
        setDepartments(departments.filter((department) => department.id !== departmentId)); // Actualizar la lista de departamentos
        return true;
      } else {
        console.error('Error al eliminar el departamento:', response.statusText);
        return false;
      }
    } catch (error) {
      console.error('Error al eliminar el departamento:', error);
      return false;
    }
  };

  const contextValue = {
    departments,
    createNewDepartment,
    updateDepartment,
    deleteDepartment,
    
  };

  return (
    <DepartmentContext.Provider value={contextValue}>
      {children}
    </DepartmentContext.Provider>
  );
};

export const useDepartmentContext = () => useContext(DepartmentContext);
