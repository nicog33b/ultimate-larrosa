import React, { useState } from 'react';
import { changePassword } from '@/services/users';

const ChangePasswordForm = ({ userId }) => {
    const [passwords, setPasswords] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswords(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (passwords.newPassword !== passwords.confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }
        if (passwords.newPassword.length < 8) {
            alert('La nueva contraseña debe tener al menos 8 caracteres.');
            return;
        }
    
        try {
            const response = await changePassword(userId, {
                currentPassword: passwords.currentPassword,
                newPassword: passwords.newPassword
            });
            alert('Contraseña actualizada correctamente.');
            setPasswords({ currentPassword: '', newPassword: '', confirmPassword: '' });
        } catch (error) {
            console.error(error);
            alert('Error al actualizar la contraseña. Asegúrate de que la contraseña actual es correcta.');
        }
    };

    return (
        <section id='usuarioPassword'>
            <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto my-10">
                <h2 className="text-lg font-semibold text-center text-gray-700 mb-4">Cambiar Contraseña</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Contraseña Actual</label>
                        <input type="password" name="currentPassword" id="currentPassword" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" value={passwords.currentPassword} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">Nueva Contraseña</label>
                        <input type="password" name="newPassword" id="newPassword" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" value={passwords.newPassword} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirmar Nueva Contraseña</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" value={passwords.confirmPassword} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Cambiar Contraseña
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ChangePasswordForm;
