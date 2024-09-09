import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Principal from './component/persona_mayor/Principal';
import Psicologia from './component/persona_mayor/Psicologia';
import Podologia from './component/prestador_servicio/Podologia';
import AsistenciaJuridica from './component/prestador_servicio/AsistenciaJuridica';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AsistenciaJuridica />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
