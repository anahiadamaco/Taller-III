import React, { useState } from 'react';
import HeaderLog from '../component/NavLog.jsx';

const AsistenciaJuridica = () => {
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
        <h1 className="text-4xl font-bold mb-4">Asistencia Jurídica</h1>
        <p className="text-xl">Asesoría legal integral para adultos mayores.</p>
      </section>
      <section className="py-12 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Asesoría Legal Personalizada</h3>
            <p className="text-gray-700 mb-4">
              Consulta individual para resolver tus dudas legales y ofrecerte orientación.
            </p>
            <button className='text-white bg-blue-500 py-2 px-4 rounded'>Ver más</button>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Redacción de Documentos Legales</h3>
            <p className="text-gray-700 mb-4">
              Elaboración de testamentos, contratos y otros documentos necesarios.
            </p>
            <button className='text-white bg-blue-500 py-2 px-4 rounded'>Ver más</button>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Representación Legal</h3>
            <p className="text-gray-700 mb-4">
              Defensa y representación en juicios y audiencias según sea necesario.
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
            <label>
              <input
                type="text"
                placeholder="Nombre completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 border border-gray-300 rounded-md"
                required
              />
            </label>
            <label>
              <input
                type="tel"
                placeholder="Teléfono de contacto"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="p-2 border border-gray-300 rounded-md"
                required
              />
            </label>
            <label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="p-2 border border-gray-300 rounded-md"
                required
              />
            </label>
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

export default AsistenciaJuridica;
