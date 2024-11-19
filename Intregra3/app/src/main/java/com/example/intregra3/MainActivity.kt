package com.example.intregra3

import android.Manifest
import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat

class MainActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        createNotificationChannel() // Crear canal de notificación

        // Se solicita el permiso de notificación al inicio, si es necesario
        Permisonotificacion()

        setContent {
            ServiciosScreen()
        }
    }

    // Verificar y solicitar el permiso de notificaciones (API 33+)
    private fun Permisonotificacion() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            val permission = Manifest.permission.POST_NOTIFICATIONS

            // Verifica si el permiso ya está concedido
            if (checkSelfPermission(permission) != PackageManager.PERMISSION_GRANTED) {
                // Registrar el lanzador para solicitar el permiso
                launcherpermiso.launch(permission)
            }
        }
    }

    // Lanzador para manejar la solicitud del permiso de notificación
    private val launcherpermiso =
        registerForActivityResult(ActivityResultContracts.RequestPermission()) { isGranted ->
            if (!isGranted) {
                println("Permiso de notificaciones rechazado.")
            }
        }

    // Crear un canal de notificación (API 26+)
    private fun createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val name = "Servicios"
            val descriptionText = "Notificaciones de selección de servicios"
            val importance = NotificationManager.IMPORTANCE_DEFAULT
            val channel = NotificationChannel("servicios_channel", name, importance).apply {
                description = descriptionText
            }
            val notificationManager: NotificationManager =
                getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
            notificationManager.createNotificationChannel(channel)
        }
    }
}

@Composable
fun ServiciosScreen() {
    val context = LocalContext.current
    val servicios = remember {
        listOf(
            "Podología" to Color(0xFF4CAF50),
            "Asistencia Jurídica" to Color(0xFFFF5722),
            "Psicología" to Color(0xFF2196F3),
            "Peluquería" to Color(0xFFFFC107),
            "Condiciones Médicas" to Color(0xFF9C27B0),
            "Formulario Movilidad" to Color(0xFF03A9F4),
            "Formulario RSH" to Color(0xFFFF9800),
            "Perfil Móvil" to Color(0xFF8BC34A),
            "Servicios Admin" to Color(0xFF607D8B)
        )
    }

    // Estado para controlar el Snackbar
    var Mwnsajeapp by remember { mutableStateOf<String?>(null) }
    val snackbarHostState = remember { SnackbarHostState() }

    // Mostrar Snackbar cuando se selecciona un servicio
    LaunchedEffect(Mwnsajeapp) {
        Mwnsajeapp?.let {
            snackbarHostState.showSnackbar(it)
            Mwnsajeapp = null // Resetear mensaje después de mostrarlo
        }
    }

    Scaffold(
        snackbarHost = { SnackbarHost(hostState = snackbarHostState) }
    ) { paddingValues ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            items(servicios) { (title, color) ->
                ServiceBlock(title, color) {
                    Mwnsajeapp = "Seleccionaste: $title" // Mostrar mensaje en App
                    MostrarNotification(context, title) // Mostrar notificación
                    navigarservicios(context, title) // Cambiar de actividad
                }
            }
        }
    }
}

// Mostrar notificación localmente
fun MostrarNotification(context: Context, serviceName: String) {
    val builder = NotificationCompat.Builder(context, "servicios_channel")
        .setSmallIcon(android.R.drawable.ic_dialog_info)
        .setContentTitle("Servicio Seleccionado")
        .setContentText("Has seleccionado el servicio de $serviceName.")
        .setPriority(NotificationCompat.PRIORITY_DEFAULT)

    if (NotificationManagerCompat.from(context).areNotificationsEnabled()) {
        with(NotificationManagerCompat.from(context)) {
            notify(serviceName.hashCode(), builder.build())
        }
    } else {
        println("Las notificaciones están desactivadas.")
    }
}

// Cambiar a la actividad correspondiente según el servicio seleccionado
fun navigarservicios(context: Context, serviceName: String) {
    val intent = when (serviceName) {
        "Asistencia Jurídica" -> Intent(context, AsocialPs::class.java)
        "Podología" -> Intent(context, Podologia::class.java)
        "Psicología" -> Intent(context, PsicologiaPs::class.java)
        "Peluquería" -> Intent(context, Peluqueria::class.java)
        "Condiciones Médicas" -> Intent(context, Condicionesmedicas::class.java)
        "Formulario Movilidad" -> Intent(context, FormularioMovilidad::class.java)
        "Formulario RSH" -> Intent(context, FormularioRSH::class.java)
        "Perfil Móvil" -> Intent(context, Perfilmovil::class.java)
        "Servicios Admin" -> Intent(context, ServiciosAdmin::class.java)
        else -> return
    }
    context.startActivity(intent)
}


@Composable
fun ServiceBlock(title: String, color: Color, onClick: () -> Unit) {
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .height(80.dp)
            .background(color, shape = RoundedCornerShape(8.dp))
            .clickable { onClick() }
            .padding(16.dp),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = title,
            fontSize = 18.sp,
            fontWeight = FontWeight.Bold,
            color = Color.White,
            textAlign = TextAlign.Center
        )
    }
}
