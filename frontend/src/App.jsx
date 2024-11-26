import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 
import Login from './pages/Login';

/* Rutas Administrador */
import HomeAdmin from './pages/HomeAdmin';
import GestionarPS from './pages/GestionarPS';
import GestionOperativosAdmin from "./pages/GestionOperativosAdmin";
import Servicios from './pages/Admin_Servicios';
import GenerarReportes from "./pages/generador_reportes";

/* Rutas Prestador de Servicios */
import HomePS from './pages/HomePS';
import AsJuPS from './pages/AsistenciaJuridicaps';
import AsSoPS from './pages/AsistenciaSocialPS';
import FonoPS from './pages/FonoaudiologiaPS';
import KinePS from './pages/KinesiologiaPS';
import PeluPS from './pages/PeluqueriaPS';
import PodoPS from './pages/PodologiapPS';
import PsicPS from './pages/PsicologiaPS';

/* Rutas Persona Mayor */
import HomePM from './pages/HomePM';
import RegiPM from './pages/RegistroPM';
import AsJuPM from './pages/AsistenciaJuridicaPM';
import AsSoPM from './pages/AsistenicaSocialPM';
import FonoPM from './pages/FonoaudiologiaPM';
import KinePM from './pages/KinesiologiaPM';
import PeluPM from './pages/PeluqueriaPM';
import PodoPM from './pages/PodologiaPM';
import PsicPM from './pages/PsicologiaPM';
import FormularioMovilidad from "./pages/Fomulario_Movi";
import FormularioCondicionesMedicas from "./pages/CondicionesMedicas";

/* Para probar funcionamiento */
import ModuloSugerencia from "./pages/ModuloSugerencia";
import UserProfile from "./pages/UserProfile";
import ReviewPage from "./pages/ReviewPage";
import Graf from './component/Grafico';
import Guia from './component/GuiaPM';
import PerPM from './pages/PerfilUsuarios';
import RegisSoc from './pages/RegistroSocialHogar';
import PerPS from './pages/PerfilPrestadorServicios';
import FormAV from './component/FormAggVac';
import FormEPPS from './component/FormEdPerfPS';
import FormEPPM from './component/FormEdPerfPM';
import EvaluacionServicios from "./component/Evaluacion_servicio"; 
import Sug from "./component/Sugerencias";



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/EvaluacionServicios" element={<EvaluacionServicios/>}/>
                <Route path="/" element={<Login />} />

                {/* Rutas Administrador*/} 
                <Route path="/Admin" element={<HomeAdmin />}/>
                <Route path="/Admin/GestionarPS" element={<GestionarPS />} />
                <Route path="/Admin/GestionOperativos" element={<GestionOperativosAdmin />}/>
                
                {/* Rutas Prestador de Servicios */}
                <Route path="/HPS" element={<HomePS />} />
                <Route path="/AJPS" element={<AsJuPS />} />
                <Route path="/ASPS" element={<AsSoPS />} />
                <Route path="/FPS" element={<FonoPS />} />
                <Route path="/KPS" element={<KinePS />} />
                <Route path="/PEPS" element={<PeluPS />} />
                <Route path="/POPS" element={<PodoPS />} />
                <Route path="/PSPS" element={<PsicPS />} />

                {/* Rutas Persona Mayor */}
                <Route path="/HPM" element={<HomePM />} />
                <Route path="/RPM" element={<RegiPM />} />
                <Route path="/AJPM" element={<AsJuPM />} />
                <Route path="/ASPM" element={<AsSoPM />} /> 
                <Route path="/FPM" element={<FonoPM />} />
                <Route path="/KPM" element={<KinePM />} />
                <Route path="/PEPM" element={<PeluPM />} />
                <Route path="/POPM" element={<PodoPM />} />
                <Route path="/PSPM" element={<PsicPM />} />
                <Route path="/FM" element={<FormularioMovilidad />} />
                <Route path="/FCM" element={<FormularioCondicionesMedicas/>} />

                {/* Para probar funcionamiento */}
                <Route path="/USER" element={<UserProfile/>} />
                <Route path="/RWPS" element={<ReviewPage/>} />
                <Route path="/MDS" element={<ModuloSugerencia/>} />
                <Route path="Graf" element={<Graf />} />
                <Route path="Guia" element={<Guia />} />
                <Route path="Perf" element={<PerPM />} />
                <Route path="/RSH" element={<RegisSoc />} />
                <Route path="PerfPM" element={<PerPM />} />
                <Route path="PerfPS" element={<PerPS />} />
                <Route path="PerfPS/FAV" element={<FormAV />} />
                <Route path="PerfPS/FEPPS" element={<FormEPPS />} />
                <Route path="PerfPM/FEPPM" element={<FormEPPM />} />
                <Route path="Sug" element={<Sug />} />
                <Route path="Servicios" element={<Servicios />} />
                <Route path="GeRe" element={<GenerarReportes />} />
            </Routes>
        </Router>
    );
}

export default App;