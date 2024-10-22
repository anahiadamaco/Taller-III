import React from 'react';

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
            </footer>
        </div>
    );
}

export default Home;
