import React from "react";

import Gmailicon from "../img/Gmailicon.png";
import IconGoogleMaps from "../img/IconGoogleMaps.png";
import Phoneicon from "../img/Phoneicon.png";

function FooterPS() {
    return (
        <footer className="bg-zinc-800  grid grid-cols-3 gap-4 p-4 py-14">
            <div className="flex flex-col items-start justify-center mx-8">
                <h3 className="text-white font-bold">Municipalidad de Temuco</h3>
                <div className="flex items-center my-4">
                    <img className="h-6 w-6" src={IconGoogleMaps} alt="" />
                    <p className="text-white mx-4">Av. Prat 650, Temuco - Chile</p>
                </div>

                <div>
                    <div className="flex items-center">
                        <img className="h-6 w-6" src={Phoneicon} alt="" />
                        <p className="text-white mx-4">Telefonos</p>
                    </div>
                    
                    <ul className="text-white mx-10">
                        <li>lorem</li>
                        <li>LOREM</li>
                        <li>LOREM</li>
                    </ul>
                </div>

                <div className="my-4">
                    <div className="flex items-center">
                        <img className="h-6 w-6" src={Gmailicon} alt="" />
                        <p className="text-white mx-4">munitco@temuco.cl (correo oficial)</p>
                    </div>
                    <p className="text-white mx-10">webmaster@temuco.cl (exclusivo para temas técnicos y de contenido)</p>
                </div>
            </div>

            <div className=" items-start justify-center h-24">

                <h3 className="text-white font-bold">Lorem</h3>
                <ul className="text-white my-4">
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                </ul>
            </div>

            <div className=" items-start justify-center h-24">
                <p className="text-white">© Copyright - Municipalidad de Temuco | Lazos S.A. -</p>
            </div>
        </footer>
    );
};

export default FooterPS;