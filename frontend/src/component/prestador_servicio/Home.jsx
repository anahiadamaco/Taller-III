import React from 'react';

function Home() {
    return (
        <div>
            {/* Header provisorio */}
            <header>
                <div> Logo Temuco </div>
                <div> Bienvenid@ (Nombre) </div>
                <div> Cerrar sesion </div>
            </header>

            <section>
                <div>
                    <h2> Resumen de citas semanales </h2>
                    <div>
                        <h4> Nombre </h4>
                        <h5> Rut </h5>
                        <h5> Dia </h5>
                        <h5> Hora inicio </h5>
                        <h5> Hora fin </h5>
                    </div>
                </div>

                <div>
                    <h2> Horarios disponibles </h2>
                    <div>
                        <h5> Dia </h5>
                        <h5> Hora inicio </h5>
                        <h5> Hora fin </h5>
                    </div>
                </div>

                <div>
                    <button> Editar horario </button>
                    <button> Editar citas </button>
                    <button> Editar perfil </button>
                </div>
            </section>

            {/* Footer provisorio */}
            <footer>
                <div> Mensaje </div>
                <div> Contacto muni </div>
            </footer>
        </div>
    );
}

export default Home;
