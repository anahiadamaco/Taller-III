import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HeaderLog from '../component/NavLog.jsx';
import FooterPM from '../component/FooterPM.jsx';
import ImgPerf from '../img/Perfil.png'; // Imagen de perfil
import Fondo from '../img/fondologin.webp'; // Fondo oscuro

const PerfilUsuarios = ({ rut }) => {
  const navigate = useNavigate();
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    // Hacer una solicitud GET al backend para obtener los datos del perfil
    axios.get(`/profile/${rut}`)
      .then(response => {
        setPerfil(response.data);
      })
      .catch(error => {
        console.error('Error al obtener el perfil:', error);
      });
  }, [rut]);

  // Verificar si los datos están cargando
  if (!perfil) {
    return <div>Cargando perfil...</div>;
  }

  const handleNavigate = () => {
    navigate('/RSH');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between" style={{ backgroundImage: `url(${Fondo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Header */}
      <header>
        <HeaderLog />
      </header>
      
      {/* Contenido principal */}
      <div className="flex-grow bg-opacity-75 bg-black p-6">
        {/* Datos personales */}
        <div className="bg-white border border-blue-600 shadow-md rounded-lg p-6 m-6">
          <h2 className="text-4xl font-bold text-blue-600 text-center mb-4"> Datos personales </h2>
          <div className="flex justify-between items-center">
            {/* Datos */}
            <div className="flex-1">
              <div className="text-2xl text-black mb-2"><strong> Nombre: </strong> {perfil.nombre} {perfil.apellido_paterno} {perfil.apellido_materno}</div>
              <div className="text-2xl text-black mb-2"><strong> RUT: </strong> {perfil.rut}</div>
              <div className="text-2xl text-black mb-2"><strong> Edad: </strong> {new Date().getFullYear() - new Date(perfil.fecha_nacimiento).getFullYear()}</div>
              <div className="text-2xl text-black mb-2"><strong> Fecha de nacimiento: </strong> {perfil.fecha_nacimiento}</div>
              <div className="text-2xl text-black mb-2"><strong> Número telefónico: </strong> {perfil.telefono}</div>
              <div className="text-2xl text-black mb-2"><strong> Correo electrónico: </strong> {perfil.correo}</div>
              <div className="text-2xl text-black mb-2"><strong> Modo de contacto: </strong> {perfil.mov_reducida ? 'Con movilidad reducida' : 'Sin movilidad reducida'}</div>

              <div className="text-2xl text-black mb-2 flex justify-center"> 
                <button type="submit" onClick={handleNavigate} className='border border-blue rounded-md bg-blue-300 hover:bg-blue-400 py-2 px-4 whitespace-nowrap'>Ingresar Registro Social de Hogar</button>
              </div>
              <div className="text-2xl text-black mb-2"><strong> Dirección: </strong> {perfil.direccion}</div>
            </div>
            
            {/* Foto de perfil */}
            <div className="flex justify-center items-center ml-6">
              <div className="w-64 h-64 rounded-full border-4 border-black overflow-hidden shadow-lg flex justify-center items-center">
                <img src={ImgPerf} alt="Foto de perfil" className="w-full h-full"/>
              </div>
            </div>
          </div>
          <button 
            onClick={() => navigate("/FEPPM")} 
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-blue-800">
            Editar Información
          </button>
        </div>

        {/* Datos médicos */}
        <div className="bg-white border border-blue-600 shadow-md rounded-lg p-6 m-6">
          <h2 className="text-4xl font-bold text-blue-600 text-center mb-4"> Datos médicos </h2>
          <div className="flex justify-between">
            <div className="flex-1 text-2xl text-black mb-2">
              <h3 className="text-center mb-2"><strong> Alergias </strong></h3>
              <ul className="list-disc pl-6">
                <li>{perfil.alergias || 'No especificado'}</li>
              </ul>
            </div>

            <div className="flex-1 text-2xl text-black mb-2">
              <h3 className="text-center mb-2"><strong> Condiciones Médicas </strong></h3>
              <ul className="list-disc pl-6">
                <li>{perfil.condiciones_medicas || 'No especificado'}</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex">
          {/* Citas Pendientes */}
          <div className="bg-white border border-blue-600 shadow-md rounded-lg p-6 m-2 w-1/2">
            <h2 className="text-4xl font-bold text-blue-600 text-center mb-4">Citas Pendientes</h2>
            <div className="text-2xl text-black text-center">No tienes citas pendientes</div>
          </div>

          {/* Historial de citas */}
          <div className="bg-white border border-blue-600 shadow-md rounded-lg p-6 m-2 w-1/2">
            <h2 className="text-4xl font-bold text-blue-600 text-center mb-4">Historial de citas</h2>
            <div className="text-2xl text-black text-center">Aún no tienes citas</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <FooterPM />
      </footer>
    </div>
  );
};

export default PerfilUsuarios;