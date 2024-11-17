import React, { useState } from 'react';
import HeaderLog from '../component/NavLog.jsx';
import Footer from '../component/FooterPM.jsx';
import Fondo from '../img/fondologin.webp'; 
import Calendar from 'react-calendar'; // Importa el calendario
import 'react-calendar/dist/Calendar.css'; // Estilos del calendario

const AsistenciaSocial = () => {
<<<<<<< HEAD
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
            <h1 className='text-center text-2xl font-bold mb-6'>Servicio de Asistencia Social</h1>
            
            {/* Descripción centrada */}
            <p className="text-center mb-6 text-lg text-gray-700">
              Nuestro servicio de asistencia social busca apoyar a las personas mayores en temas relacionados con beneficios sociales, orientación y acceso a recursos comunitarios.
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
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300">9:30 AM</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300">1:00 PM</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300">3:30 PM</button>
                  </div>
                </div>
              </div>

              {/* Columna derecha */}
              <div className="space-y-8">
                
                {/* Caja de Prestadores */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <h2 className="text-lg font-semibold mb-4 text-blue-600">Prestadores</h2>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Lic. Andrea Salinas - Trabajadora Social</li>
                    <li>Dr. Luis Martínez - Especialista en Programas Sociales</li>
                    <li>Lic. Paula Gómez - Gestión Comunitaria</li>
                  </ul>
                </div>

                {/* Caja de Servicios */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <h2 className="text-lg font-semibold mb-4 text-blue-600">Servicios</h2>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Orientación sobre beneficios sociales</li>
                    <li>Gestión de recursos comunitarios</li>
                    <li>Apoyo en trámites sociales</li>
                    <li>Asesoramiento en conflictos familiares</li>
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
=======
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    console.log('Nombre:', name);
    console.log('Teléfono:', phone);
    console.log('Fecha:', date);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <header>
        <HeaderLog />
      </header>
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4"> Asistencia Social</h1>
        <p className="text-xl">Apoyo integral para adultos mayores en su bienestar social.</p>
      </section>
      <section className="py-12 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Orientación Social</h3>
            <p className="text-gray-700 mb-4">
              Asesoramiento para acceder a recursos y servicios comunitarios.
            </p>
            <button className='text-white bg-blue-500 py-2 px-4 rounded'>Ver más</button>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Actividades Recreativas</h3>
            <p className="text-gray-700 mb-4">
              Programas para fomentar la socialización y el bienestar emocional.
            </p>
            <button className='text-white bg-blue-500 py-2 px-4 rounded'>Ver más</button>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Asistencia en Gestión de Servicios</h3>
            <p className="text-gray-700 mb-4">
              Ayuda para la gestión de trámites y servicios necesarios.
            </p>
            <button className='text-white bg-blue-500 py-2 px-4 rounded'>Ver más</button>
          </div>
        </div>
      </section>
      <section className="py-12 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Calendario de Eventos</h2>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=c_a616c7d9dee0f23b629cf457063b8264c2ce2ae1f9f84a4bc912686dcd45a824%40group.calendar.google.com&ctz=America%2FSantiago"
          className="border-0 w-full h-96"
          frameBorder="0"
          scrolling="no"
          title="Calendario de Google"
        ></iframe>
      </section>
      <section className="py-12 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Reservar una Cita</h2>
        <div className="bg-gray-400 p-8 rounded-lg shadow-lg">
          <h2 className="text-5xl text-center mb-4 text-white">Formulario de Reserva</h2>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <input
              type="text"
              placeholder="Nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Teléfono de contacto"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-gray-600 text-white py-3 rounded hover:bg-gray-700 transition duration-300"
          >
            Reservar Hora
          </button>
        </div>
      </section>
>>>>>>> Catalina
    </div>
  );
};

export default AsistenciaSocial;
