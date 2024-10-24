import React, { useState } from 'react';
import HeaderLog from '../component/NavLog.jsx';

const AsistenciaSocial = () => {
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
    </div>
  );
};

export default AsistenciaSocial;
