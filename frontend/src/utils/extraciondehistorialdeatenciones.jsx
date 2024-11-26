import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Configuración de Supabase
const supabaseUrl = 'https://tu-supabase-url.supabase.co'; // Reemplaza con tu URL de Supabase
const supabaseKey = 'tu-supabase-clave-publica'; // Reemplaza con tu clave pública
const supabase = createClient(supabaseUrl, supabaseKey);

const Historial = () => {
  const [historial, setHistorial] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistorial = async () => {
      try {
        const { data, error } = await supabase
          .from('historial') // Nombre de tu tabla
          .select('*') // columnas 
          .order('fecha', { ascending: false }); //  Se Ordena por fecha descendente

        if (error) {
          console.error('Error al obtener el historial:', error);
        } else {
          setHistorial(data);
        }
      } catch (err) {
        console.error('Error en la consulta:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistorial();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Cargando historial...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Historial de Atenciones</h1>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">ID</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Usuario</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Acción</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {historial.map((item, index) => (
              <tr
                key={item.id}
                className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
              >
                <td className="px-4 py-2 text-sm text-gray-700 border-b">{item.id}</td>
                <td className="px-4 py-2 text-sm text-gray-700 border-b">{item.usuario}</td>
                <td className="px-4 py-2 text-sm text-gray-700 border-b">{item.accion}</td>
                <td className="px-4 py-2 text-sm text-gray-700 border-b">
                  {new Date(item.fecha).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Historial;
