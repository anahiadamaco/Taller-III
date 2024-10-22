import HeaderNoLog from '../component/NavNoLog';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Fondo from '../img/fondologin.webp'; // Importa la imagen de fondo
import FooterPM from '../component/FooterPM';

function Login() {
  const [rut, setRut] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [email, setEmail] = useState(''); // Estado para el correo en recuperación de contraseña
  const [showRecovery, setShowRecovery] = useState(false); // Estado para mostrar u ocultar la recuperación de contraseña
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
      const { rol } = data.rol;

      // Redirigir según el rol
      if (rol === 1) {
        navigate('/Admin');
      } else if (rol === 2) {
        navigate('/HPS');
      } else if (rol === 3) {
        navigate('/HPM');
      }
  };

  const handlePasswordRecovery = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/recuperar-contrasena', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Error en la recuperación de contraseña');
      }

      alert('Se ha enviado un correo con las instrucciones para recuperar la contraseña.');
    } catch (error) {
      console.error('Error en la recuperación de contraseña', error);
      alert('Error al enviar el correo de recuperación.');
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

    {/* Recuperación de contraseña 
    <div className="min-h-screen flex flex-col">
      <header>
        <HeaderNoLog />
      </header>
      <div className="flex-grow grid place-items-center bg-gray-100">
        <div className="bg-white p-10 rounded-md shadow-xl grid gap-6">
          <h1 className="text-2xl font-bold text-black text-center">Bienvenido, por favor inicie sesión</h1>
          <hr className="bg-black shadow w-full"></hr>

          {!showRecovery ? (
            // Formulario de inicio de sesión
            <form className="grid gap-4" onSubmit={handleLogin}>
              <div className="grid gap-2">
                <label className="text-2xl text-black font-bold" htmlFor="rut">Por favor ingrese su RUT</label>
                <input
                  id="rut"
                  type="text"
                  className="bg-white border border-black text-black px-2 py-2 rounded-md w-full"
                  autoComplete="off"
                  value={rut}
                  onChange={(e) => setRut(e.target.value)}
                />
              </div>

              <div className="grid gap-2">
                <label className="text-2xl text-black" htmlFor="contrasena">Por favor ingrese su contraseña</label>
                <input
                  id="contrasena"
                  type="password"
                  className="bg-white border border-black text-black px-4 py-2 rounded-md w-full"
                  autoComplete="off"
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                />
              </div>

              <div className="grid place-items-center">
                <button type="submit" className="text-2xl border border-black rounded-md w-24 h-10 bg-gray-200 hover:bg-gray-300">
                  Ingresar
                </button>
              </div>

              <p className="text-2xl mt-4 text-blue-500 text-center cursor-pointer" onClick={() => setShowRecovery(true)}>
                ¿Olvidaste tu contraseña?
              </p>
            </form>
          ) : (
            // Formulario de recuperación de contraseña
            <form className="grid gap-4" onSubmit={handlePasswordRecovery}>
              <div className="grid gap-2">
                <label className="text-2xl text-black font-bold" htmlFor="email">Recuperación de contraseña</label>
                <input
                  id="email"
                  type="email"
                  className="bg-white border border-black text-black px-4 py-2 rounded-md w-full"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="grid place-items-center">
                <button
                  type="submit"
                  className="border border-black rounded-md w-40 h-10 bg-green-200 hover:bg-green-300 text-center whitespace-nowrap"
                >
                  Recuperar contraseña
                </button>
              </div>

              <p className="text-2xl mt-4 text-blue-500 text-center cursor-pointer" onClick={() => setShowRecovery(false)}>
                Volver al inicio de sesión
              </p>
            </form>
          )}*/}
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
