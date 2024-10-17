import React from 'react';

const Principal_movil2 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-900 p-4 flex justify-center items-center">
        <img src="logo-temuco.png" alt="Temuco Logo" className="h-12" />
      </header>

      <div className="flex-grow flex flex-col justify-center items-center text-center p-4">

        <h1 className="text-3xl font-semibold text-blue-900 mb-4">¡Bienvenid@!</h1>
        
        <p className="text-lg text-gray-700 mb-8">
          Nos alegra verte aquí. Selecciona una opción para comenzar.
        </p>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full max-w-xs mb-4">
          Opción 1
        </button>
        
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg w-full max-w-xs mb-4">
          Opción 2
        </button>

        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg w-full max-w-xs">
          Cerrar sesión
        </button>

      </div>
      
      <footer className="bg-blue-900 p-4 text-white text-center">
        <p className="text-sm">© 2024 Nombre de la Aplicación</p>
      </footer>
    </div>
  );
};

export default Principal_movil2;
