import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AsistenciaJuridica() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías manejar el envío del formulario
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 min-h-screen">
      <header className="flex flex-col md:flex-row justify-between items-center bg-white shadow-md rounded-lg p-4 mb-8">
        <div className="text-lg font-bold mb-4 md:mb-0">Logo Muni Temuco</div>
        <nav className="flex flex-wrap gap-4 mb-4 md:mb-0">
          <Link to="/asistente-social" className="hover:text-blue-500 cursor-pointer">Asistente social</Link>
          <Link to="/fonoaudiologia" className="hover:text-blue-500 cursor-pointer">Fonoaudiología</Link>
          <Link to="/podologia" className="hover:text-blue-500 cursor-pointer">Podología</Link>
          <Link to="/peluqueria" className="hover:text-blue-500 cursor-pointer">Peluquería</Link>
          <Link to="/kinesiologia" className="hover:text-blue-500 cursor-pointer">Kinesiología</Link>
          <Link to="/psicologia" className="hover:text-blue-500 cursor-pointer">Psicología</Link>
        </nav>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">Cerrar sesión</button>
      </header>

      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Asistencia Jurídica</h2>
        <p className="text-gray-700 mb-4">Ofrecemos asistencia jurídica completa para ayudarte a resolver tus problemas legales. Nuestros abogados están capacitados para proporcionar asesoramiento y representación en diversas áreas del derecho.</p>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Servicios Disponibles</h3>
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b">Servicio</th>
                <th className="py-2 px-4 border-b">Descripción</th>
                <th className="py-2 px-4 border-b">Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Asesoría Legal</td>
                <td className="py-2 px-4 border-b">Consulta legal para resolver dudas y problemas legales.</td>
                <td className="py-2 px-4 border-b">$100 por hora</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Representación en Juicios</td>
                <td className="py-2 px-4 border-b">Representación legal en procesos judiciales.</td>
                <td className="py-2 px-4 border-b">$500 por caso</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Redacción de Documentos</td>
                <td className="py-2 px-4 border-b">Elaboración de documentos legales y contratos.</td>
                <td className="py-2 px-4 border-b">$150 por documento</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Solicitar Asistencia</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
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
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Enviar Solicitud</button>
          </form>
        </div>
      </section>

      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Muni Temuco. Todos los derechos reservados.</p>
        <p>Contacto: info@munitemuco.cl | Teléfono: (555) 123-4567</p>
      </footer>
    </div>
  );
}

export default AsistenciaJuridica;
