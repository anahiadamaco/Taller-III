// src/components/AppointmentApp.js
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from '../utils/notificacionService.js';

const seguimiento = () => {
  const [patientName, setPatientName] = useState('');
  const [date, setDate] = useState('');
  const [appointments, setAppointments] = useState([]);

  const handleAddAppointment = () => {
    if (patientName && date) {
      const newAppointment = {
        id: Math.random().toString(),
        patientName,
        date,
        status: 'pendiente',
      };
      setAppointments([...appointments, newAppointment]);
      setPatientName('');
      setDate('');
      notify('Cita agendada exitosamente', 'success');
    } else {
      notify('Por favor, completa todos los campos', 'error');
    }
  };

  const handleAttendance = (id, attended) => {
    setAppointments(prevAppointments =>
      prevAppointments.map(appointment =>
        appointment.id === id
          ? { ...appointment, status: attended ? 'atendid@' : 'missed' }
          : appointment
      )
    );
    notify(
      attended ? 'Marcado como asistió' : 'Marcado como no asistió',
      'info'
    );
  };

  return (
    <div style={{ padding: '16px' }}>
      <input
        type="text"
        placeholder="Nombre del paciente"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
        style={{ border: '1px solid #ccc', marginBottom: '8px', padding: '8px', width: '100%' }}
      />
      <input
        type="datetime-local"
        placeholder="Fecha y hora"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ border: '1px solid #ccc', marginBottom: '16px', padding: '8px', width: '100%' }}
      />
      <button onClick={handleAddAppointment} style={{ padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
        Agendar Cita
      </button>

      <div style={{ marginTop: '16px' }}>
        {appointments.map((item) => (
          <div key={item.id} style={{ marginTop: '16px', border: '1px solid #ccc', padding: '8px' }}>
            <p>Paciente: {item.patientName}</p>
            <p>Fecha: {item.date}</p>
            <p>Estado: {item.status}</p>
            <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
              <button
                onClick={() => handleAttendance(item.id, true)}
                style={{ padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}
              >
                Asistió
              </button>
              <button
                onClick={() => handleAttendance(item.id, false)}
                style={{ padding: '8px 16px', backgroundColor: '#F44336', color: 'white', border: 'none', cursor: 'pointer' }}
              >
                No Asistió
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default seguimiento;
