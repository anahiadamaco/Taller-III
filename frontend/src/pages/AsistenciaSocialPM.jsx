import React, { useState } from "react";
import HeaderLog from "../component/NavLog.jsx";
import Footer from "../component/FooterPM.jsx";
import { GoogleLogin, googleLogout } from "@react-oauth/google";

const AsistenciaSocial = () => {
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [isFormOpen, setFormOpen] = useState(false);
  const [selectedEspecialista, setSelectedEspecialista] = useState(null);
  const [citas, setCitas] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState(null);

  const personas = [
    {
      nombre: "Ana Perez",
      especialidad: "Ejecución y evaluación de políticas",
      horarios: ["Lunes 9:00 - 12:00", "Miércoles 14:00 - 17:00", "Viernes 10:00 - 13:00"],
    },
    {
      nombre: "Luis Martinez",
      especialidad: "Programas y proyectos sociales",
      horarios: ["Martes 10:00 - 13:00", "Jueves 15:00 - 18:00", "Viernes 9:00 - 12:00"],
    },
    {
      nombre: "Carla Lopez",
      especialidad: "Gestión de personas y organizaciones",
      horarios: ["Lunes 14:00 - 17:00", "Miércoles 9:00 - 12:00", "Jueves 10:00 - 13:00"],
    },
  ];

  const handleLoginSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
    setAccessToken(token);
    setIsAuthenticated(true);
    alert("Inicio de sesión exitoso");
  };

  const handleLogout = () => {
    googleLogout();
    setAccessToken(null);
    setIsAuthenticated(false);
    alert("Sesión cerrada");
  };

  const toggleCalendar = () => {
    setCalendarOpen(!isCalendarOpen);
  };

  const toggleForm = () => {
    setFormOpen(!isFormOpen);
  };

  const toggleModal = (especialista) => {
    setSelectedEspecialista(especialista ? especialista : null);
  };

  const agendarCita = async (especialista, fechaHora) => {
    if (!especialista) {
      alert("Por favor, selecciona un especialista antes de agendar una cita.");
      return;
    }

    const citaExistente = citas.some(
      (cita) => cita.fechaHora === fechaHora && cita.especialista === especialista.nombre
    );

    if (citaExistente) {
      alert("Este horario ya está ocupado.");
      return;
    }

    const nuevaCita = {
      especialista: especialista.nombre,
      especialidad: especialista.especialidad,
      fechaHora: fechaHora,
    };

    // Crea el evento en Google Calendar si el usuario está autenticado
    if (accessToken) {
      try {
        const res = await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            summary: `Cita con ${especialista.nombre}`,
            description: `Especialidad: ${especialista.especialidad}`,
            start: {
              dateTime: fechaHora,
              timeZone: "America/Santiago",
            },
            end: {
              dateTime: new Date(new Date(fechaHora).getTime() + 3600000).toISOString(),
              timeZone: "America/Santiago",
            },
          }),
        });

        if (!res.ok) {
          throw new Error("Error al crear el evento en Google Calendar");
        }

        const data = await res.json();
        alert(`Evento creado con éxito. Detalles: ${data.htmlLink}`);
      } catch (error) {
        console.error(error);
        alert("No se pudo crear el evento en Google Calendar.");
      }
    } else {
      alert("Por favor, inicia sesión con Google para sincronizar tu calendario.");
    }

    // Actualiza las citas locales
    setCitas([...citas, nuevaCita]);
  };

  const onDateChange = (e) => {
    if (selectedEspecialista) {
      agendarCita(selectedEspecialista, e.target.value);
    } else {
      alert("Por favor, selecciona un especialista.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 overflow-hidden flex flex-col">
      <header>
        <HeaderLog />
      </header>

      <div className="bg-red-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a Asistencia Social</h1>
        <p className="text-2xl">Apoyo social para mejorar tu bienestar y calidad de vida.</p>
      </div>

      <div className="flex-grow p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-xl border-2 border-red-600">
          <h1 className="text-2xl font-bold mb-4 text-red-700">Asistencia Social</h1>
          <p className="text-2xl text-gray-700 mb-4">
            Ofrecemos apoyo social para mejorar la calidad de vida, el bienestar y las relaciones
            comunitarias.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-red-600 flex flex-col items-center">
          <h2 className="text-xl font-bold text-red-700 mb-4">Seleccionar Horario</h2>
          <button
            onClick={toggleCalendar}
            className="text-2xl bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full mb-2"
          >
            Ver Calendario
          </button>
          <button
            onClick={toggleForm}
            className="text-2xl bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Pedir Cita
          </button>
        </div>

        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-xl border-2 border-red-600">
          <h2 className="text-xl font-bold text-red-700 mb-2">Servicios Sociales Disponibles</h2>
          <ul className="text-2xl list-disc list-inside text-gray-700">
            <li>Apoyo emocional</li>
            <li>Asesoría en prestaciones sociales</li>
            <li>Orientación en recursos comunitarios</li>
            <li>Acompañamiento en procesos legales</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-red-600 md:col-span-1 h-64 overflow-y-scroll">
          <h2 className="text-xl font-bold text-red-700 mb-4">Especialistas</h2>
          <div className="text-2xl grid grid-cols-1 gap-4">
            {personas.map((persona, index) => (
              <div key={index} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-red-600 h-12 w-12 rounded-full"></div>
                  <div>
                    <p className="text-gray-700 font-bold">{persona.nombre}</p>
                    <p className="text-gray-500">{persona.especialidad}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => toggleModal(persona)}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2"
                  >
                    Ver
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedEspecialista && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-red-700">
                {selectedEspecialista.nombre} - Horarios
              </h2>
              <button
                onClick={() => toggleModal(null)}
                className="text-red-600 hover:text-red-700 font-bold"
              >
                Cerrar
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {selectedEspecialista.horarios.map((horario, idx) => (
                <div key={idx} className="p-4 bg-red-600 text-white rounded-lg">
                                    <p className="text-xl">{horario}</p>
                  <button
                    onClick={() => agendarCita(selectedEspecialista, `${new Date().toISOString().split('T')[0]}T${horario.split(' ')[1]}`)}
                    className="mt-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Agendar Cita
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {isCalendarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-red-700">Calendario</h2>
              <button
                onClick={toggleCalendar}
                className="text-red-600 hover:text-red-700 font-bold"
              >
                Cerrar
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {/* Aquí iría la integración con Google Calendar */}
              <p className="text-xl text-gray-700">Calendario de citas y horarios será mostrado aquí.</p>
            </div>
          </div>
        </div>
      )}

      {isFormOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-red-700">Formulario de Cita</h2>
              <button
                onClick={toggleForm}
                className="text-red-600 hover:text-red-700 font-bold"
              >
                Cerrar
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-xl font-semibold text-gray-700" htmlFor="especialista">
                  Selecciona un especialista
                </label>
                <select
                  id="especialista"
                  onChange={(e) => setSelectedEspecialista(personas.find(persona => persona.nombre === e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="">Selecciona un especialista</option>
                  {personas.map((persona, index) => (
                    <option key={index} value={persona.nombre}>
                      {persona.nombre} - {persona.especialidad}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xl font-semibold text-gray-700" htmlFor="fechaHora">
                  Fecha y hora
                </label>
                <input
                  type="datetime-local"
                  id="fechaHora"
                  onChange={onDateChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    if (selectedEspecialista) {
                      alert(`Cita agendada con ${selectedEspecialista.nombre}`);
                    } else {
                      alert("Por favor selecciona un especialista");
                    }
                  }}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Agendar
                </button>
              </div>
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

export default AsistenciaSocial;