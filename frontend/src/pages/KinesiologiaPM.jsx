import React, { useState } from 'react';
import HeaderLog from '../component/NavLog.jsx';
import Footer from '../component/FooterPM.jsx';
<<<<<<< HEAD
import Fondo from '../img/fondologin.webp'; 
import Calendar from 'react-calendar'; // Importa el calendario
import 'react-calendar/dist/Calendar.css'; // Estilos del calendario
=======
>>>>>>> Catalina

const Kinesiologia = () => {
  const [date, setDate] = useState(new Date()); // Estado para la fecha seleccionada
  
  const handleDateChange = (newDate) => {
    setDate(newDate); // Actualiza la fecha seleccionada
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <header className='relative z-20'>
        <HeaderLog />
      </header>

<<<<<<< HEAD
      <main className="flex-1 flex justify-center relative" style={{ backgroundImage: `url(${Fondo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Superposición oscura solo sobre el contenido central */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        <div className='bg-white h-full w-full max-w-5xl mx-auto p-10 rounded-lg shadow-lg z-10 flex items-center relative'>
          <div className='w-full p-10'>
            <h1 className='text-center text-2xl font-bold mb-6'>Servicio de Kinesiología</h1>
            
            {/* Descripción centrada */}
            <p className="text-center mb-6 text-lg text-gray-700">
              Nuestro servicio de kinesiología está diseñado para ayudarte en la rehabilitación física y mejora de tu movilidad.
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
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300">10:00 AM</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300">11:00 AM</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300">2:00 PM</button>
                  </div>
                </div>
              </div>

              {/* Columna derecha */}
              <div className="space-y-8">
                
                {/* Caja de Prestadores */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <h2 className="text-lg font-semibold mb-4 text-blue-600">Prestadores</h2>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Dr. Juan Torres - Especialista en Rehabilitación Física</li>
                    <li>Lic. Laura Pérez - Terapia de Movimiento</li>
                    <li>Lic. Miguel Rojas - Kinesiología Deportiva</li>
                  </ul>
                </div>

                {/* Caja de Servicios */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <h2 className="text-lg font-semibold mb-4 text-blue-600">Servicios</h2>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Rehabilitación Postquirúrgica</li>
                    <li>Ejercicios Terapéuticos</li>
                    <li>Manejo de Dolor Crónico</li>
                    <li>Kinesiología Deportiva</li>
                  </ul>
=======
      <div className="bg-green-500 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a Kinesiología</h1>
        <p className="text-2xl">Terapias para mejorar tu movilidad y bienestar físico.</p>
      </div>

      <div className="flex-grow p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-xl border-2 border-green-500">
          <h1 className="text-2xl font-bold mb-4 text-green-700">Kinesiología</h1>
          <p className="text-2xl text-gray-700 mb-4">
            Ofrecemos terapias de rehabilitación física y deportiva para ayudarte a mejorar tu salud y calidad de vida.
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
          <h2 className="text-xl font-bold text-green-700 mb-2">Servicios Kinesiológicos Disponibles</h2>
          <ul className="text-2xl list-disc list-inside text-gray-700">
            <li>Rehabilitación física</li>
            <li>Kinesiología deportiva</li>
            <li>Terapia respiratoria</li>
            <li>Rehabilitación neurológica</li>
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
>>>>>>> Catalina
                </div>

              </div>

            </div>
          </div>
        </div>
<<<<<<< HEAD
      </main>

      <footer>
        <Footer />
=======
      )}

      <footer>
        <Footer/>
>>>>>>> Catalina
      </footer>
    </div>
  );
};

export default Kinesiologia;
