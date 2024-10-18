import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import HeaderLog from '../frontend/src/component/NavLog.jsx';

function AsistenciaJuridica() {
    // Datos para el gráfico (simulados)
    const data = [
        { day: '01', count: 0 },
        { day: '02', count: 0 },
        { day: '03', count: 0 },
        // ... (más datos)
        { day: '30', count: 0 },
        { day: '31', count: 0 }
    ];

    return (
        <div className="min-h-screen bg-gray-200 flex flex-col">
            <header>
                <HeaderLog />
            </header>

            <div className="bg-red-600 text-white text-center py-12">
                <h1 className="text-3xl font-bold mb-2">Administrador de Asistencia Jurídica</h1>
                <p className="text-lg">Gestión de servicios y especialistas.</p>
            </div>

            <div className="flex-grow p-4 grid grid-cols-1 gap-6">
                {/* Gráfico de Atención Mensual */}
                <div className="bg-white p-4 rounded-lg shadow-xl border-2 border-red-600">
                    <h2 className="text-xl font-bold text-red-700 mb-2">Gráfico de Atención Mensual</h2>
                    <LineChart width={300} height={200} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="count" stroke="#8884d8" />
                    </LineChart>
                </div>

                {/* Perfil del prestador de servicio */}
                <div className="bg-white p-4 rounded-lg shadow-xl border-2 border-red-600">
                    <h2 className="text-xl font-bold text-red-700 mb-2">Perfil del Prestador de Servicio</h2>
                    <div>
                        <h4><strong>Nombre:</strong> Juan Perez</h4>
                        <h4><strong>RUT:</strong> 12.345.678-9</h4>
                        <h4><strong>Correo:</strong> juan.perez@example.com</h4>
                        <h4><strong>Fono oficina:</strong> +56 9 1234 5678</h4>
                        <h4><strong>Título:</strong> Abogado</h4>
                    </div>
                </div>

                {/* Botones de acción */}
                <div className="grid grid-cols-1 gap-4">
                    <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300">Editar Horarios</button>
                    <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300">Editar Citas</button>
                    <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300">Editar Perfil</button>
                </div>
            </div>

            <footer className="bg-red-600 text-white text-center p-4">
                <p>© 2024 Municipalidad - Asistencia Jurídica</p>
            </footer>
        </div>
    );
}

export default AsistenciaJuridica;

