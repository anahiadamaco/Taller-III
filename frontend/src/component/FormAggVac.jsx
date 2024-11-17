import React, { useState } from "react";
import { Link } from 'react-router-dom';

function FormAggVac() {
    const [Dias, setDias] = useState("");
    const [FechaInicio, setFechaInicio] = useState("");
    const [FechaFin, setFechaFin] = useState("");
    const [Confirmado, setConfirmado] = useState(false);
    const [Error, setError] = useState("");

    const calcularFin = (fechaInicio, dias) => {
        const Inicio = new Date(fechaInicio);
        const Fin = new Date(Inicio);
        Fin.setDate(Inicio.getDate() + parseInt(dias));
        return Fin.toISOString().split('T')[0];
    };

    const handleConfirm = (e) => {
        e.preventDefault();
        const FechaActual = new Date().toISOString().split('T')[0];

        if (FechaInicio < FechaActual) {
            setError("La fecha de inicio no puede ser inferior a la fecha actual");
            setConfirmado(false);
        } else if (Dias && FechaInicio) {
            const FFinCalculo = calcularFin(FechaInicio, Dias);
            setFechaFin(FFinCalculo);
            setConfirmado(true);
            setError("");
        }
    };

    return (
        <div className="flex justify-around items-start h-screen">
            <Link 
                to="/PerfPS" 
                className="absolute top-0 left-0 bg-red-600 text-white rounded-lg px-8 py-4 items-center justify-center text-2xl font-bold m-4"
            >
                Cerrar
            </Link>

            {/* Formulario */}
            <div className="bg-white border border-green-600 shadow-lg rounded-lg p-8 m-8 w-1/3">
                <h2 className="text-3xl font-bold text-green-600 text-center mb-6">Agregar Vacaciones</h2>
                <form className="space-y-4" onSubmit={handleConfirm}>
                    <div>
                        <label className="block text-xl font-bold mb-2">Cantidad de días:</label>
                        <input
                            type="number"
                            className="w-full border border-gray-300 p-2 rounded-lg"
                            value={Dias}
                            onChange={(e) => setDias(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xl font-bold mb-2">Fecha de Inicio:</label>
                        <input
                            type="date"
                            className="w-full border border-gray-300 p-2 rounded-lg"
                            value={FechaInicio}
                            onChange={(e) => setFechaInicio(e.target.value)}
                            required
                        />
                    </div>

                    {/* Error de fecha */}
                    {Error && (
                        <p className="text-red-600 font-semibold">{Error}</p>
                    )}

                    {/* Confirmar */}
                    <button type="submit" className="w-full bg-green-600 text-white p-3 rounded-lg mt-4">
                        Confirmar
                    </button>
                </form>
            </div>

            {/* Resumen */}
            {Confirmado && (
                <div className="bg-white border border-green-600 shadow-lg rounded-lg p-8 m-8 w-1/3">
                    <h2 className="text-4xl font-bold text-green-600 text-center mb-6"> Resumen </h2>
                    <div className="bg-white border border-green-500 rounded-lg p-6 shadow-md">
                        <h3 className="text-3xl font-bold mb-4 text-green-700"> Días de Vacaciones: </h3>
                        <p className="text-2xl text-black mb-2"> Cantidad de días: {Dias} </p>
                        <p className="text-2xl text-black mb-2"> Fecha de inicio: {FechaInicio} </p>
                        <p className="text-2xl text-black"> Fecha de fin: {FechaFin} </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FormAggVac;
