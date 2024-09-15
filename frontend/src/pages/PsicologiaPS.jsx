import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Psicologia() {
    {/* Sacar informacion de la bd */}
    const data = [
        { day: '01', count: 0 },
        { day: '02', count: 0 },
        { day: '03', count: 0 },
        { day: '04', count: 0 },
        { day: '05', count: 0 },
        { day: '06', count: 0 },
        { day: '07', count: 0 },
        { day: '08', count: 0 },
        { day: '09', count: 0 },
        { day: '10', count: 0 },
        { day: '11', count: 0 },
        { day: '12', count: 0 },
        { day: '13', count: 0 },
        { day: '14', count: 0 },
        { day: '15', count: 0 },
        { day: '16', count: 0 },
        { day: '17', count: 0 },
        { day: '18', count: 0 },
        { day: '19', count: 0 },
        { day: '20', count: 0 },
        { day: '21', count: 0 },
        { day: '22', count: 0 },
        { day: '23', count: 0 },
        { day: '24', count: 0 },
        { day: '25', count: 0 },
        { day: '26', count: 0 },
        { day: '27', count: 0 },
        { day: '28', count: 0 },
        { day: '29', count: 0 },
        { day: '30', count: 0 },
        { day: '31', count: 0 }
    ];

    return (
        <div>
            {/* Header provisorio mientras se termina el navbar */}
            <header className='flex justify-between bg-red-200 text-center gap-2 p-6'>
                <div className='w-1/8 border-black border-2 p-2'> Logo Muni </div>
                
                <div className='w-1/1 border-black border-2 p-2'>
                    <button className='bg-blue-300 px-4 py-2 rounded-full hover:bg-blue-500 transition-colors duration-300'> Asistente social </button>
                    <button className='bg-blue-300 px-4 py-2 rounded-full hover:bg-blue-500 transition-colors duration-300'> Asistente juridico </button>
                    <button className='bg-blue-300 px-4 py-2 rounded-full hover:bg-blue-500 transition-colors duration-300'> Fonoaudiologia </button>
                    <button className='bg-blue-300 px-4 py-2 rounded-full hover:bg-blue-500 transition-colors duration-300'> Podologia </button>
                    <button className='bg-blue-300 px-4 py-2 rounded-full hover:bg-blue-500 transition-colors duration-300'> Peluqueria </button>
                    <button className='bg-blue-300 px-4 py-2 rounded-full hover:bg-blue-500 transition-colors duration-300'> Kinesiologia </button>
                    <button className='bg-blue-300 px-4 py-2 rounded-full hover:bg-blue-500 transition-colors duration-300'> Psicologia </button>
                </div>

                <div className='w-1/4 border-black border-2 p-2'>
                    <button className='bg-green-300 px-4 py-2 rounded-full hover:bg-green-500 transition-colors duration-300'> Cerrar sesion </button>
                    <button className='bg-green-300 px-4 py-2 rounded-full hover:bg-green-500 transition-colors duration-300'> Editar horario </button><br />
                    <button className='bg-green-300 px-4 py-2 rounded-full hover:bg-green-500 transition-colors duration-300'> Editar citas </button>
                    <button className='bg-green-300 px-4 py-2 rounded-full hover:bg-green-500 transition-colors duration-300'> Editar perfil </button>
                </div>
            </header>

            <section className='flex justify-between items-center gap-2 p-2'>
                <div className='w-1/2 border-black border-2 p-2'>
                    <h3 className='text-xl font-bold mb-1 text-center'> Grafico de atencion mensual (Mes) </h3>
                    <LineChart width={650} height={400} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="count" stroke="#8884d8" />
                    </LineChart>
                </div>

                {/* no se como mejorar esto help */}
                <div className='w-1/2 border-black border-2 p-2'>
                    <h3 className='text-xl font-bold mb-1 text-center'> Perfil prestador servicio </h3><br />
                    <div>
                        <h4> Nombre: </h4><br />
                        <h4> Rut: </h4><br />
                        <h4> Correo: </h4><br />
                        <h4> Fono oficina: </h4><br />
                        <h4> Titulo: </h4><br />
                    </div>
                </div>
            </section>

            {/* Footer provisorio */}
            <footer className='flex justify-between bg-red-200 text-center gap-2 p-12'>
                <div className='w-1/2'> Mensaje </div>
                <div className='w-1/2'> Contacto muni </div>
            </footer>
        </div>
    );
}

export default Psicologia;
