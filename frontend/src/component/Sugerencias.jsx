import React, { useState } from 'react';

function Sugerencias() {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [sugerencia, setSugerencia] = useState('');
    const [mensajeEnviado, setMensajeEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos enviados:', { nombre, edad, sugerencia });
        setMensajeEnviado(true);
        setNombre('');
        setEdad('');
        setSugerencia('');
    };

    return (
        <div className="max-w-2xl mx-auto p-12 bg-blue-50 shadow-lg rounded-xl">
            <h2 className="text-4xl font-bold text-blue-700 mb-8 text-center">
                Deja tus sugerencias o críticas
            </h2>
            {mensajeEnviado && (
                <p className="text-green-600 text-center mb-8 text-2xl">
                    ¡Gracias por tus comentarios!
                </p>
            )}
            <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                    <label
                        htmlFor="nombre"
                        className="block text-blue-800 font-semibold mb-2 text-2xl"
                    >
                        Nombre:
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                        placeholder="Ingresa tu nombre"
                        className="w-full px-5 py-4 border border-blue-300 rounded-lg text-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div>
                    <label
                        htmlFor="edad"
                        className="block text-blue-800 font-semibold mb-2 text-2xl"
                    >
                        Edad:
                    </label>
                    <input
                        type="number"
                        id="edad"
                        value={edad}
                        onChange={(e) => setEdad(e.target.value)}
                        required
                        placeholder="Ingresa tu edad"
                        className="w-full px-5 py-4 border border-blue-300 rounded-lg text-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div>
                    <label
                        htmlFor="sugerencia"
                        className="block text-blue-800 font-semibold mb-2 text-2xl"
                    >
                        Sugerencia o crítica:
                    </label>
                    <textarea
                        id="sugerencia"
                        value={sugerencia}
                        onChange={(e) => setSugerencia(e.target.value)}
                        required
                        placeholder="Escribe tus comentarios aquí"
                        className="w-full px-5 py-4 border border-blue-300 rounded-lg text-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[200px]"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold text-2xl py-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default Sugerencias;
