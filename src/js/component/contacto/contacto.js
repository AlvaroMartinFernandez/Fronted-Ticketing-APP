import React, { useState } from 'react';
import './contacto.css';
import Swal from 'sweetalert2';

const Contacto = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        // Simulamos un envío exitoso
        // Aquí podrías realizar llamadas a una API o servicio de backend en lugar de este timeout
        setTimeout(() => {
            Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: 'El mensaje ha sido enviado con éxito',
            });
        }, 1000); // Simulamos el tiempo de envío

        console.log('Formulario enviado');
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />


                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                <label htmlFor="country">Country</label>
                <select id="country" name="country">
                    <option value="australia">España</option>
                    <option value="canada">Protugal</option>
                    <option value="usa">USA</option>
                </select>

                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }}></textarea>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Contacto;
