import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import tailwind from "tailwind-rn";

const PeluqueriaPM = () => {
  return (
    <ScrollView style={tailwind("bg-gray-100")}>
      {/* Nav */}

      {/* Header */}
      <View style={tailwind("bg-blue-500 p-6")}>
        <Text style={tailwind("text-white text-4xl font-bold mb-2 text-center")}>
          Bienvenido a Peluquería
        </Text>

        <Text style={tailwind("text-white text-2xl text-center")}>
          Cuidado capilar para tu bienestar.
        </Text>
      </View>

      {/* Descripcion */}
      <View style={tailwind("bg-white p-4 my-4 rounded-lg")}>
        <Text style={tailwind("text-blue-700 text-2xl font-bold mb-2 text-center")}>
          Peluquería
        </Text>

        <Text style={tailwind("text-xl")}>
          Ofrecemos servicios profesionales de peluquería para todas tus
          necesidades capilares.
        </Text>
      </View>

      {/* Servicios */}
      <View style={tailwind("bg-white p-4 my-4 rounded-lg")}>
        <Text style={tailwind("text-blue-700 text-2xl font-bold mb-2 text-center")}>
          Servicios Disponibles
        </Text>
        <Text style={tailwind("text-xl")}>• Cortes de cabello</Text>
        <Text style={tailwind("text-xl")}>• Coloración</Text>
        <Text style={tailwind("text-xl")}>• Tratamientos capilares</Text>
      </View>

      {/* Horario */}
      <View style={tailwind("bg-white p-4 my-4 rounded-lg")}>
        <Text style={tailwind("text-blue-700 text-2xl font-bold mb-2 text-center")}>
          Seleccionar Horario
        </Text>
        <Button style={tailwind("text-xl")} title="Ver Calendario" onPress={() => {}} />
      </View>

      {/* Especialistas */}
      <View style={tailwind("bg-white p-4 my-4 rounded-lg")}>
        <Text style={tailwind("text-blue-700 text-2xl font-bold mb-2 text-center")}>
          Especialistas
        </Text>
        <Text style={tailwind("text-xl")}>Ana Pérez - Cortes de cabello</Text>
        <Text style={tailwind("text-xl")}>Luis Martínez - Tinturas y mechas</Text>
      </View>
    </ScrollView>
  );
};

export default PeluqueriaPM;
