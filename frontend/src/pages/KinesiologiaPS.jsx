import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import HeaderLog from '../component/NavLog.jsx';

function Kinesiologia() {
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

            <div className="bg-green-600 text-white text-center py-16">
                <h1 className="text-4xl font-bold mb-4">Administrador de Kinesiología</h1>
                <p className="text-xl">Gestión de servicios y especialistas.</p>
            </div>

            <div className="flex-grow p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Gráfico de Atención Mensual */}
                <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-green-600">
                    <h2 className="text-xl font-bold text-green-700 mb-4">Gráfico de Atención Mensual</h2>
                    <LineChart width={500} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="count" stroke="#8884d8" />
                    </LineChart>
                </div>

                {/* Perfil del prestador de servicio */}
                <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-green-600">
                    <h2 className="text-xl font-bold text-green-700 mb-4">Perfil del Prestador de Servicio</h2>
                    <div>
                        <h4><strong>Nombre:</strong> Carlos Mendoza</h4>
                        <h4><strong>RUT:</strong> 12.345.678-9</h4>
                        <h4><strong>Correo:</strong> carlos.mendoza@example.com</h4>
                        <h4><strong>Fono oficina:</strong> +56 9 1234 5678</h4>
                        <h4><strong>Título:</strong> Kinesiólogo</h4>
                    </div>
                </div>
            </div>

            {/* Botones de acción */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300">Editar Horarios</button>
                <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300">Editar Citas</button>
                <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300">Editar Perfil</button>
            </div>

            <footer className="bg-green-600 text-white text-center p-6">
                <p>© 2024 Municipalidad - Kinesiología</p>
            </footer>
        </div>
    );
}

export default Kinesiologia;
