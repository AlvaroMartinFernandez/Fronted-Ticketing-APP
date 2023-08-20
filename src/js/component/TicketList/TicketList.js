import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Context } from "../../store/appContext.js";
import { Link } from 'react-router-dom';
import { useTable, useGlobalFilter, useFilters, useSortBy } from 'react-table';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import styles from './TicketList.module.css';
import { FaTrashAlt } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';




const getStatusIconAndColor = (status) => {
  switch (status) {
    case 'Pendiente':
      return { icon: '❗', color: 'red' };
    case 'Resuelto':
      return { icon: '✅', color: 'green' };
    case 'Finalizado':
      return { icon: '🏁', color: 'blue' };
    case 'Sin asignar':
      return { icon: '🔧', color: 'orange' };
    case 'En proceso':
      return { icon: '⏳', color: 'blue' };
    default:
      return { icon: '', color: 'black' };
  }
};

const TicketList = ({ tickets }) => {
  const { store, actions } = useContext(Context);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const SelectStatusFilter = ({ column }) => {
    const { filterValue, setFilter } = column;

    return (
      <select
        value={filterValue || ''}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">Todos</option>
        <option value="Pendiente">Pendiente</option>
        <option value="Resuelto">Resuelto</option>
        <option value="Finalizado">Finalizado</option>
        {/* Agrega otras opciones de estado aquí */}
      </select>
    );
  };

  // Función para acortar los asuntos largos
  const shortenSubject = (subject) => {
    return subject.replace(/(Re:)+/g, 'Re:'); // Reemplazar múltiples "Re:" con uno solo
  };

  const itemsPerPage = 10; // Definir la cantidad de elementos por página


  const deleteTicket = async (ticketId) => {
    try {
      const response = await axios.delete(
        `https://backend-ticketing-app-production.up.railway.app/tickets/${ticketId}`,
        {
          headers: {
            Authorization: `Bearer ${store.accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        actions.loadAllTicketsData();
        console.log('Ticket eliminado exitosamente:', ticketId);
      } else {
        console.error('Error al eliminar el ticket:', response.statusText);
      }
    } catch (error) {
      console.error('Error al eliminar el ticket:', error);
    }
  };

  const handleDeleteTicket = async (ticketId) => {
    // Mostrar una alerta de confirmación utilizando react-confirm-alert
    confirmAlert({
      title: 'Confirmar eliminación',
      message: '¿Estás seguro de querer eliminar este Ticket?',
      buttons: [
        {
          label: 'Sí',
          onClick: async () => {
            const success = await deleteTicket(ticketId);
            if (success) {
              toast.success('Ticket eliminado exitosamente.', {
                autoClose: 2000, // Cambia este valor según tus preferencias
              });
            } else {
              toast.success('Ticket eliminado exitosamente.')
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




  const columns = React.useMemo(

    () => {
      const columns = [
        {
          Header: 'ID',
          accessor: 'id',
          canFilter: true,
          sortType: 'basic',
          Cell: ({ row }) => (
            <Link
              to={`/TicketDetailView/${row.original.id}`} // Establece la ruta correcta a la vista de detalles del ticket
              className={styles.ticketIdLink}
            >
              {row.original.id}
            </Link>
          ),
        },

        {
          Header: 'Estado',
          accessor: 'status',
          canFilter: true,
          sortType: 'basic',
          Filter: SelectStatusFilter,
          Cell: ({ cell }) => {
            const { icon, color } = getStatusIconAndColor(cell.value);
            return (
              <div className={styles.statusContainer}>
                <span className={styles.statusIcon} style={{ backgroundColor: color }}>
                  {icon}
                </span>
                <span className={styles.statusText}>{cell.value}</span>
              </div>
            );
          },
        },


        {
          Header: 'Asunto',
          accessor: 'messages[0].subject',
          canFilter: true,
          sortType: 'basic',
          Cell: ({ cell }) => (
            <div>
              {cell.value && typeof cell.value === 'string' ? (
                cell.value.length > 80 ? (
                  <span>{cell.value.substring(0, 80)}...</span>
                ) : (
                  <span>{cell.value}</span>
                )
              ) : (
                <span> </span>
              )}
            </div>
          ),
        },
        {
          Header: 'Departamento',
          accessor: 'department[0].name_department', // Acceder al nombre del primer departamento
          canFilter: true,
          sortType: 'basic',
        },
        {
          Header: 'Usuario',
          accessor: 'user', // Acceder al nombre del cliente
          canFilter: true,
          sortType: 'basic',
          Cell: ({ cell }) => (
            <div>
              {cell.value.length > 0 && Array.isArray(cell.value) ? (
                cell.value.map((user, index) => (
                  <div key={index}>
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
          Header: 'Fecha de Creación',
          accessor: 'createdAt', // Agregar columna para mostrar la fecha de creación del ticket
          canFilter: true,
          sortType: 'basic',
          Cell: ({ value }) => {
            // Formatear la fecha para que se muestre de manera legible (por ejemplo, DD/MM/AAAA HH:MM)
            const formattedDate = new Date(value).toLocaleString();
            return <span>{formattedDate}</span>;
          },
        },
        {
          Header: 'Fecha de Actualizacion',
          accessor: 'updatedAt', // Agregar columna para mostrar la fecha de creación del ticket
          canFilter: true,
          sortType: 'basic',
          Cell: ({ value }) => {
            // Formatear la fecha para que se muestre de manera legible (por ejemplo, DD/MM/AAAA HH:MM)
            const formattedDate = new Date(value).toLocaleString();
            return <span>{formattedDate}</span>;
          },
        },

      ];
      if (store.role === "Admin") {
        columns.push({
          Header: 'Acciones',
          accessor: 'actions',
          show: store.userRole === 'Director',
          Cell: ({ row }) => (
            <div>
              <button className={styles.deleteButton} onClick={() => { showToast(); handleDeleteTicket(row.original.id); }}>
                <FaTrashAlt className={styles.actionsIcon} /> Eliminar
              </button>
            </div>
          ),
        },
        )
      }
      return columns;
    },
    [store.tickets]
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
      data: store.tickets,
      // Use 'tickets' directly here since useMemo is not needed for data
      initialState: {
        // Define initial state as needed, e.g., hiddenColumns: ['id']
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
      <h2>Lista de Tickets</h2>
      <div className={styles.searchContainer}>
        <i className={`fa fa-search ${styles.searchIcon}`} aria-hidden="true"></i>
        <input
          type="text"
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Buscar tickets..."
          className={styles.searchInput}
        />
      </div>

      <table {...getTableProps()} className={styles.ticketTable}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
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
          {paginatedRows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className={styles.ticketRow}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>
                      {/* Renderizar la nueva columna de ID del ticket */}
                      {cell.column.id === 'id' ? (
                        <span
                          className={styles.ticketIdLink}
                          onClick={() => setSelectedTicket(row.original)}
                        >
                          {cell.render('Cell')}
                        </span>
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
      <ToastContainer />
    </div>
  );

};

export default TicketList;