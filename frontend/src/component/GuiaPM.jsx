import React from 'react';
import 'tailwindcss/tailwind.css';

function GuiaPM() {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="relative bg-white rounded-lg w-full max-w-6xl p-8 z-50">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-red-800">Guía para el usuario</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 border border-gray-300 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">¿Para qué sirve esta página?</h2>
                        <p className="text-gray-700">• Ayuda a los adultos a solicitar servicios.</p>
                    </div>

                    <div className="p-6 border border-gray-300 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">¿Cómo solicito una hora?</h2>
                        <p className="text-gray-700">• Pulsando el botón de seleccionar horario.</p>
                    </div>

                    <div className="p-6 border border-gray-300 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">¿Cómo recibo la confirmación de mi cita?</h2>
                        <p className="text-gray-700">• Recibirás un correo electrónico o llamada telefónica con los detalles de tu cita.</p>
                    </div>

                    <div className="p-6 border border-gray-300 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">¿Debo pagar por estos servicios?</h2>
                        <p className="text-gray-700">• No, son servicios gratuitos.</p>
                    </div>

                    <div className="p-6 border border-gray-300 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">¿Cómo puedo cancelar una cita?</h2>
                        <p className="text-gray-700">• Puedes cancelarla desde la sección "Mis Citas".</p>
                    </div>

                    <div className="p-6 border border-gray-300 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">¿Cómo contacto con soporte técnico?</h2>
                        <p className="text-gray-700">• Contacta por correo a soporte@ejemplo.com o llama al 123-456-789.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GuiaPM;
