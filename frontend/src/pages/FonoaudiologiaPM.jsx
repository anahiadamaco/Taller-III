import React, { useState } from 'react';
import HeaderLog from '../component/NavLog.jsx';

const Fonoaudiologia = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    if (!name || !phone || !date) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    
    console.log('Nombre:', name);
    console.log('Teléfono:', phone);
    console.log('Fecha:', date);
    alert("Cita reservada con éxito.");
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <header>
        <HeaderLog />
      </header>
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4"> Fonoaudiologia</h1>
        <p className="text-xl">Apoyo auditivo adultos mayores para en su bienestar.</p>
      </section>
      <section className="py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Terapia del Lenguaje</h3>
            <p className="text-gray-700 mb-4">Tratamos problemas relacionados con el habla y el lenguaje.</p>
            <button className='text-white bg-blue-500 py-2 px-4 rounded'>Ver más</button>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Rehabilitación Auditiva</h3>
            <p className="text-gray-700 mb-4">Proporcionamos soluciones para mejorar la audición.</p>
            <button className='text-white bg-blue-500 py-2 px-4 rounded'>Ver más</button>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Evaluación de Trastornos del Habla</h3>
            <p className="text-gray-700 mb-4">Realizamos evaluaciones exhaustivas para identificar trastornos.</p>
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

      <section className="py-12 px-4 bg-gray-200 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center mb-8">Reservar tu Cita</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 gap-4 mb-6">
            <input
              type="text"
              placeholder="Nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="tel"
              placeholder="Teléfono de contacto"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-300"
          >
            Reservar Hora
          </button>
        </div>
      </section>

    </div>
  );
};

export default Fonoaudiologia;
