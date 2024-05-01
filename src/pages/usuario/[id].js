import React from 'react';
import './usuario.css'
import MenuUsuario from './MenuUsuario';
import Login from './Login';
import Registro from './Registro';
import CambiarContrasena from './CambiarContrasena';

const UsuarioPage = () => {
    return (
        <div className='usuarioPage'>
            <MenuUsuario />
            <div className='usuarioContent'>
                <Login />
                <Registro />
                <CambiarContrasena />
            </div>
        </div>
    );
}

export default UsuarioPage;
