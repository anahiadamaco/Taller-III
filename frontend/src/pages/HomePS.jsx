import React, { useState, useEffect} from 'react';
import Footer from '../component/FooterPS';
import { Outlet, Link } from 'react-router-dom';
import logo from '../img/logo_muni.webp';

function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Encabezado de la página */}
            <section className='z-20'> 
                <header className="flex items-center bg-black h-24 shadow-md px-8">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="h-12 w-auto" />
                    </div>


                    {/* Navegación principal */}
                    <nav id="Menu1" className="ml-auto flex items-center space-x-8 text-xl">
                        {/* Botón de Inicio */}
                        <Link
                            to="/HPS"
                            className="px-4 py-1 text-center text-white duration-300 hover:text-sky-600 border-b-2 border-transparent hover:border-sky-600"
                        >
                            Inicio
                        </Link>

                        <Link
                            to="/AJPS"
                            className="px-4 py-1 text-center text-white duration-300 hover:text-sky-600 border-b-2 border-transparent hover:border-sky-600"
                        >
                            Zona de Administración
                        </Link>

                        {/* Botón de Cerrar Sesión */}
                        <Link
                            to="/"
                            className="px-4 py-1 text-center text-white duration-300 hover:text-sky-600 border-b-2 border-transparent hover:border-sky-600"
                        >
                            Cerrar Sesión
                        </Link>
                    </nav>
                </header>
                <Outlet />
            </section>

            <div className="min-h-screen grid grid-rows-[auto_1fr] bg-gray-100">
                <header>
                    {/* Aquí puedes agregar contenido adicional para el header */}
                </header>

                <div className="flex-grow w-full p-8 grid grid-cols-3 gap-x-8 gap-y-4 bg-white rounded-lg shadow-lg mt-10 h-full">
                    <div className="bg-blue-500 text-white p-6 rounded-lg text-center h-full">Lorem Ipsum</div>
                    <div className="bg-green-500 p-6 rounded-lg h-full"></div>
                    <div className="bg-green-500 p-6 rounded-lg h-full"></div>
                    <div className="bg-green-500 p-6 rounded-lg h-full"></div>
                    <div className="bg-red-500 p-6 rounded-lg h-full"></div>
                    <div className="bg-blue-500 p-6 rounded-lg h-full"></div>
                    <div className="bg-red-500 p-6 rounded-lg col-span-3"></div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Home;