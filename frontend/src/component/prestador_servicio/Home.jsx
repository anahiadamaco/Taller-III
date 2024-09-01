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
                </div>

                <div>
                    <h2> Horarios disponibles </h2>
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
