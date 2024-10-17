import React, { useState } from 'react';
import HeaderLog from '../component/NavLog.jsx';
import { toast } from 'react-toastify'; // Para notificaciones

const AsistenciaJuridica = () => {
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [isScheduleOpen, setScheduleOpen] = useState(false);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [appointmentTime, setAppointmentTime] = useState('');

  const toggleCalendar = () => {
    setCalendarOpen(!isCalendarOpen);
  };

  const toggleSchedule = () => {
    setScheduleOpen(!isScheduleOpen);
  };

  const especialistas = [
    { 
      nombre: "Laura Pérez", 
      especialidad: "Derecho Familiar", 
      descripcion: "Especialista en casos de divorcio, custodia de hijos y pensiones alimenticias.",
      disponibilidad: { lunes: ["09:00-11:00", "14:00-16:00"], miércoles: ["10:00-12:00"] },
    },
    { 
      nombre: "Javier Torres", 
      especialidad: "Derecho Penal", 
      descripcion: "Abogado defensor con experiencia en delitos menores y casos complejos.",
      disponibilidad: { martes: ["10:00-14:00"], jueves: ["09:00-13:00"] },
    },
    { 
      nombre: "María Sánchez", 
      especialidad: "Derecho Laboral", 
      descripcion: "Asesora en conflictos laborales y derechos de los trabajadores.",
      disponibilidad: { lunes: ["11:00-15:00"], viernes: ["09:00-12:00"] },
    },
  ];

  const handleSpecialistClick = (especialista) => {
    setSelectedSpecialist(especialista);
    toast.success(`Has seleccionado a ${especialista.nombre}`);
  };

  const handleScheduleAppointment = () => {
    if (appointmentTime && selectedSpecialist) {
      toast.success(`Cita agendada con ${selectedSpecialist.nombre} para el ${appointmentTime}`);
      setAppointmentTime('');
      setScheduleOpen(false);
    } else {
      toast.error('Por favor, selecciona una hora y especialista.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      <header>
        <HeaderLog />
      </header>

      {/* Sección de Bienvenida */}
      <div className="bg-blue-600 text-white text-center py-6 sm:py-10">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Bienvenido a Asistencia Jurídica</h1>
        <p className="text-lg">Obtén el apoyo legal que necesitas con nuestros especialistas.</p>
      </div>

      <div className="flex-grow p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Servicios Jurídicos */}
        <div className="bg-white p-4 rounded-lg shadow-lg border-2 border-blue-600">
          <h2 className="text-xl font-bold mb-2 text-blue-700">Servicios Jurídicos</h2>
          <p className="text-gray-700 mb-4">
            Ofrecemos asistencia legal en diversas áreas para garantizar tus derechos.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Derecho Familiar</li>
            <li>Derecho Penal</li>
            <li>Derecho Laboral</li>
            <li>Asesoría en Contratos</li>
            <li>Litigios Civiles</li>
          </ul>
        </div>

        {/* Especialistas */}
        <div className="bg-white p-4 rounded-lg shadow-lg border-2 border-blue-600">
          <h2 className="text-xl font-bold text-blue-700 mb-4">Especialistas Disponibles</h2>
          <div className="space-y-2 overflow-y-auto h-48">
            {especialistas.map((especialista, index) => (
              <div 
                key={index} 
                onClick={() => handleSpecialistClick(especialista)}
                className="flex items-center gap-4 cursor-pointer hover:bg-blue-100 p-2 rounded transition duration-300"
              >
                <div className="bg-blue-600 h-10 w-10 rounded-full"></div> {/* Avatar circle */}
                <div>
                  <p className="text-gray-700 font-bold">{especialista.nombre}</p>
                  <p className="text-gray-500">{especialista.especialidad}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detalle del Especialista Seleccionado */}
        {selectedSpecialist && (
          <div className="bg-white p-4 rounded-lg shadow-lg border-2 border-blue-600">
            <h2 className="text-xl font-bold text-blue-700 mb-2">Detalle del Especialista</h2>
            <p className="text-gray-700"><strong>Nombre:</strong> {selectedSpecialist.nombre}</p>
            <p className="text-gray-700"><strong>Especialidad:</strong> {selectedSpecialist.especialidad}</p>
            <p className="text-gray-700"><strong>Descripción:</strong> {selectedSpecialist.descripcion}</p>
            <p className="text-gray-700"><strong>Disponibilidad:</strong></p>
            <ul className="list-disc list-inside text-gray-600">
              {Object.entries(selectedSpecialist.disponibilidad).map(([day, slots]) => (
                <li key={day}>{day.charAt(0).toUpperCase() + day.slice(1)}: {slots.join(", ")}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Botón para ver el horario */}
        <div className="bg-white p-4 rounded-lg shadow-lg border-2 border-blue-600">
          <h2 className="text-xl font-bold text-blue-700 mb-4">Seleccionar Horario</h2>
          <button
            onClick={toggleSchedule}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Ver Disponibilidad
          </button>
        </div>
      </div>

      {/* Ventana Emergente de Disponibilidad */}
      {isScheduleOpen && selectedSpecialist && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md transition-transform transform scale-100 sm:scale-110">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-blue-700">Disponibilidad de {selectedSpecialist.nombre}</h2>
              <button
                onClick={toggleSchedule}
                className="text-blue-600 hover:text-blue-700 font-bold"
              >
                Cerrar
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              {Object.entries(selectedSpecialist.disponibilidad).map(([day, slots]) => (
                <div key={day} className="border-b border-gray-300 pb-2">
                  <h3 className="font-bold text-lg text-gray-700">{day.charAt(0).toUpperCase() + day.slice(1)}</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {slots.map((slot, index) => (
                      <li key={index}>
                        <button 
                          onClick={() => { 
                            setAppointmentTime(`${day} ${slot}`); 
                            toggleSchedule(); 
                            toast.success(`Cita agendada con ${selectedSpecialist.nombre} para el ${day} a las ${slot}`);
                          }} 
                          className="text-blue-600 hover:underline cursor-pointer transition duration-200 hover:text-blue-700"
                        >
                          {slot}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Calendario Emergente */}
      {isCalendarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-3xl h-3/4 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-blue-700">Calendario de Asistencia Jurídica</h2>
              <button
                onClick={toggleCalendar}
                className="text-blue-600 hover:text-blue-700 font-bold"
              >
                Cerrar
              </button>
            </div>
            <div className="flex-grow overflow-auto">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=your_calendar_url"
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                title="Calendario de Asistencia Jurídica"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AsistenciaJuridica;
