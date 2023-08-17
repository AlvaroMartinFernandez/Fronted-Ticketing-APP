import React, { useMemo, useState, useEffect, useContext } from 'react';
import { Context } from "../../store/appContext.js";
import axios from 'axios';
import { useTable, useGlobalFilter, useFilters, useSortBy } from 'react-table';
import { FaSort, FaSortUp, FaSortDown, FaPlus } from 'react-icons/fa';
import styles from './UserList.module.css';
import { FaEdit } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import EditUserModal from '../EditUserModal/EditUserModal.js';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';




const UserList = ({ users, createUser }) => {
  const { store, actions } = useContext(Context);
  const data = useMemo(() => users, [users]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [userToEdit, setUserToEdit] = useState({
    name: '',
    email: '',
    role: '',
    department: '',
    password: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUserData, setNewUserData] = useState({
    name: '',
    email: '',
    role: '',
    department: '',
    password: '',
  });

  const [departments, setDepartments] = useState([])
 
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 10; // Definir la cantidad de elementos por página

  

  const updateUserData = async (userId, userData) => {
    try {
      const response = await axios.put(
        `https://backend-ticketing-app-production.up.railway.app/users/${userId}`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${store.accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        actions.loadAllUsersData(); // Actualiza la lista de usuarios
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

  const deleteUserData = async (userId) => {
    try {
      const response = await axios.delete(`https://backend-ticketing-app-production.up.railway.app/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${store.accessToken}`,
        },
      });

      if (response.status === 200) {
        // Actualizamos el estado eliminando el usuario del array de usuarios
        actions.loadAllUsersData(); // Actualiza la lista de usuarios
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



  const handleEditUser = (userId) => {
    const userToEdit = store.users.find(user => user.id === userId);
    setShowEditModal(true);
    setUserToEdit(userToEdit); // Asegúrate de estar configurando correctamente el usuario a editar
  };

  const handleSaveEdit = async (updatedUserData) => {
    if (!userToEdit) {
      console.error('No se encontró el usuario a editar.');
      return;
    }

    const success = await updateUserData(userToEdit.id, updatedUserData);
    if (success) {
      setShowEditModal(false);
    }
  };

  const handleCancelEdit = () => {
    setShowEditModal(false);
  };

  const handleDeleteUser = async (userId) => {
    // Mostrar una alerta de confirmación antes de eliminar al usuario
    const confirmDelete = window.confirm('¿Seguro que quieres eliminar a este usuario?');

    if (confirmDelete) {
      const success = await deleteUserData(userId);
      if (success) {
        console.log('Usuario eliminado exitosamente:', userId);
      } else {
        console.log('Error al eliminar usuario:', userId);
      }
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setNewUserData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateUser = async e => {
    e.preventDefault();
    console.log(newUserData)
    const success = await actions.createUser(newUserData);
    if (success) {
      toggleModal();
    }
  };

  const SelectDepartmentFilter = ({
    column: { filterValue, setFilter, preFilteredRows, id },
  }) => {
    const options = useMemo(() => {
      const allDepartments = new Set();
      preFilteredRows.forEach(row => {
        allDepartments.add(row.values[id]);
      });
      return [...allDepartments.values()];
    }, [id, preFilteredRows]);
  
    return (
      <select
        value={filterValue}
        onChange={e => {
          setFilter(e.target.value || undefined);
        }}
      >
        <option value="">Todos</option>
        {options.map((department, index) => (
          <option key={index} value={department}>
            {department}
          </option>
        ))}
      </select>
    );
  };
  
  
  const SelectRoleFilter = ({
    column: { filterValue, setFilter, preFilteredRows, id },
  }) => {
    const options = useMemo(() => {
      const allRoles = new Set();
      preFilteredRows.forEach(row => {
        allRoles.add(row.values[id]);
      });
      return [...allRoles.values()];
    }, [id, preFilteredRows]);
  
    return (
      <select
        value={filterValue}
        onChange={e => {
          setFilter(e.target.value || undefined);
        }}
      >
        <option value="">Todos</option>
        {options.map((role, index) => (
          <option key={index} value={role}>
            {role}
          </option>
        ))}
      </select>
    );
  };


  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
        canFilter: true,
        sortType: 'basic',
      },
      {
        Header: 'Nombre',
        accessor: 'name',
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
        Header: 'Rol',
        accessor: 'role',
        Filter: SelectRoleFilter,
        canFilter: true,
        sortType: 'basic',
      },
      {
        Header: 'Departamento',
        accessor: 'department.name_department', // Asegúrate de usar el nombre correcto de la propiedad
        Filter: SelectDepartmentFilter, // Utiliza el mismo componente de filtro para departamentos
        canFilter: true,
        sortType: 'basic',
      },


      {
        Header: 'Tickets',
        accessor: 'tickets.length',
        canFilter: true,
        sortType: 'basic',
        Cell: ({ row }) => {
          const userId = row.original.id;
          const ticketsCount = row.values['tickets.length'];

          return (
            <Link to={`/TicketDetailView/${userId}`}>
              Ver Tickets ({ticketsCount})
            </Link>
          );
        },
      },


      {
        Header: 'Acciones',
        accessor: 'actions', // Utilizamos 'id' aquí como accessor
        Cell: ({ row }) => (


          <div>
            <button className={styles.editButton} onClick={() => handleEditUser(row.original.id)}>
              <FaEdit className={styles.actionsIcon} /> Editar
            </button>
            <button className={styles.deleteButton} onClick={() => handleDeleteUser(row.original.id)}>
              <FaTrashAlt className={styles.actionsIcon} /> Eliminar
            </button>

          </div>
        ),
      },


    ],
    [departments]
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
      data: store.users,
      initialState: {
        hiddenColumns: ['id'],
      },
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  const { globalFilter } = state;

  const pageCount = Math.ceil(rows.length / itemsPerPage);

  const offset = currentPage * itemsPerPage;
  const paginatedRows = rows.slice(offset, offset + itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };




  return (
    <div className={styles.container}>
      <h2>Lista de Usuarios</h2>
      <div className={styles.searchContainer}>
        <i className={`fa fa-search ${styles.searchIcon}`} aria-hidden="true"></i>
        <input
          type="text"
          value={globalFilter || ''}
          onChange={e => setGlobalFilter(e.target.value)}
          placeholder="Buscar usuarios..."
          className={styles.searchInput}
        />
      </div>

      <table {...getTableProps()} className={styles.userTable}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <FaSortDown className={`${styles.sortIndicator} ${styles.sortDesc}`} />
                    ) : (
                      <FaSortUp className={`${styles.sortIndicator} ${styles.sortAsc}`} />
                    )
                  ) : (
                    <FaSort className={styles.sortIndicator} />
                  )}
                  <strong>{column.render('Header')}</strong>
                  {/* Mostrar el filtro solo para las columnas con "Filter" definido */}
                  {column.Filter ? (
                    <div className={styles.filter}>
                      <column.Filter column={column} />
                    </div>
                  ) : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {paginatedRows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className={styles.userRow}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>
                      {cell.column.id === 'actions' ? (
                        <div>
                          {/* Botón de editar */}
                          <button className={styles.editButton} onClick={() => handleEditUser(row.original.id)}>
                            <FaEdit className={styles.actionsIcon} /> Editar
                          </button>
                          {/* Botón de eliminar */}
                          <button className={styles.deleteButton} onClick={() => handleDeleteUser(row.original.id)}>
                            <FaTrashAlt className={styles.actionsIcon} /> Eliminar
                          </button>
                        </div>
                      ) : (
                        cell.render('Cell')
                      )}
                    </td>

                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {showEditModal && (
        <EditUserModal user={userToEdit} onSave={handleSaveEdit} onCancel={handleCancelEdit} />
      )}

      <button onClick={toggleModal} className={styles.addButton}>
        <FaPlus />
        Agregar Usuario
      </button>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Nuevo Usuario</h2>
            <form onSubmit={handleCreateUser}>
              <div className={styles.formGroup}>
                <label>Nombre:</label>
                <input type="text" name="name" value={newUserData.name} onChange={handleChange} />
              </div>
              <div className={styles.formGroup}>
                <label>Correo:</label>
                <input type="email" name="email" value={newUserData.email} onChange={handleChange} />
              </div>
              <div className={styles.formGroup}>
                <label>Rol:</label>
                <select name="role" value={newUserData.role} onChange={handleChange}>
                  <option value="">Seleccionar rol</option>
                  <option value="Director">Directivo</option>
                  <option value="Admin">Administrador</option>
                  <option value="Employee">Empleado</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Contraseña:</label>
                <input type="password" name="password" value={newUserData.password} onChange={handleChange} />
              </div>
              {<div className={styles.formGroup}>
                <label>Departamento:</label>
                <select name="department" value={newUserData.department} onChange={handleChange}>
                  <option value="">Seleccionar departamento</option>
                  {store.departments.map(department => (
                    <option key={department.id} value={department.id}>
                      {department.name_department}
                    </option>
                  ))}
                </select>

              </div>}
              <div className={styles.modalButtons}>
                <button type="submit">Guardar</button>
                <button type="button" onClick={toggleModal} className={styles.cancelButton}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
       <div className={styles['pagination-container']}>
       <ReactPaginate
        previousLabel={'←'}
        nextLabel={'→'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
      </div>
    </div>
  );
};

export default UserList;