import React, { useState, useContext } from 'react';
import { Context } from '../../store/appContext.js';
import { useParams } from 'react-router-dom';

const SelectStatus = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const ticketid = parseInt(id, 10)
    const ticket = store.tickets.find(element => element.id === ticketid);
    const status = ticket.status;
    console.log(status);
    const opciones = ['Pendiente', 'Resuelto', 'Finalizado', 'Sin asignar', 'En proceso'];
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
    const [mostrarBoton, setMostrarBoton] = useState(false);

    const handleSelectChange = (e) => {
        setOpcionSeleccionada(e.target.value);
        setMostrarBoton(true);
    };

    const handleConfirmClick = () => {

        if (actions.changeStatusTicket(opcionSeleccionada, id)) {
            actions.loadAllTicketsData();
        }
        setMostrarBoton(false);
    };

    return (
        <div>
            <select onChange={handleSelectChange} value={opcionSeleccionada}>
                <option value="">{status}</option>
                {opciones.map((opcion, index) => (
                    opcion !== status ? (
                        <option key={index} value={opcion}>
                            {opcion}
                        </option>
                    ) : null
                ))}
            </select>
            {mostrarBoton && (
                <button onClick={handleConfirmClick}>Confirmar</button>
            )}
        </div>
    );
};

export default SelectStatus;