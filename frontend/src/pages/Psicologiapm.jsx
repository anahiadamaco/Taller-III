import React, { useState } from 'react';
import HeaderLog from '../component/NavLog.jsx';

const Psicologia = () => {
  const [isCalendarOpen, setCalendarOpen] = useState(false);

  const toggleCalendar = () => {
    setCalendarOpen(!isCalendarOpen);
  };

  const personas = [
    { nombre: "Ana Perez", especialidad: "Terapia individual" },
    { nombre: "Luis Martinez", especialidad: "Terapia de pareja" },
    { nombre: "Carla Lopez", especialidad: "Terapia familiar" },
    { nombre: "Pedro González", especialidad: "Apoyo emocional" },
    { nombre: "Marta Fernández", especialidad: "Terapia grupal" },
    { nombre: "Jorge Ramirez", especialidad: "Psicología infantil" },
    { nombre: "Sofia Diaz", especialidad: "Psicología clínica" },
    { nombre: "Juan Rojas", especialidad: "Terapia cognitiva" },
    { nombre: "Laura Gutierrez", especialidad: "Terapia ocupacional" },
    { nombre: "Carlos Torres", especialidad: "Terapia conductual" },
  ];

  return (
    <div className="min-h-screen bg-gray-200 overflow-hidden flex flex-col">
      <header>
        <HeaderLog />
      </header>

      <div className="bg-green-500 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a Psicología</h1>
        <p className="text-2xl">Apoyo emocional para mejorar tu calidad de vida.</p>
      </div>

      <div className="flex-grow p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-xl border-2 border-green-500">
          <h1 className="text-2xl font-bold mb-4 text-green-700">Psicología</h1>
          <p className="text-2xl text-gray-700 mb-4">
            Ofrecemos terapia psicológica para ayudar a gestionar y mejorar tu bienestar emocional.
            Asistencia psicológica para ayudarte a superar tus desafíos emocionales y mentales, brindándote apoyo y tratamiento personalizado.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-green-500">
          <h2 className="text-xl font-bold text-green-700 mb-2">Seleccionar Horario</h2>
          <button
            onClick={toggleCalendar}
            className="text-2xl bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
          >
            Ver Calendario
          </button>
        </div>

        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-xl border-2 border-green-500">
          <h2 className="text-xl font-bold text-green-700 mb-2">Servicios Psicológicos Disponibles</h2>
          <ul className="text-2xl list-disc list-inside text-gray-700">
            <li>Terapia individual</li>
            <li>Terapia familiar</li>
            <li>Terapia de pareja</li>
            <li>Asesoramiento en salud mental</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-green-500 md:col-span-1 h-64 overflow-y-scroll">
          <h2 className="text-xl font-bold text-green-700 mb-4">Especialistas</h2>
          <div className="text-2xl grid grid-cols-1 gap-4">
            {personas.map((persona, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="bg-green-200 h-12 w-12 rounded-full"></div> {/* Avatar circle */}
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
              <h2 className="text-2xl font-bold text-green-700">Calendario de Psicología</h2>
              <button
                onClick={toggleCalendar}
                className="text-red-500 hover:text-red-700 font-bold"
              >
                Cerrar
              </button>
            </div>
            <div className="flex-grow overflow-auto">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=eff5da9c280da4b997f8cc2c5e8a649b62fffd71d0be5c347ef755f7e8817192%40group.calendar.google.com&ctz=America%2FSantiago"
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                title="Calendario de Psicología"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Psicologia;
