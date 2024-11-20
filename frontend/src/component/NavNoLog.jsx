import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../img/logo_muni.webp';

function HeaderNoLog() {
    return (
        <div className="bg-slate-200 flex flex-col">
            <section>

                <header className="flex items-center bg-black h-24 shadow-md px-8">

                    <div className="flex items-center"> 
                        <img src={logo} alt="Logo" className="h-12 w-auto" /> {/* Imagen del logo */}
                    </div>

                    {/* Nav que redirige a la página de registro */}
                    <nav className="ml-auto flex items-center">
                        <Link 
                            to="/RPM" 
                            className="px-4 py-2 font-bold text-white rounded duration-300 hover:bg-white hover:text-black"

                        >
                            Registrarse
                        </Link>
                    </nav>
                </header>
            </section>
            <Outlet />
        </div>
    );
}

export default HeaderNoLog;