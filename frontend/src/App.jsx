import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import AJ from "./persona_mayor/asistencia_juridica"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AJ />} />
            </Routes>
        </Router>
    );
}

export default App;