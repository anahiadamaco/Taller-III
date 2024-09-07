import React from 'react';
import {Outlet, Link} from 'react-router-dom';

function HeaderLog() {
    return(
        <div className="bg-slate-200">
            <section>
                <header className="flex flex-wrap bg-nav h-24 justify-between items-center shadow-md">
                
                    <div className="flex items-center px-8"> 
                        <h2 className="justify-center px-2">Logo</h2>
                    </div>

                    {/* Nav que redirige a la página de registro e inicio de sesion */}

                    <nav className="px-8 text-xl justify-between">
                        <Link to="/" className="mx-4 px-4 py-1 text-center border rounded-lg border-white  text-white duration-300 hover:text-sky-600 bg-sky-600 hover:border-sky-600 hover:bg-white">
                            Peluqueria
                        </Link>

                        <Link to="" className="mx-4 px-4 py-1 text-center border rounded-lg border-white  text-white duration-300 hover:text-sky-600 bg-sky-600 hover:border-sky-600 hover:bg-white">
                            Servicio1
                        </Link>

                        <Link to="" className="mx-4 px-4 py-1 text-center border rounded-lg border-white  text-white duration-300 hover:text-green-500 bg-green-500 hover:border-green-500 hover:bg-white">
                            Servicio2
                        </Link>

                        <Link to="" className="mx-4 px-4 py-1 text-center border rounded-lg border-white  text-white duration-300 hover:text-green-500 bg-green-500 hover:border-green-500 hover:bg-white">
                            Servicio3
                        </Link>

                        <Link to="" className="mx-4 px-4 py-1 text-center border rounded-lg border-white  text-white duration-300 hover:text-green-500 bg-green-500 hover:border-green-500 hover:bg-white">
                            Servicio4
                        </Link>

                        <Link to="" className="mx-4 px-4 py-1 text-center border rounded-lg border-white  text-white duration-300 hover:text-red-600 bg-red-600 hover:border-red-600 hover:bg-white">
                            Servicio4
                        </Link>

                        <Link to="" className="mx-4 px-4 py-1 text-center border rounded-lg border-white  text-white duration-300 hover:text-red-600 bg-red-600 hover:border-red-600 hover:bg-white">
                            Servicio5
                        </Link>

                        <Link to="/Login" className="mx-4 px-4 py-1 text-center border border-white rounded text-white duration-300 bg-teal-500 hover:text-teal-500 hover:border-teal-500 hover:bg-white">
                            login
                        </Link>

                        <Link to="/Registro" className="mx-4 px-4 py-1 text-center border border-white rounded text-white duration-300 bg-teal-500 hover:text-teal-500 hover:border-teal-500 hover:bg-white">
                            register
                        </Link>
                
                    </nav>
                </header>
                <Outlet/>
            </section>
        </div>

    );
}

export default HeaderLog;