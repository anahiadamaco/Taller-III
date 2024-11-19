import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import HeaderLog from '../component/NavLog.jsx';


import FooterPS from '../component/FooterPS.jsx';

//Importacion de imagenes
import Fondo from '../img/fondologin.webp';
import EditHorario from '../img/edithorario.png';
import EditCitas from '../img/editcitas.png';
import EditPerfil from '../img/editperfil.png';
import VerCalendario from '../img/vercalendario.png';

function AsistenciaSocial() {

    const [isCalendarOpen, setCalendarOpen] = useState(false);

    const toggleCalendar = () => {
        setCalendarOpen(!isCalendarOpen);
    };

    const data = [
        { day: '0', count: 0 },
        { day: 'Ene', count: 0 },
        { day: 'Feb', count: 0 },
        { day: 'Mar', count: 4 },
        { day: 'Abr', count: 0 },
        { day: 'May', count: 0 },
        { day: 'Jun', count: 0 },
        { day: 'Jul', count: 0 },
        { day: 'Ago', count: 0 },
        { day: 'Sep', count: 0 },
        { day: 'Oct', count: 0 },
        { day: 'Nov', count: 0 },
        { day: 'Dic', count: 0 },
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

    // Estados para la búsqueda
    const [searchCitas, setSearchCitas] = useState('');
    const [searchHorarios, setSearchHorarios] = useState('');
    const [searchPerfiles, setSearchPerfiles] = useState('');

    // Filtrado de citas según el término de búsqueda
    const filteredCitas = citas.filter(cita =>
        cita.proveedor.toLowerCase().includes(searchCitas.toLowerCase()) ||
        cita.usuario.toLowerCase().includes(searchCitas.toLowerCase()) ||
        cita.especialidad.toLowerCase().includes(searchCitas.toLowerCase())
    );

    // Filtrado de horarios según el término de búsqueda
    const filteredHorarios = horarios.filter(horario =>
        horario.proveedor.toLowerCase().includes(searchHorarios.toLowerCase()) ||
        horario.especialidad.toLowerCase().includes(searchHorarios.toLowerCase())
    );

    // Filtrado de perfiles según el término de búsqueda
    const filteredPerfiles = perfiles.filter(perfil =>
        perfil.nombre.toLowerCase().includes(searchPerfiles.toLowerCase()) ||
        perfil.rut.toLowerCase().includes(searchPerfiles.toLowerCase())
    );

    return (
        <div className="min-h-screen flex flex-col relative" >
            <header>
                <HeaderLog />
            </header>
            
            <main className='flex-1 flex justify-center relative' style={{backgroundImage: `url(${Fondo})`, backgroundSize: 'cover',backgroundPosition: 'center'}}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                

                <div className='bg-slate-900 h-full w-full max-w-screen-2xl mx-auto p-10 shadow-lg z-10 flex items-center relative'>
                
                    <div className='w-full p-10'>
                        <div >
                            <h1 className='text-center text-white text-4xl font-bold mb-6'>Administración de Asistencia Social</h1>

                        </div>
                        
                        
                        <div className="py-8 grid grid-cols-3 grid-rows-1 gap-8">
              
                            {/* Columna izquierda */}
                            <div className="rounded-lg col-span-2 shadow-lg col-start-1 ">   

                                <div className="bg-gray-800 animate-slide-top5 p-6 rounded-lg shadow-xl border-2">
                                    <h2 className="text-xl font-bold text-white mb-4 text-center">Gráfico de Atención Mensual</h2>
                                    <div className=' h-64'>
                                        <ResponsiveContainer width="95%" height="100%">
                                            <LineChart  data={data}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="day" />
                                                <YAxis />
                                                <Tooltip />
                                                <Legend />
                                                <Line type="monotone" dataKey="count" stroke="#ffff" />
                                            </LineChart>

                                        </ResponsiveContainer>
                                    </div>
                                </div>              
                            </div>

                            <div className="my-auto lg:col-start-3 sm:col-span-2">

                                <button
                                    className="bg-gray-800 animate-slide-top border w-full text-white font-bold py-1 px-3 rounded hover:bg-gray-600 transition duration-300"
                                    onClick={handleEditHorarios}
                                >   
                                    <div className='flex items-center'>
                                        <img src={EditHorario} alt="" className="w-10 h-10 my-1"/>
                                        <div className='mx-auto text-xl'>
                                            Editar Horarios
                                        </div>
                                        <img src={EditHorario} alt="" className="w-10 h-10"/>
                                    </div>
                                </button>

                                <button
                                    className="bg-gray-800 animate-slide-top2 border w-full my-4 text-white font-bold py-1 px-3  rounded hover:bg-gray-600 transition duration-300"
                                    onClick={handleEditCitas}
                                >
                                    <div className='flex items-center'>
                                        <img src={EditCitas} alt="" className="w-10 h-10 my-1"/>
                                        <div className='mx-auto text-xl'>
                                            Editar Citas
                                        </div>
                                        <img src={EditCitas} alt="" className="w-10 h-10"/>                             
                                    </div>
                                </button>

                                <button
                                    className="bg-gray-800 animate-slide-top3 border w-full text-white font-bold py-1 px-3  rounded hover:bg-gray-600 transition duration-300"
                                    onClick={ ()=> handleEditPerfil()}
                                >
                                    <div className='flex items-center'>
                                        <img src={EditPerfil} alt="" className="w-10 h-10 my-1"/>
                                        <div className='mx-auto text-xl'>
                                            Editar Perfil
                                        </div>
                                        <img src={EditPerfil} alt="" className="w-10 h-10"/> 
                                    </div>
                                </button>

                                <button
                                    onClick={toggleCalendar}
                                    className="bg-gray-800 animate-slide-top4 border w-full my-4 text-white font-bold py-1 px-3  rounded hover:bg-gray-600 transition duration-300"
                                >
                                    <div className='flex items-center'>
                                        <img src={VerCalendario} alt="" className="w-10 h-10 my-1"/>
                                        <div className='mx-auto text-xl'>
                                            Ver Calendario
                                        </div>
                                        <img src={VerCalendario} alt="" className="w-10 h-10"/>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <FooterPS/> 
            </footer>
            
  
        <div className="z-10">
            {isModalCitasOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-slate-800 border  animate-slide-top p-6 rounded-lg shadow-xl w-full max-w-4xl relative overflow-y-auto max-h-screen">
                        <div className="absolute top-4 right-4 flex space-x-2">
                            <button onClick={handleAddCita} className="bg-green-500 text-white font-bold py-1 px-3 rounded hover:bg-green-600">+</button>
                            <button onClick={closeModal} className="bg-gray-500 text-white font-bold py-1 px-3 rounded hover:bg-gray-600">Cerrar</button>
                        </div>
                        <h2 className="text-2xl font-bold text-white text-center mb-4">Lista de Citas</h2>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Buscar Cita..."
                                value={searchCitas}
                                onChange={(e) => setSearchCitas(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <table className="w-full border-separate border-spacing-0 ">
                            <thead>
                                <tr className="bg-slate-800 ">
                                    <th className="text-white border  p-2 mx-auto">Proveedor</th>
                                    <th className="text-white border p-2">Especialidad</th>
                                    <th className="text-white border p-2">Fecha</th>
                                    <th className="text-white border p-2">Hora</th>
                                    <th className="text-white border p-2">Usuario</th>
                                    <th className="text-white border p-2">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {filteredCitas.map((cita, index) => (
                                    <tr key={index} className="hover:bg-slate-700">
                                        <td className=" text-white border hover:border-red-700 p-2">{cita.proveedor}</td>
                                        <td className=" text-white border hover:border-red-700 p-2">{cita.especialidad}</td>
                                        <td className=" text-white border hover:border-red-700 p-2">{cita.fecha}</td>
                                        <td className=" text-white border hover:border-red-700 p-2">{cita.hora}</td>
                                        <td className=" text-white border hover:border-red-700 p-2">{cita.usuario}</td>
                                        <td className=" text-white border hover:border-red-700 p-2 flex space-x-2">
                                            <button onClick={() => handleEditCitaClick(index)} className="bg-blue-500 text-white font-bold py-1 px-3 rounded hover:bg-blue-600">Editar</button>
                                            <button onClick={() => handleDeleteCita(index)} className="bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-600">Borrar</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {editedCita && (
                            <div className="mt-4">
                                <h3 className="text-lg font-bold mb-2 text-center text-white">Editar Cita</h3>
                                <div className="space-y-2">
                                    <div>
                                        <label className="block text-white my-2">Proveedor:</label>
                                        <input
                                            type="text"
                                            value={editedCita.proveedor}
                                            onChange={(e) => handleCitaChange(e, 'proveedor')}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white my-2">Especialidad:</label>
                                        <input
                                            type="text"
                                            value={editedCita.especialidad}
                                            onChange={(e) => handleCitaChange(e, 'especialidad')}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white my-2">Fecha:</label>
                                        <input
                                            type="text"
                                            value={editedCita.fecha}
                                            onChange={(e) => handleCitaChange(e, 'fecha')}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white my-2">Hora:</label>
                                        <input
                                            type="text"
                                            value={editedCita.hora}
                                            onChange={(e) => handleCitaChange(e, 'hora')}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white my-2">Usuario:</label>
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
                    <div className="bg-slate-800 p-6 border animate-slide-top rounded-lg shadow-xl w-full max-w-4xl relative overflow-y-auto max-h-screen">
                        <div className="absolute top-4 right-4 flex space-x-2">
                            <button onClick={handleAddHorario} className="bg-green-500 text-white font-bold py-1 px-3 rounded hover:bg-green-600">+</button>
                            <button onClick={closeModal} className="bg-gray-500 text-white font-bold py-1 px-3 rounded hover:bg-gray-600">Cerrar</button>
                        </div>
                        <h2 className="text-2xl font-bold text-white text-center mb-4">Lista de Horarios</h2>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Buscar Horario..."
                                value={searchHorarios}
                                onChange={(e) => setSearchHorarios(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <table className="w-full border-separate border-spacing-0 ">
                            <thead>
                                <tr className="bg-slate-800 ">
                                    <th className="text-white border  p-2 mx-auto">Proveedor</th>
                                    <th className="text-white border p-2">Especialidad</th>
                                    <th className="text-white border p-2">Fecha</th>
                                    <th className="text-white border p-2">Hora</th>
                                    <th className="text-white border p-2">Usuario</th>
                                </tr>
                            </thead>
                            <tbody>
                            {filteredHorarios.map((horario, index) => (
                                    <tr key={index} className="hover:bg-slate-700">
                                        <td className="border hover:border-red-700 p-2 text-white">{horario.proveedor}</td>
                                        <td className="border hover:border-red-700 text-white p-2">{horario.especialidad}</td>
                                        <td className="border hover:border-red-700 text-white p-2">{horario.horarios.map(h => h.dia).join(', ')}</td>
                                        <td className="border hover:border-red-700 text-white p-2">{horario.horarios.map(h => h.horas).join(', ')}</td>
                                        <td className="border hover:border-red-700 text-white p-2 flex space-x-2">
                                            <button onClick={() => handleEditHorarioClick(index)} className="bg-blue-500 text-white font-bold py-1 px-3 rounded hover:bg-blue-600">Editar</button>
                                            <button onClick={() => handleDeleteHorario(index)} className="bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-600">Borrar</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {editedHorario && (
                            <div className="mt-4">
                                <h3 className="text-white  text-center text-lg font-bold mb-2">Editar Horario</h3>
                                <div className="space-y-2">
                                    <div>
                                        <label className="block text-white my-2">Proveedor:</label>
                                        <input
                                            type="text"
                                            value={editedHorario.proveedor}
                                            onChange={(e) => handleHorarioChange(e, 'proveedor')}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white my-2">Especialidad:</label>
                                        <input
                                            type="text"
                                            value={editedHorario.especialidad}
                                            onChange={(e) => handleHorarioChange(e, 'especialidad')}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white my-2">Día:</label>
                                        <input
                                            type="text"
                                            value={editedHorario.horarios.map(h => h.dia).join(', ')}
                                            onChange={(e) => handleHorarioChange(e, 'dia')}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white my-2">Horas:</label>
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
                    <div className="bg-slate-800 border animate-slide-top p-3 rounded-lg shadow-xl w-full max-w-4xl relative overflow-y-auto max-h-screen">
                        <div className="absolute top-4 right-4 flex space-x-2">
                            <button onClick={handleAddPerfil} className="bg-green-500 text-white font-bold py-1 px-3 rounded hover:bg-green-600">+</button>
                            <button onClick={closeModal} className="bg-gray-500 text-white font-bold py-1 px-3 rounded hover:bg-gray-600">Cerrar</button>
                        </div>
                        <h2 className="text-2xl font-bold text-white text-center mb-4">Perfiles</h2>
                        <div className="mb-4 ">
                            <input
                                type="text"
                                placeholder="Buscar Perfil..."
                                value={searchPerfiles}
                                onChange={(e) => setSearchPerfiles(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <table className="w-full  border-separate border-spacing-0">
                            <thead>
                                <tr className="bg-slate-800">
                                    <th className="border border-gray-300 text-white p-2">Nombre</th>
                                    <th className="border border-gray-300 text-white p-2">Tipo</th>
                                    <th className="border border-gray-300 text-white p-2">RUT</th>
                                    <th className="border border-gray-300 text-white p-2">Correo</th>
                                    <th className="border border-gray-300 text-white p-2">Fono</th>
                                    <th className="border border-gray-300 text-white p-2">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredPerfiles.map((perfil, index) => (
                                    <tr key={index} className="hover:bg-slate-700">
                                        <td className="border  text-white hover:border-red-700 p-2">{perfil.nombre}</td>
                                        <td className="border text-white hover:border-red-700 p-2">{perfil.tipo}</td>
                                        <td className="border text-white hover:border-red-700 p-2">{perfil.rut}</td>
                                        <td className="border text-white hover:border-red-700 p-2">{perfil.correo}</td>
                                        <td className="border text-white hover:border-red-700 p-auto">{perfil.fono}</td>
                                        <td className="border  hover:border-red-700 p-2 flex space-x-2">
                                            <button onClick={() => handleEditPerfilClick(index)} className="bg-blue-500 text-white font-bold py-1 px-3 rounded hover:bg-blue-600">Editar</button>
                                            <button onClick={() => handleDeletePerfil(index)} className="bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-600">Borrar</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {editedPerfil && (
                            <div className="mt-4 ">
                                <h3 className="text-lg font-bold mb-2 text-white text-center">Editar Perfil</h3>
                                <div className="space-y-2">
                                    <div>
                                        <label className="block text-white my-2">Nombre:</label>
                                        <input
                                            type="text"
                                            value={editedPerfil.nombre}
                                            onChange={(e) => handlePerfilChange(e, 'nombre')}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white my-2">Tipo:</label>
                                        <input
                                            type="text"
                                            value={editedPerfil.tipo}
                                            onChange={(e) => handlePerfilChange(e, 'tipo')}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white my-2">RUT:</label>
                                        <input
                                            type="text"
                                            value={editedPerfil.rut}
                                            onChange={(e) => handlePerfilChange(e, 'rut')}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white my-2">Correo:</label>
                                        <input
                                            type="text"
                                            value={editedPerfil.correo}
                                            onChange={(e) => handlePerfilChange(e, 'correo')}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white my-2">Fono:</label>
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
                <div className="fixed inset-0 bg-gray-800 animate-slide-top bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-slate-800 border p-6 rounded-lg shadow-xl max-w-full w-full md:max-w-4xl h-3/4 flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                        <h2 className="mx-auto text-2xl font-bold text-white">Calendario de Asistencia Juridica</h2>
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
                                className="w-full h-full rounded border border-green-500"
                                frameBorder="0"
                                scrolling="no"
                                title="Calendario de Psicología"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
                
            </div>
        </div>
    );
}


export default AsistenciaSocial;
