import React, { useState } from 'react';
import HeaderLog from '../component/NavLog.jsx';

const AsistenciaSocial = () => {
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
    alert("Cita reservada con éxito."); // Mensaje de confirmación
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <header className="bg-blue-600 text-white py-4">
        <HeaderLog />
      </header>

      <section className="py-12 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Servicios de Asistencia Social</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Orientación y asesoramiento social</h3>
            <p className="text-gray-700 mb-4">
              Brindamos apoyo para ayudar a las personas en situaciones de vulnerabilidad.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Apoyo en gestión de recursos</h3>
            <p className="text-gray-700 mb-4">
              Ofrecemos recursos para mejorar tu bienestar social y personal.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Asistencia en casos de emergencia</h3>
            <p className="text-gray-700 mb-4">
              Estamos aquí para ayudarte en situaciones críticas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center mb-8">Servicios Disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['image1.jpg', 'image2.jpg', 'image3.jpg'].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Trabajo ${index + 1}`}
              className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          ))}
        </div>
      </section>

      <section className="py-12 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Reservar Cita</h2>
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

      <footer className="py-8 px-4 bg-blue-600 text-white">
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-200"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-gray-200"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-gray-200"><i className="fab fa-twitter"></i></a>
        </div>
        <p className="text-center mt-4">© 2024 Asistencia Social. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default AsistenciaSocial;
