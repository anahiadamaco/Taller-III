import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

const KinesiologiaPM = () => {
  return (
    <ScrollView>
      {/* Nav */}

      {/* Header */}
      <View>
        <Text>Bienvenido a Kinesiologia</Text>
        <Text>Terapias para mejorar tu movilidad y bienestar físico.</Text>
      </View>

      {/* Section */}
      {/* Descripcion */}
      <View>
        <Text>Kinesiología</Text>
        <Text>Ofrecemos terapias de rehabilitación física y deportiva para ayudarte a mejorar tu salud y calidad de vida.</Text>
      </View>

      {/* Servicios */}
      <View>
        <Text>Servicios Kinesiologicos Disponibles</Text>
        <Text>• Rehabilitacion física</Text>
        <Text>• Kinesiologia deportiva</Text>
        <Text>• Terapia respiratoria</Text>
        <Text>• Rehabilitacion neurologica</Text>
      </View>

      {/* Horario */}
      <View>
        <Text>Seleccionar Horario</Text>
        <Button title="Ver Calendario" onPress={() => {}} />
      </View>

      {/* Especialistas */}
      <View>
        <Text>Especialistas</Text>
        <Text>Dr. Jorge Gomez - Rehabilitacion física</Text>
        <Text>Dra. Claudia Torres - Kinesiologia deportiva</Text>
        <Text>Dr. Andres Lara - Terapia ocupacional</Text>
      </View>
    </ScrollView>
  );
};

export default KinesiologiaPM;
