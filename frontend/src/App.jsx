import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from './pages/Login';
/* Rutas Administrador */
import HomeAdmin from './pages/HomeAdmin';
import GestionarPS from './pages/GestionarPS';
import AdminServicios from "./pages/Admin_servicios";
/* Rutas Prestador de Servicios */
import HomePS from './pages/HomePS';
/* import RegiPS from './pages/RegistroPS'; */
import AsJuPS from './pages/AsistenciaJuridicaPS';
/* import AsSoPS from './pages/AsistenciaSocialPS'; */
import FonoPS from './pages/FonoaudiologiaPS';
import KinePS from './pages/KinesiologiaPS';
/* import PeluPS from './pages/PeluqueriaPS'; */
import PodoPS from './pages/PodologiaPS';
import PsicPS from './pages/PsicologiaPS';
import AsSoPS from './pages/AsistenciaSocialPS';
import PeluPS from './pages/PeluqueriaPS';

/* Rutas Persona Mayor */
import HomePM from './pages/HomePM';
import RegiPM from './pages/RegistroPM';
import AsJuPM from './pages/AsistenciaJuridicaPM';
/* import AsSoPM from './pages/AsistenciaSocialPM'; */
import FonoPM from './pages/FonoaudiologiaPM';
import KinePM from './pages/KinesiologiaPM';
import PeluPM from './pages/PeluqueriaPM';
import PodoPM from './pages/PodologiaPM';
import PsicPM from './pages/PsicologiaPM';
import AsisoPM from './pages/AsistenicaSocialPM';
/* rutas moviles' */
import PsicPM_movil from './pages/PsicologiaPM_movil';
import AsJuPS_movil from './pages/AsistenciaJuridicaPS_movil';


/* Pruebas de Funcionamiento */
import GPM from "./component/GuiaPM";
import Graf from "./component/Grafico";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />

                {/* Rutas Administrador */}
                <Route path="/Admin" element={<HomeAdmin />} />
                <Route path="/Admin/GestionarPS" element={<GestionarPS/>} />
                <Route path="/Admin/Servicios" element={<AdminServicios />} />
                
                {/* Rutas Prestador de Servicios */}
                <Route path="/HPS" element={<HomePS />} />
                {/* <Route path="/RPS" element={<RegiPS />} /> */}
                <Route path="/AJPS" element={<AsJuPS />} />
                {/* <Route path="/ASPS" element={<AsSoPS />} /> */}
                <Route path="/FPS" element={<FonoPS />} />
                <Route path="/KPS" element={<KinePS />} />
                {/* <Route path="/PEPS" element={<PeluPS />} /> */}
                <Route path="/POPS" element={<PodoPS />} />
                <Route path="/PSPS" element={<PsicPS />} />
                <Route path="/AsSoPS" element={<AsSoPS />} />
                <Route path="/PlPS" element={<PeluPS />} />

                {/* Rutas Persona Mayor */}
                <Route path="/HPM" element={<HomePM />} />
                <Route path="/RPM" element={<RegiPM />} />
                <Route path="/AJPM" element={<AsJuPM />} />
                <Route path="/ASISOPM" element={<AsisoPM />} />
                {/* <Route path="/ASPM" element={<AsSoPM />} /> */}
                <Route path="/FPM" element={<FonoPM />} />
                <Route path="/KPM" element={<KinePM />} />
                <Route path="/PEPM" element={<PeluPM />} />
                <Route path="/POPM" element={<PodoPM />} />
                <Route path="/PSPM" element={<PsicPM />} />

<<<<<<< HEAD
                {/* Rutas Movil PS*/}
                <Route path="/PSPM_M" element={<PsicPM_movil />} />
                <Route path="/AsJuPS_M" element={<AsJuPS_movil />} />
=======
                {/* Pruebas de funcionamiento */}
                <Route path="Guia" element={<GPM/>} />
                <Route path="Gra" element={<Graf/>} />
>>>>>>> Pamela
            </Routes>
        </Router>
    );
}

export default App;