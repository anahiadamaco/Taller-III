import React, { useState } from 'react';

const FormularioCondicionesMedicas = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    condiciones: '',
    medicamentos: '',
    alergias: '',
    observaciones: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3308/api/condiciones-medicas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert(`Condición médica registrada con éxito. ID: ${result.id}`);
        setFormData({
          nombre: '',
          edad: '',
          condiciones: '',
          medicamentos: '',
          alergias: '',
          observaciones: '',
        });
      } else {
        const errorData = await response.json();
        console.error('Error al enviar los datos:', errorData);
        alert('Hubo un error al registrar la condición médica.');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('Error al conectar con el servidor.');
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Formulario de Condiciones Médicas</h2>

        {/* Nombre */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
            Nombre Completo
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Ingresa tu nombre completo"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        {/* Edad */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edad">
            Edad
          </label>
          <input
            id="edad"
            type="number"
            placeholder="Ingresa tu edad"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.edad}
            onChange={handleChange}
            required
          />
        </div>

        {/* Condiciones Médicas */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="condiciones">
            Condiciones Médicas
          </label>
          <textarea
            id="condiciones"
            placeholder="Ej. Diabetes, hipertensión"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="3"
            value={formData.condiciones}
            onChange={handleChange}
            required
          />
        </div>

        {/* Medicamentos */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medicamentos">
            Medicamentos Recetados
          </label>
          <textarea
            id="medicamentos"
            placeholder="Ej. Metformina, aspirina"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="3"
            value={formData.medicamentos}
            onChange={handleChange}
            required
          />
        </div>

        {/* Alergias */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="alergias">
            Alergias
          </label>
          <textarea
            id="alergias"
            placeholder="Ej. Alergia a penicilina"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="3"
            value={formData.alergias}
            onChange={handleChange}
          />
        </div>

        {/* Observaciones */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="observaciones">
            Observaciones Adicionales
          </label>
          <textarea
            id="observaciones"
            placeholder="Escribe aquí cualquier información adicional"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="3"
            value={formData.observaciones}
            onChange={handleChange}
          />
        </div>

        {/* Botón Enviar */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioCondicionesMedicas;
