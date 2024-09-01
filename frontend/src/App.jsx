import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./component/prestador_servicio/Home"
import PS_Psicologia from "./component/prestador_servicio/Psicologia"
import PS_Kinesiologia from "./component/prestador_servicio/Kinesiologia"

function App() {
    return (
        /*Router: Indica un enrutador para gestion de rutas y navegacion*/
        /*Routes: Define las rutas utilizando Route*/
        /*path: Especifica la URL de la ruta */
        /*element: Especifica el componente al cual dirigirse */
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/p" element={<PS_Psicologia />} />
                <Route path="/k" element={<PS_Kinesiologia />} />
            </Routes>
        </Router>
    );
}

export default App;
