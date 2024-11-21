import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HeaderLog from '../component/NavLog.jsx';
import FooterPM from '../component/FooterPM.jsx';
import ImgPerf from '../img/Perfil.png';

const PerfilPrestadorServicios = () => {
    const [prestador, setPrestador] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/prestador-servicios')
            .then((response) => {
                setPrestador(response.data[0]);
            })
            .catch((error) => console.error('Error al cargar los datos:', error));
    }, []);

    if (!prestador) {
        return <div>Cargando datos...</div>;
    }

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
                            <div className="text-2xl text-black mb-2"><strong> Nombre: </strong>{prestador.Nombre}</div>
                            <div className="text-2xl text-black mb-2"><strong> RUT: </strong>{prestador.RUT}</div>
                            <div className="text-2xl text-black mb-2"><strong> Fecha de nacimiento: </strong>{prestador.FechaNacimiento}</div>
                            <div className="text-2xl text-black mb-2"><strong> Número telefónico: </strong>{prestador.NumeroTelefonico}</div>
                            <div className="text-2xl text-black mb-2"><strong> Número oficina: </strong>{prestador.NumeroOficina || 'No asignado'}</div>
                            <div className="text-2xl text-black mb-2"><strong> Correo electrónico: </strong>{prestador.CorreoElectronico}</div>
                            <div className="text-2xl text-black mb-2"><strong> Especialidad: </strong>{prestador.Especialidad}</div>
                        </div>

                        {/* Foto de perfil */}
                        <div className="flex justify-center items-center ml-6">
                            <div className="w-64 h-64 rounded-full border-4 border-black overflow-hidden shadow-lg flex justify-center items-center">
                                <img src={ImgPerf} alt="Foto de perfil" className="w-full h-full" />
                            </div>
                        </div>
                    </div>
                    <Link
                        to={"FEPPS"}
                        className="bg-green-600 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-green-800">
                        Editar Información
                    </Link>
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
