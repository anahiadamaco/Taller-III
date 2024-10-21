import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

const AsistenciaJuridica = () => {
  const [isCalendarOpen, setCalendarOpen] = useState(false);

  const toggleCalendar = () => {
    setCalendarOpen(!isCalendarOpen);
  };

  const handleEditHorarios = () => {
    // lógica para editar horarios
  };

  const handleEditCitas = () => {
    // lógica para editar citas
  };

  const handleEditPerfil = () => {
    // lógica para editar perfil
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Administrador de Asistencia Jurídica</Text>
        <Text style={styles.headerSubtitle}>Gestión de servicios y especialistas</Text>
      </View>

      {/* Información del administrador */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Administrador</Text>
        <Text style={styles.infoText}><Text style={styles.boldText}>Nombre:</Text> Juan Perez</Text>
        <Text style={styles.infoText}><Text style={styles.boldText}>RUT:</Text> 12.345.678-9</Text>
        <Text style={styles.infoText}><Text style={styles.boldText}>Correo:</Text> juan.perez@example.com</Text>
        <Text style={styles.infoText}><Text style={styles.boldText}>Fono oficina:</Text> +56 9 1234 5678</Text>
      </View>

      {/* Gráfico de atención mensual (placeholder para gráfico) */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Gráfico de Atención Mensual</Text>
        <Text style={styles.chartPlaceholder}>[Placeholder para gráfico]</Text>
      </View>

      {/* Botones de acción */}
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Editar Horarios" onPress={handleEditHorarios} color="#4CAF50" />
        </View>
        <View style={styles.button}>
          <Button title="Editar Citas" onPress={handleEditCitas} color="#4CAF50" />
        </View>
        <View style={styles.button}>
          <Button title="Editar Perfil" onPress={handleEditPerfil} color="#4CAF50" />
        </View>
        <View style={styles.button}>
          <Button title={isCalendarOpen ? "Cerrar Calendario" : "Ver Calendario"} onPress={toggleCalendar} color="#4CAF50" />
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Municipalidad - Asistencia Jurídica</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#b71c1c',
    padding: 20,
    justifyContent: 'center', // Centrar verticalmente
    alignItems: 'center', // Centrar horizontalmente
    height: 150, // Ajustar altura si es necesario para más espacio
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center', // Centrar el texto
  },
  headerSubtitle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center', // Centrar el texto
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    borderColor: '#b71c1c',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#b71c1c',
    marginBottom: 10,
  },
  chartPlaceholder: {
    fontSize: 16,
    color: '#888',
  },
  infoText: {
    fontSize: 18,
    marginVertical: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    margin: 10,
    alignItems: 'center', // Centrando los botones horizontalmente
  },
  button: {
    marginVertical: 10, // Espacio entre los botones
    width: '80%', // Ajustar el tamaño de los botones para que no sean demasiado grandes
  },
  footer: {
    backgroundColor: '#b71c1c',
    padding: 20,
  },
  footerText: {
    color: 'white',
  },
});

export default AsistenciaJuridica;
