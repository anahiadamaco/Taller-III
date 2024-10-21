import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../img/logo_muni.webp';

function HeaderNoLog() {
    return (
        <div className="bg-slate-200 flex flex-col">
            <section>
                <header className="relative flex justify-between items-center bg-nav h-24 shadow-md px-8">
                    <div className="flex items-center"> 
                        <img src={logo} alt="Logo" className="h-12 w-auto" /> {/* Imagen del logo */}
                    </div>

                    {/* Nav que redirige a la página de registro */}
                    <nav className="flex items-center">
                        <Link 
                            to="/" 
                            className="mx-4 px-4 py-1 text-center font-bold border border-white rounded text-black duration-300 bg-white hover:text-white hover:border-white hover:bg-blue-500"
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