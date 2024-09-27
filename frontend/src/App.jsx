import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from './pages/Login';

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

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                
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

                {/* Rutas Persona Mayor */}
                <Route path="/HPM" element={<HomePM />} />
                <Route path="/RPM" element={<RegiPM />} />
                <Route path="/AJPM" element={<AsJuPM />} />
                {/* <Route path="/ASPM" element={<AsSoPM />} /> */}
                <Route path="/FPM" element={<FonoPM />} />
                <Route path="/KPM" element={<KinePM />} />
                <Route path="/PEPM" element={<PeluPM />} />
                <Route path="/POPM" element={<PodoPM />} />
                <Route path="/PSPM" element={<PsicPM />} />
            </Routes>
        </Router>
    );
}

export default App;