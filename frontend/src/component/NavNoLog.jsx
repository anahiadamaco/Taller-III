import React, {useEffect} from 'react';
import {Outlet, Link} from 'react-router-dom';

function HeaderNoLog() {

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

                        <Link to="/" className="text-20 w-full my-3 px-4 py-2 text-center text-white duration-300 bg-teal-500 hover:text-teal-500 hover:bg-white">
                            Login
                        </Link>

                        <Link to="/RPM" className="text-20 w-full my-3 px-4 py-2 text-center text-white duration-300 bg-teal-500 hover:text-teal-500 hover:bg-white">
                            Registro
                        </Link>

                    </nav>
                    
                </header>
                <Outlet/>
            </section>

            
        </div>

    );
}

export default HeaderNoLog;