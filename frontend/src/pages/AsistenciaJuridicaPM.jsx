import React, { useState } from 'react';
import HeaderLog from '../component/NavLog.jsx';
import Footer from '../component/FooterPM.jsx';
import Fondo from '../img/fondologin.webp'; 
import Calendar from 'react-calendar'; // Importa el calendario
import 'react-calendar/dist/Calendar.css'; // Estilos del calendario


const AsistenciaJuridica = () => {
  const [date, setDate] = useState(new Date()); // Estado para la fecha seleccionada
  
  const handleDateChange = (newDate) => {
    setDate(newDate); // Actualiza la fecha seleccionada
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <header className='relative z-20'>
        <HeaderLog />
      </header>


      <main className="flex-1 flex justify-center relative" style={{ backgroundImage: `url(${Fondo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Superposición oscura solo sobre el contenido central */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        <div className='bg-white h-full w-full max-w-5xl mx-auto p-10 rounded-lg shadow-lg z-10 flex items-center relative'>
          <div className='w-full p-10'>
            <h1 className='text-center text-2xl font-bold mb-6'>Servicio de Asistencia Jurídica</h1>
            
            {/* Descripción centrada */}
            <p className="text-center mb-6 text-lg text-gray-700">
              Nuestro servicio de asistencia jurídica brinda orientación y apoyo legal para resolver problemas legales y proteger tus derechos.
            </p>
            
            {/* Contenedor en dos columnas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Columna izquierda */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-4 text-blue-600">Reserva de Hora</h2>
                  <p className="text-gray-700 mb-4">Selecciona un día para tu reserva:</p>
                  
                  {/* Calendario para seleccionar la fecha */}
                  <div className="mt-4">
                    <Calendar 
                      onChange={handleDateChange} 
                      value={date}
                      className="shadow-xl rounded-lg border-2 border-blue-500"
                    />
                  </div>
                </div>

                {/* Horas disponibles */}
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-4 text-blue-600">Horas Disponibles</h2>
                  <p className="text-gray-700 mb-4">Seleccione un horario disponible para su cita.</p>
                  <div className="flex gap-4 mt-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300">10:30 AM</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300">12:00 PM</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300">4:00 PM</button>
                  </div>
                </div>
              </div>

              {/* Columna derecha */}
              <div className="space-y-8">
                
                {/* Caja de Prestadores */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <h2 className="text-lg font-semibold mb-4 text-blue-600">Prestadores</h2>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Lic. Daniela Rojas - Abogada Civil</li>
                    <li>Dr. Andrés González - Asesor Legal</li>
                    <li>Lic. Patricia Vargas - Experta en Derecho Familiar</li>
                  </ul>
                </div>

                {/* Caja de Servicios */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <h2 className="text-lg font-semibold mb-4 text-blue-600">Servicios</h2>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Asesoría en Derecho Civil</li>
                    <li>Resolución de Conflictos Legales</li>
                    <li>Gestión de Documentación Jurídica</li>
                    <li>Orientación en Temas de Familia</li>
                  </ul>
                </div>


              </div>

            </div>
          </div>
        </div>

      </main>

      <footer>
        <Footer />

      </footer>
    </div>
  );
};

export default AsistenciaJuridica;