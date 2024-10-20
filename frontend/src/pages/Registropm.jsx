import { useState } from 'react';
import HeaderLog from '../component/NavLog.jsx';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Registro() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [contrasena, setContraseña] = useState('');
  const [celular, setCelular] = useState('');
  const [rut, setRut] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido_paterno, setApellidoP] = useState('');
  const [apellido_materno, setApellidoM] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [mensaje, setMensaje] = useState('');

  const calcularEdad = (fecha) => {
    const cumpleanos = new Date(fecha);
    const hoy = new Date();
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    const mes = hoy.getMonth() - cumpleanos.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
    }
    return edad;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validación de edad
    const edad = calcularEdad(fechaNacimiento);
    if (edad < 60) {
      setMensaje('No cumple con requisito de edad');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/registerPM', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rut, nombre, apellido_paterno, apellido_materno, fechaNacimiento, celular, correo: email, contrasena}),
      });

      if (res.ok) {
        const data = await res.json();
        setMensaje('Registro exitoso');
        navigate('/api/login');
      } else {
        const data = await res.json();
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

            <form onSubmit={handleSubmit} className="flex flex-col ">
              <p className="text-black mt-4 fond-bold">Ingrese su RUT</p>
              <input type="text" value={rut} onChange={(e) => setRut(e.target.value)} required className="bg-white border border-black text-black px-4 py-2 rounded-md my-4 w-72" autoComplete="off"></input>

              <p className="text-black mt-2">Ingrese su Nombre: </p>
              <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required className="bg-white border border-black text-black px-4 py-2 rounded-md my-4 w-72" autoComplete="off"></input>

              <p className="text-black mt-2">Ingrese su apellido paterno: </p>
              <input type="text" value={apellido_paterno} onChange={(e) => setApellidoP(e.target.value)} required className="bg-white border border-black text-black px-4 py-2 rounded-md my-4 w-72" autoComplete="off"></input>

              <p className="text-black mt-2">Ingrese su apellido materno: </p>
              <input type="text" value={apellido_materno} onChange={(e) => setApellidoM(e.target.value)} required className="bg-white border border-black text-black px-4 py-2 rounded-md my-4 w-72" autoComplete="off"></input>

              <p className="text-black mt-2">Ingrese su Fecha de Nacimiento: </p>
              <input type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required className="bg-white border border-black text-black px-4 py-2 rounded-md my-4 w-72" autoComplete="off"></input>

              <p className="text-black mt-2">Ingrese su número de celular: </p>
              <input type="tel" value={celular} onChange={(e) => setCelular(e.target.value)} required className="bg-white border border-black text-black px-4 py-2 rounded-md my-4 w-72" autoComplete="off"></input>

              <p className="text-black mt-2">Ingrese su correo electrónico: </p>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-white border border-black text-black px-2 py-2 rounded-md my-4 w-72" autoComplete="off"></input>

              <p className="text-black mt-2">Ingrese su Contraseña: </p>
              <input type="password" value={contrasena} onChange={(e) => setContraseña(e.target.value)} required className="bg-white border border-black text-black px-4 py-2 rounded-md my-4 w-72" autoComplete="off"></input>

              <button type="submit" className="border border-black rounded-md w-20 h-9 bg-white hover:bg-red-300">
                Ingresar
              </button>
              <p>{mensaje}</p>
            </form>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Registro;