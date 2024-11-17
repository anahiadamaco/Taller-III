import React, { useState } from 'react';
import HeaderLog from '../component/NavLog.jsx';
import Footer from '../component/FooterPM.jsx';

const AsistenciaSocial = () => {
  const [isCalendarOpen, setCalendarOpen] = useState(false);

  const toggleCalendar = () => {
    setCalendarOpen(!isCalendarOpen);
  };

  const personas = [
    { nombre: "Ana Perez", especialidad: "Asesoramiento y orientación" },
    { nombre: "Luis Martinez", especialidad: "Asistencia de Abogado" },
    { nombre: "Carla Lopez", especialidad: "Defensa y representación" },
  ];

  return (
    <div className="min-h-screen bg-gray-200 overflow-hidden flex flex-col">
      <header>
        <HeaderLog />
      </header>

      <div className="bg-red-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a Asistencia Juridica</h1>
        <p className="text-2xl">Asesoría y apoyo legal para tu tranquilidad.</p>
      </div>

      <div className="flex-grow p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-xl border-2 border-red-600">
          <h1 className="text-2xl font-bold mb-4 text-red-700">Psicología</h1>
          <p className="text-2xl text-gray-700 mb-4">
            Brindamos apoyo y asesoramiento social para mejorar tu calidad de vida y sus relaciones sociales para una estabilidad mental en su vida y comunidad.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-red-600">
          <h2 className="text-xl font-bold text-red-700 mb-2">Seleccionar Horario</h2>
          <button
            onClick={toggleCalendar}
            className="text-2xl bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
          >
            Ver Calendario
          </button>
        </div>

        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-xl border-2 border-red-600">
          <h2 className="text-xl font-bold text-red-700 mb-2">Servicios Psicológicos Disponibles</h2>
          <ul className="text-2xl list-disc list-inside text-gray-700">
            <li>Asesoramiento legal</li>
            <li>Acompañamiento en trámites jurídicos</li>
            <li>Gestión de documentación legal</li>
            <li>Representación en casos legales</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-red-600 md:col-span-1 h-64 overflow-y-scroll">
          <h2 className="text-xl font-bold text-red-700 mb-4">Especialistas</h2>
          <div className="text-2xl grid grid-cols-1 gap-4">
            {personas.map((persona, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="bg-red-600 h-12 w-12 rounded-full"></div> {/* Avatar circle */}
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
              <h2 className="text-2xl font-bold text-red-700">Calendario de Psicología</h2>
              <button
                onClick={toggleCalendar}
                className="text-red-600 hover:text-red-700 font-bold"
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
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default AsistenciaSocial;