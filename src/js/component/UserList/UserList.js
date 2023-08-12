import React, { useMemo, useState, useEffect, useContext } from 'react';
import { Context } from "../../store/appContext.js";
import axios from 'axios';
import { useTable, useGlobalFilter, useFilters, useSortBy } from 'react-table';
import { FaSort, FaSortUp, FaSortDown, FaPlus } from 'react-icons/fa';
import styles from './UserList.module.css';


const SelectColumnFilter = ({
  column: { filterValue, setFilter, preFilteredRows, id },
}) => {
  const options = useMemo(() => {
    const allDepartments = new Set();
    preFilteredRows.forEach(row => {
      row.values[id].split(', ').forEach(dep => allDepartments.add(dep));
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
      {options.map((dep, index) => (
        <option key={index} value={dep}>
          {dep}
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

const UserList = ({ users, createUser }) => {
  const { store, actions } = useContext(Context);
  const data = useMemo(() => users, [users]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUserData, setNewUserData] = useState({
    name: '',
    email: '',
    role: 'directivo',
    department: '',
  });
  const [departments, setDepartments] = useState([]);


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
        Header: 'Fecha de Creación',
        accessor: 'createdAt',
        canFilter: true,
        sortType: 'basic',
        Cell: ({ value }) => {
          const formattedDate = new Date(value).toLocaleString();
          return <span>{formattedDate}</span>;
        },
      },

      {
        Header: 'Tickets',
        accessor: 'tickets.length',
        canFilter: true,
        sortType: 'basic',
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
    const success = await createUser(newUserData);
    if (success) {
      toggleModal();
    }
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
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className={styles.userRow}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

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
                  <option value="directivo">Directivo</option>
                  <option value="administrador">Administrador</option>
                  <option value="empleado">Empleado</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Contraseña:</label>
                <input type="password" name="password" value={newUserData.password} onChange={handleChange} />
              </div>
              <div className={styles.formGroup}>
                <label>Departamento:</label>
                <select name="department" value={newUserData.department} onChange={handleChange}>
                  {departments.map(department => (
                    <option key={department.id} value={department.id}>
                      {department.name}
                    </option>
                  ))}
                </select>
              </div>
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
    </div>
  );
};

export default UserList;