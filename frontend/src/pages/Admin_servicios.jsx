import React, { useEffect, useState } from "react";
import HeaderLog from '../component/NavLog.jsx';

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

    return (
        <div>
            <header>
                <HeaderLog />
            </header>
            <div className="p-6">
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
        </div>
    );
}

export default AdministrarServicios;
