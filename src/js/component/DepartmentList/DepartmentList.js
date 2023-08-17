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
    port_smtp: 0,
    smtp_server:""
    
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
        Header: 'Cliente ID',
        accessor: 'client_id',
        canFilter: true,
        sortType: 'basic',
      },
      {
        Header: 'Número de Usuarios',
        accessor: 'name', 
        canFilter: false,
        sortType: 'none',
        // Cell: ({ cell }) => (
        //   <div className={styles.userContainer}>
        //     {cell.value.map(user => (
        //       <Link key={user.id} >
        //         <div className={styles.ticketCard}>
        //           <span className={styles.ticketTitle}>{user.name}</span>
        //           {/* Opcional: Mostrar más información del ticket aquí */}
        //         </div>
        //       </Link>
        //     ))}
        //   </div>
        // ),
      },

      {
        Header: 'Tickets',
        accessor: 'tickets', // Utiliza la propiedad tickets para mostrar los tickets
        canFilter: false,
        sortType: 'none', // No permite ordenar esta columna
        Cell: ({ cell }) => (
          <div className={styles.ticketContainer}>
            {cell.value.map(ticket => (
              <Link key={ticket.id} to={`/TicketDetailView/${ticket.id}`} className={styles.ticketLink}>
                <div className={styles.ticketCard}>
                  <span className={styles.ticketTitle}>Ticket {ticket.id}</span>
                  {/* Opcional: Mostrar más información del ticket aquí */}
                </div>
              </Link>
            ))}
          </div>
        ),
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

      {/* Botón para abrir el modal */}
      <button className={styles.addButton} onClick={toggleModal}>
        <FaPlus className={styles.addIcon} /> Crear Departamento
      </button>

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




    </div>
  );
};

export default DepartmentList;