import React, { useState } from "react";
import HeaderLog from '../component/NavLog.jsx';
import Footer from '../component/FooterPM';


function Peluqueria(){
    
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = () => {
      console.log('Nombre:', name);
      console.log('Teléfono:', phone);
      console.log('Fecha:', date);
    };

    return(
      <div className='bg-gray-50'>
        <header>
          <HeaderLog/>
        </header>

        <div className="bg-sky-600 text-white text-center py-16">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a Peluquería para Adultos Mayores</h1>
          <p className="text-xl">Cuidado de tu pelo y asistencia profecional.</p>
        </div>

        <h2 className="text-3xl font-semibold text-center my-10">Nuestros Servicios</h2>
        <section className="grid 2xl:grid-cols-1 sm:grid-cols- gap-8 mx-4">
               
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg border-2 border-sky-600">
              <h3 className="text-2xl font-bold mb-4 text-center">No se que poner</h3>
              <p className="text-gray-700 mb-4">se corta el pelo</p>
              <button className='text-white-200 bg-sky-600 py-2 px-4 rounded hover:bg-sky-400'> Ver mas</button>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-lg border-2 border-sky-600">
              <h3 className="text-2xl font-bold mb-4 text-center">No se que poner</h3>
              <p className="text-gray-700 mb-4">se corta el pelo</p>
              <button className='text-white-200 bg-sky-600 py-2 px-4 rounded hover:bg-sky-400'> Ver mas</button>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-lg border-2 border-sky-600">
              <h3 className="text-2xl font-bold mb-4  text-center">No se que poner</h3>
              <p className="text-gray-700 mb-4">se corta el pelo</p>
              <button className='text-white-200 bg-sky-600 py-2 px-4 rounded hover:bg-sky-400'> Ver mas</button>
            </div>

                    
          </div>
          <div className="bg-white p-8 border-2 border-sky-600 rounded-lg shadow-lg mx-auto">
            <h2 className="text-5xl text-center mb-4">Reservar una Cita</h2>
            <div className="grid grid-cols-1 gap-4 mb-6">
              <input
                type="text"
                placeholder="Nombre completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Teléfono de contacto"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-sky-600 text-white py-3 rounded hover:bg-sky-800 transition duration-300"
            >
              Reservar Hora
            </button>
          </div>
        </section>
          
        <footer>
          <Footer/>
        </footer>



      </div>

    );
}

export default Peluqueria;
