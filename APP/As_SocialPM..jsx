
import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import tailwind from "tailwind-rn";

const PeluqueriaPM = () => {
  return (
    <ScrollView style={tailwind("bg-gray-100")}>
      {/* Nav */}

      {/* Header */}
      <View style={tailwind("bg-red-600 p-6")}>
        <Text style={tailwind("text-white text-4xl font-bold mb-2 text-center")}>
            Bienvenido a Asistencia Social
        </Text>

        <Text style={tailwind("text-white text-2xl text-center")}>
            Cuidado y atencion especializada para ....
        </Text>
      </View>

      {/* Descripción */}
      <View style={tailwind("bg-white p-4 my-4 rounded-lg")}>
        <Text style={tailwind("text-red-600 text-2xl font-bold mb-2 text-center")}>
            Asistencia Social
        </Text>

        <Text style={tailwind("text-xl")}>
          Ofrecemos ..........
        </Text>
      </View>

      {/* Servicios */}
      <View style={tailwind("bg-white p-4 my-4 rounded-lg")}>
        <Text style={tailwind("text-red-600 text-2xl font-bold mb-2 text-center")}>
          Servicios Disponibles
        </Text>
        <Text style={tailwind("text-xl")}>• Cuidado de....</Text>
        <Text style={tailwind("text-xl")}>• Cuidado de....</Text>
        <Text style={tailwind("text-xl")}>• Cuidado de....</Text>
        <Text style={tailwind("text-xl")}>• Cuidado de....</Text>
      </View>

      {/* Horario */}
      <View style={tailwind("bg-white p-4 my-4 rounded-lg")}>
        <Text style={tailwind("text-red-600 text-2xl font-bold mb-2 text-center")}>
          Seleccionar Horario
        </Text>
        <Button style={tailwind("text-xl")} title="Ver Calendario" onPress={() => {}} />
      </View>

      {/* Especialistas */}
      <View style={tailwind("bg-white p-4 my-4 rounded-lg")}>
        <Text style={tailwind("text-red-600 text-2xl font-bold mb-2 text-center")}>
          Especialistas
        </Text>
        <Text style={tailwind("text-xl")}>Dr. Roberto Santos - Cuidado de....</Text>
        <Text style={tailwind("text-xl")}>Dra. Lucia Herrera - Cuidado de....</Text>
        <Text style={tailwind("text-xl")}>Dr. Mario Lopez - Cuidado de....</Text>
        <Text style={tailwind("text-xl")}>Dra. Isabel Perez - Cuidado de....</Text>
        <Text style={tailwind("text-xl")}>Dr. Carlos Garcia - Cuidado de....</Text>
      </View>
    </ScrollView>
  );
};

export default PeluqueriaPM;