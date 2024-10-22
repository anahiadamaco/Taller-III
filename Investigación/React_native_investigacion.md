React Native es un framework que te permite crear aplicaciones móviles utilizando JavaScript y React. Con React Native, puedes desarrollar aplicaciones nativas para iOS y Android utilizando una única base de código, lo que hace que el desarrollo sea más eficiente.

Conceptos clave de React Native:
Componentes:
Los componentes son las piezas básicas de una aplicación React Native. Pueden ser componentes predeterminados (como Text, View, Button, etc.) o personalizados. Un componente en React Native es similar a un componente en React, pero mapea a componentes nativos de Android e iOS.

JSX:
React Native usa JSX, que es una extensión de JavaScript que permite escribir elementos HTML/JSX directamente en el archivo JavaScript.

Estilos:
React Native utiliza un sistema de estilos similar a CSS, pero con algunas diferencias. Los estilos se definen como objetos de JavaScript.

Hot Reloading:
Permite ver los cambios en la aplicación en tiempo real sin necesidad de recompilar toda la aplicación.

Pasos para empezar a usar React Native:
1. Instalar Node.js y NPM (si no los tienes instalados):
Descarga Node.js desde nodejs.org, lo que también instalará NPM (el gestor de paquetes).
2. Instalar el entorno de desarrollo de React Native:
Para crear una nueva aplicación, debes instalar expo-cli o react-native-cli dependiendo del enfoque que prefieras. Expo es más fácil para principiantes, mientras que react-native-cli ofrece más control y flexibilidad.

Opción 1: Usando Expo (más sencillo):
npm install -g expo-cli
expo init MiPrimeraApp
cd MiPrimeraApp
expo start

Opción 2: Usando react-native-cli (control total)
Si quieres más control, puedes usar react-native-cli, pero necesitarás tener configurados los entornos de desarrollo para Android (Android Studio) y iOS (Xcode):
npx react-native init MiPrimeraApp
cd MiPrimeraApp
npx react-native run-android  # Para Android
npx react-native run-ios      # Para iOS


