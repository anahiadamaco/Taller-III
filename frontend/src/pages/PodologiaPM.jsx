import React, { useState } from 'react';
import HeaderLog from '../component/NavLog.jsx';

const Podologia = () => {
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    console.log('Fecha:', date);
  };

  const services = ['Corte de Uñas', 'Tratamiento de Callos', 'Masaje Podal', 'Pedicure'];

  return (
    <div className="bg-gray-50 min-h-screen overflow-hidden">
      {/* Encabezado */}
        <header>
          <HeaderLog/>
        </header>
      <div className="bg-sky-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a Podología para Adultos Mayores</h1>
        <p className="text-xl">Cuidando de tus pies con atención profesional.</p>
      </div>

      {/* Sección de Servicios */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg text-center border-2 border-sky-600">
              <h3 className="text-2xl font-bold mb-4">{service}</h3>
              <p className="text-gray-700 mb-4">Ofrecemos un servicio profesional para el tratamiento de {service.toLowerCase()}.</p>
              <button className="bg-sky-600 text-white py-2 px-4 rounded hover:bg-sky-900 transition duration-300">
                Ver más
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Formulario de Citas */}
      <section className="py-12 px-4 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center px-4 p-6">Agendar Cita</h2>
        <div className="max-w-md mx-auto grid grid-cols-1 sm:grid-cols-1 gap-4 mb-6">
         
        
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          onClick={handleSubmit}
          className=" mx-auto  bg-blue-500 text-white py-2 px-4 grid grid-cols-1   rounded hover:bg-blue-600 transition duration-300"
        >
          Agendar Cita
        </button>
      </section>

     
    </div>
  );
};

export default Podologia;
