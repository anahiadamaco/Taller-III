import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AsistenteSocial() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a una API
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 min-h-screen">
      <header className="bg-white shadow-md rounded-lg p-4 mb-8">
        <div className="text-lg font-bold">Logo Muni Temuco</div>
        <nav className="flex flex-wrap gap-4 mt-4">
          <Link to="/asistente-social" className="hover:text-blue-500 cursor-pointer">Asistente social</Link>
          <Link to="/fonoaudiologia" className="hover:text-blue-500 cursor-pointer">Fonoaudiología</Link>
          <Link to="/podologia" className="hover:text-blue-500 cursor-pointer">Podología</Link>
          <Link to="/peluqueria" className="hover:text-blue-500 cursor-pointer">Peluquería</Link>
          <Link to="/kinesiologia" className="hover:text-blue-500 cursor-pointer">Kinesiología</Link>
          <Link to="/psicologia" className="hover:text-blue-500 cursor-pointer">Psicología</Link>
        </nav>
      </header>

      <main className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Solicitar Asistencia Social</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Enviar Solicitud
          </button>
        </form>
      </main>

      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Muni Temuco. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default AsistenteSocial;
