import React, { useState } from "react";
import FooterPS from "../component/FooterPS.jsx";
import logo from '../img/logo_muni.webp';
import { Outlet, Link } from 'react-router-dom';

function GestionarPS() {
    const [prestadores, setPrestadores] = useState([]);
    const [newPrestador, setNewPrestador] = useState("");
    const [correo, setCorreo] = useState("");
    const [idServicio, setIdServicio] = useState("");

    // Crear un nuevo prestador
    const createPrestador = () => {
        if (!newPrestador || !correo || !idServicio) {
            alert("Por favor completa todos los campos.");
            return;
        }

        const nuevoPrestador = {
            id: prestadores.length + 1, // Generar un ID único
            nombre: newPrestador,
            correo: correo,
            id_servicio: idServicio,
        };

        setPrestadores([...prestadores, nuevoPrestador]);
        setNewPrestador("");
        setCorreo("");
        setIdServicio("");
    };

    // Eliminar un prestador
    const deletePrestador = (id) => {
        setPrestadores(prestadores.filter((prestador) => prestador.id !== id));
    };

    const [showEstetica, setShowEstetica] = useState(false);
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



    return (
        <div className="flex flex-col min-h-screen">
            {/* Encabezado de la página */}
            <section className='z-20'> 
                <header className="flex items-center bg-black h-24 shadow-md px-8">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="h-12 w-auto" />
                    </div>
                    {/* Navegación principal */}
                    <nav className="ml-auto flex items-center space-x-8 text-xl">
                        {/* Botón de Cerrar Sesión */}
                        <Link to="/Admin" className="px-4 py-1 text-center text-white duration-300 hover:text-sky-600 border-b-2 border-transparent hover:border-sky-600">
                            Home
                        </Link>
                        {/* Botón desplegable de Estética */}
                        <div className="relative group" onMouseEnter={handleMouseEnterEstetica} onMouseLeave={handleMouseLeaveEstetica}>
                            <button className="px-4 py-1 text-white duration-300 hover:text-green-600 focus:outline-none">
                                Gestion
                            </button>
                            {showEstetica && (
                            <div className="absolute mt-2 bg-white shadow-lg rounded-md py-2">
                                <Link to="/Admin/GestionarPS" className="block px-4 py-2 text-gray-700 hover:bg-green-200">
                                    Gestionar Prestadores
                                </Link>
                                <Link to="/Admin/GestionarPS" className="block px-4 py-2 text-gray-700 hover:bg-green-200">
                                    Gestion de operativos
                                </Link>
                            </div>
                            )}
                        </div>
                  
                        {/* Botón de Cerrar Sesión */}
                        <Link to="/Admin/Servicios" className="px-4 py-1 text-center text-white duration-300 hover:text-yellow-500 border-b-2 border-transparent    hover:border-yellow-500">
                            Administrar Servicios
                        </Link>
                        {/* Botón de Cerrar Sesión */}
                        <Link to="/Admin/Reportes" className="px-4 py-1 text-center text-white duration-300 hover:text-orange-500 border-b-2 border-transparent     hover:border-orange-500">
                            Generar Reportes
                        </Link>
                  
                  
                        {/* Botón de Cerrar Sesión */}
                        <Link to="/" className="px-4 py-1 text-center text-white duration-300 hover:text-red-600 border-b-2 border-transparent hover:border-red-600">
                            Cerrar Sesión
                        </Link>
                    </nav>
                </header>
                <Outlet />  
            </section>

            <div className="p-6">
                <h1 className="text-3xl font-bold mb-6">Gestionar Prestadores de Servicio</h1>

                {/* Formulario para crear un nuevo prestador */}
                <div className="mb-4">
                    <input
                        type="text"
                        value={newPrestador}
                        onChange={(e) => setNewPrestador(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md"
                        placeholder="Nombre del Prestador"
                    />
                    <input
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md ml-2"
                        placeholder="Correo"
                    />
                    <input
                        type="text"
                        value={idServicio}
                        onChange={(e) => setIdServicio(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md ml-2"
                        placeholder="Servicio"
                    />
                    <button
                        onClick={createPrestador}
                        className="ml-2 p-2 bg-blue-500 text-white rounded-md"
                    >
                        Crear Prestador
                    </button>
                </div>

                {/* Tabla de prestadores */}
                {prestadores.length ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-300 p-4">Nombre</th>
                                    <th className="border border-gray-300 p-4">Correo</th>
                                    <th className="border border-gray-300 p-4">Servicio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {prestadores.map((prestador) => (
                                    <tr key={prestador.id} className="hover:bg-gray-100">
                                        <td className="border border-gray-300 p-2">{prestador.nombre}</td>
                                        <td className="border border-gray-300 p-2">{prestador.correo}</td>
                                        <td className="border border-gray-300 p-2">{prestador.id_servicio}</td>
                                        <td className="border border-gray-300 p-2">
                                            <button
                                                onClick={() => deletePrestador(prestador.id)}
                                                className="p-1 bg-red-500 text-white rounded-md"
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p>No hay prestadores registrados.</p>
                )}
            </div>

            <footer className="mt-auto">
                <FooterPS />
            </footer>
        </div>
    );
}

export default GestionarPS;
