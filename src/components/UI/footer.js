import React from 'react';

const Footer = () => {
    return (
        <footer className="flex w-full flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
            <div className="text-blue-gray-600 font-normal ml-6 mr-6">
                &copy; 2023 Homeopatia Larrosa
            </div>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 mr-6 ml-6">
                <li>
                    <a href="#" className="text-blue-gray-600 font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
                        Inicio
                    </a>
                </li>
                <li>
                    <a href="#" className="text-blue-gray-600 font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
                        Productos
                    </a>
                </li>
                <li>
                    <a href="#" className="text-blue-gray-600 font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
                        Servicios
                    </a>
                </li>
                <li>
                    <a href="#" className="text-blue-gray-600 font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
                        Somos
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
