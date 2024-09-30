import React from "react";
import HeaderLog from '../component/NavLog.jsx';
import { Link } from "react-router-dom";


function HomeAdmin() {
    return (
    <div>
      <header>
        <HeaderLog/>
      </header>

      <h1 className="text-3xl font-bold mb-6 text-center">Panel de Administración</h1>

                {/* Botones para la gestión de prestadores, atenciones y reportes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link to="GestionarPS" className="p-4 bg-blue-500 text-white rounded-lg shadow-md text-center">
                        Gestionar Prestadores de Servicio
                    </Link>
                    <Link to="/admin/estadisticas" className="p-4 bg-blue-500 text-white rounded-lg shadow-md text-center">
                        Ver Estadísticas de Atenciones
                    </Link>
                    <Link to="/admin/reportes" className="p-4 bg-blue-500 text-white rounded-lg shadow-md text-center">
                        Generar Reportes
                    </Link>
                    <Link to="/admin/gestion-agendas" className="p-4 bg-blue-500 text-white rounded-lg shadow-md text-center">
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