# https://www.npmjs.com/package/react-google-calendar-api
# https://stateful.com/blog/google-calendar-react

# 30 minutos de investigacion (23-09, 22:30 - 23:00)
# Requisitos:
- Tener una cuenta de Google
- Node >= 14.0.0 y NPM >= 5.6 instalados en su sistema
- Comprension de herramientas CLI como NPX
- Comprension básica de cómo funcionan las API

# Creacion de una clave API y un token de acceso para acceder a la API de Google Calendar
- Cómo generar una clave API desde Google Cloud Console
1. Navegar a https://console.cloud.google.com/apis/library?pli=1 y habilite la API de Google Calendar
2. Vaya a la pestaña Credenciales en la barra lateral izquierda y haga clic en "Crear credenciales"
3. En el menú desplegable, seleccione "Clave API" (cuando se gestione se guarda en un lugar seguro provisorio)

- Como generar un token de acceso desde Developer Playground
1. Seleccione "Google Calendar API V3" de la lista y haga clic en "Autorizar API"
2. Seleccionar cuenta de Google usada y Continuar para aceptar los términos
# NOTA: Codigo de acceso valido solo por 3.600 segundos
3. Si el token vence: Hacer clic en "Actualizar token de acceso" y se emitira un token nuevo. (Se puede actualizar automaticamente el token antes de que venza)
# NOTA: Este token de acceso es solo para fines de desarrollo

# Integracion de la aplicacion React con la API de Google Calendar (ignorando la instalacion de react y tailwind)
1. Para guardar los secretos de forma segura, instale el paquete dotenv con el siguiente comando: npm install dotenv
2. Crear un archivo .env y agregue el siguiente código:
REACT_APP_GOOGLE_API_KEY = ''
REACT_APP_GOOGLE_ACCESS_TOKEN = ''
REACT_APP_CALENDAR_ID = ''
# NOTA: Encontrar el ID del calendario en Configuración de calendario > pestaña Integraciones.
3. Instale un paquete NPM más para cargar el script de API de Google usando el siguiente comando: npm i gapi-script
4. Limpiar el archivo App.js, importar gapi desde el módulo gapi-script y crear tres variables para almacenar secretos
5. Crear primera funcion para obtener la lista de eventos del calendario
# NOTA: getEvents que toma CalendarID y apiKey como argumentos y establece la salida en la lista de eventos usando setEvents.
6. Agregar el archivo de función App.js

- Componente de evento que represente los detalles del evento
1. Crear un nuevo directorio en la carpeta src llamado "Componentes" y cree un nuevo archivo llamado Event.js
2. Para que la aplicacion se vea bien, agregue un minimo de CSS
3. Si ahora abre su navegador, vera una lista de eventos en la pantalla
4. Creemos tambien una funcion mas que añadira eventos al calendario
5. La funcion mencionada anteriormente utiliza el token de acceso que genero desde OAuth Playground. La función addEvent acepta calendarID y event como argumentos. 
6. Puede llamar a la funcion addEvent con cualquier lista de tareas pendientes u otra aplicacion de gestion de tareas.




# 15 minutos de investigacion (xx-09, 00:00 - 00:00)
- 
# 15 minutos de investigacion (xx-09, 00:00 - 00:00)
- 
# 15 minutos de investigacion (xx-09, 00:00 - 00:00)
- 
# 15 minutos de investigacion (xx-09, 00:00 - 00:00)
- 
# 15 minutos de investigacion (xx-09, 00:00 - 00:00)
- 
# 15 minutos de investigacion (xx-09, 00:00 - 00:00)
- 
