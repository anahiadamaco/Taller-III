# 30 minutos de investigacion (20-10, 20:50 - 21:20)
- Entorno de desarrollo integrado (IDE) oficial que se usa en el desarrollo de apps para Android.
- Esta basado en el potente editor de código y las herramientas para desarrolladores de IntelliJ IDEA.
- Ofrece aún más funciones que mejoran tu productividad cuando compilas apps para Android.

# Estructura:
- Cada proyecto Android Studio incluye uno o más módulos con archivos de código fuente y archivos de recursos. Entre los tipos de módulos, se incluyen los siguientes: Módulos de apps para Android, Módulos de biblioteca, Módulos de Google App Engine
- Cada módulo de app contiene las siguientes carpetas:
    - manifests: Contiene el archivo AndroidManifest.xml.
    - java: Contiene los archivos de código fuente de Kotlin y Java, incluido el código de prueba JUnit.
    - res: Contiene todos los recursos sin código, como cadenas de IU y, además, imágenes de mapa de bits.

# Caracteristicas principales:
- Editor de codigo inteligente: Ofrece deteccion de errores y soporte para refactorizacion
- Emulador de Android: Permite pruebas de las aplicaciones en un entorno simulado con distintas versiones de Android, tamaños de pantalla, entre otros.
- Diseño visual de interfaces: Proporciona un editor de layouts visual que facilita la creaciOn de interfaces de usuario
- Analizadores de rendimiento: Herramientas como el Profiler de Android ayudan a optimizar el rendimiento en memoria, CPU y red de las aplicaciones

# Compatibilidad con varios APKs
- La compatibilidad con varios APKs te permite crear de manera eficiente varios APKs en función de la densidad de la pantalla o ABI
- Por ejemplo, se pueden crear APKs independientes de una app para las densidades de pantalla de hdpi y mdpi y, al mismo tiempo, considerarlos una sola variante y permitirles compartir APKs de prueba, javac, dx y la configuración de ProGuard.

# 30 minutos de investigacion (20-10, 21:30 - 22:00)
- Incluye barras de sistema en tus diseños para tener en cuenta las zonas seguras de la IU, metodos de entrada, cortes de pantalla y otras capacidades del dispositivo. Mantenga las barras del sistema en la capa superior para garantizar que se tengan en cuenta.
- Hacer transparentes las barras del sistema y diseñar la aplicación en pantalla completa continuará la IU debajo de las barras para brindar una experiencia completa de borde a borde.
- Evite agregar gestos de presión o objetivos de arrastre debajo de las inserciones de gestos. estos conflictos con la navegación de frontera a frontera y por gestos.

# Dibuja el contenido detrás de las barras del sistema.
- La función de borde a borde permite que Android dibuje la UI debajo de las barras del sistema para una experiencia más envolvente.
- Ten en cuenta los siguientes tipos de inserciones cuando diseños para el uso de borde a borde casos:
    - Las inserciones de barras del sistema se aplican a la IU que se puede presionar y que no debería ser oscurecido visualmente por las barras del sistema.
    - Las inserciones de gestos del sistema se aplican a las áreas de navegación por gestos que usa el sistema. que tienen prioridad sobre tu aplicación.

# Comandos de terminal de Android Studio
- Compilar proyecto: ./gradlew assembleDebug
- Limpiar proyecto: ./gradlew clean
- Compilar y ejecutar con Gradle: ./gradlew installDebug
- Verificar errores y advertencias: ./gradlew lint

# Comandos de Gradle
- Sincronizar con archivos Gradle: Ctrl + Shift + A, buscar "Sync Project with Gradle Files"
- Construir APK: ./gradlew assembleRelease
- Ejecutar pruebas unitarias: ./gradlew test
- Obtener dependencias: ./gradlew dependencies

# ¿Qué es Gradle?
- Herramienta de automatizacion de compilacion
- Se utiliza para gestionar dependencias y realizar procesos de construcción en proyectos de software
- En el desarrollo de Android, se encarga de compilar el codigo fuente, empaquetar los recursos, y generar archivos APK
- Es flexible, escalable, y utiliza un sistema basado en scripts, escrito en Groovy o Kotlin, para definir las tareas y configuraciones de construccion
- Tambien permite gestionar multiples versiones de la aplicacion y optimiza el proceso de compilacion para proyectos grandes