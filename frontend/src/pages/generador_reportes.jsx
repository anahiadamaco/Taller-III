import React, { useState } from "react";
import HeaderLog from '../component/NavLog.jsx';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function GenerarReportes() {
  // Estados para controlar el tipo de gráfico y rango de tiempo para PM y PS
  const [rangoTiempoPM, setRangoTiempoPM] = useState('mes');
  const [rangoTiempoPS, setRangoTiempoPS] = useState('mes');
  const [tipoGraficoPM, setTipoGraficoPM] = useState('barras');  // Para PM
  const [tipoGraficoPS, setTipoGraficoPS] = useState('barras');  // Para PS

  // Datos de ejemplo para gráficos
  const dataMensualPM = [
    { tiempo: 'Enero', asistencias: 65 },
    { tiempo: 'Febrero', asistencias: 59 },
    { tiempo: 'Marzo', asistencias: 80 },
  ];

  const dataSemanalPM = [
    { tiempo: 'Semana 1', asistencias: 20 },
    { tiempo: 'Semana 2', asistencias: 30 },
    { tiempo: 'Semana 3', asistencias: 50 },
  ];

  const dataDiariaPM = [
    { tiempo: 'Lunes', asistencias: 10 },
    { tiempo: 'Martes', asistencias: 12 },
    { tiempo: 'Miércoles', asistencias: 15 },
  ];

  const dataMensualPS = [
    { tiempo: 'Enero', uso: 75 },
    { tiempo: 'Febrero', uso: 85 },
    { tiempo: 'Marzo', uso: 95 },
  ];

  const dataSemanalPS = [
    { tiempo: 'Semana 1', uso: 25 },
    { tiempo: 'Semana 2', uso: 35 },
    { tiempo: 'Semana 3', uso: 40 },
  ];

  const dataDiariaPS = [
    { tiempo: 'Lunes', uso: 15 },
    { tiempo: 'Martes', uso: 20 },
    { tiempo: 'Miércoles', uso: 25 },
  ];

  // Función para obtener los datos según el rango de tiempo
  const obtenerDatosPM = () => {
    switch (rangoTiempoPM) {
      case 'mes': return dataMensualPM;
      case 'semana': return dataSemanalPM;
      case 'dia': return dataDiariaPM;
      default: return dataMensualPM;
    }
  };

  const obtenerDatosPS = () => {
    switch (rangoTiempoPS) {
      case 'mes': return dataMensualPS;
      case 'semana': return dataSemanalPS;
      case 'dia': return dataDiariaPS;
      default: return dataMensualPS;
    }
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

        {/* Menús desplegables para rango de tiempo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Sección Personas Mayores (PM) */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">Personas Mayores (PM)</h2>
            <div className="flex justify-center mb-4">
              <select
                value={rangoTiempoPM}
                onChange={(e) => setRangoTiempoPM(e.target.value)}
                className="p-2 border border-gray-300 rounded"
              >
                <option value="mes">Mensual</option>
                <option value="semana">Semanal</option>
                <option value="dia">Diario</option>
              </select>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <ResponsiveContainer width="100%" height={400}>
                {tipoGraficoPM === 'barras' ? (
                  <BarChart data={obtenerDatosPM()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="tiempo" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="asistencias" fill="#8884d8" />
                  </BarChart>
                ) : (
                  <LineChart data={obtenerDatosPM()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="tiempo" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="asistencias" stroke="#8884d8" />
                  </LineChart>
                )}
              </ResponsiveContainer>
            </div>
            {/* Toggle para cambiar el tipo de gráfico de PM */}
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setTipoGraficoPM(tipoGraficoPM === 'barras' ? 'lineas' : 'barras')}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Cambiar a {tipoGraficoPM === 'barras' ? 'Gráfico de Líneas' : 'Gráfico de Barras'}
              </button>
            </div>
          </div>

          {/* Sección Prestador de Servicios (PS) */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">Prestador de Servicios (PS)</h2>
            <div className="flex justify-center mb-4">
              <select
                value={rangoTiempoPS}
                onChange={(e) => setRangoTiempoPS(e.target.value)}
                className="p-2 border border-gray-300 rounded"
              >
                <option value="mes">Mensual</option>
                <option value="semana">Semanal</option>
                <option value="dia">Diario</option>
              </select>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <ResponsiveContainer width="100%" height={400}>
                {tipoGraficoPS === 'barras' ? (
                  <BarChart data={obtenerDatosPS()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="tiempo" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="uso" fill="#82ca9d" />
                  </BarChart>
                ) : (
                  <LineChart data={obtenerDatosPS()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="tiempo" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="uso" stroke="#82ca9d" />
                  </LineChart>
                )}
              </ResponsiveContainer>
            </div>
            {/* Toggle para cambiar el tipo de gráfico de PS */}
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setTipoGraficoPS(tipoGraficoPS === 'barras' ? 'lineas' : 'barras')}
                className="bg-green-500 text-white py-2 px-4 rounded"
              >
                Cambiar a {tipoGraficoPS === 'barras' ? 'Gráfico de Líneas' : 'Gráfico de Barras'}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default GenerarReportes;
