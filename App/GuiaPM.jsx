import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import tailwind from 'tailwind-rn';
import { useNavigation } from '@react-navigation/native';

function GuiaPM() {
    const navigation = useNavigation();

    return (
        <View style={tailwind('flex-1 items-center justify-center bg-gray-100')}>
            <View style={tailwind('bg-white rounded-lg w-full p-8 shadow-lg')}>
                <TouchableOpacity
                    style={tailwind('absolute top-4 right-4 bg-red-600 px-4 py-2 rounded-lg')}
                    onPress={() => navigation.navigate('HPM')}
                >
                    <Text style={tailwind('text-white text-lg font-bold')}>Cerrar Guía</Text>
                </TouchableOpacity>

                <View style={tailwind('mb-6')}>
                    <Text style={tailwind('text-4xl font-bold text-blue-800 text-center')}>
                        Guía para el usuario
                    </Text>
                </View>

                <ScrollView contentContainerStyle={tailwind('gap-6')}>
                    <View style={tailwind('p-6 border border-blue-500 bg-blue-50 rounded-lg')}>
                        <Text style={tailwind('text-2xl font-semibold text-blue-700 mb-2')}>
                            ¿Para qué sirve esta página?
                        </Text>
                        <Text style={tailwind('text-lg text-gray-800')}>
                            • Esta página ayuda a los adultos mayores a solicitar servicios prestados por la municipalidad de Temuco.
                        </Text>
                    </View>

                    <View style={tailwind('p-6 border border-blue-500 bg-blue-50 rounded-lg')}>
                        <Text style={tailwind('text-2xl font-semibold text-blue-700 mb-2')}>
                            ¿Cómo solicito una hora?
                        </Text>
                        <Text style={tailwind('text-lg text-gray-800')}>
                            • Seleccione el servicio que desea, luego haga click en el botón "Ver calendario", seleccione la hora a la que desea y presione el botón "confirmar".
                        </Text>
                    </View>

                    <View style={tailwind('p-6 border border-blue-500 bg-blue-50 rounded-lg')}>
                        <Text style={tailwind('text-2xl font-semibold text-blue-700 mb-2')}>
                            ¿Cómo recibo la confirmación de mi cita?
                        </Text>
                        <Text style={tailwind('text-lg text-gray-800')}>
                            • Los datos de su cita serán confirmados mediante un correo electrónico o una llamada telefónica.
                        </Text>
                    </View>

                    <View style={tailwind('p-6 border border-blue-500 bg-blue-50 rounded-lg')}>
                        <Text style={tailwind('text-2xl font-semibold text-blue-700 mb-2')}>
                            ¿Debo pagar por estos servicios?
                        </Text>
                        <Text style={tailwind('text-lg text-gray-800')}>
                            • No, los servicios son totalmente gratuitos.
                        </Text>
                    </View>

                    <View style={tailwind('p-6 border border-blue-500 bg-blue-50 rounded-lg')}>
                        <Text style={tailwind('text-2xl font-semibold text-blue-700 mb-2')}>
                            ¿Cómo puedo cancelar una cita?
                        </Text>
                        <Text style={tailwind('text-lg text-gray-800')}>
                            • Llame a la municipalidad al número de contacto o utilice la opción de cancelar en el sitio web.
                        </Text>
                    </View>

                    <View style={tailwind('p-6 border border-blue-500 bg-blue-50 rounded-lg')}>
                        <Text style={tailwind('text-2xl font-semibold text-blue-700 mb-2')}>
                            ¿Qué hago si tengo movilidad reducida?
                        </Text>
                        <Text style={tailwind('text-lg text-gray-800')}>
                            • Puede solicitar ayuda adicional al momento de agendar la cita, especificando sus necesidades.
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default GuiaPM;
