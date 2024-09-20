import HeaderLog from '../component/NavLog.jsx';
import React from 'react';


function Registro() {
    return (
      <div>
        <header>
          <HeaderLog/>
        </header>
        <div>
          <div className='container mx-auto w-full my-20 flex justify-center'>
            <div className="bg-white p-10 rounded-md shadow-xl flex flex-col items-center w-1/3">
              <h1 className="text-2xl font-bold text-black text-center">Registrese para crear su cuenta</h1>
              <hr className="mt-2 bg-black shadow w-full"></hr>

              <form className="flex flex-col ">
                <p className="text-black mt-4 fond-bold">Ingrese su correo electronico</p>
                <input type="Email" className="bg-white border border-black text-black px-2 py-2 rounded-md my-4 w-72" autoComplete="off"></input>
                <p className="text-black mt-2">Ingrese su número de celular: </p>
                <input type="password" className="bg-white border border-black text-black px-4 py-2 rounded-md my-4 w-72" autoComplete="off"></input>
                <p className="text-black mt-2">Ingrese su rut: </p>
                <input type="password" className="bg-white border border-black text-black px-4 py-2 rounded-md my-4 w-72" autoComplete="off"></input>
                <p className="text-black mt-2">Ingrese su Contraseña: </p>
                <input type="password" className="bg-white border border-black text-black px-4 py-2 rounded-md my-4 w-72" autoComplete="off"></input>
                <button type="submit" className="border border-black rounded-md w-20 h-9">
                  Ingresar
                </button>
              </form>
            </div>
          </div>
        </div>  
      </div>
    );
  }
  
  export default Registro;