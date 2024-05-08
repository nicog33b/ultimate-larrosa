import React from "react";
import "../pages.css";
import Link from "next/link";

const Aside = ( {onMenuClick}) => {
    return (
        <aside className="w-full  md:w-[9rem] p-5 bg-gray-50 shadow-lg rounded-lg">
            <div className="text-center items-center">
            <ul className="space-y-2">
                <Link href='#usuarioInfo'>
            <li className="text-gray-600 hover:text-green-300 transition-colors cursor-pointer p-3">Informacion de usuario</li>
            </Link>
            <li className="text-gray-600 hover:text-green-300 transition-colors cursor-pointer p-3"
                        onClick={() => onMenuClick('orderHistory')}>
                        Historial de pedidos
                    </li>
            <Link href='#usuarioPassword'>
            <li className="text-gray-600 hover:text-green-300 transition-colors cursor-pointer p-3">Cambiar contraseña</li>
            </Link>
                <li onClick={() => onMenuClick('faqs')} className="text-blue-600 hover:text-green-300 transition-colors cursor-pointer p-3">Preguntas frecuentes</li>

                <li onClick={() => onMenuClick('logout')} className="text-red-600 hover:text-red-400 transition-colors cursor-pointer p-3">Cerrar session</li>
            </ul>
            </div>
        </aside>
    );
};

export default Aside;
