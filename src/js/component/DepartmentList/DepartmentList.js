import React, { useMemo, useState, useContext } from 'react';
import { Context } from "../../store/appContext.js";
import { useTable, useGlobalFilter, useFilters, useSortBy } from 'react-table';
import { FaSort, FaSortUp, FaSortDown, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './DepartmentList.module.css';

const DepartmentList = ({ departments, createDepartment }) => {
  const { store, actions } = useContext(Context);
  console.log(departments)
  const data = useMemo(() => departments, [departments]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDepartmentData, setNewDepartmentData] = useState({
    name_department: '',
    email: '',
    host_email: '',
    port_email: 0,
    password_email: '',
    client_id: 1,
  });

  const columns = useMemo(
    () => [
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
        Header: 'Correo del Host',
        accessor: 'host_email',
        canFilter: true,
        sortType: 'basic',
      },
      {
        Header: 'Puerto del Correo',
        accessor: 'port_email',
        canFilter: true,
        sortType: 'basic',
      },
      {
        Header: 'Contraseña del Correo',
        accessor: 'password_email',
        canFilter: true,
        sortType: 'basic',
      },
      {
        Header: 'Cliente ID',
        accessor: 'client_id',
        canFilter: true,
        sortType: 'basic',
      },
      {
        Header: 'Tickets',
        accessor: 'tickets', // Utiliza la propiedad tickets para mostrar los tickets
        canFilter: false,
        sortType: 'none', // No permite ordenar esta columna
        Cell: ({ cell }) => (
          <div>
            {cell.value.map(ticket => (
              <div key={ticket.id}>
                <Link to={`/TicketDetailView/${ticket.id}`} className={styles.ticketLink}>
                  Ticket {ticket.id}
                </Link>
              </div>
            ))}
          </div>
        ),
      },
      {
        Header: 'Fecha de Creación',
        accessor: 'createdAt', // Agregar columna para mostrar la fecha de creación del departamento
        canFilter: true,
        sortType: 'basic',
        Cell: ({ value }) => {
          // Formatear la fecha para que se muestre de manera legible (por ejemplo, DD/MM/AAAA HH:MM)
          const formattedDate = new Date(value).toLocaleString();
          return <span>{formattedDate}</span>;
        },
      },
    ],
    []
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

  // Función para manejar el envío del formulario del modal
  const handleCreateDepartment = async e => {
    e.preventDefault();
    const success = await createDepartment(newDepartmentData);
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

     
    </div>
  );
};

export default DepartmentList;