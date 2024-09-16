import React, { useState } from "react";

const RegistroPersonaMayor = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombre:', name);
    console.log('Correo:', email);
    console.log('Teléfono:', phone);
    console.log('Edad:', age);
    console.log('Contraseña:', password);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-500 text-white text-center py-4">
        <h1 className="text-4xl font-bold">Regístrese</h1>
      </header>

      <main className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-4 p-6">
        <section className="flex items-center justify-center bg-white rounded-lg shadow-lg p-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">¡Bienvenido!</h2>
            <p className="text-lg text-gray-700">
              Regístrese para acceder a todos nuestros servicios.
            </p>
          </div>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-center mb-6">Formulario de Registro</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-gray-700">Nombre Completo</label>
              <input
                type="text"
                placeholder="Ej: Juan Pérez"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">Correo Electrónico</label>
              <input
                type="email"
                placeholder="Ej: juan@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">Teléfono</label>
              <input
                type="text"
                placeholder="Ej: +569 1234 5678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">Edad</label>
              <input
                type="number"
                placeholder="Ej: 65"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">Contraseña</label>
              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg font-medium text-lg hover:bg-green-600 transition duration-300"
            >
              Registrarse
            </button>
          </form>
        </section>
      </main>

    
    </div>
  );
};

export default RegistroPersonaMayor;
