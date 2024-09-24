import React, { useState } from 'react';
import HeaderLog from '../component/NavLog.jsx';

const Peluqueria = () => {
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
        <h2 className="text-3xl font-semibold text-center mb-8">Nuestros Servicios de Peluquería</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Corte de Cabello', 'Coloración'].map((servicio, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <i className={`fas ${servicio === 'Corte de Cabello' ? 'fa-cut' : 'fa-paint-brush'} mr-2`}></i>
                {servicio}
              </h3>
              <p className="text-gray-700 mb-4">
                {servicio === 'Corte de Cabello'
                  ? 'Ofrecemos cortes modernos y clásicos para todos los estilos.'
                  : 'Realizamos coloraciones personalizadas y tratamientos para el cabello.'}
              </p>
              <button className='text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded transition-colors'>
                Ver más
              </button>
            </div>
          ))}
        </div>
      </section>
      
      <section className="py-12 px-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center mb-8">Estilos de Cortes de Pelo</h2>
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
        <h2 className="text-3xl font-semibold text-center mb-8">Horas Ocupadas y Desocupadas</h2>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=c_a616c7d9dee0f23b629cf457063b8264c2ce2ae1f9f84a4bc912686dcd45a824%40group.calendar.google.com&ctz=America%2FSantiago"
          className="border-0 w-full h-96 rounded-lg shadow-md"
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

      <footer className="py-8 px-4 bg-blue-600 text-white">
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-200"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-gray-200"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-gray-200"><i className="fab fa-twitter"></i></a>
        </div>
        <p className="text-center mt-4">© 2024 Peluquería. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Peluqueria;
