import React, { useState } from 'react';
import HeaderLog from '../component/NavLog.jsx';

const Podologia = () => {
  const [isCalendarOpen, setCalendarOpen] = useState(false);

  const toggleCalendar = () => {
    setCalendarOpen(!isCalendarOpen);
  };

  const personas = [
    { nombre: "Dr. Roberto Santos", especialidad: "Cuidado de pies diabéticos" },
    { nombre: "Dra. Lucia Herrera", especialidad: "Podología deportiva" },
    { nombre: "Dr. Mario López", especialidad: "Tratamiento de uñas encarnadas" },
    { nombre: "Dra. Isabel Perez", especialidad: "Rehabilitación podal" },
    { nombre: "Dr. Carlos García", especialidad: "Terapias ortopédicas" },
  ];

  return (
    <div className="min-h-screen bg-gray-200 overflow-hidden flex flex-col">
      <header>
        <HeaderLog />
      </header>

      <div className="bg-sky-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a Podología</h1>
        <p className="text-2xl">Cuidado y atención especializada para la salud de tus pies.</p>
      </div>

      <div className="flex-grow p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-xl border-2 border-sky-600">
          <h1 className="text-2xl font-bold mb-4 text-sky-700">Podología</h1>
          <p className="text-2xl text-gray-700 mb-4">
            Ofrecemos tratamientos podológicos para mejorar la salud de tus pies, brindando atención personalizada en diversas áreas.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-sky-600">
          <h2 className="text-xl font-bold text-sky-700 mb-2">Seleccionar Horario</h2>
          <button
            onClick={toggleCalendar}
            className="text-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
          >
            Ver Calendario
          </button>
        </div>

        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-xl border-2 border-sky-600">
          <h2 className="text-xl font-bold text-sky-700 mb-2">Servicios Podológicos Disponibles</h2>
          <ul className="text-2xl list-disc list-inside text-gray-700">
            <li>Cuidado de pies diabéticos</li>
            <li>Tratamiento de uñas encarnadas</li>
            <li>Podología deportiva</li>
            <li>Terapias ortopédicas</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-sky-600 md:col-span-1 h-64 overflow-y-scroll">
          <h2 className="text-xl font-bold text-sky-700 mb-4">Especialistas</h2>
          <div className="text-2xl grid grid-cols-1 gap-4">
            {personas.map((persona, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="bg-sky-200 h-12 w-12 rounded-full"></div> {/* Avatar circle */}
                <div>
                  <p className="text-gray-700 font-bold">{persona.nombre}</p>
                  <p className="text-gray-500">{persona.especialidad}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isCalendarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-full w-full md:max-w-4xl h-3/4 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-sky-700">Calendario de Podología</h2>
              <button
                onClick={toggleCalendar}
                className="text-red-500 hover:text-red-700 font-bold"
              >
                Cerrar
              </button>
            </div>
            <div className="flex-grow overflow-auto">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=example_calendar"
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                title="Calendario de Podología"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Podologia;
