import React, { useMemo, useState, useContext } from 'react';
import { Context } from "../../store/appContext.js";
import axios from 'axios';
import { useTable, useGlobalFilter, useFilters, useSortBy } from 'react-table';
import { FaSort, FaSortUp, FaSortDown, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './DepartmentList.module.css';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Asegúrate de importar también los estilos




const DepartmentList = ({ departments, createDepartment }) => {
  const { store, actions } = useContext(Context);
  const data = useMemo(() => departments, [departments]);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [isDepartmentModalOpen, setIsDepartmentModalOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [editedDepartmentData, setEditedDepartmentData] = useState({
    name_department: '',
    email: '',
    host_email: '',
    port_email: 0,
    password_email: '',
    port_smtp: 0,
    smtp_server: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDepartmentData, setNewDepartmentData] = useState({
    name_department: '',
    email: '',
    host_email: '',
    port_email: 0,
    password_email: '',
    port_smtp: 0,
    smtp_server: ""

  });

  const toggleDepartmentModal = () => {
    setIsDepartmentModalOpen(!isDepartmentModalOpen);
    setEditModalOpen(!editModalOpen)
  };


  // Función para manejar los cambios en el formulario de edición
  const handleEditDepartmentChange = (e) => {
    const { name, value } = e.target;
    setEditedDepartmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleEditClick = (departmentId) => {
    const DepartmentToEdit = store.departments.find(department => department.id === departmentId);
    delete DepartmentToEdit.createdAt;
    delete DepartmentToEdit.updatedAt;
    delete DepartmentToEdit.tickets;
    delete DepartmentToEdit.users;
    delete DepartmentToEdit.id;
    DepartmentToEdit.host_email = '';
    DepartmentToEdit.port_email = 0;
    DepartmentToEdit.port_smtp = 0;
    DepartmentToEdit.smtp_server = '';

    setSelectedDepartment(departmentId);
    setEditModalOpen(true);
    setEditedDepartmentData(DepartmentToEdit);

  };

  // Función para actualizar el departamento
  const handleUpdateDepartment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://backend-ticketing-app-production.up.railway.app/departments/${selectedDepartment}`,
        editedDepartmentData,
        {
          headers: {
            method: 'PUT',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${store.accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        // Actualización exitosa, cierra el modal de edición de departamento y reinicia los valores
        setEditModalOpen(!editModalOpen);
        setSelectedDepartment(null);
        setEditedDepartmentData({
          name_department: '',
          email: '',
          host_email: '',
          port_email: 0,
          password_email: '',
          port_smtp: 0,
          smtp_server: '',
        });
        actions.loadAllDepartmentsData()
      } else {
        console.error('Error al actualizar el departamento:', response.statusText);
      }
    } catch (error) {
      console.error('Error al actualizar el departamento:', error);
    }
  };

  const deleteDepartmentData = async (departmentId) => {
    try {
      const response = await axios.delete(`https://backend-ticketing-app-production.up.railway.app/departments/${departmentId}`, {
        headers: {
          Authorization: `Bearer ${store.accessToken}`,
        },
      });

      if (response.status === 200) {
        // Actualizamos el estado eliminando el usuario del array de usuarios
        actions.loadAllDepartmentsData(); // Actualiza la lista de usuarios
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


  // Función para eliminar un departamento por su ID
  const handleDeleteDepartment = async (departmentId) => {
    confirmAlert({
      title: 'Confirmar eliminación',
      message: '¿Estás seguro de querer eliminar a este departamento?',
      buttons: [
        {
          label: 'Sí',
          onClick: async () => {
            const success = await deleteDepartmentData(departmentId);
            if (success) {
              toast.success('Departamento eliminado exitosamente.', {
                autoClose: 2000, // Cambia este valor según tus preferencias
              });
            } else {
              toast.error('Error al eliminar departamento.')
            }
          },
        },
        {
          label: 'No',
          onClick: () => { /* No hacer nada si se selecciona "No" */ },
        },
      ],
    });
  };

  const showToast = () => {
    toast.error('Esta acción es irreversible', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }


  const columns = useMemo(
    () => {
      const columns = [
        {
          Header: 'ID',
          accessor: 'id', // Agregar columna para mostrar el ID del departamento
          canFilter: true,
          sortType: 'basic',
        },
        {
          Header: 'Nombre',
          accessor: 'name_department',
          canFilter: true,
          sortType: 'basic',
        },
        {
          Header: 'Correo',
          accessor: 'email',
          canFilter: true,
          sortType: 'basic',
        },
        {
          Header: 'Usuarios',
          accessor: 'users',
          canFilter: true,
          sortType: 'basic',
          Cell: ({ cell }) => (
            <div className='Row d-flex flex-wrap'>
              {cell.value.length > 0 && Array.isArray(cell.value) ? (
                cell.value.map((user, index) => (
                  <div className='col-4' key={index}>
                    <span>{user.name}</span>
                  </div>
                ))
              ) : (
                <span>No hay usuarios</span>
              )
              }

            </div>
          ),
        },

        {
          Header: 'Tickets',
          accessor: 'tickets', // Utiliza la propiedad tickets para mostrar los tickets
          canFilter: false,
          sortType: 'none', // No permite ordenar esta columna
          Cell: ({ cell }) => (
            <div className={styles.ticketContainer}>
              <div className='Row d-flex flex-wrap'>
                {cell.value.length > 0 && Array.isArray(cell.value) ? (cell.value.map(ticket => (
                  <div className="col-3">
                    <Link key={ticket.id} to={`/TicketDetailView/${ticket.id}`} className={styles.ticketLink}>
                      <div className={styles.ticketCard}>
                        <span className={styles.ticketTitle}>Ticket {ticket.id}</span>
                        {/* Opcional: Mostrar más información del ticket aquí */}
                      </div>
                    </Link>
                  </div>
                ))) : (
                  <span>No hay Tickets</span>
                )}
              </div>
            </div>
          )
        },
      ];
      if (store.role === 'Admin') {
        columns.push({
          Header: 'Acciones',
          accessor: 'actions',
          Cell: ({ row }) => (
            <div>

              <button
                className={styles.editButton}
                onClick={() => handleEditClick(row.original.id)}
              >
                <FaEdit className={styles.actionsIcon} /> Editar
              </button>
              <button className={styles.deleteButton} onClick={() => { showToast(); handleDeleteDepartment(row.original.id); }}>
                <FaTrashAlt className={styles.actionsIcon} /> Eliminar
              </button>
            </div>
          ),
        },
        )
      }
      console.log(store.role)
      return columns;
    },

    [store.departments]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data: store.departments,
      initialState: {
        hiddenColumns: ['id'],
      },
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  const { globalFilter } = state;

  // Función para abrir y cerrar el modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Función para manejar los cambios en el formulario del modal
  const handleChange = e => {
    const { name, value } = e.target;
    setNewDepartmentData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleEditChange = e => {
    const { name, value } = e.target;
    setEditedDepartmentData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
  // Función para manejar el envío del formulario del modal
  const handleCreateDepartment = async e => {
    e.preventDefault();
    const success = await actions.createNewDepartment(newDepartmentData);
    if (success) {
      toggleModal(); // Cerrar el modal después de crear el departamento exitosamente
    }
  };



  return (
    <div className={styles.container}>
      <h2>Lista de Departamentos</h2>
      <div className={styles.searchContainer}>
        <i className={`fa fa-search ${styles.searchIcon}`} aria-hidden="true"></i>
        <input
          type="text"
          value={globalFilter || ''}
          onChange={e => setGlobalFilter(e.target.value)}
          placeholder="Buscar departamentos..."
          className={styles.searchInput}
        />
      </div>

      <table {...getTableProps()} className={styles.departmentTable}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <FaSortDown className={`${styles.sortIndicator} ${styles.sortDesc}`} />
                    ) : (
                      <FaSortUp className={`${styles.sortIndicator} ${styles.sortAsc}`} />
                    )
                  ) : (
                    <FaSort className={styles.sortIndicator} />
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className={styles.departmentRow}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>



      {store.role === 'Admin' ? (
        <button className={styles.addButton} onClick={toggleModal}>
          <FaPlus className={styles.addIcon} /> Crear Departamento
        </button>
      ) : (<></>)}

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Nuevo Departamento</h2>
            <form onSubmit={handleCreateDepartment}>

              <div className={styles.formGroup}>
                <label>Nombre Departamento:</label>
                <input
                  type='text'
                  name="name_department"
                  value={newDepartmentData.name_department}
                  onChange={handleChange}
                />

              </div>

              <div className={styles.formGroup}>
                <label>Correo:</label>
                <input
                  type="email"
                  name="email"
                  value={newDepartmentData.email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Host IMAP:</label>
                <input
                  type="text"
                  name="host_email"
                  value={newDepartmentData.host_email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Puerto IMAP:</label>
                <input
                  type="number"
                  name="port_email"
                  value={newDepartmentData.port_email}
                  onChange={handleChange}
                />
                <div className={styles.formGroup}>
                  <label>Port SMTP:</label>
                  <input
                    type="number"
                    name="port_smtp"
                    value={newDepartmentData.port_smtp}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>SMTP host:</label>
                  <input
                    type="text"
                    name="smtp_server"
                    value={newDepartmentData.smtp_server}
                    onChange={handleChange}
                  />
                </div>


              </div>
              <div className={styles.formGroup}>
                <label>Contraseña del Correo:</label>
                <input
                  type="password"
                  name="password_email"
                  value={newDepartmentData.password_email}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Crear
              </button>
            </form>
            <button className={styles.closeButton} onClick={toggleModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}



      {/* Modal de edición de departamento */}
      {editModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Editar Departamento</h2>
            <form onSubmit={handleUpdateDepartment}>
              <div className={styles.formGroup}>
                <label>Nombre Departamento:</label>
                <input
                  type='text'
                  name="name_department"
                  value={editedDepartmentData.name_department}
                  onChange={handleEditChange}
                />

              </div>

              <div className={styles.formGroup}>
                <label>Correo:</label>
                <input
                  type="email"
                  name="email"
                  value={editedDepartmentData.email}
                  onChange={handleEditChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Host IMAP:</label>
                <input
                  type="text"
                  name="host_email"
                  value={editedDepartmentData.host_email}
                  onChange={handleEditChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Puerto IMAP:</label>
                <input
                  type="number"
                  name="port_email"
                  value={editedDepartmentData.port_email}
                  onChange={handleEditChange}
                />
                <div className={styles.formGroup}>
                  <label>Port SMTP:</label>
                  <input
                    type="number"
                    name="port_smtp"
                    value={editedDepartmentData.port_smtp}
                    onChange={handleEditChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>SMTP host:</label>
                  <input
                    type="text"
                    name="smtp_server"
                    value={editedDepartmentData.smtp_server}
                    onChange={handleEditChange}
                  />
                </div>


              </div>
              <div className={styles.formGroup}>
                <label>Contraseña del Correo:</label>
                <input
                  type="password"
                  name="password_email"
                  value={editedDepartmentData.password_email}
                  onChange={handleEditChange}
                />
              </div>
              {/* Renderiza los campos del formulario de edición de departamento aquí */}
              <button type="submit" className={styles.submitButton}>
                Guardar Cambios
              </button>
            </form>
            <button className={styles.closeButton} onClick={toggleDepartmentModal}>
              Cancelar
            </button>
          </div>
        </div>
      )}
      <ToastContainer />

    </div>
  );
};

export default DepartmentList;