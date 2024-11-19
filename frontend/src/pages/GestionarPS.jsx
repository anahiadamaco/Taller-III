import React, { useState } from "react";
import HeaderLog from "../component/NavLog.jsx";
import FooterPS from "../component/FooterPS.jsx";

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
