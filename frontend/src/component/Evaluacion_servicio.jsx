import React from "react";
import HeaderLog from "./NavLog";


function Evaluacion_Servicios() {
    return (
        <div className="min-h-screen bg-gray-200 ">

            <header>
                <HeaderLog/>
            </header>
        
            <div className="my-12">
                <h1 className="text-center text-4xl">Evaluacion de tratamiento</h1>
            </div>


            
            <div className="col-span-3 row-span-2 row-start-2 border-2 rounded-lg border-blue-500 bg-white p-4 flex flex-col mx-96">
            
                <div className="mx-4 flex items-center">
                <img class="h-20 w-20 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&  ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
                    <div className='my-4 mx-2 p-2 bg-blue-100 rounded-lg w-full'>
                        <p>Nombre de especialista:</p>
                        <p>Servicio:</p>
                    </div>
                            
                </div>

                <div className="mx-5 flex flex-col">
                    <h2 className="text-lg">Por favor seleccione su nivel de satisfaccion</h2>
                    <div class="relative flex gap-x-2 my-2">
                        <div class="flex h-6 items-center">
                            <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded"/>
                        </div>
                        <div class="text-sm leading-6">
                            <label for="comments" class="font-medium text-gray-900">Exelente</label>
                        </div>
                       
                    </div>

                    <div class="relative flex gap-x-2">
                        <div class="flex h-6 items-center">
                            <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded"/>
                        </div>
                        <div class="text-sm leading-6">
                            <label for="comments" class="font-medium text-gray-900">Buena</label>
                        </div>
                    </div>

                    <div class="relative flex gap-x-2 my-2">
                        <div class="flex h-6 items-center">
                            <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded"/>
                        </div>
                        <div class="text-sm leading-6">
                            <label for="comments" class="font-medium text-gray-900">Mala</label>
                        </div>
                    </div>

                    
                </div>
                
               


                <div className=" rounded-lg p-4 w-full flex ">
                    <div className="w-full">
                        <textarea 
                            className="border-2 rounded-lg focus:ring-0 resize-none w-full p-4" 
                            rows={6} 
                            placeholder="Ingresa tu comentario"
                        ></textarea>
                    </div>
                </div>

                        
                <div className='flex flex-end justify-end mt-auto'>
                    <button className='my-4 mx-4 bg-blue-300 px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors duration-300'> Enviar</button>
                </div>
            </div>

            

       

        
        

        </div>
        

        

    );
};

export default Evaluacion_Servicios;