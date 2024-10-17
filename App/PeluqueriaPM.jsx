import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

const PeluqueriaPM = () => {
  return (
    <ScrollView>
      {/* Nav */}

      {/* Header */}
      <View>
        <Text>Bienvenido a Peluqueria</Text>
        <Text>Cuidado capilar para tu bienestar.</Text>
      </View>

      {/* Descripcion */}
      <View>
        <Text>Peluqueria</Text>
        <Text>Ofrecemos servicios profesionales de peluqueria para todas tus necesidades capilares.</Text>
      </View>

      {/* Servicios */}
      <View>
        <Text>Servicios Disponibles</Text>
        <Text>• Cortes de cabello</Text>
        <Text>• Coloración</Text>
        <Text>• Tratamientos capilares</Text>
      </View>

      {/* Horario */}
      <View>
        <Text>Seleccionar Horario</Text>
        <Button title="Ver Calendario" onPress={() => {}} />
      </View>

      {/* Especialistas */}
      <View>
        <Text>Especialistas</Text>
        <Text>Ana Perez - Cortes de cabello</Text>
        <Text>Luis Martínez - Tinturas y mechas</Text>
      </View>
    </ScrollView>
  );
};

export default PeluqueriaPM;
