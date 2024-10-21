import React, { useState } from 'react';
import HeaderLog from '../component/NavLog.jsx'; // Asegúrate de que la ruta sea correcta
import FooterPM from '../component/FooterPM.jsx'; // Asegúrate de que la ruta sea correcta

const FormularioImagen = () => {
  const [imagen, setImagen] = useState(null);
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagen(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!imagen) {
      setMensaje('Por favor, selecciona una imagen.');
      return;
    }
    
    // Aquí puedes manejar la subida de la imagen a tu backend
    console.log('Imagen lista para enviar:', imagen);
    setMensaje('Imagen cargada con éxito!');
    setImagen(null); // Reinicia el estado si es necesario
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header>
        <HeaderLog />
      </header>

      {/* Contenido principal */}
      <div className="flex-grow container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 mt-4 flex justify-center ">Registro Social de Hogar</h1>
        <h2 className="text-xl mb-6 flex justify-center">Sube una imagen de tu registro social de hogar para completar tu registro y ver si cumples con el último requisito.</h2>
        
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-4"> {/* Estilo del formulario */}
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleChange} 
            required 
            className="mb-4 border border-gray-300 rounded-md p-2 w-full" 
          />
          {imagen && <img src={imagen} alt="Imagen previa" className="mb-4 mx-auto" style={{ maxWidth: '200px' }} />}
          
          <div className="flex justify-center">
            <button 
              type="submit" 
              className="bg-blue-500 text-white font-semibold py-2 px-4 w-32 rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
              Subir Imagen
            </button>
          </div>
        </form>
        
        {mensaje && <p className="mt-4 text-green-600 text-center">{mensaje}</p>} {/* Mensaje centrado */}
      </div>

      {/* Footer */}
      <footer>
        <FooterPM />
      </footer>
    </div>
  );
};

export default FormularioImagen;