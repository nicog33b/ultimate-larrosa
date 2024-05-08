import React, { useState } from 'react';
import Logo from '@/components/UI/logo';
import './pages.css';

const SessionModal = ({ showModal, handleCloseModal }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ name: '', phone: '', email: '', password: '', dirEnvio: '' });


  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3001/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: loginData.email,
        password: loginData.password,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('userLogged', JSON.stringify({ userId: data.userId, token: data.token }));
      handleCloseModal();
      // Redirige o actualiza la interfaz de usuario según sea necesario
    } else {
      console.error(data.message); // Manejar errores de autenticación aquí
    }
  };
  

  const handleRegister = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3001/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
    });
    const data = await response.json();
    if (response.ok) {
        if (data.user && data.user._id) { // Asegura que user y _id existan
            localStorage.setItem('userLogged', JSON.stringify({ userId: data.user._id, token: data.token }));
            handleCloseModal();
        } else {
            console.error('Registro exitoso, pero los datos del usuario no están disponibles.');
        }
    } else {
        console.error(data.error || 'Error en el registro'); // Usa data.error si está disponible, si no, un mensaje genérico
    }
};

  

  const handleOutsideClick = (event) => {
    if (event.target.id === "modal-backdrop") {
      handleCloseModal();
    }
  };

  const handleInputChange = (event, isRegistration = false) => {
    const { name, value } = event.target;
    if (isRegistration) {
      setRegisterData(prevData => ({ ...prevData, [name]: value }));
    } else {
      setLoginData(prevData => ({ ...prevData, [name]: value }));
    }
  };



  const toggleForm = () => {
    setIsRegistering(!isRegistering);
    // Clear data when switching forms
    setLoginData({ email: '', password: '' });
    setRegisterData({ name: '', phone: '', email: '', password: '', dirEnvio: '' });
  };

  return (
    <>
      {/* Modal */}
      <div id="modal-backdrop" className={`z-50 fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center ${showModal ? 'block' : 'hidden'}`} onClick={handleOutsideClick}>
        <div className="bg-white p-20 rounded-lg shadow-lg max-w-md relative" onClick={e => e.stopPropagation()}>
          {/* Botón de cerrar */}
          <button className="absolute top-2 right-2 text-black" onClick={handleCloseModal}>&times;</button>
          
          {/* Encabezado */}
          <div className="flex flex-col items-center justify-center mb-8">
            <Logo />
          </div>

          {/* Formulario */}
          {isRegistering ? (
            // Registration form
            <form onSubmit={handleRegister}>
              <input type="text" name="name" value={registerData.name} onChange={e => handleInputChange(e, true)} className="w-full p-2 border mb-3 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nombre completo" />
              <input type="text" name="phone" value={registerData.phone} onChange={e => handleInputChange(e, true)} className="w-full p-2 border mb-3 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Teléfono" />
              <input type="email" name="email" value={registerData.email} onChange={e => handleInputChange(e, true)} className="w-full p-2 border mb-3 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Correo electrónico" />
              <input type="password" name="password" value={registerData.password} onChange={e => handleInputChange(e, true)} className="w-full p-2 border mb-3 5-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Contraseña" />
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full">Registrar</button>
              <div className="text-center mt-8">
                ¿Ya tienes cuenta? <a href="#" className="text-blue-500 hover:text-blue-700" onClick={toggleForm}>Entrar aquí</a>
              </div>
            </form>
          ) : (
            // Login form
            <form onSubmit={handleLogin}>
              <input type="email" name="email" value={loginData.email} onChange={handleInputChange} className="  md:p-4 md:m-2 w-full p-2 border mb-3 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Correo electrónico" />
              <input type="password" name="password" value={loginData.password} onChange={handleInputChange} className=" md:p-4 md:m-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Contraseña" />
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full">Iniciar sesión</button>
              <div className="text-center mt-8">
                ¿No tienes cuenta? <a href="#" className="text-blue-500 hover:text-blue-700" onClick={toggleForm}>Regístrate aquí</a>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default SessionModal;
