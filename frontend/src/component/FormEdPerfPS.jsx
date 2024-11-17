import React, { useState } from "react";
import { Link } from 'react-router-dom';

function FormEdPerfPS() {
    const [Form, setForm] = useState({
        Telefono: '',
        Correo: '',
        Oficina: ''
    });
    const [Mensaje, setMensaje] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...Form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Form);
        setMensaje("Cambios guardados correctamente");
        setTimeout(() => {
            setMensaje('');
        }, 3000);
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
            <Link
                to={"/perfps"}
                className="absolute text-2xl top-4 left-4 py-2 px-4 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition duration-200"
            >
                Cerrar
            </Link>
            
            {/* Contenedor del formulario */}
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold text-blue-500 text-center mb-4"> Editar Perfil </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-2xl font-medium mb-1" htmlFor="Telefono">
                            Número de Teléfono
                        </label>
                        <input
                            type="text"
                            id="Telefono"
                            name="Telefono"
                            value={Form.Telefono}
                            onChange={handleChange}
                            className="w-full p-2 border-2 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                        />
                    </div>

                    <div>
                        <label className="block text-2xl font-medium mb-1" htmlFor="Correo">
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="Correo"
                            name="Correo"
                            value={Form.Correo}
                            onChange={handleChange}
                            className="w-full p-2 border-2 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                        />
                    </div>

                    <div>
                        <label className="block text-2xl font-medium mb-1" htmlFor="Oficina">
                            Número de Oficina
                        </label>
                        <input
                            type="text"
                            id="Oficina"
                            name="Oficina"
                            value={Form.Oficina}
                            onChange={handleChange}
                            className="w-full p-2 border-2 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Guardar Cambios
                    </button>
                </form>
                 
                {/* Mensaje de exito */}
                {Mensaje && (
                    <div className="mt-4 p-2 bg-green-100 text-green-700 rounded-lg text-center">
                        {Mensaje}
                    </div>
                )}
            </div>
        </div>
    );
}

export default FormEdPerfPS;
