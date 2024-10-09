import React from 'react';
import HeaderLog from '../component/NavLog.jsx';

const Kinesiologia = () => {
  return ( 
    <div className="bg-gray-50 min-h-screen p-4">
      <header className="bg-blue-600 text-white py-4">
        <HeaderLog />
      </header>

      <section className="py-8 px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 sm:mb-8">Nuestros Servicios de Kinesiología</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {['Rehabilitación Física', 'Terapia Manual'].map((servicio, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-4 sm:p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center">
                <i className={`fas ${servicio === 'Rehabilitación Física' ? 'fa-dumbbell' : 'fa-hand-paper'} mr-2`}></i>
                {servicio}
              </h3>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                {servicio === 'Rehabilitación Física'
                  ? 'Ofrecemos programas de rehabilitación personalizados para mejorar la movilidad y reducir el dolor.'
                  : 'Utilizamos técnicas manuales para aliviar tensiones musculares y mejorar la función corporal.'}
              </p>
              <button className='text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded transition-colors'>
                Ver más
              </button>
            </div>
          ))}
        </div>
      </section>
      
      <section className="py-8 sm:py-12 px-2 sm:px-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 sm:mb-8">Ejercicios de Kinesiología</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
          {['exercise1.jpg', 'exercise2.jpg', 'exercise3.jpg'].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Ejercicio ${index + 1}`}
              className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          ))}
        </div>
      </section>

      <section className="py-8 sm:py-12 px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 sm:mb-8">Horas Ocupadas y Desocupadas y Cambio de Horas</h2>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=c_a616c7d9dee0f23b629cf457063b8264c2ce2ae1f9f84a4bc912686dcd45a824%40group.calendar.google.com&ctz=America%2FSantiago"
          className="border-0 w-full h-64 sm:h-96 rounded-lg shadow-md"
          frameBorder="0"
          scrolling="no"
          title="Calendario de Google"
        ></iframe>
      </section>    
      
      <footer className="py-8 px-2 sm:px-4 bg-blue-600 text-white">
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-200"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-gray-200"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-gray-200"><i className="fab fa-twitter"></i></a>
        </div>
        <p className="text-center mt-4 text-sm sm:text-base">© 2024 Kinesiología. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Kinesiologia;
