import React from 'react';

const FormularioMovilidad = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Formulario de Movilidad Reducida</h2>

        {/* Nombre */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Ingresa tu nombre"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Correo Electrónico */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="correo">
            Correo Electrónico
          </label>
          <input
            id="correo"
            type="email"
            placeholder="Ingresa tu correo electrónico"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Movilidad Reducida */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="movilidadReducida">
            ¿Tienes movilidad reducida?
          </label>
          <select
            id="movilidadReducida"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Tipo de Discapacidad */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipoDiscapacidad">
            ¿Cuál es el tipo de discapacidad que tienes?
          </label>
          <select
            id="tipoDiscapacidad"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="motora">Motora</option>
            <option value="visual">Visual</option>
            <option value="auditiva">Auditiva</option>
            <option value="cognitiva">Cognitiva</option>
            <option value="intelectual">Intelectual</option>
            <option value="visual-auditiva">Visual y auditiva</option>
          </select>
        </div>

        {/* Nivel de Autonomía */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nivelAutonomia">
            ¿Cuál es tu nivel de autonomía para realizar actividades diarias?
          </label>
          <select
            id="nivelAutonomia"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="totalmente-autonomo">Totalmente autónomo</option>
            <option value="parcialmente-autonomo">Parcialmente autónomo</option>
            <option value="no-autonomo">No autónomo</option>
          </select>
        </div>

        {/* Ayuda para la Movilidad */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ayudaMovilidad">
            ¿Utilizas alguna ayuda para la movilidad?
          </label>
          <select
            id="ayudaMovilidad"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="silla-ruedas">Silla de ruedas</option>
            <option value="baston">Bastón</option>
            <option value="andador">Andador</option>
            <option value="sin-ayuda">Sin ayuda</option>
          </select>
        </div>

        {/* Pregunta Adicional: Servicios Requeridos */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="serviciosRequeridos">
            ¿Qué servicios adicionales necesitas?
          </label>
          <textarea
            id="serviciosRequeridos"
            placeholder="Especifica los servicios que necesitas"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="3"
          />
        </div>

        {/* Comentarios */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comentarios">
            Comentarios adicionales
          </label>
          <textarea
            id="comentarios"
            placeholder="Escribe tus comentarios aquí"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="3"
          />
        </div>

        {/* Botón Enviar */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioMovilidad;
