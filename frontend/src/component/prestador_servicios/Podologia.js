// PodologiaScreen.js
import React, { useState } from 'react';

const Podologia= () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    console.log('Nombre:', name);
    console.log('Teléfono:', phone);
    console.log('Fecha:', date);
  };

  const services = ['Corte de Uñas', 'Tratamiento de Callos', 'Masaje Podal','Pedicure'];

  return (
    <div>
      {/* Encabezado */}
      <h1>Bienvenido a Podología para Adultos Mayores</h1>

      {/* Lista de Servicios */}
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>

      {/* Formulario de Citas */}
      <div>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Fecha (DD/MM/YYYY)"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={handleSubmit}>Agendar Cita</button>
      </div>

      {/* Pie de Página */}
      <footer>
        <p>© 2024 Podología para Adultos Mayores</p>
       
      </footer>
    </div>
  );
};

export default Podologia;
