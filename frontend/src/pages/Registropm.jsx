import { useState } from 'react';
import HeaderLog from '../component/NavLog.jsx';
import React from 'react';


function Registro() {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [celular, setCelular] = useState('');
  const [rut, setRut] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo: email, contraseña, celular, rut }),
      });

      const data = await res.json();
      if (res.ok) {
        setMensaje('Registro exitoso');
      } else {
        setMensaje(data.error || 'Error en el registro');
      }
    } catch (error) {
      console.error('Error al registrar', error);
      setMensaje('Error en el registro');
    }
  };

    return (
      <div>
        <header>
          <HeaderLog/>
        </header>
        <div>
          <div className='container mx-auto w-full my-20 flex justify-center'>
            <div className="bg-white p-10 rounded-md shadow-xl flex flex-col items-center w-1/3">
              <h1 className="text-2xl font-bold text-black text-center">Registrese para crear su cuenta</h1>
              <hr className="mt-2 bg-black shadow w-full"></hr>

              <formm onSubmit={handleSubmit} className="flex flex-col ">

                <p className="text-black mt-4 fond-bold">Ingrese su correo electronico</p>
                <input type="Email" value={email} onChange={(e)=> setEmail(e.target.value)} required className="bg-white border border-black text-black px-2 py-2 rounded-md my-4 w-72" autoComplete="off"></input>

                <p className="text-black mt-2">Ingrese su número de celular: </p>
                <input type="tel" value={celular} onChange={(e) => setCelular(e.target.value)} required className="bg-white border border-black text-black px-4 py-2 rounded-md my-4 w-72" autoComplete="off"></input>

                <p className="text-black mt-2">Ingrese su rut: </p>
                <input type="number" value={rut} onChange={(e) => setRut(e.target.value)} className="bg-white border border-black text-black px-4 py-2 rounded-md my-4 w-72" autoComplete="off"></input>

                <p className="text-black mt-2">Ingrese su Contraseña: </p>
                <input type="password" value={contraseña} onChange={(e)=> setContraseña(e.target.value)} required className="bg-white border border-black text-black px-4 py-2 rounded-md my-4 w-72" autoComplete="off"></input>

                <button type="submit" className="border border-black rounded-md w-20 h-9">
                  Ingresar
                </button>
                <p>{mensaje}</p>
              </formm>
            </div>
          </div>
        </div>  
      </div>
    );
  }
  
  export default Registro;