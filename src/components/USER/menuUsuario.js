import React, { useState } from 'react';
import { updateUser } from '../../services/users'; // Asegúrate de tener esta función implementada para actualizar el usuario

const MenuUsuario = ({ userData }) => {
    const [user, setUser] = useState({
        name: userData.name,
        email: userData.email,
        phone: userData.phone
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedUser = await updateUser(userData._id, user); // Asumimos que la función 'updateUser' toma el ID y los nuevos datos del usuario
            console.log('Usuario actualizado:', updatedUser);
            // Aquí podrías mostrar un mensaje de éxito o actualizar el estado global
        } catch (error) {
            console.error('Error actualizando usuario:', error);
            // Aquí podrías manejar los errores, por ejemplo, mostrando un mensaje al usuario
        }
    };

    return (
        <section id='usuarioInfo'>
        <div  className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto my-10">
            <h2 className="text-lg font-semibold text-center text-gray-700 mb-4">Información del Usuario</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="name"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Ingresa tu nombre"
                        value={user.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Ingresa tu email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
                    <input
                        type="tel"
                        id="telefono"
                        name="phone"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Ingresa tu número de teléfono"
                        value={user.phone}
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Actualizar Datos
                </button>
            </form>
        </div>
        </section>
    );
};

export default MenuUsuario;
