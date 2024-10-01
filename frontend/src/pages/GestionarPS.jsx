import React, { useState } from "react";
import HeaderLog from '../component/NavLog.jsx';

function GestionarPS() {
    // Estado simulado para los prestadores
    const [prestadores, setPrestadores] = useState([
        { id: 1, name: "Prestador 1" },
        { id: 2, name: "Prestador 2" },
        { id: 3, name: "Prestador 3" },
    ]);
    const [newPrestador, setNewPrestador] = useState("");

    // Simulación para eliminar un prestador
    const deletePrestador = (id) => {
        setPrestadores(prestadores.filter(prestador => prestador.id !== id));
    };

    // Simulación para crear un nuevo prestador
    const createPrestador = () => {
        const newId = prestadores.length ? prestadores[prestadores.length - 1].id + 1 : 1; // Genera un nuevo ID
        const newPrestadorData = { id: newId, name: newPrestador };
        setPrestadores([...prestadores, newPrestadorData]);
        setNewPrestador(""); // Limpiar el input
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
                    <button
                        onClick={createPrestador}
                        className="ml-2 p-2 bg-blue-500 text-white rounded-md"
                    >
                        Crear Prestador
                    </button>
                </div>

                <table className="min-w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-4">Nombre</th>
                            <th className="border border-gray-300 p-4">Acciones</th>
                            <th className="border border-gray-300 p-4">Servicio</th>
                            <th className="border border-gray-300 p-4">Correo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prestadores.map(prestador => (
                            <tr key={prestador.id} className="hover:bg-gray-100">
                                <td className="border border-gray-300 p-2">{prestador.name}</td>
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