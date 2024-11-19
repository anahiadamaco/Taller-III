import React, { useState } from 'react';
import HeaderLog from '../component/NavLog.jsx';
import Footer from '../component/FooterPM.jsx';

const Peluqueria = () => {
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [selectedEspecialista, setSelectedEspecialista] = useState(null);
  const [isFormOpen, setFormOpen] = useState(false);

  const toggleCalendar = () => {
    setCalendarOpen(!isCalendarOpen);
  };

  const toggleModal = (especialista) => {
    setSelectedEspecialista(especialista ? especialista : null);
  };

  const toggleForm = () => {
    setFormOpen(!isFormOpen);
  };

  const personas = [
    { nombre: "Ana Perez", especialidad: "Cortes de cabello" },
    { nombre: "Luis Martinez", especialidad: "Tinturas y mechas" },
    { nombre: "Carla Lopez", especialidad: "Tratamientos capilares" },
  ];

  return (
    <div className="min-h-screen bg-gray-200 overflow-hidden flex flex-col">
      <header>
        <HeaderLog />
      </header>

      <div className="bg-sky-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a Peluquería</h1>
        <p className="text-2xl">Cuidado capilar para tu bienestar.</p>
      </div>

      <div className="flex-grow p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-xl border-2 border-sky-600">
          <h1 className="text-2xl font-bold mb-4 text-sky-700">Peluquería</h1>
          <p className="text-2xl text-gray-700 mb-4">
            Ofrecemos servicios profesionales de peluquería para todas tus necesidades capilares.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-sky-600 flex flex-col items-center">
          <h2 className="text-xl font-bold text-sky-700 mb-4">Seleccionar Horario</h2>
          <button
            onClick={toggleCalendar}
            className="text-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded w-full mb-2"
          >
            Ver Calendario
          </button>
          <button
            onClick={toggleForm}
            className="text-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Agendar Cita
          </button>
        </div>

        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-xl border-2 border-sky-600">
          <h2 className="text-xl font-bold text-sky-700 mb-2">Servicios Disponibles</h2>
          <ul className="text-2xl list-disc list-inside text-gray-700">
            <li>Cortes de cabello</li>
            <li>Coloración</li>
            <li>Tratamientos capilares</li>
            <li>Peinados y estilos especiales</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-sky-600 md:col-span-1 h-64 overflow-y-scroll">
          <h2 className="text-xl font-bold text-sky-700 mb-4">Especialistas</h2>
          <div className="text-2xl grid grid-cols-1 gap-4">
            {personas.map((persona, index) => (
              <div key={index} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-sky-200 h-12 w-12 rounded-full"></div>
                  <div>
                    <p className="text-gray-700 font-bold">{persona.nombre}</p>
                    <p className="text-gray-500">{persona.especialidad}</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleModal(persona)}
                  className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded"
                >
                  Ver
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedEspecialista && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-sky-700">
                {selectedEspecialista.nombre} - Especialidad
              </h2>
              <button
                onClick={() => toggleModal(null)}
                className="text-red-600 hover:text-red-700 font-bold"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-700 text-xl">
              Especialidad: {selectedEspecialista.especialidad}
            </p>
          </div>
        </div>
      )}

      {isCalendarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-full w-full md:max-w-4xl h-3/4 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-sky-700">Calendario de Peluquería</h2>
              <button
                onClick={toggleCalendar}
                className="text-red-600 hover:text-red-700 font-bold"
              >
                ✕
              </button>
            </div>
            <div className="flex-grow overflow-auto">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=your-calendar-id"
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                title="Calendario de Peluquería"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {isFormOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-sky-700">Agendar Cita</h2>
              <button
                onClick={toggleForm}
                className="text-red-600 hover:text-red-700 font-bold"
              >
                ✕
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sky-700 font-bold">Nombre</label>
                <input
                  type="text"
                  className="w-full border-2 border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sky-700 font-bold">Servicio</label>
                <select className="w-full border-2 border-gray-300 rounded px-3 py-2" required>
                  <option value="">Selecciona un servicio</option>
                  {personas.map((persona, index) => (
                    <option key={index} value={persona.especialidad}>
                      {persona.especialidad}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sky-700 font-bold">Fecha y Hora</label>
                <input
                  type="datetime-local"
                  className="w-full border-2 border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                Confirmar Cita
              </button>
            </form>
          </div>
        </div>
      )}

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Peluqueria;
