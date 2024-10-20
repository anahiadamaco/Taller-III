import HeaderNoLog from '../component/NavNoLog';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [rut, setRut] = useState(''); // Inicializa el estado para el RUT
  const [contrasena, setContrasena] = useState(''); // Inicializa el estado para la contraseña
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario

    const response = await fetch('http://localhost:3001/api/login', { // Ajusta la URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rut, contrasena }),
  }); 
    if (!response.ok) {
      // Manejar error si la respuesta no es exitosa
      console.error('Error en la solicitud');
      return;
    }
    const data = await response.json();
    const { rol } = data.user;

    if (rol === 1) {
      navigate('/Admin'); // Redirigir a la ruta del administrador
    } else if (rol === 2) {
      navigate('/HPS'); // Redirigir a la ruta de prestador de servicios
    } else if (rol === 3) {
      navigate('/HPM'); // Redirigir a la ruta de persona mayor
    }
  };

  return (
    <div className='overflow-hidden'>
      <header>
        <HeaderNoLog />
      </header>
      <div className='container- mx-auto w-full my-20 flex justify-center '>
        <div className="bg-white p-10 rounded-md shadow-xl flex flex-col items-center ">
          <h1 className="text-2xl font-bold text-black text-center">Bienvenido, por favor inicie sesión</h1>
          <hr className="mt-2 bg-black shadow w-full"></hr>
          
          <form className="flex flex-col" onSubmit={handleLogin}>
            <p className="text-black mt-4 font-bold">Por favor ingrese su rut</p>
            <input 
              type="text" 
              className="bg-white border border-black text-black px-2 py-2 rounded-md my-4 w-64" 
              autoComplete="off"
              value={rut}
              onChange={(e) => setRut(e.target.value)} // Actualiza el estado con el valor del input
            />
            <p className="text-black mt-2">Por favor ingrese su contraseña: </p>
            <input 
              type="password" 
              className="bg-white border border-black text-black px-4 py-2 rounded-md my-4 w-64" 
              autoComplete="off"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)} // Actualiza el estado con el valor del input
            />
            <button type="submit" className="border border-black rounded-md w-20 h-8">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;