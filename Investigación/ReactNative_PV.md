# https://reactnative.dev/docs/getting-started

# 20 minutos de investigacion (25-09, 14:20 - 14:40)
- Es un marco de código abierto para crear aplicaciones de Android e iOS utilizando React y las capacidades nativas de la plataforma de aplicaciones.
- Se utiliza JavaScript para acceder a las API de la plataforma, así como para describir la apariencia y el comportamiento de la interfaz de usuario mediante componentes de React: paquetes de código reutilizable y anidable.
- Incluye un conjunto de componentes nativos esenciales y listos para usar.
- React Native también te permite crear tus propios componentes nativos para Android

# Componentes Nativos
- En el desarrollo de Android, se escriben vistas en Kotlin o Java.
- Se pueden invocar estas vistas con JavaScript mediante componentes de React.
- En el tiempo de ejecución, React Native crea las vistas de Android correspondientes para esos componentes.
- Debido a que los componentes de React Native están respaldados por las mismas vistas que Android e iOS, las aplicaciones de React Native se ven, se sienten y funcionan como cualquier otra aplicación. A estos componentes respaldados por la plataforma los llamamos componentes nativos.

# Componentes Principales (Usados comunmente)
- Componente interfaz de usuario de React Native | Vista de Android | Descripción 
- <View> | <ViewGroup> | Un contenedor que admite diseño con flexbox, estilo, algún manejo táctil y controles de accesibilidad.
- <Text> | <TextView> | Muestra, aplica estilos y anida cadenas de texto e incluso maneja eventos táctiles.
- <Image> | <ImageView> | Muestra diferentes tipos de imágenes.
- <ScrollView> | <ScrollView> | Un contenedor de desplazamiento genérico que puede contener múltiples componentes y vistas.
- <TextInput> | <EditText> | Permite al usuario ingresar texto.

# 40 minutos de investigacion (25-09, 16:00 - 16:40)
# Componentes personalizados
- React permite anidar componentes principales unos dentro de otros para crear nuevos componentes. Estos componentes anidados y reutilizables son el núcleo del paradigma de React.
- En Android, normalmente colocas tus vistas dentro de LinearLayout, FrameLayout, RelativeLayout, etc. para definir cómo se organizarán los elementos secundarios de la vista en la pantalla. En React Native, Viewusa Flexbox para el diseño de sus elementos secundarios.
- Props es la abreviatura de “propiedades”. Las propiedades te permiten personalizar los componentes de React.
- La mayoría de los componentes principales de React Native también se pueden personalizar con propiedades.
- El estado es como el almacenamiento de datos personales de un componente. El estado es útil para manejar datos que cambian con el tiempo o que provienen de la interacción del usuario. ¡El estado le da memoria a sus componentes!
# NOTA: Como regla general, utilice propiedades para configurar un componente cuando se renderiza. Utilice el estado para realizar un seguimiento de los datos del componente que espera que cambien con el tiempo.
- Puedes agregar estado a un componente llamando a Hook de ReactuseState. Un Hook es un tipo de función que te permite "engancharte" a las funciones de React. 
- Expo es un marco de trabajo React Native de nivel de producción. Expo ofrece herramientas para desarrolladores que facilitan el desarrollo de aplicaciones, como enrutamiento basado en archivos, una biblioteca estándar de módulos nativos y mucho más.

# Configuración del entorno
- Cree una nueva carpeta para su proyecto React Native integrado y luego copie su proyecto Android existente a una /androidsubcarpeta
- Vaya al directorio raíz de su proyecto y cree un nuevo package.jsonarchivo con el siguiente contenido:
{
  "name": "MyReactNativeApp",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "react-native start"
  }
}
- bra una terminal o un símbolo del sistema, luego navegue hasta el directorio con su package.jsonarchivo y ejecute: npm install react-native

# Agregar React Native
- React Native utiliza el complemento Gradle de React Native para configurar sus dependencias y la configuración del proyecto.
- Primero, editemos tu settings.gradlearchivo agregando esta línea: includeBuild('../node_modules/@react-native/gradle-plugin')
- Luego debes abrir tu nivel superior build.gradlee incluir esta línea:
buildscript {
    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        classpath("com.android.tools.build:gradle:7.3.1")
+       classpath("com.facebook.react:react-native-gradle-plugin")
    }
}
- Esto garantiza que el complemento Gradle de React Native esté disponible dentro de tu proyecto. Por último, agrega esas líneas dentro del build.gradlearchivo de tu aplicación (es un build.gradlearchivo diferente dentro de la carpeta de tu aplicación):
apply plugin: "com.android.application"
+apply plugin: "com.facebook.react"

repositories {
    mavenCentral()
}

dependencies {
    // Other dependencies here
+   implementation "com.facebook.react:react-android"
+   implementation "com.facebook.react:hermes-android"
}
- Esas dependencias están disponibles, mavenCentral()así que asegúrese de tenerlas definidas en su repositories{}bloque.

# Configurar permisos
- Asegúrese de tener el permiso de Internet en su AndroidManifest.xml: <uses-permission android:name="android.permission.INTERNET" />
- Si necesitas acceder para DevSettingsActivityagregar a tu AndroidManifest.xml: <activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />
- Esto solo se usa en modo de desarrollo cuando se vuelve a cargar JavaScript desde el servidor de desarrollo, por lo que puedes eliminarlo en las compilaciones de lanzamiento si es necesario.