import React, {useState} from "react";
import HeaderLog from '../component/NavLog.jsx';
import { Link } from "react-router-dom"; 
import FooterPS from "../component/FooterPS.jsx";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function HomeAdmin() {
  // Estados para controlar el tipo de gráfico y rango de tiempo para PM y PS
  const [rangoTiempoPM, setRangoTiempoPM] = useState('mes');
  const [rangoTiempoPS, setRangoTiempoPS] = useState('mes');
  const [tipoGraficoPM, setTipoGraficoPM] = useState('barras');  // Para PM
  const [tipoGraficoPS, setTipoGraficoPS] = useState('barras');  // Para PS

  // Datos de ejemplo para gráficos
  const dataMensualPM = [
    { tiempo: 'Enero', Atenciones: 65 },
    { tiempo: 'Febrero', Atenciones: 59 },
    { tiempo: 'Marzo', Atenciones: 80 },
  ];

  const dataSemanalPM = [
    { tiempo: 'Semana 1', Atenciones: 20 },
    { tiempo: 'Semana 2', Atenciones: 30 },
    { tiempo: 'Semana 3', Atenciones: 50 },
  ];

  const dataDiariaPM = [
    { tiempo: 'Lunes', Atenciones: 10 },
    { tiempo: 'Martes', Atenciones: 12 },
    { tiempo: 'Miércoles', Atenciones : 15 },
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
    { tiempo: 'Semana 4', uso: 40 },
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
    <div className="min-h-screen bg-white">
      {/* Encabezado */}
      <header className="bg-white shadow-md">
        <HeaderLog />
      </header>

      <div className="container mx-auto p-6">
        {/* Título principal */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Panel de Administración
        </h1>

        {/* Botones de gestión */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link
            to="/Admin/GestionarPS"
            className="p-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
          >
            Gestionar Prestadores
          </Link>
          <Link
            to="/Admin/Servicios"
            className="p-6 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
          >
            Administrar Servicios
          </Link>
          <Link
            to="/Admin/Reportes"
            className="p-6 bg-gradient-to-r from-yellow-500 to-yellow-400 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
          >
            Generar Reportes
          </Link>
          <Link
            to="/admin/gestion-operativos"
            className="p-6 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
          >
            Gestión de Operativos
          </Link>
        </div>
      </div>

      <main className="container mx-auto p-6">
        {/* Título principal */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Indicadores Clave
        </h1>

        {/* Menús desplegables para rango de tiempo */}
        <div className="grid bg-slate-500 rounded-lg  grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Sección Personas Mayores (PM) */}
          <div >
            <h2 className="text-2xl font-semibold mb-4 text-center my-4">Atenciones por Mes</h2>
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
            <div className="p-4 bg-white border-2 border-indigo-500 rounded-lg shadow-md mx-4">
              <ResponsiveContainer width="100%" height={400}>
                {tipoGraficoPM === 'barras' ? (
                  <BarChart data={obtenerDatosPM()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="tiempo" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Atenciones" fill="#8884d8" />
                  </BarChart>
                ) : (
                  <LineChart data={obtenerDatosPM()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="tiempo" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Atenciones" stroke="#8884d8" />
                  </LineChart>
                )}
              </ResponsiveContainer>
            </div>
            {/* Toggle para cambiar el tipo de gráfico de PM */}
            <div className="flex justify-center mt-4 p-4">
              <button
                onClick={() => setTipoGraficoPM(tipoGraficoPM === 'barras' ? 'lineas' : 'barras')}
                className="bg-indigo-500 text-white py-2 px-4 rounded"
              >
                Cambiar a {tipoGraficoPM === 'barras' ? 'Gráfico de Líneas' : 'Gráfico de Barras'}
              </button>
            </div>
          </div>

          {/* Sección Prestador de Servicios (PS) */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center my-4 ">Uso del servicio por prestador</h2>
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
            <div className="p-4 bg-white mx-4 border-2 border-green-300 rounded-lg shadow-md">
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
            <div className="flex justify-center mt-4 p-4">
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
      <footer>
        <FooterPS />

      </footer>
    </div>
      
  );

}

export default HomeAdmin;
