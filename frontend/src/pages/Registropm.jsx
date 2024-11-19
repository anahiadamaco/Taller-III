import { useState } from 'react';
import HeaderLog from '../component/NavRegister.jsx';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FooterPM from '../component/FooterPM.jsx';

function RegiPM () {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [contrasena, setContraseña] = useState('');
  const [confirmarContrasena, setConfirmarContraseña] = useState('');
  const [celular, setCelular] = useState('');
  const [rut, setRut] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido_paterno, setApellidoP] = useState('');
  const [apellido_materno, setApellidoM] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [esError, setEsError] = useState(false); 

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
      setEsError(true); 
      return;
    }

    // Validación de confirmación de contraseña
    if (contrasena !== confirmarContrasena) {
      setMensaje('Las contraseñas no coinciden');
      setEsError(true);
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/registerPM', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({ rut, nombre, apellido_paterno, apellido_materno, fechaNacimiento, celular, correo: email, contrasena }),

      });

      if (res.ok) {
        setMensaje('Registro exitoso');
        setEsError(false); 
        navigate('/api/login');
      } else {
        const data = await res.json();
        setMensaje(data.error || 'Error en el registro');
        setEsError(true); 
      }
    } catch (error) {
      console.error('Error al registrar', error);
      setMensaje('Error en el registro');
      setEsError(true); 
    }
  };

  return (
    <div>
      <header>
        <HeaderLog />
      </header>

      <div className="flex justify-center items-center min-h-screen">
        <div className='container mx-auto w-full my-20 flex flex-col md:flex-row md:space-x-4'>
          {/* Contenedor Datos Personales */}
          <div className="bg-white border border-gray-300 p-6 rounded-md shadow-xl w-full md:w-1/3">
            <h3 className="text-lg font-semibold text-black">Datos Personales</h3>
            <form>
              <p className="text-black mt-2">Ingrese su RUT:</p>
              <input type="text" value={rut} onChange={(e) => setRut(e.target.value)} required className="bg-white border border-black text-black px-4 py-2 rounded-md my-2 w-full" autoComplete="off" />

              <p className="text-black mt-2">Ingrese su Nombre:</p>
              <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required className="bg-white border border-black text-black px-4 py-2 rounded-md my-2 w-full" autoComplete="off" />

              <p className="text-black mt-2">Ingrese su apellido paterno:</p>
              <input type="text" value={apellido_paterno} onChange={(e) => setApellidoP(e.target.value)} required className="bg-white border border-black text-black px-4 py-2 rounded-md my-2 w-full" autoComplete="off" />

              <p className="text-black mt-2">Ingrese su apellido materno:</p>
              <input type="text" value={apellido_materno} onChange={(e) => setApellidoM(e.target.value)} required className="bg-white border border-black text-black px-4 py-2 rounded-md my-2 w-full" autoComplete="off" />

              <p className="text-black mt-2">Ingrese su Fecha de Nacimiento:</p>
              <input type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required className="bg-white border border-black text-black px-4 py-2 rounded-md my-2 w-full" autoComplete="off" />
            </form>
          </div>

          {/* Contenedor Información de Contacto */}
          <div className="bg-white border border-gray-300 p-6 rounded-md shadow-xl w-full md:w-1/3">
            <h3 className="text-lg font-semibold text-black">Información de Contacto</h3>
            <form>
              <p className="text-black mt-2">Ingrese su número de celular:</p>
              <input type="tel" value={celular} onChange={(e) => setCelular(e.target.value)} required className="bg-white border border-black text-black px-4 py-2 rounded-md my-2 w-full" autoComplete="off" />

              <p className="text-black mt-2">Ingrese su correo electrónico:</p>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-white border border-black text-black px-4 py-2 rounded-md my-2 w-full" autoComplete="off" />
              <h1 className="text-2xl mt-2 font-bold flex justify-center">¡IMPORTANTE!</h1>
              <p className="text-black mt-2 flex justify-center">Asegurate de ingresar bien tu correo y número de celular, ya que será nuestra de vía comunicación contigo.</p>
            </form>
          </div>

          {/* Contenedor Contraseña */}
          <div className="bg-white border border-gray-300 p-6 rounded-md shadow-xl w-full md:w-1/3">
            <h3 className="text-lg font-semibold text-black">Contraseña</h3>
            <form onSubmit={handleSubmit}>
              <p className="text-black mt-2">Ingrese su Contraseña:</p>
              <input type="password" value={contrasena} onChange={(e) => setContraseña(e.target.value)} required className="bg-white border border-black text-black px-4 py-2 rounded-md my-2 w-full" autoComplete="off" />

              <p className="text-black mt-2">Confirme su Contraseña:</p>
              <input type="password" value={confirmarContrasena} onChange={(e) => setConfirmarContraseña(e.target.value)} required className="bg-white border border-black text-black px-4 py-2 rounded-md my-2 w-full" autoComplete="off" />

              <div className="flex justify-center mt-4">
                <button type="submit" className="border border-black rounded-md w-full h-9 bg-white hover:bg-green-300">
                  Registrar
                </button>
              </div>

            </form>

            {/* Mensaje de error o éxito */}
            {mensaje && (
              <p className={`mt-4 p-2 text-white rounded-md ${esError ? 'bg-red-500' : 'bg-green-500'}`}>
                {mensaje}
              </p>
            )}
          </div>
        </div>
      </div>

      <footer>
        <FooterPM />
      </footer>

    </div>
  );
}

export default RegiPM ;