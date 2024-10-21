import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLog from '../component/NavLog.jsx';
import FooterPM from '../component/FooterPM.jsx';
import ImgPerf from '../img/Perfil.png';

const PerfilPrestadorServicios = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-gray-50">
            {/* Header */}
            <header>
                <HeaderLog />
            </header>
            
            {/* Contenido principal */}
            <div className="flex-grow">
                {/* Datos personales */}
                <div className="bg-white border border-green-600 shadow-md rounded-lg p-6 m-6">
                    <h2 className="text-4xl font-bold text-green-600 text-center mb-4"> Datos personales </h2>
                    <div className="flex justify-between items-center">
                        {/* Datos */}
                        <div className="flex-1">
                            <div className="text-2xl text-black mb-2"><strong> Nombre: </strong></div>
                            <div className="text-2xl text-black mb-2"><strong> RUT: </strong></div>
                            <div className="text-2xl text-black mb-2"><strong> Fecha de nacimiento: </strong></div>
                            <div className="text-2xl text-black mb-2"><strong> Número telefónico: </strong></div>
                            <div className="text-2xl text-black mb-2"><strong> Correo electrónico: </strong></div>
                            <div className="text-2xl text-black mb-2"><strong> Especialidad: </strong></div>
                        </div>
                        
                        {/* Foto de perfil */}
                        <div className="flex justify-center items-center ml-6">
                            <div className="w-64 h-64 rounded-full border-4 border-black overflow-hidden shadow-lg flex justify-center items-center">
                                <img src={ImgPerf} alt="Foto de perfil" className="w-full h-full"/>
                            </div>
                        </div>
                    </div>
                    <Link
                        to={"FEPPS"}
                        className="bg-green-600 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-green-800">
                        Editar Información
                    </Link>
                </div>

                <div className="flex justify-around">
                    {/* Citas pendientes semanales */}
                    <div className="bg-white border border-green-600 shadow-md rounded-lg p-6 m-6 w-1/2">
                        <h2 className="text-4xl font-bold text-green-600 text-center mb-4">Citas pendientes</h2>
                        <div className="text-2xl text-black text-center">Aún no tienes citas pendientes</div>
                    </div>

                    {/* Vacaciones */}
                    <div className="bg-white border border-green-600 shadow-md rounded-lg p-6 m-6 w-1/2">
                        <div className="flex justify-around">
                            <h2 className="text-4xl font-bold text-green-600 text-center mb-4">Inactividad por vacaciones</h2>
                            <Link 
                                to={"FAV"}
                                className="bg-green-600 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-green-800">
                                Agregar vacaciones
                            </Link>
                        </div>
                        <div className="text-2xl text-black text-center">No hay vacaciones programadas</div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer>
                <FooterPM />
            </footer>
        </div>
    );
};

export default PerfilPrestadorServicios;
