import HeaderNoLog from '../component/NavNoLog';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Fondo from '../img/fondologin.webp'; // Importa la imagen de fondo
import FooterPM from '../component/FooterPM';

function Login() {
  const [rut, setRut] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rut, contrasena }),
    });
    
    if (!response.ok) {
      console.error('Error en la solicitud');
      return;
    }

    const data = await response.json();
    const { rol } = data.user;

    if (rol === 1) {
      navigate('/Admin');
    } else if (rol === 2) {
      navigate('/HPS');
    } else if (rol === 3) {
      navigate('/HPM');
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-cover bg-center"
      style={{ backgroundImage: `url(${Fondo})` }} // Aplica la imagen de fondo
    >
      {/* Filtro oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col flex-grow">
        <header>
          <HeaderNoLog />
        </header>

        <div className="container mx-auto w-full my-20 flex justify-center">
          <div className='bg-white p-10 rounded-md shadow-xl flex flex-col items-center'>
            <h1 className='text-2xl font-bold text-black text-center'>Bienvenido</h1>
            <h2 className="text-black text-center">Por favor inicie sesión</h2>
            <hr className="mt-2 bg-black shadow w-full" />

            <form className="flex flex-col space-y-6 bg-white p-8 rounded-lg shadow-md w-full max-w-md" onSubmit={handleLogin}>
              <div>
                <label htmlFor="rut" className='text-gray-700 font-semibold text-lg'>Rut:</label>
                <input
                  id="rut"
                  type="text"
                  placeholder="12345678-9"
                  className='w-full mt-2 p-4 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ringblue-500 focus:border-blue-500 transition text-lg'
                  autoComplete='off'
                  value={rut}
                  onChange={(e) => setRut(e.target.value)}
                  aria-label='Ingrese su Rut'
                  />
              </div>

              <div>
              <label htmlFor="password" className="text-gray-700 font-semibold text-lg">Contraseña:</label>
              <input
                id="password"
                type="password"
                placeholder='********'
                className="w-full mt-2 p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-lg"
                autoComplete='off'
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                aria-label='Ingrese su contraseña'
              />
              </div>

              <button
                type='submit'
                className='w-full py-4 bg-blue-600 text-white font-bold rounded-md shadow-lg hover:bg-blue-700 transition duration-300 text-lg'
                aria-label='Iniciar sesión'
              >
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer en la parte inferior */}
      <footer className="relative z-10">
        <FooterPM />
      </footer>
    </div>
  );
}

export default Login;