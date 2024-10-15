import React, { useState, useEffect } from "react";
import HeaderLog from '../component/NavLog.jsx';

function GestionarPS() {
    const [prestadores, setPrestadores] = useState([]);
    const [newPrestador, setNewPrestador] = useState("");
    const [correo, setCorreo] = useState("");
    const [idServicio, setIdServicio] = useState("");

    // Cargar los prestadores desde la base de datos
    useEffect(() => {
        fetch('/api/prestadores')
            .then(response => response.json())
            .then(data => setPrestadores(data))
            .catch(error => console.error('Error al cargar prestadores:', error));
    }, []);

    // Crear un nuevo prestador
    const createPrestador = () => {
        fetch('/api/prestadores/crear', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre: newPrestador, correo, id_servicio: idServicio }),
        })
            .then(response => response.json())
            .then(data => {
                setPrestadores([...prestadores, data]);
                setNewPrestador("");
                setCorreo("");
                setIdServicio("");
            })
            .catch(error => console.error('Error al crear prestador:', error));
    };

    // Eliminar un prestador
    const deletePrestador = (id) => {
        fetch(`/api/prestadores/eliminar/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                setPrestadores(prestadores.filter(prestador => prestador.id !== id));
            })
            .catch(error => console.error('Error al eliminar prestador:', error));
    };

    return (
        <div>
            <header>
                <HeaderLog />
            </header>
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
                        placeholder="ID Servicio"
                    />
                    <button
                        onClick={createPrestador}
                        className="ml-2 p-2 bg-blue-500 text-white rounded-md"
                    >
                        Crear Prestador
                    </button>
                </div>

                {/* Tabla de prestadores */}
                <table className="min-w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-4">Nombre</th>
                            <th className="border border-gray-300 p-4">Correo</th>
                            <th className="border border-gray-300 p-4">Servicio</th>
                            <th className="border border-gray-300 p-4">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prestadores.map(prestador => (
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
        </div>
    );
}

export default GestionarPS;
