import HeaderLog from '../component/NavLog.jsx';
import React from 'react';

const Fonoaudiologiaa = () => {
  return (
    
    <div className="bg-gray-50 min-h-screen">
      <header>
        <HeaderLog/>
      </header>
      <div className="bg-green-500 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a Nuestro Servicio de Fonoaudiología</h1>
        <p className="text-xl">Ayudamos a mejorar la comunicación y la audición.</p>
      </div>

      <section className="py-12 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg border-2 border-green-500">
            <h3 className="text-2xl font-bold mb-4">Terapia del Lenguaje</h3>
            <p className="text-gray-700 mb-4">Tratamos problemas relacionados con el habla y el lenguaje.</p>
            <button className='text-white-200 bg-green-500 py-2 px-4 rounded '> Ver mas</button>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg border-2 border-green-500">
            <h3 className="text-2xl font-bold mb-4">Rehabilitación Auditiva</h3>
            <p className="text-gray-700 mb-4">Proporcionamos soluciones para mejorar la audición.</p>
            <button  className='text-white-200 bg-green-500 py-2 px-4 rounded '> Ver mas</button>
           
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg border-2 border-green-500">
            <h3 className="text-2xl font-bold mb-4">Evaluación de Trastornos del Habla</h3>
            <p className="text-gray-700 mb-4">Realizamos evaluaciones exhaustivas para identificar trastornos.</p>
            <button  className='text-white-200 bg-green-500 py-2 px-4 rounded mb-4'> Ver mas</button>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-8">Sobre Nosotros</h2>
        <p className="text-center text-lg max-w-2xl mx-auto">
          Somos un equipo de profesionales dedicados a la fonoaudiología con años de experiencia.
        </p>
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
  <h2 className="text-3xl font-semibold text-center mb-8">Reserva tu Cita</h2>
  <div className="flex justify-center">
    <iframe
      src="https://calendly.com/cfonseca2022-alu/30min"
      className="w-full max-w-4xl h-96 border-0"
      frameBorder="0"
      title="Calendly"
    ></iframe>
  </div>
</section>

    </div>
  );
};

export default Fonoaudiologiaa;
