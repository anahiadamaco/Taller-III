import React from "react";
import HeaderLog from '../component/NavLog.jsx';
import { Link } from "react-router-dom";
import Graf from '../component/Grafico'; 

function HomeAdmin() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Encabezado */}
      <header className="bg-white shadow-md">
        <HeaderLog />
      </header>

      <main className="container mx-auto p-6"/>
        {/* Título principal */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Panel de Administración
        </h1>

        {/* Botones de gestión */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link
            to="/GestionarPS"
            className="p-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
          >
            Gestionar Prestadores
          </Link>
          <Link
            to="/Servicios"
            className="p-6 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
          >
            Administrar Servicios
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
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Indicadores Clave</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="p-4 bg-white rounded-lg shadow-md">
                            <h3 className="text-lg font-bold mb-2 text-center">Atenciones por Mes</h3>
                            {/*gráfico de barras aquí */}
                            <div className="h-64 bg-gray-200">Gráfico de barras</div>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-md">
                            <h3 className="text-lg font-bold mb-2 text-center">Uso del Servicio por Prestador</h3>
                            {/*gráfico de líneas aquí */}
                            <div className="h-64 bg-gray-200">Gráfico de líneas</div>
                        </div>
                    </div>
                </div>      
    </div>
  );
}

export default HomeAdmin;
