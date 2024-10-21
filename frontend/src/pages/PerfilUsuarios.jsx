import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLog from '../component/NavLog.jsx';
import FooterPM from '../component/FooterPM.jsx';
import ImgPerf from '../img/Perfil.png';

const PerfilUsuarios = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-gray-50">
            {/* Header */}
            <header>
                <HeaderLog />
            </header>
            
            {/* Contenido principal */}
            <div className="flex-grow">
                {/* Datos personales */}
                <div className="bg-white border border-blue-600 shadow-md rounded-lg p-6 m-6">
                    <h2 className="text-4xl font-bold text-blue-600 text-center mb-4"> Datos personales </h2>
                    <div className="flex justify-between items-center">
                        {/* Datos */}
                        <div className="flex-1">
                            <div className="text-2xl text-black mb-2"><strong> Nombre: </strong></div>
                            <div className="text-2xl text-black mb-2"><strong> RUT: </strong></div>
                            <div className="text-2xl text-black mb-2"><strong> Edad: </strong></div>
                            <div className="text-2xl text-black mb-2"><strong> Fecha de nacimiento: </strong></div>
                            <div className="text-2xl text-black mb-2"><strong> Número telefónico: </strong></div>
                            <div className="text-2xl text-black mb-2"><strong> Correo electrónico: </strong></div>
                            <div className="text-2xl text-black mb-2"><strong> Modo de contacto: </strong></div>
                        </div>
                        
                        {/* Foto de perfil */}
                        <div className="flex justify-center items-center ml-6">
                            <div className="w-64 h-64 rounded-full border-4 border-black overflow-hidden shadow-lg flex justify-center items-center">
                                <img src={ImgPerf} alt="Foto de perfil" className="w-full h-full"/>
                            </div>
                        </div>
                    </div>
                    <Link
                        to={"FEPPM"}
                        className="bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-blue-800">
                        Editar Información
                    </Link>

                </div>

                {/* Historial de citas */}
                <div className="bg-white border border-blue-600 shadow-md rounded-lg p-6 m-6">
                    <h2 className="text-4xl font-bold text-blue-600 text-center mb-4"> Historial de citas </h2>
                    <div className="text-2xl text-black text-center"> Aún no tienes citas </div>
                </div>
                
                {/* Datos médicos */}
                <div className="bg-white border border-blue-600 shadow-md rounded-lg p-6 m-6">
                    <h2 className="text-4xl font-bold text-blue-600 text-center mb-4"> Datos médicos </h2>
                    <div className="flex justify-between">
                        <div className="flex-1 text-2xl text-black mb-2">
                            <h3 className="text-center mb-2"><strong> Alergias </strong></h3>
                            <ul className="list-disc pl-6">
                                <li>a</li>
                                <li>b</li>
                            </ul>
                        </div>

                        <div className="flex-1 text-2xl text-black mb-2">
                            <h3 className="text-center mb-2"><strong> Condiciones Medicas </strong></h3>
                            <ul className="list-disc pl-6">
                                <li> a </li>
                                <li> b </li>
                            </ul>
                        </div>
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

export default PerfilUsuarios;
