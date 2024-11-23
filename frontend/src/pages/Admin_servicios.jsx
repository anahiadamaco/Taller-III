import React, { useEffect, useState } from "react";
import FooterPS from '../component/FooterPS.jsx';
import logo from '../img/logo_muni.webp';
import { Outlet, Link } from 'react-router-dom';

function AdministrarServicios() {
    const [servicios, setServicios] = useState([]);
    const [nuevoServicio, setNuevoServicio] = useState({ nombre: '' });

    // Función para obtener los servicios de la base de datos
    const obtenerServicios = async () => {
        const response = await fetch('/api/Admin/Servicios'); // Asegúrate de que esta ruta sea correcta
        const data = await response.json();
        setServicios(data);
    };

    // Función para crear un nuevo servicio
    const crearServicio = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/Admin/Servicios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({nombre: nuevoServicio}),
        });
        
        if (response.ok) {
            setNuevoServicio({ nombre: ''}); // Limpiar el formulario
            obtenerServicios(); // Obtener los servicios actualizados
        } else {
            console.error("Error al crear el servicio");
        }
    };

    // Efecto para cargar los servicios al montar el componente
    useEffect(() => {
        obtenerServicios();
    }, []);

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
            <div className="p-6 flex flex-col min-h-screen">
                <h1 className="text-3xl font-bold mb-6">Administrar Servicios</h1>

                {/* Formulario para crear un nuevo servicio */}
                <form onSubmit={crearServicio} className="mb-6">
                    <input
                        type="text"
                        value={nuevoServicio.nombre}
                        onChange={(e) => setNuevoServicio({ ...nuevoServicio, nombre: e.target.value })}
                        className="border border-gray-300 p-2 rounded-md mr-2"
                        placeholder="Nombre del Servicio"
                        required
                    />
                    
                    <button
                        type="submit"
                        className="p-2 bg-blue-500 text-white rounded-md"
                    >
                        Crear Servicio
                    </button>
                </form>

                {/* Tabla de servicios */}
                <table className="min-w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-4">ID</th>
                            <th className="border border-gray-300 p-4">Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {servicios.map(servicio => (
                            <tr key={servicio.id_servicio} className="hover:bg-gray-100">
                                <td className="border border-gray-300 p-2">{servicio.id_servicio}</td>
                                <td className="border border-gray-300 p-2">{servicio.nombre}</td>
                                <td className="border border-gray-300 p-2">{servicio.descripcion}</td>
                                <td className="border border-gray-300 p-2">{servicio.precio}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            <footer className="mt-auto">
                <FooterPS />
            </footer>
        </div>
    );
}

export default AdministrarServicios;
