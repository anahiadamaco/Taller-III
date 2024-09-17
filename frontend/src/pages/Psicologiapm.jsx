import React, { useState } from 'react';
import HeaderLog from '../component/NavLog.jsx';

const Psicologia = () => {
  const [isCalendarOpen, setCalendarOpen] = useState(false);

  const toggleCalendar = () => {
    setCalendarOpen(!isCalendarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-200 overflow-hidden">
      <header>
          <HeaderLog/>
      </header>

      <div className="bg-green-900 p-4 flex justify-between items-center">
        <img src="logo-temuco.png" alt="Temuco Logo" className="h-12" />
        <h1 className="text-white text-2xl font-semibold">Bienvenid@ (Nombre)</h1>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Cerrar sesión
        </button>
      </div>

      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-xl border-2 border-green-500">
          <h1 className="text-2xl font-bold mb-4 text-green-700">Psicología</h1>
          <p className="text-gray-700 mb-4">
            Ofrecemos asistencia psicológica para ayudarte a superar tus desafíos emocionales y mentales, brindándote apoyo y tratamiento personalizado.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-green-500">
          <h2 className="text-xl font-bold text-green-700 mb-2">Seleccionar Horario</h2>
          <button 
            onClick={toggleCalendar} 
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Ver Calendario
          </button>
        </div>

        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-xl border-2 border-green-500">
          <h2 className="text-xl font-bold text-green-700 mb-2">Servicios Psicológicos Disponibles</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Terapia individual</li>
            <li>Terapia de pareja</li>
            <li>Terapia familiar</li>
            <li>Apoyo emocional</li>
          </ul>
        </div>
      </div>

      {isCalendarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-4xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-green-700">Calendario de Psicología</h2>
              <button 
                onClick={toggleCalendar} 
                className="text-red-500 hover:text-red-700 font-bold"
              >
                Cerrar
              </button>
            </div>
            <iframe 
              src="https://calendar.google.com/calendar/embed?src=eff5da9c280da4b997f8cc2c5e8a649b62fffd71d0be5c347ef755f7e8817192%40group.calendar.google.com&ctz=America%2FSantiago" 
              style={{ border: 0 }} 
              width="100%" 
              height="600" 
              frameborder="0" 
              scrolling="no"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Psicologia;

