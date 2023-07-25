import axios from 'axios';

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      users: [],
      tickets: [],
      accessToken: localStorage.getItem('accessToken') || null,
      isLoggedIn: false,
      // Propiedades para almacenar los datos del usuario
      name: "",
      password: "",
      email: "",
      user_name: "",
      //role: "", 
    },
    actions: {
      loadAllUsersData: async () => {
        try {
          const response = await axios.get('https://backend-ticketing-app-production.up.railway.app/users/', {
            headers: {
              Authorization: `Bearer ${getStore().accessToken}`,
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

      loadUserData: async (id) => {
        try {
          const response = await axios.get(`https://backend-ticketing-app-production.up.railway.app/users/${id}`, {
            headers: {
              Authorization: `Bearer ${getStore().accessToken}`,
            },
          });

          if (response.status === 200) {
            // Actualizamos el estado con los datos del usuario obtenidos de la API
            setStore({ users: [response.data] });
          } else {
            console.error('Error al cargar datos del usuario:', response.statusText);
          }
        } catch (error) {
          console.error('Error al cargar datos del usuario:', error);
        }
      },

      // Función para actualizar datos de un usuario por su ID
      updateUserData: async (id, userData) => {
        try {
          const response = await axios.put(`https://backend-ticketing-app-production.up.railway.app/users/${id}`, userData, {
            headers: {
              Authorization: `Bearer ${getStore().accessToken}`,
            },
          });

          if (response.status === 200) {
            // Actualizamos el estado con los datos actualizados del usuario obtenidos de la API
            setStore({ users: [response.data] });
            return true;
          } else {
            console.error('Error al actualizar datos del usuario:', response.statusText);
            return false;
          }
        } catch (error) {
          console.error('Error al actualizar datos del usuario:', error);
          return false;
        }
      },

      // Función para eliminar un usuario por su ID
      deleteUserData: async (id) => {
        try {
          const response = await axios.delete(`https://backend-ticketing-app-production.up.railway.app/users/${id}`, {
            headers: {
              Authorization: `Bearer ${getStore().accessToken}`,
            },
          });

          if (response.status === 200) {
            // Actualizamos el estado eliminando el usuario del array de usuarios
            setStore({ users: getStore().users.filter((user) => user.id !== id) });
            return true;
          } else {
            console.error('Error al eliminar usuario:', response.statusText);
            return false;
          }
        } catch (error) {
          console.error('Error al eliminar usuario:', error);
          return false;
        }
      },

      // Función para iniciar sesión y almacenar el token en el estado y en el localStorage
      login: async (email, password) => {
        try {
          // Hacemos una solicitud POST a la API para iniciar sesión y obtener el token
          const response = await axios.post(
            'https://backend-ticketing-app-production.up.railway.app/users/login/',
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
            // Actualizamos los datos del usuario en el estado
            setStore({
              name: response.data.name,
              email: response.data.email,
              user_name: response.data.user_name,
              role: response.data.role,
              
            });
            return true; // Devolvemos true si el inicio de sesión fue exitoso
          } else {
            return false; // Devolvemos false si el inicio de sesión falló
          }
        } catch (error) {
          console.error('Error al iniciar sesión:', error);
          return false;
        }
      },

      // Función para cerrar sesión y eliminar el token del estado y del localStorage
      logout: async () => {
        try {
          // Hacemos una solicitud POST a la API para cerrar sesión
          const response = await axios.post(
            'https://backend-ticketing-app-production.up.railway.app/users/logout/',
            {},
            {
              headers: {
                Authorization: `Bearer ${getStore().accessToken}`,
                'Content-Type': 'application/json',
              },
            }
          );

          if (response.status === 200) {
            // Eliminamos el token del estado y del localStorage
            setStore({ accessToken: null, isLoggedIn: false });
            localStorage.removeItem('accessToken');
            // Restablecemos los datos del usuario en el estado
            setStore({
              name: "",
              email: "",
              user_name: "",
              role: "",
              
            });
            return true; // Devolvemos true si el cierre de sesión fue exitoso
          } else {
            return false; // Devolvemos false si el cierre de sesión falló
          }
        } catch (error) {
          console.error('Error al cerrar sesión:', error);
          return false;
        }
      },

    },
  };
};

export default getState;
