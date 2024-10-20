import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, Button, StyleSheet } from 'react-native';

const Fonoaudiologia = () => {
  const [isCalendarOpen, setCalendarOpen] = useState(false);

  const toggleCalendar = () => {
    setCalendarOpen(!isCalendarOpen);
  };

  const personas = [
    { nombre: "Ana Perez", especialidad: "Rehabilitación vocal" },
    { nombre: "Luis Martinez", especialidad: "Trastornos del lenguaje" },
    { nombre: "Carla Lopez", especialidad: "Audiología" },
    { nombre: "Pedro González", especialidad: "Terapia de deglución" },
    { nombre: "Marta Fernández", especialidad: "Rehabilitación vocal" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Nuestro Servicio de Fonoaudiología</Text>
      <Text style={styles.subtitle}>Ayudamos a mejorar la comunicación y la audición.</Text>

      <TouchableOpacity style={styles.button} onPress={toggleCalendar}>
        <Text style={styles.buttonText}>Ver Calendario</Text>
      </TouchableOpacity>

      <ScrollView>
        <Text style={styles.sectionTitle}>Especialistas</Text>
        {personas.map((persona, index) => (
          <View key={index} style={styles.personaCard}>
            <Text style={styles.personaName}>{persona.nombre}</Text>
            <Text style={styles.personaEspecialidad}>{persona.especialidad}</Text>
          </View>
        ))}
      </ScrollView>

      <Modal visible={isCalendarOpen} transparent={true} animationType="slide">
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Calendario de Fonoaudiología</Text>
          <Button title="Cerrar" onPress={toggleCalendar} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  personaCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  personaName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  personaEspecialidad: {
    color: 'gray',
  },
  modalView: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Fonoaudiologia;