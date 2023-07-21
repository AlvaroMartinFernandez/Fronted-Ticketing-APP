// getState.js

const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		demo: [
		  {
			title: "FIRST",
			background: "white",
			initial: "white"
		  },
		  {
			title: "SECOND",
			background: "white",
			initial: "white"
		  }
		],
		users: [] // Agregamos un array para almacenar los datos de los usuarios
	  },
	  actions: {
		// Resto de acciones...
  
		// Agregar la acción para cargar datos de usuarios utilizando fetch
		loadUsersData: () => {
		  fetch('https://randomuser.me/api/?results=50')
			.then(response => response.json())
			.then(data => {
			  // Una vez que obtengamos los datos, actualizamos el estado con los usuarios
			  setStore({ users: data.results });
			})
			.catch(error => {
			  console.error('Error fetching users:', error);
			});
		}
	  }
	};
  };
  
  export default getState;
  