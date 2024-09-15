import React from 'react';

function Home() {
    return (
        <div>
            {/* Header provisorio */}
            <header className='flex justify-between bg-red-200 text-center gap-2 p-4'>
                <div className='w-1/3'> Logo Temuco </div>
                <div className='w-1/3'> Bienvenid@ (Nombre) </div>
                <div className='w-1/3'> Cerrar sesion </div>
            </header>

            {/* Bordes provisorios pq me confundo */}
            <section className='flex justify-between items-center gap-2 p-2'>
                {/* cuadritos con info sacada de la base de datos */}
                <div className='w-1/3 border-black border-2 p-2'>
                    <h2 className='text-xl font-bold mb-1 text-center'> Resumen de citas semanales </h2>
                    <div>
                        <h4> Nombre: </h4>
                        <h5> Rut: </h5>
                        <h5> Dia: </h5>
                        <h5> Hora de inicio: </h5>
                        <h5> Hora de fin </h5>
                    </div>
                </div>

                {/* hacer tipo horario o cuadritos tmb */}
                <div className='w-1/3 border-black border-2 p-2'>
                    <h2 className='text-xl font-bold mb-1 text-center'> Horarios disponibles </h2>
                    <div>
                        <h5> Dia: </h5>
                        <h5> Hora de inicio: </h5>
                        <h5> Hora de fin: </h5>
                    </div>
                </div>

                {/* hacer ventana flotante para cada button */}
                <div className='w-1/3 border-black border-2 p-2 text-center'>
                    <button className='bg-blue-300 px-4 py-2 rounded-full hover:bg-blue-500 transition-colors duration-300'> Editar horario </button><br/><br/>
                    <button className='bg-green-300 px-4 py-2 rounded-full hover:bg-green-500 transition-colors duration-300'> Editar citas </button><br/><br/>
                    <button className='bg-red-300 px-4 py-2 rounded-full hover:bg-red-600 transition-colors duration-300'> Editar perfil </button>
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

export default Home;
