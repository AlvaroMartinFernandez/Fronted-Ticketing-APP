import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    user_name: '',
    role: '',
  });

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        'https://backend-ticketing-app-production.up.railway.app/users/login',
        {
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        const { access_token, name, email, user_name, role } = response.data;
        setAccessToken(access_token);
        setIsLoggedIn(true);
        setUserData({ name, email, user_name, role });
        localStorage.setItem('accessToken', access_token);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      return false;
    }
  };

  const logout = async () => {
    try {
      const response = await axios.post(
        'https://backend-ticketing-app-production.up.railway.app/users/logout/',
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        setAccessToken(null);
        setIsLoggedIn(false);
        setUserData({
          name: '',
          email: '',
          user_name: '',
          role: '',
        });
        localStorage.removeItem('accessToken');
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ accessToken, isLoggedIn, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
