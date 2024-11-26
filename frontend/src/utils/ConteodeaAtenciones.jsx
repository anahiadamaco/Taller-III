import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ConteoAtenciones = () => {
  const [atenciones, setAtenciones] = useState(0);

  // Obtener el conteo total al cargar la página
  useEffect(() => {
    axios.get('http://localhost:3001/atenciones')
      .then(response => setAtenciones(response.data.total))
      .catch(error => console.error('Error al obtener el conteo:', error));
  }, []);

  // Registrar una nueva atención
  const registrarAtencion = () => {
    const usuario_id = 1; // Cambia esto al ID real del usuario
    axios.post('http://localhost:3001/atenciones', { usuario_id })
      .then(() => {
        setAtenciones(atenciones + 1); // Incrementar el conteo localmente
      })
      .catch(error => console.error('Error al registrar la atención:', error));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Conteo de Atenciones</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-lg font-semibold mb-4">Atenciones Realizadas</h2>
        <p className="text-3xl font-bold mb-6">{atenciones}</p>
        
        <button
          onClick={registrarAtencion}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
        >
          Registrar Atención
        </button>
      </div>
    </div>
  );
};

export default ConteoAtenciones;
