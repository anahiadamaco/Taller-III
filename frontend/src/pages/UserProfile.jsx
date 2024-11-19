import React, { useState } from 'react';
import { FiEdit3, FiMail, FiPhone, FiUser } from 'react-icons/fi'; // Íconos de react-icons

const UserProfile = () => {
  // Estado para almacenar la información del usuario y el modo de edición
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    phone: '123-456-7890',
  });

  // Función para manejar el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Función para alternar el modo de edición
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Función para guardar los cambios
  const saveChanges = () => {
    setIsEditing(false);
    // Aquí puedes hacer una llamada a la API para actualizar el perfil del usuario
    console.log('Información guardada:', user);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md mt-6">
      {/* Avatar y botón de editar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center">
            <FiUser className="text-4xl text-blue-600" />
          </div>
          <h1 className="text-2xl font-semibold text-blue-800">Perfil de Usuario</h1>
        </div>
        <button
          onClick={toggleEdit}
          className="text-indigo-600 hover:text-indigo-800 flex items-center font-semibold"
        >
          <FiEdit3 className="mr-1" />
          {isEditing ? 'Cancelar' : 'Editar'}
        </button>
      </div>

      <div className="space-y-6">
        {/* Campo de Nombre */}
        <div className="flex items-center space-x-3">
          <FiUser className="text-xl text-blue-600" />
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600">Nombre</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            ) : (
              <p className="mt-1 text-lg font-medium text-gray-800">{user.name}</p>
            )}
          </div>
        </div>

        {/* Campo de Email */}
        <div className="flex items-center space-x-3">
          <FiMail className="text-xl text-blue-600" />
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600">Correo Electrónico</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            ) : (
              <p className="mt-1 text-lg font-medium text-gray-800">{user.email}</p>
            )}
          </div>
        </div>

        {/* Campo de Teléfono */}
        <div className="flex items-center space-x-3">
          <FiPhone className="text-xl text-blue-600" />
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600">Teléfono</label>
            {isEditing ? (
              <input
                type="tel"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            ) : (
              <p className="mt-1 text-lg font-medium text-gray-800">{user.phone}</p>
            )}
          </div>
        </div>
      </div>

      {/* Botón Guardar */}
      {isEditing && (
        <button
          onClick={saveChanges}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
        >
          Guardar Cambios
        </button>
      )}
    </div>
  );
};

export default UserProfile;
