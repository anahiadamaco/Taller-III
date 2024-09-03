// src/components/FonoaudiologiaPage.js
import React from 'react';

const Fonoaudiologia = () => {
  return (
    <div className="fonoaudiologia-page">
      <header className="hero">
        <h1>Bienvenido a Nuestro Servicio de Fonoaudiología</h1>
        <p>Ayudamos a mejorar la comunicación y la audición.</p>
      </header>

      <section className="services">
        <h2>Nuestros Servicios</h2>
        <div className="service-card">
          <h3>Terapia del Lenguaje</h3>
          <p>Tratamos problemas relacionados con el habla y el lenguaje.</p>
        </div>
        <div className="service-card">
          <h3>Rehabilitación Auditiva</h3>
          <p>Proporcionamos soluciones para mejorar la audición.</p>
        </div>
        <div className="service-card">
          <h3>Evaluación de Trastornos del Habla</h3>
          <p>Realizamos evaluaciones exhaustivas para identificar trastornos.</p>
        </div>
      </section>

      <section className="about">
        <h2>Sobre Nosotros</h2>
        <p>Somos un equipo de profesionales dedicados a la fonoaudiología con años de experiencia.</p>
      </section>

      <section className="calendar">
        <h2>Calendario de Eventos</h2>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=c_a616c7d9dee0f23b629cf457063b8264c2ce2ae1f9f84a4bc912686dcd45a824%40group.calendar.google.com&ctz=America%2FSantiago"
          style={{ border: 0, width: '100%', height: '600px' }}
          frameBorder="0"
          scrolling="no"
          title="Calendario de Google"
        ></iframe>
      </section>
    </div>
  );
};

export default Fonoaudiologia;
