import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Modal } from 'react-native';

const Psicologia = () => {
  const [isCalendarOpen, setCalendarOpen] = useState(false);

  const toggleCalendar = () => {
    setCalendarOpen(!isCalendarOpen);
  };

  const personas = [
    { nombre: "Ana Perez", especialidad: "Terapia individual" },
    { nombre: "Luis Martinez", especialidad: "Terapia de pareja" },
    { nombre: "Carla Lopez", especialidad: "Terapia familiar" },
    { nombre: "Pedro González", especialidad: "Apoyo emocional" },
    { nombre: "Marta Fernández", especialidad: "Terapia grupal" },
    { nombre: "Jorge Ramirez", especialidad: "Psicología infantil" },
    { nombre: "Sofia Diaz", especialidad: "Psicología clínica" },
    { nombre: "Juan Rojas", especialidad: "Terapia cognitiva" },
    { nombre: "Laura Gutierrez", especialidad: "Terapia ocupacional" },
    { nombre: "Carlos Torres", especialidad: "Terapia conductual" },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bienvenido a Psicología</Text>
        <Text style={styles.headerSubtitle}>Apoyo emocional para mejorar tu calidad de vida.</Text>
      </View>

      {/* Contenido principal */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Psicología</Text>
          <Text style={styles.cardText}>
            Ofrecemos terapia psicológica para ayudar a gestionar y mejorar tu bienestar emocional.
            Asistencia psicológica para ayudarte a superar tus desafíos emocionales y mentales, brindándote apoyo y tratamiento personalizado.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Seleccionar Horario</Text>
          <TouchableOpacity style={styles.button} onPress={toggleCalendar}>
            <Text style={styles.buttonText}>Ver Calendario</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Servicios Psicológicos Disponibles</Text>
          <Text style={styles.cardText}>Terapia individual</Text>
          <Text style={styles.cardText}>Terapia familiar</Text>
          <Text style={styles.cardText}>Terapia de pareja</Text>
          <Text style={styles.cardText}>Asesoramiento en salud mental</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Especialistas</Text>
          {personas.map((persona, index) => (
            <View key={index} style={styles.specialist}>
              <View style={styles.avatar}></View> {/* Avatar placeholder */}
              <View>
                <Text style={styles.specialistName}>{persona.nombre}</Text>
                <Text style={styles.specialistSpecialty}>{persona.especialidad}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Modal para el calendario */}
      <Modal visible={isCalendarOpen} transparent={true} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Calendario de Psicología</Text>
            <TouchableOpacity onPress={toggleCalendar}>
              <Text style={styles.modalCloseButton}>Cerrar</Text>
            </TouchableOpacity>
            <View style={styles.calendarContainer}>
              <Text style={styles.calendarPlaceholder}>[Calendario aquí]</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#38a169',
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#fff',
  },
  scrollContent: {
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: '#38a169',
    borderWidth: 2,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2f855a',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#4a5568',
  },
  button: {
    backgroundColor: '#38a169',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  specialist: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: '#c6f6d5',
    borderRadius: 25,
    marginRight: 15,
  },
  specialistName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4a5568',
  },
  specialistSpecialty: {
    fontSize: 14,
    color: '#a0aec0',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2f855a',
    marginBottom: 20,
  },
  modalCloseButton: {
    fontSize: 16,
    color: '#e53e3e',
  },
  calendarContainer: {
    marginTop: 20,
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  calendarPlaceholder: {
    fontSize: 16,
    color: '#4a5568',
  },
});

export default Psicologia;