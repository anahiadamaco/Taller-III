import React, { useState, useEffect } from "react";
import HeaderLog from '../component/NavLog.jsx';
import FooterPS from '../component/FooterPS.jsx';

function GestionarPS() {
    const [prestadores, setPrestadores] = useState([]);
    const [newPrestador, setNewPrestador] = useState("");
    const [correo, setCorreo] = useState("");
    const [idServicio, setIdServicio] = useState("");
    const [loading, setLoading] = useState(false);

    // Cargar los prestadores desde la base de datos
    useEffect(() => {
        fetchPrestadores();
    }, []);

    const fetchPrestadores = () => {
        setLoading(true);
        fetch('http://localhost:3308/api/prestadores')
            .then(response => response.json())
            .then(data => setPrestadores(data))
            .catch(error => console.error('Error al cargar prestadores:', error))
            .finally(() => setLoading(false));
    };

    // Crear un nuevo prestador
    const createPrestador = () => {
        if (!newPrestador || !correo || !idServicio) {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(correo)) {
            alert("Por favor, introduce un correo válido.");
            return;
        }

        setLoading(true);
        fetch('http://localhost:3308/api/prestadores/crear', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre: newPrestador, correo, id_servicio: idServicio }),
        })
        .then(response => response.json()) // Cambié aquí a .json()
        .then(data => {
            setPrestadores([...prestadores, data]); // Agrega el prestador al estado
            setNewPrestador("");
            setCorreo("");
            setIdServicio("");
        })
        .catch(error => console.error('Error al crear prestador:', error))
        .finally(() => setLoading(false));
    };

    // Eliminar un prestador
    const deletePrestador = (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este prestador?")) {
            setLoading(true);
            fetch(`http://localhost:3308/api/prestadores/eliminar/${id}`, {
                method: 'DELETE',
            })
            .then(() => {
                setPrestadores((prevPrestadores) => prevPrestadores.filter(prestador => prestador._id !== id));
            })
            .catch(error => console.error('Error al eliminar prestador:', error))
            .finally(() => setLoading(false));
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
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
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Nombre del Prestador"
                    />
                    <input
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md ml-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Correo"
                    />
                    <input
                        type="text"
                        value={idServicio}
                        onChange={(e) => setIdServicio(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md ml-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="ID Servicio"
                    />
                    <button
                        onClick={createPrestador}
                        className={`ml-2 p-2 ${loading ? "bg-gray-400" : "bg-blue-500"} text-white rounded-md`}
                        disabled={loading}
                    >
                        {loading ? "Creando..." : "Crear Prestador"}
                    </button>
                </div>

                {/* Indicador de carga */}
                {loading && <p className="text-blue-500">Cargando...</p>}

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
                            <tr key={prestador._id} className="hover:bg-gray-100">
                                <td className="border border-gray-300 p-2">{prestador.nombre}</td>
                                <td className="border border-gray-300 p-2">{prestador.correo}</td>
                                <td className="border border-gray-300 p-2">{prestador.id_servicio}</td>
                                <td className="border border-gray-300 p-2">
                                    <button
                                        onClick={() => deletePrestador(prestador._id)}
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

            <footer className="mt-auto">
                <FooterPS />
            </footer>
        </div>

        
    );
}

export default GestionarPS;
