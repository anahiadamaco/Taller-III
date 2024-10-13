import React from "react";
import HeaderLog from '../component/NavLog.jsx';
import { Link } from "react-router-dom";

function HomeAdmin() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Encabezado */}
      <header className="bg-white shadow-md">
        <HeaderLog />
      </header>

      <main className="container mx-auto p-6">
        {/* Título principal */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Panel de Administración
        </h1>

        {/* Botones de gestión */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link
            to="/admin/GestionarPS"
            className="p-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
          >
            Gestionar Prestadores
          </Link>
          <Link
            to="/admin/estadisticas"
            className="p-6 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
          >
            Ver Estadísticas
          </Link>
          <Link
            to="/admin/reportes"
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

        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-center text-gray-700 mb-8">
            Indicadores Clave
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Gráfico de Atenciones por Mes */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">
                Atenciones por Mes
              </h3>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                {/* Aquí irá el gráfico de barras */}
                <span className="text-gray-500">Gráfico de barras</span>
              </div>
            </div>

            {/* Gráfico de Uso por Prestador */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">
                Uso del Servicio por Prestador
              </h3>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                {/* Aquí irá el gráfico de líneas */}
                <span className="text-gray-500">Gráfico de líneas</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomeAdmin;