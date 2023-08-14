import React, { useContext, useEffect, useState } from 'react';
import { useTable, useSortBy } from 'react-table'; // Solo importamos useTable y useSortBy
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { Context } from "../../store/appContext.js";
import { Link } from 'react-router-dom';
import styles from './TicketDetailView.module.css';

const TicketDetailView = () => { 
  const { id } = useParams(); 
  const { store, actions } = useContext(Context);
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    // Cargamos los datos de los tickets
    actions.loadAllTicketsData();

    // Buscamos el ticket correspondiente por su ID en la lista de tickets
    const ticket = store.tickets.find(ticket => ticket.id === Number(id));
    setSelectedTicket(ticket);
  }, [id, actions, store.tickets]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Mensajes', 
        accessor: 'subject', 
      },
      {
        Header: 'Adjuntos',
        accessor: 'adjunts', // Cambia esto por la propiedad correcta de los adjuntos
        Cell: ({ cell }) => cell.value ? 'Sí' : 'No', // Muestra 'Sí' si hay adjuntos, 'No' si no
      },
      // Puedes agregar más columnas aquí según los detalles del mensaje que quieras mostrar
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data: selectedTicket ? selectedTicket.messages : [], // Usamos los mensajes del ticket seleccionado
    },
    useSortBy
  );

  return (
    <div className={styles.ticketDetailContainer}>
      {selectedTicket ? (
        <div className={styles.ticketDetailContent}>
         <h2 className={styles.ticketHeader}>Detalles del Ticket</h2>
        <p className={styles.ticketInfo}><strong>ID:</strong> {selectedTicket.id}</p>
        <p className={styles.ticketInfo}><strong>Estado:</strong> {selectedTicket.status}</p>
        <p className={styles.ticketInfo}><strong>Departamento:</strong> {selectedTicket.department[0].name_department}</p>
        
        {/* Muestra la información del usuario */}
        <p className={styles.ticketInfo}><strong>Usuario:</strong> {selectedTicket.client.name}</p>

          {/* Agrega el botón de retroceso */}
          <Link to="/dashboard" className={`${styles.backButton} ${styles.customBackButton}`}>
          Volver al Dashboard
        </Link>


          <h3 className={styles.messageHistory}>Historial de Mensajes:</h3>
          <div className={styles.tableContainer}>
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
                          <td {...cell.getCellProps()} className={styles.messageCell}>{cell.render('Cell')}</td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TicketDetailView;
