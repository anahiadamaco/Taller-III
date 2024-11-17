import React from 'react';
import HeaderLog from '../component/NavLog';
import Footer from '../component/FooterPM';
import Fondo from '../img/fondologin.webp'; // Importa tu imagen aquí
import { useNavigate } from 'react-router-dom';

<<<<<<< HEAD

function Home() {
    const navigate = useNavigate();

    const handleGuia = () => {
        navigate('/Guia');
    };

    const handlePerfil = () => {
        navigate('/Perf')
    };

    return (
        <div className="min-h-screen flex flex-col relative">
            {/* Navbar con z-index alto */}
            <header className="relative z-20">
                <HeaderLog />
            </header>

            <main 
                className="flex-1 flex justify-center relative" 
                style={{
                    backgroundImage: `url(${Fondo})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center'
                }}>
                {/* Superposición oscura solo sobre el contenido central */}
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

                {/* Contenedor blanco central sin espacios arriba y abajo */}
                <div className="bg-white h-full w-full max-w-5xl mx-auto p-10 rounded-lg shadow-lg z-10 flex items-center relative">
                    <div className="w-full p-10">
                        <h1 className="text-center text-2xl font-bold mb-6">Bienvenido al Programa Protección Mayor</h1>

                        {/* Contenedor en columna */}
                        <div className="flex flex-col gap-6">
                            
                            {/* Contenedor de Citas Próximas y Guía en fila */}
                            <div className="flex gap-6">
                                
                                {/* Sección de Citas Próximas */}
                                <div className="bg-gray-200 p-6 rounded-lg shadow-md flex-1">
                                    <h1 className="text-xl font-semibold mb-4 text-black">Citas Próximas</h1>
                                    <ul>
                                        {/* Aquí podrías mapear las citas próximas */}
                                        <li className="mb-4 p-4 bg-white rounded-lg shadow-sm">
                                            <p className="text-gray-800 font-medium">Servicio: Kinesiología</p>
                                            <p className="text-gray-800">Fecha: 2024-11-15</p>
                                            <p className="text-gray-800">Hora: 10:00 AM</p>
                                        </li>
                                        <li className="mb-4 p-4 bg-white rounded-lg shadow-sm">
                                            <p className="text-gray-800 font-medium">Servicio: Psicología</p>
                                            <p className="text-gray-800">Fecha: 2024-11-17</p>
                                            <p className="text-gray-800">Hora: 2:00 PM</p>
                                        </li>
                                    </ul>
                                </div>
                                
                                {/* Sección de Guía de Página */}
                                <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-[0.75]">
                                    <h1 className="text-xl font-semibold mb-4 text-black">Guía de Página</h1>
                                    <p className="text-gray-700 mb-4">
                                        ¿Tienes problemas con alguna parte de la página? Aquí te ayudamos a navegar por ella.
                                    </p>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleGuia}>
                                        Guía Usuario
                                    </button>
                                </div>
                            </div>
                            <div className="bg-gray-200 p-4 rounded-lg shadow-md flex items-center gap-4">
                                <button 
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    onClick={handlePerfil} // Botón para el Perfil
                                >
                                    Ir al Perfil
                                </button>
                                <p className="text-gray-800 text-sm flex-1 ml-4">
                                    Aquí podrás administrar tu información, ingresar tu ficha Social de Hogar y ver un historial de tus citas.
                                </p>
                            </div>

                            {/* Sección de Servicios (debajo de Citas y Guía) */}
                            <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">
                                <h1 className="text-xl font-semibold mb-4 text-black">Nuestros Servicios</h1>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {/* Servicios de Estética */}
                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-800">Servicios de Estética</h2>
                                        <ul className="text-gray-700 list-disc ml-5">
                                            <li>Peluquería</li>
                                            <li>Podología</li>
                                        </ul>
                                    </div>

                                    {/* Atenciones Médicas */}
                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-800">Atenciones Médicas</h2>
                                        <ul className="text-gray-700 list-disc ml-5">
                                            <li>Kinesiología</li>
                                            <li>Psicología</li>
                                        </ul>
                                    </div>

                                    {/* Asistencias */}
                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-800">Asistencias</h2>
                                        <ul className="text-gray-700 list-disc ml-5">
                                            <li>Asesoría Jurídica</li>
                                            <li>Atención Social</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="relative z-10">
                <Footer />
=======
import HeaderLog from '../component/NavLog';
import Footer from '../component/FooterPM';

function Home() {
    return (
        <div className='min-h-screen flex flex-col bg-gray-200 '>
            {/* Header provisorio */}
            <header>
                <HeaderLog/>                
            </header>

            <div className="bg-sky-600 text-white text-center py-16">
                <h1 className="text-4xl font-bold mb-4">Bienvenido -Nombre-</h1>
            </div>

            <div className="grid grid-cols-5 grid-rows-4 gap-2 mx-4">
                <div className="col-span-3 row-span-2 row-start-2 border-2 rounded-lg border-blue-500 bg-white p-4 flex flex-col">
                    <h2 className='text-xl font-bold mb-1 text-center'> Citas Pendientes </h2>
                        <div>
                            <div className='my-4 p-2 bg-blue-100 rounded-lg'>
                                <p>Nombre:</p>
                                <p>Rut:</p>
                                <p>Servicio:</p>
                                <p>Nombre de especialista:</p>
                            </div>
                            
                        </div>
                        <div className='flex flex-end justify-end mt-auto'>
                            <button className='my-4 bg-blue-300 px-4 py-2 rounded-full hover:bg-blue-500 transition-colors duration-300'> Editar cita </button>
                        </div>
                </div>

                <div className="col-span-2 col-start-4 row-start-2 border-2 rounded-lg border-blue-500 bg-white p-4">
                    <h2 className='text-xl font-bold mb-1 text-center'> Guia de usuario </h2>
                    <div>
                        <h4> La guía de usuario es un apartado en el cual se encuentran preguntas frecuentes junto a sus respuestas sobre la pagina y su funcionamiento</h4>

                        <div className='flex justify-end'>
                            <button className='my-4 bg-blue-300 px-4 py-2 rounded-full hover:bg-blue-500 transition-colors duration-300'> Ir a la guía de usuario </button>
                        </div>
                            
                    </div>    
                </div>

                <div className="col-span-2 col-start-4 row-start-3 border-2 rounded-lg border-blue-500 bg-white p-4">
                    <h2 className='text-xl font-bold mb-1 text-center'> Perfil </h2>
                        <div>
                            <h4> En este apartado usted podrá ver sus datos personales, un historial de todas sus citas en los diferentes servicios de la pagina y sus datos    medicos los cuales abarcan sus condiciones medicas.
                                Si realiza modificaciones en su número telefonico, correo electronico o modo de contacto puede editar toda esta informacion desde este apartado.
                            </h4>
                 
                            <div className='flex justify-end'>
                                <button className='my-4 bg-blue-300 px-4 py-2 rounded-full hover:bg-blue-500 transition-colors duration-300'> Ir a la guía de usuario </button>
                            </div>            
                        </div>
                </div>
            </div>
                                   
            <footer>
                <Footer/>
>>>>>>> Catalina
            </footer>
        </div>
    );
}

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> Catalina
