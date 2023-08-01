import axios from 'axios';

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      users: [],
      tickets: [],
      departments: [],
      accessToken: localStorage.getItem('accessToken') || null,
      isLoggedIn: false,
      name: "",
      password: "",
      email: "",
      user_name: "",
      role: "",
      department: "",
    },

    actions: {

      ////  USERS ////////
      loadAllUsersData: async () => {
        try {
          const response = await axios.get('https://backend-ticketing-app-production.up.railway.app/users/', {
            headers: {
              Authorization: `Bearer ${getStore().accessToken}`,
            },
          });

          if (response.status === 200) {
            // Actualizamos el estado con los usuarios obtenidos de la API
            setStore({ users: response.data });
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
            setStore({ users: [response.data.results] });
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

      //funcion crear nuevo usuario////

      createUser: async (userData) => {
        try {
          const response = await axios.post('https://backend-ticketing-app-production.up.railway.app/users/', userData, {
            headers: {
              Authorization: `Bearer ${getStore().accessToken}`,
              "Content-Type": "application/json",
            },
          });

          if (response.status === 201) {
            // El usuario se creó exitosamente, puedes realizar alguna acción adicional si lo deseas
            // Por ejemplo, recargar la lista de usuarios para que se refleje el nuevo usuario creado.
            getActions().loadAllUsersData();
            return true;
          } else {
            console.error('Error al crear el usuario:', response.statusText);
            return false;
          }
        } catch (error) {
          console.error('Error al crear el usuario:', error);
          return false;
        }
      },

      //////////TICKETS////////////

      loadAllTicketsData: async () => {
        try {
          const response = await axios.get('https://backend-ticketing-app-production.up.railway.app/tickets/', {
            headers: {
              Authorization: `Bearer ${getStore().accessToken}`,
            },
          });

          if (response.status === 200) {
            // Actualizamos el estado con los tickets obtenidos de la API
            setStore({ tickets: response.data });
          } else {
            console.error('Error al cargar datos de tickets:', response.statusText);
          }
        } catch (error) {
          console.error('Error al cargar datos de tickets:', error);
        }
      },

      createNewTicket: async (ticketData) => {
        try {
          const response = await axios.post('https://backend-ticketing-app-production.up.railway.app/tickets/', ticketData, {
            headers: {
              Authorization: `Bearer ${getStore().accessToken}`,
            },
          });

          if (response.status === 201) {
            // El ticket se creó exitosamente, puedes realizar alguna acción adicional si lo deseas
          } else {
            console.error('Error al crear el ticket:', response.statusText);
          }
        } catch (error) {
          console.error('Error al crear el ticket:', error);
        }
      },

      updateTicket: async (ticketId, ticketData) => {
        try {
          const response = await axios.put(`https://backend-ticketing-app-production.up.railway.app/tickets/${ticketId}`, ticketData, {
            headers: {
              Authorization: `Bearer ${getStore().accessToken}`,
            },
          });

          if (response.status === 200) {
            // El ticket se actualizó exitosamente, puedes realizar alguna acción adicional si lo deseas
          } else {
            console.error('Error al actualizar el ticket:', response.statusText);
          }
        } catch (error) {
          console.error('Error al actualizar el ticket:', error);
        }
      },

      deleteTicket: async (ticketId) => {
        try {
          const response = await axios.delete(`https://backend-ticketing-app-production.up.railway.app/tickets/${ticketId}`, {
            headers: {
              Authorization: `Bearer ${getStore().accessToken}`,
            },
          });

          if (response.status === 200) {
            // El ticket se eliminó exitosamente, puedes realizar alguna acción adicional si lo deseas
          } else {
            console.error('Error al eliminar el ticket:', response.statusText);
          }
        } catch (error) {
          console.error('Error al eliminar el ticket:', error);
        }
      },


      ///DEPARTAMENTOS///

      // Función para obtener todos los departamentos
      loadAllDepartmentsData: async () => {
        try {
          const response = await axios.get('https://backend-ticketing-app-production.up.railway.app/departments/', {
            headers: {
              Authorization: `Bearer ${getStore().accessToken}`,
            },
          });

          if (response.status === 200) {
            // Actualizamos el estado con los departamentos obtenidos de la API
            setStore({ departments: response.data.results });
          } else {
            console.error('Error al cargar datos de departamentos:', response.statusText);
          }
        } catch (error) {
          console.error('Error al cargar datos de departamentos:', error);
        }
      },

      // Función para crear un nuevo departamento
      createNewDepartment: async (departmentData) => {
        try {
          const response = await axios.post('https://backend-ticketing-app-production.up.railway.app/departments/', departmentData, {
            headers: {
              Authorization: `Bearer ${getStore().accessToken}`,
            },
          });

          if (response.status === 201) {
            // El departamento se creó exitosamente, puedes realizar alguna acción adicional si lo deseas
            // Por ejemplo, recargar la lista de departamentos para que se refleje el nuevo departamento creado.
            getActions().loadAllDepartmentsData();
            return true;
          } else {
            console.error('Error al crear el departamento:', response.statusText);
            return false;
          }
        } catch (error) {
          console.error('Error al crear el departamento:', error);
          return false;
        }
      },

      // Función para actualizar un departamento por su ID
      updateDepartment: async (departmentId, departmentData) => {
        try {
          const response = await axios.patch(`https://backend-ticketing-app-production.up.railway.app/departments/${departmentId}`, departmentData, {
            headers: {
              Authorization: `Bearer ${getStore().accessToken}`,
            },
          });

          if (response.status === 200) {
            // El departamento se actualizó exitosamente, puedes realizar alguna acción adicional si lo deseas
            return true;
          } else {
            console.error('Error al actualizar el departamento:', response.statusText);
            return false;
          }
        } catch (error) {
          console.error('Error al actualizar el departamento:', error);
          return false;
        }
      },

      // Función para eliminar un departamento por su ID
      deleteDepartment: async (departmentId) => {
        try {
          const response = await axios.delete(`https://backend-ticketing-app-production.up.railway.app/departments/${departmentId}`, {
            headers: {
              Authorization: `Bearer ${getStore().accessToken}`,
            },
          });

          if (response.status === 200) {
            // El departamento se eliminó exitosamente, puedes realizar alguna acción adicional si lo deseas
            return true;
          } else {
            console.error('Error al eliminar el departamento:', response.statusText);
            return false;
          }
        } catch (error) {
          console.error('Error al eliminar el departamento:', error);
          return false;
        }
      },





      // Función para iniciar sesión y almacenar el token en el estado y en el localStorage
      login: async (email, password) => {
        try {
          // Hacemos una solicitud POST a la API para iniciar sesión y obtener el token
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
            // Almacenamos el token en el estado
            setStore({ accessToken: response.data.access_token, isLoggedIn: true });
            // Almacenamos el token en el localStorage para que persista en futuras sesiones
            localStorage.setItem('accessToken', response.data.access_token);
            // Actualizamos los datos del usuario en el estado
            setStore({
              name: response.data.name,
              email: response.data.email,
              //user_name: response.data.user_name,
              //role: response.data.role,
              password: response.data.password,

            });

            console.log("Token de autenticación:", response.data.access_token);
            return true; // Devolvemos true si el inicio de sesión fue exitoso
          } else {
            return false; // Devolvemos false si el inicio de sesión falló
          }
        } catch (error) {
          console.error('Error al iniciar sesión:', error);
          return false;
        }
      },
      signup: async (firstName, lastName, email, password) => {
        try {
          // Hacer una solicitud POST al backend para registrar al nuevo usuario
          const response = await axios.post(
            'https://backend-ticketing-app-production.up.railway.app/users/signup',
            {
              firstName: firstName,
              lastName: lastName,
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
            // Registro exitoso, puedes realizar alguna acción adicional si es necesario
            return true;
          } else {
            // Registro fallido, puedes manejar errores específicos aquí si lo deseas
            return false;
          }
        } catch (error) {
          // Manejo de errores de solicitud
          console.error('Error al registrarse:', error);
          return false;
        }
      },

      // Función para recuperar la contraseña del usuario
      recoverPassword: async (email) => {
        try {
          const response = await axios.post(
            'https://backend-ticketing-app-production.up.railway.app/users/recoverpassword',
            {
              email: email,
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );

          if (response.status === 200) {
            // Realiza las acciones necesarias si la recuperación de contraseña fue exitosa
            return true;
          } else {
            // Realiza las acciones necesarias si la recuperación de contraseña falló
            return false;
          }
        } catch (error) {
          console.error('Error al recuperar la contraseña:', error);
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