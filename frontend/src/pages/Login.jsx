import HeaderNoLog from '../component/NavNoLog';
import React from 'react';

function Login() {
    return (
      <div className='overflow-hidden'>
        <header>
          <HeaderNoLog/>
        </header>
        <div className='container- mx-auto w-full my-20 flex justify-center '>
          <div className="bg-white p-10 rounded-md shadow-xl flex flex-col items-center ">
            <h1 className="text-2xl font-bold text-black text-center">Bienvenido por favor inicie sesión</h1>
            <hr className="mt-2 bg-black shadow w-full"></hr>
            
            <form className="flex flex-col ">
              <p className="text-black mt-4 fond-bold">Por favor ingrese su rut</p>
              <input type="Email"  className="bg-white border border-black text-black px-2 py-2 rounded-md my-4 w-64" autoComplete="off"></input>
              <p className="text-black mt-2">Por favor ingrese su contraseña: </p>
              <input type="password" className="bg-white border border-black text-black px-4 py-2 rounded-md my-4 w-64" autoComplete="off"></input>
              <button type="submit" className="border border-black rounded-md w-20 h-8">
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;