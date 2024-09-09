import React from 'react';

const Principal = () => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr] bg-gray-100">

      <header className="bg-blue-900 p-4 flex justify-between items-center">
        <img src="logo-temuco.png" alt="Temuco Logo" className="h-12" />
        <h1 className="text-white text-2xl font-semibold">Bienvenid@ (Nombre)</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Cerrar sesión
        </button>
      </header>

      <div className="max-w-6xl mx-auto p-8 grid grid-cols-4 gap-4 bg-white rounded-lg shadow-lg mt-10">
        
        <div className="bg-blue-500 text-white p-4 rounded-lg text-center">Lorem Ipsum</div>
        <div className="bg-green-500 p-4 rounded-lg"></div>
        <div className="bg-green-500 p-4 rounded-lg"></div>
        <div className="bg-red-500 p-4 rounded-lg"></div>
        <div className="bg-blue-500 p-4 rounded-lg"></div>
        <div className="bg-green-500 p-4 rounded-lg"></div>
        <div className="bg-red-500 p-4 rounded-lg col-span-2"></div>

      </div>
    </div>
  );
}

export default Principal;
