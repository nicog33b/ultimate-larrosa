import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getUser } from '../../services/users';
import '../pages.css';
import { IoArrowBack } from 'react-icons/io5';
import MenuUsuario from '@/components/USER/menuUsuario';
import ChangePasswordForm from '@/components/USER/changePasswordForm';
import UserOrders from './orders';
import Faqs from './faqs';
import Aside from './aside';
import Navbar from '@/components/UI/navbar';
import Footer from '@/components/UI/footer';
import Link from 'next/link';

const UsuarioPage = () => {
    const [userData, setUserData] = useState(null);
    const [activeSection, setActiveSection] = useState('userInfo'); // Se establece 'userInfo' como valor por defecto
    const router = useRouter();

    // Estado para almacenar el userId obtenido del localStorage
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        // Asegúrate de que este código solo se ejecute en el lado del cliente
        const userLogged = JSON.parse(localStorage.getItem('userLogged') || '{}');
        setUserId(userLogged.userId);
    }, []);

    useEffect(() => {
        if (userId) {
            getUser(userId).then(setUserData).catch(console.error);
        }
    }, [userId]);

    const handleMenuClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div>
            <Navbar />
            <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
                <Aside onMenuClick={handleMenuClick} />
                <div className="flex-1 py-10 px-5 md:px-20">
                    {userData ? (
                        <>
                            {activeSection === 'userInfo' && (
                                <>
                                    <MenuUsuario userData={userData} />
                                    <ChangePasswordForm userId={userId} />
                                </>
                            )}
                            {activeSection === 'orderHistory' && <UserOrders />}
                            {activeSection === 'faqs' && <Faqs />}
                            <div className="flex justify-center mt-10">
                                <Link href='/' className="rounded-full p-3 bg-gray-300 hover:bg-gray-400 transition duration-300 ease-in-out flex items-center justify-center shadow-lg">
                                    <IoArrowBack className="text-xl text-white" />
                                </Link>
                            </div>
                        </>
                    ) : (
                        <p>Cargando...</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default UsuarioPage;
