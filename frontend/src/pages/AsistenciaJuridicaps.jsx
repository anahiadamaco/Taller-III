import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import HeaderLog from '../component/NavLog.jsx';

function AsistenciaJuridica() {

    const [isCalendarOpen, setCalendarOpen] = useState(false);

    const toggleCalendar = () => {
        setCalendarOpen(!isCalendarOpen);
    };

    const data = [
        { day: '01', count: 0 },
        { day: '02', count: 0 },
        { day: '03', count: 0 },
        // ... (más datos)
        { day: '30', count: 0 },
        { day: '31', count: 0 }
    ];

    const [isModalCitasOpen, setIsModalCitasOpen] = useState(false);
    const [isModalHorariosOpen, setIsModalHorariosOpen] = useState(false);
    const [isModalPerfilOpen, setIsModalPerfilOpen] = useState(false);

    const [citas, setCitas] = useState([
        { proveedor: 'Juan Perez', especialidad: 'Abogado', fecha: '2024-10-15', hora: '10:00', usuario: 'Pedro González' },
        { proveedor: 'María López', especialidad: 'Asistente Legal', fecha: '2024-10-16', hora: '11:30', usuario: 'Ana Martínez' }
    ]);

    const [horarios, setHorarios] = useState([
        { proveedor: 'Juan Perez', especialidad: 'Abogado', horarios: [{ dia: 'Lunes', horas: '09:00 - 12:00' }, { dia: 'Martes', horas: '10:00 - 13:00' }] },
        { proveedor: 'María López', especialidad: 'Asistente Legal', horarios: [{ dia: 'Martes', horas: '10:00 - 13:00' }] }
    ]);

    const [perfiles, setPerfiles] = useState([
        { nombre: 'Juan Perez', tipo: 'Proveedor', rut: '12.345.678-9', correo: 'juan.perez@example.com', fono: '+56 9 1234 5678' },
        { nombre: 'Pedro González', tipo: 'Usuario', rut: '11.223.344-5', correo: 'pedro.gonzalez@example.com', fono: '+56 9 9876 5432' }
    ]);

    const [editIndex, setEditIndex] = useState(null); // Índice para controlar qué fila se está editando
    const [editedCita, setEditedCita] = useState(null); // Datos de la cita editada
    const [editedHorario, setEditedHorario] = useState(null); // Datos del horario editado
    const [editedPerfil, setEditedPerfil] = useState(null);

    const handleEditCitas = () => setIsModalCitasOpen(true);
    const handleEditHorarios = () => setIsModalHorariosOpen(true);
    const handleEditPerfil = () => setIsModalPerfilOpen(true);
    const closeModal = () => {
        setIsModalCitasOpen(false);
        setIsModalHorariosOpen(false);
        setIsModalPerfilOpen(false);
        setEditIndex(null);
        setEditedCita(null);
        setEditedHorario(null);
        setEditedPerfil(null);
    };

    // Para citas
    const handleEditCitaClick = (index) => {
        setEditIndex(index);
        setEditedCita({ ...citas[index] });
    };

    const handleCitaChange = (e, field) => {
        setEditedCita({
            ...editedCita,
            [field]: e.target.value,
        });
    };

    const handleSaveCitas = () => {
        if (!editedCita.proveedor || !editedCita.especialidad || !editedCita.fecha || !editedCita.hora || !editedCita.usuario) {
            alert("Por favor, completa todos los campos.");
            return;
        }
        
        if (editIndex !== null) {
            const updatedCitas = [...citas];
            updatedCitas[editIndex] = editedCita;
            setCitas(updatedCitas);
        }
        closeModal();
    };

    const handleDeleteCita = (index) => {
        const updatedCitas = citas.filter((_, i) => i !== index);
        setCitas(updatedCitas);
    };

    const handleAddCita = () => {
        setCitas([...citas, { proveedor: '', especialidad: '', fecha: '', hora: '', usuario: '' }]);
    };

    // Para horarios
    const handleEditHorarioClick = (index) => {
        setEditIndex(index);
        setEditedHorario({ ...horarios[index] });
    };

    const handleHorarioChange = (e, field) => {
        setEditedHorario({
            ...editedHorario,
            [field]: e.target.value,
        });
    };

    const handleSaveHorarios = () => {
        if (!editedHorario.proveedor || !editedHorario.especialidad || !editedHorario.dia || !editedHorario.hora) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        if (editIndex !== null) {
            const updatedHorarios = [...horarios];
            updatedHorarios[editIndex] = editedHorario;
            setHorarios(updatedHorarios);
        }
        closeModal();
    };

    const handleDeleteHorario = (index) => {
        const updatedHorarios = horarios.filter((_, i) => i !== index);
        setHorarios(updatedHorarios);
    };

    const handleAddHorario = () => {
        setHorarios([...horarios, { proveedor: '', especialidad: '', horarios: [{ dia: '', horas: '' }] }]);
    };

    //Para perfiles.

    const handleEditPerfilClick = (index) => {
        setEditedPerfil(perfiles[index]); // Configura el perfil a editar
        setEditIndex(index); // Almacena el índice del perfil a editar
        setIsModalPerfilOpen(true); // Abre el modal
    };

    const handleDeletePerfil = (index) => {
        const updatedPerfiles = perfiles.filter((_, i) => i !== index);
        setPerfiles(updatedPerfiles);
    };

    const handlePerfilChange = (e, field) => {
        setEditedPerfil({
            ...editedPerfil,
            [field]: e.target.value,
        });
    };
    
    const handleAddPerfil = () => {
        setPerfiles([...perfiles, { nombre: '', tipo: '', rut:'', correo: '', fono: '' }]);
    }

    const handleSavePerfil = () => {
        if (editIndex !== null) {
            const updatedPerfiles = [...perfiles];
            updatedPerfiles[editIndex] = editedPerfil;
            setPerfiles(updatedPerfiles);
        }
        closeModal();
    };

    return (
        <div className="min-h-screen bg-gray-200 flex flex-col">
            <header>
                <HeaderLog />
            </header>

            <div className="bg-red-600 text-white text-center py-8">
                <h1 className="text-4xl font-bold mb-4">Administrador de Asistencia Jurídica</h1>
                <p className="text-xl">Gestión de servicios y especialistas.</p>
            </div>

            <div className="flex-grow p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-red-600">
                    <h2 className="text-xl font-bold text-red-700 mb-4">Gráfico de Atención Mensual</h2>
                    <LineChart width={500} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="count" stroke="#8884d8" />
                    </LineChart>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-red-600">
                    <h2 className="text-xl font-bold text-red-700 mb-4">Administrador</h2>
                    <div>
                        <h4><strong>Nombre:</strong> Juan Perez</h4>
                        <h4><strong>RUT:</strong> 12.345.678-9</h4>
                        <h4><strong>Correo:</strong> juan.perez@example.com</h4>
                        <h4><strong>Fono oficina:</strong> +56 9 1234 5678</h4>
                    </div>
                </div>
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <button
                    className="bg-green-500 text-white font-bold py-1 px-3 rounded hover:bg-green-600 transition duration-300"
                    onClick={handleEditHorarios}
                >
                    Editar Horarios
                </button>
                <button
                    className="bg-green-500 text-white font-bold py-1 px-3 rounded hover:bg-green-600 transition duration-300"
                    onClick={handleEditCitas}
                >
                    Editar Citas
                </button>
                <button
                    className="bg-green-500 text-white font-bold py-1 px-3 rounded hover:bg-green-600 transition duration-300"
                    onClick={ ()=> handleEditPerfil()}
                >
                    Editar Perfil
                </button>
                <button
                    onClick={toggleCalendar}
                    className="bg-green-500 text-white font-bold py-1 px-3 rounded hover:bg-green-600 transition duration-300"
                >
                    Ver Calendario
                </button>
            </div>

            <footer className="bg-red-600 text-white text-center p-6">
                <p>© 2024 Municipalidad - Asistencia Jurídica</p>
            </footer>

            {isModalCitasOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-4xl relative overflow-y-auto max-h-screen">
                        <div className="absolute top-4 right-4 flex space-x-2">
                            <button onClick={handleAddCita} className="bg-green-500 text-white font-bold py-1 px-3 rounded hover:bg-green-600">+</button>
                            <button onClick={closeModal} className="bg-gray-500 text-white font-bold py-1 px-3 rounded hover:bg-gray-600">Cerrar</button>
                        </div>
                        <h2 className="text-2xl font-bold text-red-600 mb-4">Editar Citas</h2>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-300 p-2">Proveedor</th>
                                    <th className="border border-gray-300 p-2">Especialidad</th>
                                    <th className="border border-gray-300 p-2">Fecha</th>
                                    <th className="border border-gray-300 p-2">Hora</th>
                                    <th className="border border-gray-300 p-2">Usuario</th>
                                    <th className="border border-gray-300 p-2">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {citas.map((cita, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="border border-gray-300 p-2">{cita.proveedor}</td>
                                        <td className="border border-gray-300 p-2">{cita.especialidad}</td>
                                        <td className="border border-gray-300 p-2">{cita.fecha}</td>
                                        <td className="border border-gray-300 p-2">{cita.hora}</td>
                                        <td className="border border-gray-300 p-2">{cita.usuario}</td>
                                        <td className="border border-gray-300 p-2 flex space-x-2">
                                            <button onClick={() => handleEditCitaClick(index)} className="bg-blue-500 text-white font-bold py-1 px-3 rounded hover:bg-blue-600">Editar</button>
                                            <button onClick={() => handleDeleteCita(index)} className="bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-600">Borrar</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {editedCita && (
                            <div className="mt-4">
                                <h3 className="text-lg font-bold mb-2">Editar Cita</h3>
                                <div className="space-y-2">
                                    <div>
                                        <label className="block text-gray-700">Proveedor:</label>
                                        <input
                                            type="text"
                                            value={editedCita.proveedor}
                                            onChange={(e) => handleCitaChange(e, 'proveedor')}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Especialidad:</label>
                                        <input
                                            type="text"
                                            value={editedCita.especialidad}
                                            onChange={(e) => handleCitaChange(e, 'especialidad')}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Fecha:</label>
                                        <input
                                            type="text"
                                            value={editedCita.fecha}
                                            onChange={(e) => handleCitaChange(e, 'fecha')}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Hora:</label>
                                        <input
                                            type="text"
                                            value={editedCita.hora}
                                            onChange={(e) => handleCitaChange(e, 'hora')}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Usuario:</label>
                                        <input
                                            type="text"
                                            value={editedCita.usuario}
                                            onChange={(e) => handleCitaChange(e, 'usuario')}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-end space-x-2">
                                    <button onClick={handleSaveCitas} className="bg-blue-500 text-white font-bold py-1 px-3 rounded hover:bg-blue-600">Guardar</button>
                                    <button onClick={closeModal} className="bg-gray-500 text-white font-bold py-1 px-3 rounded hover:bg-gray-600">Cancelar</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {isModalHorariosOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-4xl relative overflow-y-auto max-h-screen">
                        <div className="absolute top-4 right-4 flex space-x-2">
                            <button onClick={handleAddHorario} className="bg-green-500 text-white font-bold py-1 px-3 rounded hover:bg-green-600">+</button>
                            <button onClick={closeModal} className="bg-gray-500 text-white font-bold py-1 px-3 rounded hover:bg-gray-600">Cerrar</button>
                        </div>
                        <h2 className="text-2xl font-bold text-red-600 mb-4">Editar Horarios</h2>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-300 p-2">Proveedor</th>
                                    <th className="border border-gray-300 p-2">Especialidad</th>
                                    <th className="border border-gray-300 p-2">Día</th>
                                    <th className="border border-gray-300 p-2">Horas</th>
                                    <th className="border border-gray-300 p-2">Acciones</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                {horarios.map((horario, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="border border-gray-300 p-2">{horario.proveedor}</td>
                                        <td className="border border-gray-300 p-2">{horario.especialidad}</td>
                                        <td className="border border-gray-300 p-2">{horario.horarios.map(h => h.dia).join(', ')}</td>
                                        <td className="border border-gray-300 p-2">{horario.horarios.map(h => h.horas).join(', ')}</td>
                                        <td className="border border-gray-300 p-2 flex space-x-2">
                                            <button onClick={() => handleEditHorarioClick(index)} className="bg-blue-500 text-white font-bold py-1 px-3 rounded hover:bg-blue-600">Editar</button>
                                            <button onClick={() => handleDeleteHorario(index)} className="bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-600">Borrar</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {editedHorario && (
                            <div className="mt-4">
                                <h3 className="text-lg font-bold mb-2">Editar Horario</h3>
                                <div className="space-y-2">
                                    <div>
                                        <label className="block text-gray-700">Proveedor:</label>
                                        <input
                                            type="text"
                                            value={editedHorario.proveedor}
                                            onChange={(e) => handleHorarioChange(e, 'proveedor')}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Especialidad:</label>
                                        <input
                                            type="text"
                                            value={editedHorario.especialidad}
                                            onChange={(e) => handleHorarioChange(e, 'especialidad')}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Día:</label>
                                        <input
                                            type="text"
                                            value={editedHorario.horarios.map(h => h.dia).join(', ')}
                                            onChange={(e) => handleHorarioChange(e, 'dia')}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Horas:</label>
                                        <input
                                            type="text"
                                            value={editedHorario.horarios.map(h => h.horas).join(', ')}
                                            onChange={(e) => handleHorarioChange(e, 'horas')}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-end space-x-2">
                                    <button onClick={handleSaveHorarios} className="bg-blue-500 text-white font-bold py-1 px-3 rounded hover:bg-blue-600">Guardar</button>
                                    <button onClick={closeModal} className="bg-gray-500 text-white font-bold py-1 px-3 rounded hover:bg-gray-600">Cancelar</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {isModalPerfilOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-4xl relative overflow-y-auto max-h-screen">
                        <div className="absolute top-4 right-4 flex space-x-2">
                            <button onClick={handleAddPerfil} className="bg-green-500 text-white font-bold py-1 px-3 rounded hover:bg-green-600">+</button>
                            <button onClick={closeModal} className="bg-gray-500 text-white font-bold py-1 px-3 rounded hover:bg-gray-600">Cerrar</button>
                        </div>
                        <h2 className="text-2xl font-bold text-red-600 mb-4">Editar Perfil</h2>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-300 p-2">Nombre</th>
                                    <th className="border border-gray-300 p-2">Tipo</th>
                                    <th className="border border-gray-300 p-2">RUT</th>
                                    <th className="border border-gray-300 p-2">Correo</th>
                                    <th className="border border-gray-300 p-2">Fono</th>
                                    <th className="border border-gray-300 p-2">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {perfiles.map((perfil, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="border border-gray-300 p-2">{perfil.nombre}</td>
                                        <td className="border border-gray-300 p-2">{perfil.tipo}</td>
                                        <td className="border border-gray-300 p-2">{perfil.rut}</td>
                                        <td className="border border-gray-300 p-2">{perfil.correo}</td>
                                        <td className="border border-gray-300 p-auto">{perfil.fono}</td>
                                        <td className="border border-gray-300 p-2 flex space-x-2">
                                            <button onClick={() => handleEditPerfilClick(index)} className="bg-blue-500 text-white font-bold py-1 px-3 rounded hover:bg-blue-600">Editar</button>
                                            <button onClick={() => handleDeletePerfil(index)} className="bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-600">Borrar</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {editedPerfil && (
                            <div className="mt-4">
                                <h3 className="text-lg font-bold mb-2">Editar Perfil</h3>
                                <div className="space-y-2">
                                    <div>
                                        <label className="block text-gray-700">Nombre:</label>
                                        <input
                                            type="text"
                                            value={editedPerfil.nombre}
                                            onChange={(e) => handlePerfilChange(e, 'nombre')}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Tipo:</label>
                                        <input
                                            type="text"
                                            value={editedPerfil.tipo}
                                            onChange={(e) => handlePerfilChange(e, 'tipo')}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">RUT:</label>
                                        <input
                                            type="text"
                                            value={editedPerfil.rut}
                                            onChange={(e) => handlePerfilChange(e, 'rut')}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Correo:</label>
                                        <input
                                            type="text"
                                            value={editedPerfil.correo}
                                            onChange={(e) => handlePerfilChange(e, 'correo')}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Fono:</label>
                                        <input
                                            type="text"
                                            value={editedPerfil.fono}
                                            onChange={(e) => handlePerfilChange(e, 'fono')}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-end space-x-2">
                                    <button onClick={handleSavePerfil} className="bg-blue-500 text-white font-bold py-1 px-3 rounded hover:bg-blue-600">Guardar</button>
                                    <button onClick={closeModal} className="bg-gray-500 text-white font-bold py-1 px-3 rounded hover:bg-gray-600">Cancelar</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {isCalendarOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl max-w-full w-full md:max-w-4xl h-3/4 flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-red-700">Calendario de Psicología</h2>
                        <button
                            onClick={toggleCalendar}
                            className="bg-gray-500 text-white font-bold py-1 px-3 rounded hover:bg-gray-600"
                        >
                            Cerrar
                        </button>
                        </div>
                        <div className="flex-grow overflow-auto">
                            <iframe
                                src="https://calendar.google.com/calendar/embed?src=eff5da9c280da4b997f8cc2c5e8a649b62fffd71d0be5c347ef755f7e8817192%40group.calendar.google.com&ctz=America%2FSantiago"
                                className="w-full h-full"
                                frameBorder="0"
                                scrolling="no"
                                title="Calendario de Psicología"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AsistenciaJuridica;