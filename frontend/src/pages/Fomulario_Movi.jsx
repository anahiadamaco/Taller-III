
import React from 'react';

const FormularioMovilidad = () => {
  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <form className="bg-white p-8 rounded  w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Formulario de Movilidad Reducida</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Ingresa tu nombre"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="correo">
            Correo Electrónico
          </label>
          <input
            id="correo"
            type="email"
            placeholder="Ingresa tu correo electrónico"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="movilidad">
            ¿Tienes movilidad reducida?
          </label>
          <select
            id="movilidad"
            className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Selecciona una opción</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="movilidad">
          ¿Cuál es el tipo de discapacidad que tienes?
          </label>
          <select
            id="movilidad"
            className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Selecciona una opción</option>
            <option value="si">Motora</option>
            <option value="no">Visual</option>
            <option value="no"> auditiva</option>
            <option value="no">Cognitiva</option>
            <option value="no">Intelectual</option>
            <option value="no">Visual y auditiva</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="movilidad">
          ¿Cuál es tu nivel de autonomía para realizar actividades diarias?
          </label>
          <select
            id="movilidad"
            className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Selecciona una opción</option>
            <option value="si">Totalmente autónomo</option>
            <option value="no">Parcialmente autónomo</option>   
            <option value="no">No autónomo</option>
            
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="movilidad">
          ¿Utilizas alguna ayuda para la movilidad?
          </label>
          <select
            id="movilidad"
            className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Selecciona una opción</option>
            <option value="si">Silla de ruedas</option>
            <option value="no">Baston</option>
            <option value="no">Palanca</option>
            <option value="no"></option>


           
            
          </select>
        </div>

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
