import React, { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../img/logo_muni.webp';

function HeaderLog() {
    const [showEstetica, setShowEstetica] = useState(false);
    const [showMedicas, setShowMedicas] = useState(false);
    const [showAsistencias, setShowAsistencias] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);

    const handleMouseEnterEstetica = () => {
        clearTimeout(timeoutId);
        setShowEstetica(true);
    };

    const handleMouseLeaveEstetica = () => {
        const id = setTimeout(() => {
            setShowEstetica(false);
        }, 100); 
        setTimeoutId(id);
    };

    const handleMouseEnterMedicas = () => {
        clearTimeout(timeoutId);
        setShowMedicas(true);
    };

    const handleMouseLeaveMedicas = () => {
        const id = setTimeout(() => {
            setShowMedicas(false);
        }, 100);
        setTimeoutId(id);
    };

    const handleMouseEnterAsistencias = () => {
        clearTimeout(timeoutId);
        setShowAsistencias(true);
    };

    const handleMouseLeaveAsistencias = () => {
        const id = setTimeout(() => {
            setShowAsistencias(false);
        }, 100);
        setTimeoutId(id);
    };

    useEffect(() => {
        const boton = document.querySelector('#boton');
        const menu = document.querySelector('#Menu2');

        const toggleMenu = () => {
            if (menu) menu.classList.toggle('hidden');
        };

        if (boton) {
            boton.addEventListener('click', toggleMenu);
        }

        return () => {
            if (boton) {
                boton.removeEventListener('click', toggleMenu);
            }
        };
    }, []);

    useEffect(() => {
        const element = document.querySelector('#Menu1');
        const boton = document.querySelector('#boton');

        function TamañoVentana() {
            if (element && boton) {
                if (window.innerWidth <= 1855) {
                    element.classList.add('hidden');
                    boton.classList.remove('hidden');
                } else {
                    element.classList.remove('hidden');
                    boton.classList.add('hidden');
                }
            }
        }

        TamañoVentana();
        window.addEventListener('resize', TamañoVentana);

        return () => {
            window.removeEventListener('resize', TamañoVentana);
        };
    }, []);

    return (
        <div className="bg-slate-200 flex flex-col">
            <section>
                <header className="flex items-center bg-black h-24 shadow-md px-8">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="h-12 w-auto" />
                    </div>

                    {/* Navegación principal */}
                    <nav id="Menu1" className="ml-auto flex items-center space-x-8 text-xl">
                        {/* Botón de Inicio */}
                        <Link
                            to="/HPM"
                            className="px-4 py-1 text-center text-white duration-300 hover:text-sky-600"
                        >
                            Inicio
                        </Link>

                        {/* Botón desplegable de Estética */}
                        <div
                            className="relative group"
                            onMouseEnter={handleMouseEnterEstetica}
                            onMouseLeave={handleMouseLeaveEstetica}
                        >
                            <button className="px-4 py-1 text-white duration-300 hover:text-sky-600 focus:outline-none">
                                Estética
                            </button>
                            {showEstetica && (
                                <div className="absolute mt-2 bg-white shadow-lg rounded-md py-2">
                                    <Link
                                        to="/PEPM"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                    >
                                        Peluquería
                                    </Link>
                                    <Link
                                        to="/POPM"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                    >
                                        Podología
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Botón desplegable de Atenciones Médicas */}
                        <div
                            className="relative group"
                            onMouseEnter={handleMouseEnterMedicas}
                            onMouseLeave={handleMouseLeaveMedicas}
                        >
                            <button className="px-4 py-1 text-white duration-300 hover:text-sky-600 focus:outline-none">
                                Atenciones Médicas
                            </button>
                            {showMedicas && (
                                <div className="absolute mt-2 bg-white shadow-lg rounded-md py-2">
                                    <Link
                                        to="/PSPM"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                    >
                                        Psicología
                                    </Link>
                                    <Link
                                        to="/KPM"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                    >
                                        Kinesiología
                                    </Link>
                                    <Link
                                        to="/FPM"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                    >
                                        Fonoaudiología
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Botón desplegable de Asistencias */}
                        <div
                            className="relative group"
                            onMouseEnter={handleMouseEnterAsistencias}
                            onMouseLeave={handleMouseLeaveAsistencias}
                        >
                            <button className="px-4 py-1 text-white duration-300 hover:text-sky-600 focus:outline-none">
                                Asistencias
                            </button>
                            {showAsistencias && (
                                <div className="absolute mt-2 bg-white shadow-lg rounded-md py-2">
                                    <Link
                                        to="/AJPM"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                    >
                                        Asistencia Jurídica
                                    </Link>
                                    <Link
                                        to="/ASPM"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                    >
                                        Asistencia Social
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Botón de Cerrar Sesión */}
                        <Link
                            to="/"
                            className="px-4 py-1 text-center text-white duration-300 hover:text-sky-600"
                        >
                            Cerrar Sesión
                        </Link>
                    </nav>
                </header>
                <Outlet />
            </section>
        </div>
    );
}

export default HeaderLog;