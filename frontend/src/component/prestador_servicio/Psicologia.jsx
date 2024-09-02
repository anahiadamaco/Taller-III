import React from 'react';

function Psicologia() {
    return (
        <div>
            {/* Header provisorio mientras se termina el navbar */}
            <header>
                <div> Logo Muni Temuco </div>
                
                <div> Asistente social </div>
                <div> Asistente juridico </div>
                <div> Fonoaudiologia </div>
                <div> Podologia </div>
                <div> Peluqueria </div>
                <div> Kinesiologia </div>
                <div> Psicologia </div>

                <div> Cerrar sesion </div>

                <div>
                    <button> Editar horario </button>
                    <button> Editar citas </button>
                    <button> Editar perfil </button>
                </div>
            </header>

            <section>
                <div>
                    <h3> Grafico de atencion mensual </h3>
                    <h5> x: dias del mes, y: num de personas por dias </h5>
                </div>

                <div>
                    <h3> Perfil prestador servicio </h3>
                    <div>
                        <h4> Nombre: </h4>
                        <h4> Rut: </h4>
                        <h4> Fono oficina: </h4>
                        <h4> Titulo: </h4>
                    </div>
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

export default Psicologia;
