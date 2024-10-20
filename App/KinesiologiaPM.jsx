/* https://codesandbox.io/p/sandbox/react-native-web-tailwind-css-odnsl */
import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import tailwind from "tailwind-rn";

const KinesiologiaPM = () => {
  return (
    <ScrollView style={tailwind("bg-gray-100")}>
      {/* Nav */}

      {/* Header */}
      <View style={tailwind("bg-green-500 p-6")}>
        <Text style={tailwind("text-white text-4xl font-bold mb-2 text-center")}> Bienvenido a Kinesiología </Text>
        <Text style={tailwind("text-white text-3xl text-center")}> Terapias para mejorar tu movilidad y bienestar físico </Text>
      </View>

      {/* Section */}
      {/* Descripcion */}
      <View style={tailwind("bg-white p-4 my-4 rounded-lg")}>
        <Text style={tailwind("text-green-700 text-2xl font-bold mb-2 text-center")}> Kinesiología </Text>
        <Text style={tailwind("text-xl")}>
          Ofrecemos terapias de rehabilitación física y deportiva para ayudarte a mejorar tu salud y
          calidad de vida.
        </Text>
      </View>

      {/* Servicios */}
      <View style={tailwind("bg-white p-4 my-4 rounded-lg")}>
        <Text style={tailwind("text-green-700 text-2xl font-bold mb-2 text-center")}> Servicios Disponibles </Text>
        <Text style={tailwind("text-xl")}> • Rehabilitación física </Text>
        <Text style={tailwind("text-xl")}> • Kinesiología deportiva </Text>
        <Text style={tailwind("text-xl")}> • Terapia respiratoria </Text>
        <Text style={tailwind("text-xl")}> • Rehabilitación neurológica </Text>
      </View>

      {/* Horario */}
      <View style={tailwind("bg-white p-4 my-4 rounded-lg")}>
        <Text style={tailwind("text-green-700 text-2xl font-bold mb-2 text-center")}> Seleccionar Horario </Text>
        <Button title="Ver Calendario" onPress={() => {}} />
      </View>

      {/* Especialistas */}
      <View style={tailwind("bg-white p-4 my-4 rounded-lg")}>
        <Text style={tailwind("text-green-700 text-2xl font-bold mb-2 text-center")}> Especialistas </Text>
        <Text style={tailwind("text-xl")}> • Dr. Jorge Gómez - Rehabilitación física </Text>
        <Text style={tailwind("text-xl")}> • Dra. Claudia Torres - Kinesiología deportiva </Text>
        <Text style={tailwind("text-xl")}> • Dr. Andrés Lara - Terapia ocupacional </Text>
      </View>
    </ScrollView>
  );
};

export default KinesiologiaPM;
