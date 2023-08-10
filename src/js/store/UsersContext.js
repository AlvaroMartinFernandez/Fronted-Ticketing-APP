import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || null);

  useEffect(() => {
    if (accessToken) {
      loadAllUsersData();
    }
  }, [accessToken]);

  const loadAllUsersData = async () => {
    try {
      const response = await axios.get('https://backend-ticketing-app-production.up.railway.app/users/', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 200) {
        setUsers(response.data);
      } else {
        console.error('Error al cargar datos de usuarios:', response.statusText);
      }
    } catch (error) {
      console.error('Error al cargar datos de usuarios:', error);
    }
  };

  const createUser = async (userData) => {
    try {
      const response = await axios.post(
        'https://backend-ticketing-app-production.up.railway.app/users/signup',
        {
          name: userData.name,
          email: userData.email,
          role: userData.role,
          department: userData.department,
          password: userData.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        loadAllUsersData(); // Actualizar la lista de usuarios
        return true;
      } else {
        console.error('Error al crear el usuario:', response.statusText);
        return false;
      }
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      return false;
    }
  };

  const updateUserData = async (id, userData) => {
    try {
      const response = await axios.put(
        `https://backend-ticketing-app-production.up.railway.app/users/${id}`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        loadAllUsersData(); // Actualizar la lista de usuarios
        return true;
      } else {
        console.error('Error al actualizar datos del usuario:', response.statusText);
        return false;
      }
    } catch (error) {
      console.error('Error al actualizar datos del usuario:', error);
      return false;
    }
  };

  const deleteUserData = async (id) => {
    try {
      const response = await axios.delete(`https://backend-ticketing-app-production.up.railway.app/users/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 200) {
        setUsers(users.filter((user) => user.id !== id)); // Actualizar la lista de usuarios
        return true;
      } else {
        console.error('Error al eliminar usuario:', response.statusText);
        return false;
      }
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      return false;
    }
  };

  const contextValue = {
    users,
    createUser,
    updateUserData,
    deleteUserData,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
