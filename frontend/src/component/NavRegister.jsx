import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../img/logo_muni.webp';

function HeaderNoLog() {
    return (
        <div className="bg-slate-200 flex flex-col">
            <section>
<<<<<<< HEAD
                <header className="relative flex justify-between items-center bg-black h-24 shadow-md px-8">
=======
                <header className="relative flex justify-between items-center bg-nav h-24 shadow-md px-8">
>>>>>>> Catalina
                    <div className="flex items-center"> 
                        <img src={logo} alt="Logo" className="h-12 w-auto" /> {/* Imagen del logo */}
                    </div>

<<<<<<< HEAD
                    {/* Nav que redirige a la página de inicio de sesión */}
                    <nav className="ml-auto flex items-center">
                        <Link 
                            to="/" 
                            className="px-4 py-2 font-bold text-white bg-black border border-black rounded duration-300 hover:bg-white hover:text-black"
=======
                    {/* Nav que redirige a la página de registro */}
                    <nav className="flex items-center">
                        <Link 
                            to="/" 
                            className="mx-4 px-4 py-1 text-center font-bold border border-white rounded text-black duration-300 bg-white hover:text-white hover:border-white hover:bg-blue-500"
>>>>>>> Catalina
                        >
                            Iniciar Sesión
                        </Link>
                    </nav>
                </header>
            </section>
            <Outlet />
        </div>
    );
}

export default HeaderNoLog;