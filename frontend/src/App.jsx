import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AsistenciaJuridica from './component/persona_mayor/asistencia_juridica';
import AsistenteSocial from './component/persona_mayor/asistente_social';
import Peluqueria from './component/prestador_servicio/peluqueria';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/asistencia-juridica" element={<AsistenciaJuridica />} />
        <Route path="/asistente-social" element={<AsistenteSocial />} />
        <Route path="/peluqueria" element={<Peluqueria/>} />
      </Routes>
    </Router>
  );
}

export default App;
