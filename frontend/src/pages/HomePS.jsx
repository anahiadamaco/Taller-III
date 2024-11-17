import React from 'react';
import Footer from '../component/FooterPS';

function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header provisorio */}
            <header className='flex justify-between bg-red-200 text-center gap-2 p-4'>
                <div className='w-1/3'> Logo Temuco </div>
                <div className='w-1/3'> Bienvenid@ (Nombre) </div>
                <div className='w-1/3'> Cerrar sesion </div>
            </header>

            <div className="min-h-screen grid grid-rows-[auto_1fr] bg-gray-100">
                <header>
                    {/* Aquí puedes agregar contenido adicional para el header */}
                </header>

                <div className="flex-grow w-full p-8 grid grid-cols-3 gap-x-8 gap-y-4 bg-white rounded-lg shadow-lg mt-10 h-full">
                    <div className="bg-blue-500 text-white p-6 rounded-lg text-center h-full">Lorem Ipsum</div>
                    <div className="bg-green-500 p-6 rounded-lg h-full"></div>
                    <div className="bg-green-500 p-6 rounded-lg h-full"></div>
                    <div className="bg-green-500 p-6 rounded-lg h-full"></div>
                    <div className="bg-red-500 p-6 rounded-lg h-full"></div>
                    <div className="bg-blue-500 p-6 rounded-lg h-full"></div>
                    <div className="bg-red-500 p-6 rounded-lg col-span-3"></div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Home;