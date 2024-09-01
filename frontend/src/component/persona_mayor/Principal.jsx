import React from 'react';

const Principal = () => {
  return (
    <div className="principal-container">
      <header className="principal-header">
        <img src="logo-temuco.png" alt="Temuco Logo" className="logo" />
        <h1 className="welcome-message">Bienvenid@ (Nombre)</h1>
        <button className="logout-button">Cerrar sesión</button>
      </header>

      <div className="principal-grid">
        <div className="grid-item blue">Lorem Ipsum</div>
        <div className="grid-item green"></div>
        <div className="grid-item green"></div>
        <div className="grid-item blue"></div>
        <div className="grid-item green"></div>
        <div className="grid-item red"></div>
      </div>
    </div>
  );
}

export default Principal;
