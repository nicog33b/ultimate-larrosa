'use client'
import React, { useState } from 'react';
import MenuUsuario from '../../components/USER/menuUsuario';
const UsuarioPage = () => {
    const [userLogged, setUserLogged] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-5 md:px-20">
            <MenuUsuario />
        </div>
    );
}

export default UsuarioPage;
