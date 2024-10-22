import React, { useState } from "react";
import HeaderLog from '../component/NavLog.jsx';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function GenerarReportes() {
  const [rangoTiempo, setRangoTiempo] = useState('mes');
  const [tipoGrafico, setTipoGrafico] = useState('barras'); 

  const datosServicios = {
    dia: [
      { nombre: 'Asistencia Jurídica', uso: 15 },
      { nombre: 'Asistencia Social', uso: 10 },
      { nombre: 'Fonoaudiología', uso: 5 },
      { nombre: 'Kinesiología', uso: 8 },
      { nombre: 'Peluquería', uso: 7 },
      { nombre: 'Podología', uso: 3 },
      { nombre: 'Psicología', uso: 12 },
    ],
    semana: [
      { nombre: 'Asistencia Jurídica', uso: 70 },
      { nombre: 'Asistencia Social', uso: 50 },
      { nombre: 'Fonoaudiología', uso: 30 },
      { nombre: 'Kinesiología', uso: 40 },
      { nombre: 'Peluquería', uso: 35 },
      { nombre: 'Podología', uso: 25 },
      { nombre: 'Psicología', uso: 60 },
    ],
    mes: [
      { nombre: 'Asistencia Jurídica', uso: 120 },
      { nombre: 'Asistencia Social', uso: 95 },
      { nombre: 'Fonoaudiología', uso: 75 },
      { nombre: 'Kinesiología', uso: 110 },
      { nombre: 'Peluquería', uso: 85 },
      { nombre: 'Podología', uso: 60 },
      { nombre: 'Psicología', uso: 130 },
    ],
  };

  const obtenerDatosServicios = () => {
    return datosServicios[rangoTiempo]; 
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Encabezado */}
      <header className="bg-white shadow-md">
        <HeaderLog />
      </header>

      <main className="container mx-auto p-6">
        {/* Título principal */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Generador de Reportes Estadísticos
        </h1>

        {/* Sección Servicios Más Usados */}
        <div className="my-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">Servicios Más Usados</h2>
          <div className="flex justify-center mb-4">
            <select
              value={rangoTiempo}
              onChange={(e) => setRangoTiempo(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            >
              <option value="mes">Mensual</option>
              <option value="semana">Semanal</option>
              <option value="dia">Diario</option>
            </select>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <ResponsiveContainer width="100%" height={400}>
              {tipoGrafico === 'barras' ? (
                <BarChart data={obtenerDatosServicios()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="nombre" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="uso" fill="#82ca9d" />
                </BarChart>
              ) : (
                <LineChart data={obtenerDatosServicios()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="nombre" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="uso" stroke="#82ca9d" />
                </LineChart>
              )}
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setTipoGrafico(tipoGrafico === 'barras' ? 'lineas' : 'barras')}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Cambiar a {tipoGrafico === 'barras' ? 'Gráfico de Líneas' : 'Gráfico de Barras'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default GenerarReportes;
