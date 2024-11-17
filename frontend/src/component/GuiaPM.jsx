import React from 'react';
import { Link } from 'react-router-dom';

function GuiaPM() {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white rounded-lg w-full p-8 z-50 relative">
                <Link to="/HPM" className="absolute bg-red-600 text-white rounded-lg px-8 py-4 items-center justify-center text-2xl font-bold">
                    Cerrar Guía
                </Link>

                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-6xl font-bold text-blue-800 text-center w-full">Guía para el usuario</h1>
                </div>

                <div className="grid lg:grid-cols-4 gap-6">
                    <div className="p-6 border border-blue-500 bg-blue-50 rounded-lg shadow-2xl">
                        <h2 className="text-3xl font-semibold text-blue-700 mb-4">¿Para qué sirve esta página?</h2>
                        <p className="text-2xl text-gray-800">• Esta página ayuda a los adultos mayores a solicitar servicios prestados por la municipalidad de Temuco.</p>
                    </div>

                    <div className="p-6 border border-blue-500 bg-blue-50 rounded-lg shadow-2xl">
                        <h2 className="text-3xl font-semibold text-blue-700 mb-4">¿Cómo solicito una hora?</h2>
                        <p className="text-2xl text-gray-800">• Seleccione el servicio que desea, luego haga click en el botón "Ver calendario", seleccione la hora a la que desea y presione el botón "confirmar".</p>
                    </div>

                    <div className="p-6 border border-blue-500 bg-blue-50 rounded-lg shadow-2xl">
                        <h2 className="text-3xl font-semibold text-blue-700 mb-4">¿Cómo recibo la confirmación de mi cita?</h2>
                        <p className="text-2xl text-gray-800">• Los datos de su cita serán confirmados mediante un correo electrónico o una llamada telefónica.</p>
                    </div>

                    <div className="p-6 border border-blue-500 bg-blue-50 rounded-lg shadow-2xl">
                        <h2 className="text-3xl font-semibold text-blue-700 mb-4">¿Debo pagar por estos servicios?</h2>
                        <p className="text-2xl text-gray-800">• No, los servicios son totalmente gratuitos.</p>
                    </div>

                    <div className="p-6 border border-blue-500 bg-blue-50 rounded-lg shadow-2xl">
                        <h2 className="text-3xl font-semibold text-blue-700 mb-4">¿Cómo puedo cancelar una cita?</h2>
                        <p className="text-2xl text-gray-800">• </p>
                    </div>

                    <div className="p-6 border border-blue-500 bg-blue-50 rounded-lg shadow-2xl">
                        <h2 className="text-3xl font-semibold text-blue-700 mb-4">¿Qué hago si tengo movilidad reducida?</h2>
                        <p className="text-2xl text-gray-800">• </p>
                    </div>

                    <div className="p-6 border border-blue-500 bg-blue-50 rounded-lg shadow-2xl">
                        <h2 className="text-3xl font-semibold text-blue-700 mb-4">¿Pregunta?</h2>
                        <p className="text-2xl text-gray-800">• </p>
                    </div>

                    <div className="p-6 border border-blue-500 bg-blue-50 rounded-lg shadow-2xl">
                        <h2 className="text-3xl font-semibold text-blue-700 mb-4">¿Pregunta?</h2>
                        <p className="text-2xl text-gray-800">• </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GuiaPM;
