import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import FooterPS from "../component/FooterPS.jsx";
import logo from "../img/logo_muni.webp";
import Fondo from "../img/fondologin.webp";

function GestionarPS() {
    const [prestadores, setPrestadores] = useState([]);
    const [newPrestador, setNewPrestador] = useState("");
    const [correo, setCorreo] = useState("");
    const [idServicio, setIdServicio] = useState("");
    const [selectedCorreo, setSelectedCorreo] = useState("");


    // Crear un nuevo prestador
    const createPrestador = () => {
        if (!newPrestador || !correo || !idServicio) {
            alert("Por favor completa todos los campos.");
            return;
        }

        const nuevoPrestador = {
            id: prestadores.length + 1,
            nombre: newPrestador,
            correo,
            id_servicio: idServicio,
        };

        setPrestadores([...prestadores, nuevoPrestador]);
        setNewPrestador("");
        setCorreo("");
        setIdServicio("");
    };

    const [showEstetica, setShowEstetica] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    const handleMouseEnterEstetica = () => {
    clearTimeout(timeoutId);
    setShowEstetica(true);
    };
    const handleMouseLeaveEstetica = () => {
    const id = setTimeout(() => {
        setShowEstetica(false);
    }, 100); 
    setTimeoutId(id);
  };

    return (
        <div className="min-h-screen flex flex-col relative">
            {/* Encabezado de la página */}
            <section className='z-20'> 
                <header className="flex items-center bg-black h-24 shadow-md px-8">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-12 w-auto" />
                </div>
                {/* Navegación principal */}
                <nav className="ml-auto flex items-center space-x-8 text-xl">
                    {/* Botón de Cerrar Sesión */}
                    <Link to="/Admin" className="px-4 py-1 text-center text-white duration-300 hover:text-sky-600 border-b-2 border-transparent hover:border-sky-600">
                        Home
                    </Link>
                    {/* Botón desplegable de Estética */}
                    <div className="relative group" onMouseEnter={handleMouseEnterEstetica} onMouseLeave={handleMouseLeaveEstetica}>
                        <button className="px-4 py-1 text-white duration-300 hover:text-green-600 focus:outline-none">
                            Gestion
                        </button>
                        {showEstetica && (
                        <div className="absolute mt-2 bg-white shadow-lg rounded-md py-2">
                            <Link to="/Admin/GestionarPS" className="block px-4 py-2 text-gray-700 hover:bg-green-200">
                                Gestionar Prestadores
                            </Link>
                            <Link to="/Admin/GestionOperativos" className="block px-4 py-2 text-gray-700 hover:bg-green-200">
                                Gestion de operativos
                            </Link>
                        </div>
                        )}
                    </div>

                    {/* Botón de Cerrar Sesión */}
                    <Link to="/" className="px-4 py-1 text-center text-white duration-300 hover:text-red-600 border-b-2 border-transparent hover:border-red-600">
                        Cerrar Sesión
                    </Link>
                </nav>
            </header>
            <Outlet />  
        </section>

        {/* Contenido principal */}
        <div className="flex-1 flex justify-center relative" style={{backgroundImage: `url(${Fondo})`, backgroundSize: "cover", backgroundPosition: "center",}}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="bg-slate-900 h-full w-full max-w-screen-2xl mx-auto p-10 shadow-lg z-10 flex items-center">
                    <div className="w-full p-10">
                        <div className="text-4xl font-extrabold text-center text-white mb-10">
                            <h1>Gestion de operativos</h1>
                        </div>
                        
                        {/* Formulario dinámico */}
                        <form
                            action={`https://formsubmit.co/${selectedCorreo}`}
                            method="POST"
                            className="mb-8"
                        >
                            <h2 className="text-white mb-4">Enviar correo</h2>
                            <label className="text-white">Nombre:</label>
                            <input
                                type="text"
                                name="name"
                                className="block w-full p-2 mb-4 my-2 rounded-lg"
                            />
                            <label className="text-white">Correo:</label>
                            <select
                                className="block w-full p-2 mb-4 my-2 rounded-lg"
                                value={selectedCorreo}
                                onChange={(e) => setSelectedCorreo(e.target.value)}
                            >
                                <option value="" disabled>
                                    Selecciona un correo
                                </option>
                                {prestadores.map((prestador) => (
                                    <option key={prestador.id} value={prestador.correo}>
                                        {prestador.correo}
                                    </option>
                                ))}
                            </select>
                            <label className="text-white">Mensaje:</label>
                            <textarea
                                name="comments"
                                className="block w-full p-2 mb-4 my-2 rounded-lg"
                            />
                            <button
                                type="submit"
                                className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
                                disabled={!selectedCorreo}
                            >
                                Enviar
                            </button>

                            <input
                                type="hidden"
                                name="_next"
                                value="http://localhost:3000/Admin/GestionOperativos"
                            />
                            <input type="hidden" name="_captcha" value="false" />
                        </form>

                        {/*zona para gestionar a los prestadores*/}
                        <h1 className="text-3xl font-bold mb-10 text-white text-center">
                            Gestionar Prestadores
                        </h1>
                        <div className="mb-4">
                            <input
                                type="text"
                                value={newPrestador}
                                onChange={(e) => setNewPrestador(e.target.value)}
                                placeholder="Nombre del Prestador"
                                className="block w-full p-2 mb-2 rounded-lg"
                            />
                            <input
                                type="email"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                                placeholder="Correo"
                                className="block w-full p-2 mb-2 rounded-lg"
                            />
                            <input
                                type="text"
                                value={idServicio}
                                onChange={(e) => setIdServicio(e.target.value)}
                                placeholder="Servicio"
                                className="block w-full p-2 mb-2 rounded-lg"
                            />
                            <button
                                onClick={createPrestador}
                                className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
                            >
                                Crear Prestador
                            </button>
                        </div>

                        {prestadores.length > 0 ? (
                            <table className="min-w-full border border-gray-300 border-separate border-spacing-0">
                                <thead>
                                    <tr className="bg-slate-800 text-white">
                                        <th className="border border-gray-300 p-4">Nombre</th>
                                        <th className="border border-gray-300 p-4">Correo</th>
                                        <th className="border border-gray-300 p-4">Servicio</th>
                                    </tr>
                                </thead>
                                <tbody className="hover:bg-slate-700 text-white">
                                    {prestadores.map((prestador) => (
                                        <tr key={prestador.id} className="hover:bg-gray-700">
                                            <td className="border  text-white hover:border-red-700 p-2">{prestador.nombre}</td>
                                            <td className="border  text-white hover:border-red-700 p-2">{prestador.correo}</td>
                                            <td className="border  text-white hover:border-red-700 p-2">{prestador.id_servicio}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p className="text-white">No hay prestadores disponibles.</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Pie de página */}
            <FooterPS />
        </div>
    );
}

export default GestionarPS;

