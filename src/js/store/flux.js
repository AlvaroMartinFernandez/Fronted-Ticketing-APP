import axios from 'axios';

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      users: [],
      tickets: [],
      accessToken: localStorage.getItem('accessToken') || null, // Estado para almacenar el token de autenticación
      isLoggedIn: false, // Estado para verificar si el usuario está autenticado
    },
    actions: {
      loadAllUsersData: async () => {
        try {
          const response = await axios.get('https://backend-ticketing-app-production.up.railway.app/users/', {
            headers: {
              Authorization: `Bearer ${getStore().accessToken}`, // Agregamos el token de autenticación al encabezado
            },
          });

          if (response.status === 200) {
            // Actualizamos el estado con los usuarios obtenidos de la API
            setStore({ users: response.data.results });
          } else {
            console.error('Error al cargar datos de usuarios:', response.statusText);
          }
        } catch (error) {
          console.error('Error al cargar datos de usuarios:', error);
        }
      },

      // Acción para iniciar sesión y almacenar el token en el estado y en el localStorage
      login: async (email, password) => {
        try {
          // Hacemos una solicitud POST a la API para iniciar sesión y obtener el token
          const response = await axios.post(
            'https://backend-ticketing-app-production.up.railway.app/api/login/',
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
            // Almacenamos el token en el estado
            setStore({ accessToken: response.data.access_token, isLoggedIn: true });
            // Almacenamos el token en el localStorage para que persista en futuras sesiones
            localStorage.setItem('accessToken', response.data.access_token);
            return true; // Devolvemos true si el inicio de sesión fue exitoso
          } else {
            return false; // Devolvemos false si el inicio de sesión falló
          }
        } catch (error) {
          console.error('Error al iniciar sesión:', error);
          return false;
        }
      },

      // Acción para cerrar sesión y eliminar el token del estado y del localStorage
      logout: () => {
        // Eliminamos el token del estado y del localStorage
        setStore({ accessToken: null, isLoggedIn: false });
        localStorage.removeItem('accessToken');
      },

      // Acción para validar el token almacenado en el estado y en el localStorage
      validateToken: async () => {
        try {
          if (getStore().accessToken) {
            const response = await axios.get('https://backend-ticketing-app-production.up.railway.app/api/validate-token', {
              headers: {
                Authorization: `Bearer ${getStore().accessToken}`, // Agregamos el token de autenticación al encabezado
              },
            });

            if (response.status === 200) {
              // El token es válido, actualizamos el estado para indicar que el usuario está autenticado
              setStore({ isLoggedIn: true });
            } else {
              // El token no es válido, cerramos sesión
              setStore({ accessToken: null, isLoggedIn: false });
              localStorage.removeItem('accessToken');
            }
          }
        } catch (error) {
          console.error('Error al validar el token:', error);
        }
      },

      // Acción para cargar datos de usuarios utilizando el token de autenticación
      loadUsersData: async () => {
        
      },

      // Acción para cargar datos de tickets utilizando el token de autenticación
      loadTicketsData: async () => {
      
      },

      // Acción para registrarse y almacenar el token en el estado y en el localStorage
      signup: async (email, password) => {
        try {
          const response = await axios.post(
            'https://backend-ticketing-app-production.up.railway.app/api/signup/',
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
            // Almacenamos el token en el estado
            setStore({ accessToken: response.data.access_token, isLoggedIn: true });
            // Almacenamos el token en el localStorage para que persista en futuras sesiones
            localStorage.setItem('accessToken', response.data.access_token);
            return true; // Devolvemos true si el registro fue exitoso
          } else {
            return false; // Devolvemos false si el registro falló
          }
        } catch (error) {
          console.error('Error al registrar el usuario:', error);
          return false;
        }
      },
    },
  };
};

export default getState;
