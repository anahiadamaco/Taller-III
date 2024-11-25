import React from "react";
 
import Gmailicon from "../img/Gmailicon.png";
import IconGoogleMaps from "../img/IconGoogleMaps.png";
import Phoneicon from "../img/Phoneicon.png";
import Twitter from "../img/tw.png";
import Facebook from "../img/fb.png";
import Instagram from "../img/ig.png";
import Youtube from "../img/yt.png";
import Emergencia from "../img/fonoEmergencias.webp";
import logo from "../img/logo_muni.webp";

function FooterPM() {
    return (
        <footer className="bg-zinc-800  grid grid-cols-3 gap-4 p-6 py-10">
            <div className="flex flex-col items-start justify-center mx-8">
                <h3 className="text-white font-bold">Municipalidad de Temuco</h3>
                <div className="flex items-center my-2">
                    <img className="h-6 w-6" src={IconGoogleMaps} alt="" />
                    <p className="text-white mx-4">Av. Prat 650, Temuco - Chile</p>
                </div>

                <div className="my-2">
                    <div className="flex items-center">
                        <img className="h-6 w-6" src={Phoneicon} alt="" />
                        <p className="text-white mx-4">Telefonos</p>
                    </div>
                    
                    <ul className="text-white mx-10">
                        <li>Municipal: 800 100 650</li>
                        <li>Salud: 45 297 3630</li>
                        <li>Educación: 45 297 3771</li>
                        <li className="mt-2 font-bold text-lg">Emergencias: 1409</li>
                    </ul>
                </div>

                <div className="my-2">
                    <div className="flex items-center"></div>
                </div>
            </div>

            <div className=" items-start justify-center h-24">
                <div className="my-4">
                        <div className="flex items-center">
                        <img className="h-6 w-6" src={Gmailicon} alt="" />
                        <p className="text-white mx-4">munitco@temuco.cl (correo oficial)</p>
                    </div>
                    <p className="text-white mx-10">webmaster@temuco.cl (exclusivo para temas técnicos y de contenido)</p>
                </div>
            </div>

            <div className="flex flex-col items-start mx-8 my-2">
                <h3 className="text-white font-bold">Síguenos…</h3>
                <ul className="text-white my-4">
                    <li className="flex items-center mb-2">
                        <img className="h-6 w-6 mr-2" src={Twitter} alt="Twitter" style={{ filter: 'invert(100%) brightness(100%)' }}/>
                        Twitter
                    </li>
                    <li className="flex items-center mb-2">
                        <img className="h-6 w-6 mr-2" src={Facebook} alt="Facebook" style={{ filter: 'invert(100%) brightness(100%)' }}/>
                        Facebook
                    </li>
                    <li className="flex items-center mb-2">
                        <img className="h-6 w-6 mr-2" src={Instagram} alt="Instagram" style={{ filter: 'invert(100%) brightness(100%)' }}/>
                        Instagram
                    </li>
                    <li className="flex items-center mb-2">
                        <img className="h-6 w-6 mr-2" src={Youtube} alt="Youtube" style={{ filter: 'invert(100%) brightness(100%)' }}/>
                        temucowebvideos
                    </li>
                </ul>
            </div>

            <div className="flex items-start justify-start space-x-4">
                <img src={Emergencia} alt="Emergencia" className="h-20 w-30" /> 
                <img src={logo} alt="Logo" className="h-20 w-30" /> 
            </div>
        </footer>
    );
};

export default FooterPM;