import React from 'react';

const DeleteBoton = ({ user }) => {
    const deteleUser = async (id) => {
        try {
            console.log(`${process.env.NEXT_PUBLIC_URLBACKEND}/user/${id}`);
            const res = await fetch(`${process.env.NEXT_PUBLIC_URLBACKEND}/user/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(res);
            if (!res.ok) {
                console.log('Error al borrar usuario');
                throw new Error('Error al borrar usuario');
            } else {
                window.location.href = `/`;
            }
        } catch (err) {
            console.log(err);
            return 'Error al borrar usuario';
        }
    };

    return (
        <button
            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={async () => {
                await deteleUser(user.id.toString());
            }}
        >
            Eliminar Usuario
        </button>
    );
};

export default DeleteBoton;
