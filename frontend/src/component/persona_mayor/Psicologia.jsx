import React from 'react';
import './Psicologia.css';

const Psicologia = () => {
  return (
    <div className="psicologia-container">
      <header className="psicologia-header">
        <img src="logo-temuco.png" alt="Temuco Logo" className="logo" />
        <button className="logout-button">Cerrar sesión</button>
      </header>

      <div className="psicologia-content">

        <h1 className="psicologia-title">Psicología</h1>
        
        <div className="psicologia-schedule">
          <h2>Seleccionar horario</h2>
          <div className="schedule-box">
          </div>
        </div>

        <div className="psicologia-description">
          <h2>Lorem Ipsum</h2>
          <p>
            Sed feugiat et leo sed commodo. Nunc cursus diam vel nisi porttitor cursus. Quisque vel sapien sit amet 
            mauris blandit varius sed in enim. Sed quam odio sollicitudin id lectus ac, consectetur maximus augue.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Psicologia;