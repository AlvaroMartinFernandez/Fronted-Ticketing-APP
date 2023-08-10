import React, { useState, useContext } from 'react';
import { Context } from "../../store/appContext.js";
import { useTable, useGlobalFilter, useFilters, useSortBy } from 'react-table';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import styles from './TicketList.module.css';

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


  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id', // Cambiar a 'id' para mostrar el ID del ticket
        canFilter: true,
        sortType: 'basic',
      },
      {
        Header: 'Asunto',
        accessor: 'subject',
        canFilter: true,
        sortType: 'basic',
      },
      {
        Header: 'Estado',
        accessor: 'status',
        canFilter: true,
        sortType: 'basic',
        Cell: ({ value }) => {
          const { icon, color } = getStatusIconAndColor(value);
          return (
            <span style={{ color }}>
              {icon} {value}
            </span>
          );
        },
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

      // Add more columns as needed
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
      data: Array.isArray(tickets) ? tickets : [],

      initialState: {

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

export default TicketList;