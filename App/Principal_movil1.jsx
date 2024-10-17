import React from 'react';

const Principal_movil1 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <header className="bg-blue-900 p-4 flex justify-between items-center">
        <img src="logo-temuco.png" alt="Temuco Logo" className="h-12" />
        <h1 className="text-white text-xl font-semibold">Bienvenid@</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">
          Cerrar sesión
        </button>
      </header>

      <div className="grid grid-cols-1 gap-4 mt-6">

        <button className="bg-blue-500 text-white py-4 rounded">Peluquería</button>
        <button className="bg-blue-500 text-white py-4 rounded">Podología</button>

        <button className="bg-green-500 text-white py-4 rounded">Psicología</button>
        <button className="bg-green-500 text-white py-4 rounded">Kinesiología</button>
        <button className="bg-green-500 text-white py-4 rounded">Fonoaudiología</button>

        <button className="bg-red-500 text-white py-4 rounded">Asistencia Social</button>
        <button className="bg-red-500 text-white py-4 rounded">Asistencia Jurídica</button>
      </div>

      <footer className="bg-blue-900 p-4 text-white text-center">
        <p className="text-sm">© 2024 Nombre de la Aplicación</p>
      </footer>
    </div>
  );
};

export default Principal_movil1;
