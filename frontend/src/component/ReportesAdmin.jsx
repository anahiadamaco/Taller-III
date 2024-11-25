import React, { useEffect, useState } from 'react';

const Reportes = () => {
  const [reportes, setReportes] = useState([]);
  const [isAdmin, setIsAdmin] = useState(true); // `true` para habilitar permisos de admin

  useEffect(() => {
    
    setIsAdmin(true); 

    // Obtener datos de la API
    fetch('http://localhost:5000/api/reportes')
      .then(response => response.json())
      .then(data => setReportes(data))
      .catch(error => console.error('Error al obtener los reportes:', error));
  }, []);

  if (!isAdmin) {
    return <p>No tienes permisos para ver esta página.</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Lista de Reportes</h1>
      <table className="table-auto w-full bg-white shadow-md rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Título</th>
            <th className="px-4 py-2">Descripción</th>
            <th className="px-4 py-2">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {reportes.map((reporte, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{reporte.id}</td>
              <td className="px-4 py-2">{reporte.titulo}</td>
              <td className="px-4 py-2">{reporte.descripcion}</td>
              <td className="px-4 py-2">{reporte.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reportes;
