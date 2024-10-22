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
            Bienvenido a Podologia
        </Text>

        <Text style={tailwind("text-white text-2xl text-center")}>
            Cuidado y atenion especializada para la salud de tus pies.
        </Text>
      </View>

      {/* Descripción */}
      <View style={tailwind("bg-white p-4 my-4 rounded-lg")}>
        <Text style={tailwind("text-blue-700 text-2xl font-bold mb-2 text-center")}>
            Podologia
        </Text>

        <Text style={tailwind("text-xl")}>
          Ofrecemos tratamientos podologicos para mejorar la salud de tus pies brindadno atencion especializada y personalizada.
        </Text>
      </View>

      {/* Servicios */}
      <View style={tailwind("bg-white p-4 my-4 rounded-lg")}>
        <Text style={tailwind("text-blue-700 text-2xl font-bold mb-2 text-center")}>
          Servicios Disponibles
        </Text>
        <Text style={tailwind("text-xl")}>• Cuidado de pies diabeticos</Text>
        <Text style={tailwind("text-xl")}>• Tratamiento de uñas encarnadas</Text>
        <Text style={tailwind("text-xl")}>• Podología deportiva</Text>
        <Text style={tailwind("text-xl")}>• Terapias ortopedicas</Text>
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
        <Text style={tailwind("text-xl")}>Dr. Roberto Santos - Cuidado de pies diabeticos</Text>
        <Text style={tailwind("text-xl")}>Dra. Lucia Herrera - Podologia deportiva</Text>
        <Text style={tailwind("text-xl")}>Dr. Mario Lopez - Tratamiento de uñas encarnadas</Text>
        <Text style={tailwind("text-xl")}>Dra. Isabel Perez - Rehabilitacion Podal</Text>
        <Text style={tailwind("text-xl")}>Dr. Carlos Garcia - Terapias Ortopedicas</Text>
      </View>
    </ScrollView>
  );
};

export default PeluqueriaPM;