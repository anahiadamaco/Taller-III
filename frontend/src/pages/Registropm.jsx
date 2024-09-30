import React, { useState, useEffect } from 'react';
import HeaderLog from '../component/NavLog.jsx';
import { useNavigate } from 'react-router-dom';
import { notify } from '../utils/notificacionService.js';

function Registro() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [celular, setCelular] = useState('');
  const [rut, setRut] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/api/registerPM', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rut, nombre, apellidos, fechaNacimiento, correo: email, contraseña, celular }),
      });

      const data = await res.json();
      if (res.ok) {
        setMensaje('Registro exitoso');
        navigate('/');
      } else {
        setMensaje(data.error || 'Error en el registro');
      }
    } catch (error) {
      console.error('Error al registrar', error);
      setMensaje('Error en el registro');
    }
  };

  useEffect(() => {
    if (mensaje) {
      notify(mensaje, mensaje === 'Registro exitoso' ? 'success' : 'error');
    }
  }, [mensaje]);

  return (
    <div>
      <header>
        <HeaderLog />
      </header>
      <div>
        <div className='container mx-auto w-full my-20 flex justify-center'>
          <div className="bg-white p-10 rounded-md shadow-xl flex flex-col items-center w-1/3">
            <h1 className="text-2xl font-bold text-black text-center">Registrese para crear su cuenta</h1>
            <hr className="mt-2 bg-black shadow w-full" />

            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <p className="text-black mb-2">Ingrese su RUT:</p>
              <input type="text" value={rut} onChange={(e) => setRut(e.target.value)} required className="bg-white border border-black text-black px-4 py-2 rounded-md w-full" autoComplete="off" />

              <p className="text-black mb-2">Ingrese su Nombre:</p>
              <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required className="bg-white border border-black text-black px-4 py-2 rounded-md w-full" autoComplete="off" />

              <p className="text-black mb-2">Ingrese sus Apellidos:</p>
              <input type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} required className="bg-white border border-black text-black px-4 py-2 rounded-md w-full" autoComplete="off" />

              <p className="text-black mb-2">Ingrese su Fecha de Nacimiento:</p>
              <input type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required className="bg-white border border-black text-black px-4 py-2 rounded-md w-full" autoComplete="off" />

              <p className="text-black mb-2">Ingrese su número de celular:</p>
              <input type="tel" value={celular} onChange={(e) => setCelular(e.target.value)} required className="bg-white border border-black text-black px-4 py-2 rounded-md w-full" autoComplete="off" />

              <p className="text-black mb-2">Ingrese su correo electrónico:</p>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-white border border-black text-black px-4 py-2 rounded-md w-full" autoComplete="off" />

              <p className="text-black mb-2">Ingrese su Contraseña:</p>
              <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required className="bg-white border border-black text-black px-4 py-2 rounded-md w-full" autoComplete="off" />

              <button type="submit" className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Registro;
