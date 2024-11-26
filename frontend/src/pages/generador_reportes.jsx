import React, { useState } from "react";
import HeaderLog from '../component/NavLog.jsx';
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

function GenerarReportes() {
  const [rangoTiempoPM, setRangoTiempoPM] = useState('mes');
  const [rangoTiempoPS, setRangoTiempoPS] = useState('mes');
  const [tipoGraficoPM, setTipoGraficoPM] = useState('barras');
  const [tipoGraficoPS, setTipoGraficoPS] = useState('barras');

  // Ejemplo de datos con asistencia, inasistencia y faltantes
  const dataMensualPM = [
    { tiempo: 'Enero', asistencias: 65, inasistencias: 35 },
    { tiempo: 'Febrero', asistencias: 59, inasistencias: 41 },
    { tiempo: 'Marzo', asistencias: 80, inasistencias: 20 },
  ];

  const dataMensualPS = [
    { tiempo: 'Enero', uso: 75, faltantes: 25 },
    { tiempo: 'Febrero', uso: 85, faltantes: 15 },
    { tiempo: 'Marzo', uso: 95, faltantes: 5 },
  ];

  const obtenerDatosPM = () => {
    switch (rangoTiempoPM) {
      case 'mes': return dataMensualPM;
      default: return dataMensualPM;
    }
  };

  const obtenerDatosPS = () => {
    switch (rangoTiempoPS) {
      case 'mes': return dataMensualPS;
      default: return dataMensualPS;
    }
  };

  const generarPDFPM = () => {
    const doc = new jsPDF();
    const datos = obtenerDatosPM();
    const totalAsistencias = datos.reduce((total, item) => total + item.asistencias, 0);
    const totalInasistencias = datos.reduce((total, item) => total + item.inasistencias, 0);

    doc.setFontSize(16);
    doc.text("Reporte de Personas Mayores (PM)", 14, 20);
    doc.autoTable({
      startY: 30,
      head: [["Mes", "Asistencias", "Inasistencias"]],
      body: datos.map(d => [d.tiempo, d.asistencias, d.inasistencias]),
      foot: [["Totales", totalAsistencias, totalInasistencias]],
    });

    doc.save("reporte_PM.pdf");
  };

  const generarPDFPS = () => {
    const doc = new jsPDF();
    const datos = obtenerDatosPS();
    const totalUso = datos.reduce((total, item) => total + item.uso, 0);
    const totalFaltantes = datos.reduce((total, item) => total + item.faltantes, 0);

    doc.setFontSize(16);
    doc.text("Reporte de Prestadores de Servicios (PS)", 14, 20);
    doc.autoTable({
      startY: 30,
      head: [["Mes", "Uso", "Faltantes"]],
      body: datos.map(d => [d.tiempo, d.uso, d.faltantes]),
      foot: [["Totales", totalUso, totalFaltantes]],
    });

    doc.save("reporte_PS.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <HeaderLog />
      </header>

      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Generador de Reportes Estadísticos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Gráficos de PM */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">Personas Mayores (PM)</h2>
            <div className="flex justify-center mb-4">
              <select
                value={rangoTiempoPM}
                onChange={(e) => setRangoTiempoPM(e.target.value)}
                className="p-2 border border-gray-300 rounded"
              >
                <option value="mes">Mensual</option>
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
                    <Bar dataKey="asistencias" fill="#8884d8" name="Asistencias" />
                    <Bar dataKey="inasistencias" fill="#ff0000" name="Inasistencias" />
                  </BarChart>
                ) : (
                  <LineChart data={obtenerDatosPM()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="tiempo" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="asistencias" stroke="#8884d8" name="Asistencias" />
                    <Line type="monotone" dataKey="inasistencias" stroke="#ff0000" name="Inasistencias" />
                  </LineChart>
                )}
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
              <button
                onClick={() => setTipoGraficoPM(tipoGraficoPM === 'barras' ? 'lineas' : 'barras')}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Cambiar a {tipoGraficoPM === 'barras' ? 'Gráfico de Líneas' : 'Gráfico de Barras'}
              </button>
              <button
                onClick={generarPDFPM}
                className="bg-green-500 text-white py-2 px-4 rounded"
              >
                Exportar PDF PM
              </button>
            </div>
          </div>

          {/* Gráficos de PS */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">Prestador de Servicios (PS)</h2>
            <div className="flex justify-center mb-4">
              <select
                value={rangoTiempoPS}
                onChange={(e) => setRangoTiempoPS(e.target.value)}
                className="p-2 border border-gray-300 rounded"
              >
                <option value="mes">Mensual</option>
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
                    <Bar dataKey="uso" fill="#82ca9d" name="Uso" />
                    <Bar dataKey="faltantes" fill="#ff0000" name="Faltantes" />
                  </BarChart>
                ) : (
                  <LineChart data={obtenerDatosPS()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="tiempo" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="uso" stroke="#82ca9d" name="Uso" />
                    <Line type="monotone" dataKey="faltantes" stroke="#ff0000" name="Faltantes" />
                  </LineChart>
                )}
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
              <button
                onClick={() => setTipoGraficoPS(tipoGraficoPS === 'barras' ? 'lineas' : 'barras')}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Cambiar a {tipoGraficoPS === 'barras' ? 'Gráfico de Líneas' : 'Gráfico de Barras'}
              </button>
              <button
                onClick={generarPDFPS}
                className="bg-green-500 text-white py-2 px-4 rounded"
              >
                Exportar PDF PS
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default GenerarReportes;

