import React, {useEffect} from 'react';
import {Outlet, Link} from 'react-router-dom';

function HeaderLog() {

    useEffect(() => {
        const boton = document.querySelector('#boton');
        const menu = document.querySelector('#Menu2');

        const togleMenu = () => {
            menu.classList.toggle('hidden');
        };

        return() => {
            if(boton){
                boton.addEventListener('click', togleMenu);
            }
        };
    }, []);

    useEffect(() => {

        const element = document.querySelector('#Menu1');
        const boton = document.querySelector('#boton');

        function TamañoVentana(){
            if (window.innerWidth <= 1670){
                element.classList.add('hidden');
                boton.classList.remove('hidden');

            }else{
            element.classList.remove('hidden');
            boton.classList.add('hidden');
            }
        }

        TamañoVentana();

        window.addEventListener('resize',TamañoVentana);

        return () => {
            window.removeEventListener('resize', TamañoVentana);
        };
    },[]);
        



    return(

        <div className="bg-slate-200 flex flex-col">
            
            <section>
                <header className="relative flex flex-wrap bg-nav h-24 justify-between items-center shadow-md">
                
                    <div className="flex items-center px-8"> 
                        <h2 className="justify-center px-2">Logo</h2>
                    </div>

                    {/* Nav que redirige a la página de registro e inicio de sesion */}

                    <nav id="Menu1" className="px-8 text-xl justify-between">
                        <Link to="/PEPM" className=" mx-4 px-4 py-1 text-center border rounded-lg border-white  text-white duration-300 hover:text-sky-600 bg-sky-600 hover:border-sky-600 hover:bg-white">
                            Peluqueria
                        </Link>

                        <Link to="/POPM" className="mx-4 px-4 py-1 text-center border rounded-lg border-white  text-white duration-300 hover:text-sky-600 bg-sky-600 hover:border-sky-600 hover:bg-white">
                            Podología
                        </Link>

                        <Link to="/PSPM" className="mx-4 px-4 py-1 text-center border rounded-lg border-white  text-white duration-300 hover:text-green-500 bg-green-500 hover:border-green-500 hover:bg-white">
                            Psicología
                        </Link>

                        <Link to="/KPM" className="mx-4 px-4 py-1 text-center border rounded-lg border-white  text-white duration-300 hover:text-green-500 bg-green-500 hover:border-green-500 hover:bg-white">
                            Kinesiología
                        </Link>

                        <Link to="/FPM" className="mx-4 px-4 py-1 text-center border rounded-lg border-white  text-white duration-300 hover:text-green-500 bg-green-500 hover:border-green-500 hover:bg-white">
                            Fonoaudiología
                        </Link>

                        <Link to="/AJPM" className="mx-4 px-4 py-1 text-center border rounded-lg border-white  text-white duration-300 hover:text-red-600 bg-red-600 hover:border-red-600 hover:bg-white">
                            Asistencia Jurídica
                        </Link>

                        <Link className="mx-4 px-4 py-1 text-center border rounded-lg border-white  text-white duration-300 hover:text-red-600 bg-red-600 hover:border-red-600 hover:bg-white">
                            Servicio5
                        </Link>

                        <Link to="/" className="mx-4 px-4 py-1 text-center border border-white rounded text-white duration-300 bg-teal-500 hover:text-teal-500 hover:border-teal-500 hover:bg-white">
                            login
                        </Link>

                        <Link to="/RPM" className="mx-4 px-4 py-1 text-center border border-white rounded text-white duration-300 bg-teal-500 hover:text-teal-500 hover:border-teal-500 hover:bg-white">
                            register
                        </Link>
                    </nav>

                    <button id="boton" className="block border border-black rounded-md w-20 h-8">
                            |||
                    </button>

                    <nav id="Menu2" className='bg-nav w-1/2 absolute right-0 top-full flex flex-col  items-end justify-end hidden'>


                        <Link to="/PEPM" className="text-20 w-full px-4 py-2 text-center border-white  text-white duration-300 hover:text-sky-600 bg-sky-600 hover:bg-white">
                            Peluqueria

                        </Link>

                        <Link to="/POPM" className="text-20 w-full my-3 px-4 py-2 text-center border-white  text-white duration-300 hover:text-sky-600 bg-sky-600 hover:bg-white">
                            Podología
                        </Link>

                        <Link to="/PSPM" className="text-20 w-full px-4 py-2 text-center  text-white duration-300 hover:text-green-500 bg-green-500 hover:bg-white">
                            Psicología
                        </Link>

                        <Link to="/KPM" className="text-20 w-full my-3 px-4 py-2 text-center  text-white duration-300 hover:text-green-500 bg-green-500  hover:bg-white">
                            Kinesiología
                        </Link>

                        <Link to="/FPM" className="text-20 w-full px-4 py-2 text-center  text-white duration-300 hover:text-green-500 bg-green-500 hover:bg-white">
                            Fonoaudiología
                        </Link>

                        <Link to="/AJPM" className="text-20 w-full my-3 px-4 py-2 text-center text-white duration-300 hover:text-red-600 bg-red-600 hover:bg-white">
                            Asistencia Jurídica
                        </Link>

                        <Link className="text-20 w-full px-4 py-2 text-center text-white duration-300 hover:text-red-600 bg-red-600 hover:bg-white">
                            Servicio5
                        </Link>

                        <Link to="/" className="text-20 w-full my-3 px-4 py-2 text-center text-white duration-300 bg-teal-500 hover:text-teal-500 hover:bg-white">
                            Login
                        </Link>

                    </nav>
                    
                </header>
                <Outlet/>
            </section>

            
        </div>

    );
}

export default HeaderLog;