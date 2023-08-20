import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../store/appContext.js';
import { useParams } from 'react-router-dom'

const AddUser = () => {
    const { store, actions } = useContext(Context);
    const users = store.users;
    const { id } = useParams();
    const ticketID = parseInt(id);
    const ticket = store.tickets.find(element => element.id === ticketID);
    const user = ticket.user;
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
    const [mostrarBoton, setMostrarBoton] = useState(false);
    const [modalContent, setModalContent] = useState(null);


    const usersSelect = users.filter(usuario => {
        return !user.some(u => u.id === usuario.id);
    });
    const department_ticket = ticket.department[0].id

    const usersSelectDepartment = usersSelect.filter(usuario => usuario.department && usuario.department.id == department_ticket)

    const handleSelectChange = (e) => {
        setOpcionSeleccionada(e.target.value);
        setMostrarBoton(true);
    };

    const handleConfirmClick = () => {

        if (actions.AddUserTicket(id, opcionSeleccionada)) {
            actions.loadAllTicketsData();
            actions.loadAllUsersData();
            actions.loadAllDepartmentsData();
            actions.loadTicketMessages(id);
        }
    };
    useEffect(() => {
        const ticket = store.tickets.find(element => element.id === ticketID);
        const user = ticket.user;
        const updatedContent = (
            <div>
                {user.map(user => {
                    return (<p key={user.id} className='col-4'>{user.name}</p>)
                })}
            </div>
        );
        setModalContent(updatedContent);
        console.log("Hola")
    }, [store.tickets]);
    return (
        <div>
            {/* Botón para abrir el modal */}
            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
                Asignar Usuarios
            </button>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Asignar Usuarios al Ticket
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className='d-flex row'>
                                {modalContent}
                            </div>
                            <div className='d-flex row'>
                                <div>
                                    <select className='col-12' onChange={handleSelectChange} value={opcionSeleccionada}>
                                        <option value="">Selecciona Usuario</option>
                                        {usersSelectDepartment.map((element, index) => (
                                            <option key={index} value={element.id}>
                                                {element.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>


                        <div className="modal-footer">
                            {mostrarBoton && (
                                <button type="button" className="btn btn-primary" onClick={handleConfirmClick} data-bs-dismiss="modal">Confirmar</button>
                            )}
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddUser;
