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
                <label htmlFor="fname">Nombre</label>
                <input type="text" id="fname" name="firstname" />


                <label htmlFor="lname">Apellido</label>
                <input type="text" id="lname" name="lastname" />

                <label htmlFor="country">Country</label>
                <select id="country" name="country">
                    <option value="">Selecciona un país</option>
                    <option value="australia">Australia</option>
                    <option value="canada">Canadá</option>
                    <option value="usa">Estados Unidos</option>
                    <option value="spain">España</option>
                    <option value="portugal">Portugal</option>
                    <option value="france">Francia</option>
                    <option value="germany">Alemania</option>
                    <option value="uk">Reino Unido</option>
                    <option value="brazil">Brasil</option>
                    <option value="argentina">Argentina</option>
                    <option value="chile">Chile</option>
                    <option value="colombia">Colombia</option>
                    <option value="peru">Perú</option>
                    <option value="mexico">México</option>

                </select>

                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Pregunte lo que quiera, nos pondremos en contacto lo mas rápido posible" style={{ height: '200px' }}></textarea>

                <input type="submit" value="Enviar" id='botonContacto' />
            </form>
        </div>
    );
};

export default Contacto;