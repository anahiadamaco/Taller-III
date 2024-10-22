import React, { useState } from 'react';

const BuscarCitas = () => {
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [profesional, setProfesional] = useState('');
  const [tipoServicio, setTipoServicio] = useState('');
  const [resultado, setResultado] = useState('');

  // Datos simulados
  const citas = [
    { id: 1, profesional: 'Dr. Juan', servicio: 'Consulta médica', fecha: '2024-10-25' },
    { id: 2, profesional: 'Dra. María', servicio: 'Asesoría', fecha: '2024-10-26' },
    { id: 3, profesional: 'Dr. Juan', servicio: 'Consulta médica', fecha: '2024-10-27' }
  ];

  const buscarCitas = () => {
    // Filtrando citas simuladas en base a los datos ingresados por el usuario
    const resultados = citas.filter(cita =>
      (!profesional || cita.profesional === profesional) &&
      (!tipoServicio || cita.servicio === tipoServicio) &&
      (!fechaInicio || new Date(cita.fecha) >= new Date(fechaInicio)) &&
      (!fechaFin || new Date(cita.fecha) <= new Date(fechaFin))
    );

    // Mostramos el resultado en el estado
    setResultado(resultados.length > 0 ? resultados : 'No se encontraron citas.');
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Buscar Citas</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de inicio:</label>
        <input
          type="date"
          value={fechaInicio}
          onChange={(e) => setFechaInicio(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de fin:</label>
        <input
          type="date"
          value={fechaFin}
          onChange={(e) => setFechaFin(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Profesional:</label>
        <select
          value={profesional}
          onChange={(e) => setProfesional(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
        >
          <option value="">Selecciona un profesional</option>
          <option value="Dr. Juan">Dr. Juan</option>
          <option value="Dra. María">Dra. María</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de servicio:</label>
        <select
          value={tipoServicio}
          onChange={(e) => setTipoServicio(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
        >
          <option value="">Selecciona un servicio</option>
          <option value="Consulta médica">Consulta médica</option>
          <option value="Asesoría">Asesoría</option>
        </select>
      </div>

      <button
        onClick={buscarCitas}
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Buscar Citas
      </button>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Resultados:</h2>
        {Array.isArray(resultado) ? (
          <ul className="mt-4">
            {resultado.map((cita) => (
              <li key={cita.id} className="mb-2 p-4 bg-gray-100 rounded-lg shadow-sm">
                {`${cita.profesional} - ${cita.servicio} - ${cita.fecha}`}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-gray-600">{resultado}</p>
        )}
      </div>
    </div>
  );
};

export default BuscarCitas;
