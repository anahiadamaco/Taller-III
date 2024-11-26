import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';

const ModuloSugerencia = () => {
  // Estado con sugerencias de ejemplo
  const [suggestions, setSuggestions] = useState([
    {
      user: 'Javier Bilbao',
      date: 'Hace 3 semanas',
      suggestion: 'Agregar una sección de preguntas frecuentes.',
    },
    {
      user: 'Ana García',
      date: 'Hace 1 mes',
      suggestion: 'Mejorar la velocidad de carga de la página.',
    },
  ]);

  // Estado para manejar el formulario de nueva sugerencia
  const [newSuggestion, setNewSuggestion] = useState({ user: '', suggestion: '' });

  // Función para agregar una nueva sugerencia
  const addSuggestion = (e) => {
    e.preventDefault();
    const today = new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
    const updatedSuggestions = [
      ...suggestions,
      {
        ...newSuggestion,
        date: `Hoy (${today})`,
      },
    ];
    setSuggestions(updatedSuggestions);
    setNewSuggestion({ user: '', suggestion: '' }); // Restablecer el formulario
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-lg mt-6">
      {/* Encabezado */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-800 mb-1">Sugerencias para Mejorar</h1>
        <p className="text-gray-600 text-sm">¡Ayúdanos a mejorar con tus ideas!</p>
      </div>

      {/* Formulario para agregar una nueva sugerencia */}
      <form onSubmit={addSuggestion} className="mt-8 bg-white p-5 rounded-xl shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">Agregar una Sugerencia</h2>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            value={newSuggestion.user}
            onChange={(e) => setNewSuggestion({ ...newSuggestion, user: e.target.value })}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            placeholder="Tu nombre"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Sugerencia</label>
          <textarea
            value={newSuggestion.suggestion}
            onChange={(e) => setNewSuggestion({ ...newSuggestion, suggestion: e.target.value })}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            placeholder="Escribe tu sugerencia..."
            rows="3"
            required
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Enviar Sugerencia <FiSend className="ml-2 text-lg" />
        </button>
      </form>

      {/* Lista de Sugerencias */}
      <div className="mt-8 space-y-6">
        {suggestions.map((suggestion, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-blue-800">{suggestion.user}</p>
              <p className="text-xs text-gray-500">{suggestion.date}</p>
            </div>
            <p className="mt-2 text-gray-700">{suggestion.suggestion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModuloSugerencia;
