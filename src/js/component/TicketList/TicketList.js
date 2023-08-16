import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Context } from "../../store/appContext.js";
import { Link } from 'react-router-dom';
import { useTable, useGlobalFilter, useFilters, useSortBy } from 'react-table';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import styles from './TicketList.module.css';
import { FaTrashAlt } from 'react-icons/fa';




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
    const confirmDelete = window.confirm('¿Seguro que quieres eliminar este ticket?');
    if (confirmDelete) {
      const success = await deleteTicket(ticketId)
      if (success){
        console.log('Ticket eliminado exitosamente:', ticketId);
      } else {
        console.log('Error al eliminar usuario:', ticketId);
      }
    }
  };
      
  


  const columns = React.useMemo(
    () => [
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
        
      },



      {
        Header: 'Asunto',
        accessor: 'messages[0].subject',
        canFilter: true,
        sortType: 'basic',
      },
      {
        Header: 'Departamento',
        accessor: 'department[0].name_department', // Acceder al nombre del primer departamento
        canFilter: true,
        sortType: 'basic',
      },
      {
        Header: 'Usuario',
        accessor: 'users', // Acceder al nombre del cliente
        canFilter: false,
        sortType: 'none',
        // Cell: ({ cell }) => (
        //   <div >
        //     {
        //     cell.value.map(user => (
        //       <div >
        //         <span>Ticket {user.name}</span>
        //       </div>

        //     ))}
        //   </div>
        // ),
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
      {
        Header: 'Acciones',
        accessor: 'actions',
        Cell: ({ row }) => (
          <div>
            <button
              className={styles.deleteButton}
              onClick={() => handleDeleteTicket(row.original.id)}
            >
              <FaTrashAlt className={styles.actionsIcon} /> Eliminar
            </button>
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
          {rows.map((row) => {
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

    </div>
  );

};

export default TicketList;