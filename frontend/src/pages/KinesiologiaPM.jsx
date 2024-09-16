import React, { useState } from "react";

const KinesiologiaM = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    console.log('Nombre:', name);
    console.log('Teléfono:', phone);
    console.log('Fecha:', date);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      {/* Encabezado */}
      <header className="bg-green-500 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Servicios de Kinesiología para Adultos Mayores</h1>
        <p className="text-xl">Atención integral para mejorar tu bienestar físico.</p>
      </header>

      <main className="py-12 px-4 grid grid-cols-2  gap-8">
        
        {/* Columna izquierda: Servicios */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-8">Nuestros Servicios</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Terapia de Rehabilitación</h3>
              <p className="text-gray-700 mb-4">
                Programas personalizados para recuperarte de lesiones o mejorar tu movilidad diaria.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Rehabilitación Postural</h3>
              <p className="text-gray-700 mb-4">
                Ayudamos a mejorar tu postura y aliviar dolores relacionados.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Terapia de Movilidad</h3>
              <p className="text-gray-700 mb-4">
                Mejora tu capacidad de movimiento y calidad de vida con nuestras sesiones de terapia física.
              </p>
            </div>
          </div>
        </section>

        {/* Columna derecha: Formulario de Reservas */}
        <section className="bg-gray-400 p-8 rounded-lg shadow-lg">
          <h2 className="text-5xl text-center mb-4">Reservar una Cita</h2>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <input
              type="text"
              placeholder="Nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Teléfono de contacto"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 transition duration-300"
          >
            Reservar Hora
          </button>
        </section>
      </main>
    </div>
  );
};

export default KinesiologiaM;
