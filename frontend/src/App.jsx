import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/HomePS"
import PS_Psicologia from "./pages/PsicologiaPS"
import PS_Kinesiologia from "./pages/KinesiologiaPS"

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
