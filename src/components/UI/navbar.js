'use client'
import Link from 'next/link';
import Image from 'next/image';
import { IoSearch, IoPersonCircle, IoCart, IoMenu, IoClose } from 'react-icons/io5';
import {useRef, useState, useEffect } from 'react';

import { IoLogoFacebook, IoLogoInstagram,IoLogoWhatsapp } from 'react-icons/io5';

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Referencia al menú para detectar clics fuera



  useEffect(() => {
    const checkSize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Manejador para cerrar el menú si se hace clic fuera del contenido
  const handleClose = (e) => {
    if (!menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className=" bg-gradient-to-r from-lime-200 to-lime-200 text-white p-3 shadow-md rounded-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="block lg:hidden">
            <button onClick={toggleMenu}>
              <IoMenu className="text-4xl text-zinc-900" />
            </button>
          </div>
          <Link href="/" className="flex items-center">
            <div className="relative w-20 h-20">
              <Image
                src="/images/logoFinal.png"
                alt="Homeopathy logo"
                width={600}
                height={600}
                objectFit="cover"
                className="rounded-full transition-all duration-300 ease-in-out transform hover:scale-125 hover:shadow-lg shadow-white bg-yellow-100"
              />
            </div>
          </Link>
          <div className="hidden lg:flex items-center justify-center space-x-10">
            <Link href="/" className="text-black hover:bg-amber-100 p-3 mr-1 font-bold text-xl rounded-lg hover:scale-105 hover:text-gray-900 transition-colors duration-200">Inicio</Link>
            <Link href="/tienda" className="text-black hover:bg-amber-100 p-3 mr-1 font-bold text-xl rounded-lg hover:scale-105 hover:text-gray-900 transition-colors duration-200">Tienda</Link>
            <Link href="/somos" className="text-black hover:bg-amber-100 p-3 mr-1 font-bold text-xl rounded-lg  hover:scale-105 hover:text-gray-900 transition-colors duration-200">Somos</Link>
          </div>
          <div className="flex items-center space-x-6 rounded-md">
            <Link href="/profile" className="flex items-center p-2 transition-all duration-300 ease-in-out transform hover:scale-110 rounded-full hover:bg-amber-100">
              <IoPersonCircle className="text-3xl text-gray-600 hover:bg-amber-100" />
            </Link>
            <Link href="/cart" className="flex hover:bg-amber-100 items-center relative p-2 transition-all duration-300 ease-in-out transform hover:scale-110 rounded-full">
              <IoCart className="text-3xl text-gray-600 " />
              <span className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">{cartCount}</span>
            </Link>
            <Link href="/search" className="flex items-center p-2 transition-all duration-300 ease-in-out transform hover:scale-110 rounded-full hover:bg-amber-100">
              <IoSearch className="text-3xl text-gray-600 " />
            </Link>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div onClick={handleClose} className="fixed inset-0 bg-black bg-opacity-50 z-40">
       <aside className="relative lg:w-1/3 w-[81%] bg-amber-50 z-50 h-full shadow-xl" ref={menuRef}>
            <div className="flex flex-col h-full justify-between p-3">
        <div>
          {/* Botón para cerrar el menú */}
          <button onClick={toggleMenu} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
            <IoClose className="text-2xl text-black" />
          </button>
          
          {/* Espacio superior para iniciar sesión y registrarse */}
          <div className='flex justify-between items-center p-4'>
            <Link href="/iniciar-sesion" className="text-lg font-medium py-2 px-4 rounded-lg bg-gradient-to-r from-green-300 to-green-200 hover:bg-gradient-to-l text-black hover:from-green-200 hover:to-green-300 transition-colors duration-300">
              Iniciar Sesión / Registrarse
            </Link>
           
          </div>

          {/* Enlaces principales */}
          <h3 className="text-xl text-orange-400  font-bold mt-4 mb-2 px-4">Navegación</h3>
          <ul className="space-y-4 p-4">
        
            <li><Link href="/" onClick={toggleMenu} className="block text-xl text-zinc-900 font-serif hover:bg-gray-300 p-3 rounded">Inicio</Link></li>
            <li><Link href="/tienda" onClick={toggleMenu} className="block text-xl text-zinc-900 font-serif hover:bg-gray-300 p-3 rounded">Tienda</Link></li>
            <li><Link href="/somos" onClick={toggleMenu} className="block text-xl text-zinc-900 font-serif hover:bg-gray-300 p-3 rounded">Somos</Link></li>
          </ul>

          {/* Categorías sin separación adicional */}
          <h3 className="text-xl text-orange-400  font-bold mt-4 mb-2 px-4">Categorías</h3>
          <ul className="space-y-3 px-4 pb-4">
            <li><a href="#homeopatia" className="block text-lg py-2 px-2 text-zinc-900 hover:bg-gray-300 rounded">Homeopatía</a></li>
            <li><a href="#harinas" className="block text-lg py-2 px-2 text-black hover:bg-gray-300 rounded">Harinas</a></li>
          </ul>
        </div>

        {/* Iconos de redes sociales */}
        <div className="flex justify-center space-x-4 pb-4 px-4">
          <Link href="#facebook"><IoLogoFacebook className="text-2xl text-gray-600 hover:text-black"/></Link>
          <Link href="#whatsapp"><IoLogoWhatsapp className="text-2xl text-gray-600 hover:text-black"/></Link>
          <Link href="#instagram"><IoLogoInstagram className="text-2xl text-gray-600 hover:text-black"/></Link>
        </div>
      </div>
    </aside>
    </div>
     
      )}
    </>
  );
};

export default Navbar;
