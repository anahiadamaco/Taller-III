package com.example.intregra3

import android.Manifest
import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import android.os.Bundle
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.animation.animateColorAsState
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Person
import androidx.compose.material.icons.filled.Build // Importa el ícono adicional
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
        createNotificationChannel()
        solicitarPermisoNotificacion()
        setContent { MainScreen() }
    }

    private fun solicitarPermisoNotificacion() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            val permission = Manifest.permission.POST_NOTIFICATIONS
            if (checkSelfPermission(permission) != PackageManager.PERMISSION_GRANTED) {
                launcherPermiso.launch(permission)
            }
        }
    }

    private val launcherPermiso =
        registerForActivityResult(ActivityResultContracts.RequestPermission()) { isGranted ->
            if (!isGranted) {
                Log.w("ServiciosApp", "Permiso de notificaciones rechazado.")
            }
        }

    private fun createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channel = NotificationChannel(
                "servicios_channel", "Servicios", NotificationManager.IMPORTANCE_DEFAULT
            ).apply { description = "Notificaciones de selección de servicios" }

            val notificationManager = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
            notificationManager.createNotificationChannel(channel)
        }
    }
}

@Composable
fun MainScreen() {
    var selectedTab by remember { mutableStateOf(0) }

    Scaffold(
        bottomBar = { BottomNavigationBar(selectedTab, onTabSelected = { selectedTab = it }) }
    ) { paddingValues ->
        when (selectedTab) {
            0 -> ServiciosScreen(Modifier.padding(paddingValues))
            1 -> CuentaScreen(Modifier.padding(paddingValues))
            2 -> NewScreen(Modifier.padding(paddingValues)) // Nueva pantalla
        }
    }
}

@Composable
fun BottomNavigationBar(selectedTab: Int, onTabSelected: (Int) -> Unit) {
    NavigationBar {
        NavigationBarItem(
            icon = { Icon(Icons.Default.Home, contentDescription = "Inicio") },
            label = { Text("Inicio") },
            selected = selectedTab == 0,
            onClick = { onTabSelected(0) }
        )
        NavigationBarItem(
            icon = { Icon(Icons.Default.Person, contentDescription = "Cuenta") },
            label = { Text("Cuenta") },
            selected = selectedTab == 1,
            onClick = { onTabSelected(1) }
        )
        NavigationBarItem(
            icon = { Icon(Icons.Default.Build, contentDescription = "Servicios") }, // Ícono adicional
            label = { Text("Servicios") },
            selected = selectedTab == 2,
            onClick = { onTabSelected(2) }
        )
    }
}

@Composable
fun ServiciosScreen(modifier: Modifier = Modifier) {
    val context = LocalContext.current
    val servicios = listOf(
        "Podología" to Color(0xFF4CAF50),
        "Asistencia Jurídica" to Color(0xFFFF5722),
        "Psicología" to Color(0xFF2196F3),
        "Peluquería" to Color(0xFFFFC107)
    )

    var mensajeApp by remember { mutableStateOf<String?>(null) }
    var servicioSeleccionado by remember { mutableStateOf<String?>(null) }
    var mostrarDialogo by remember { mutableStateOf(false) }

    val snackbarHostState = remember { SnackbarHostState() }

    LaunchedEffect(mensajeApp) {
        mensajeApp?.let {
            snackbarHostState.showSnackbar(it)
            mensajeApp = null
        }
    }

    LazyColumn(
        modifier = modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        items(servicios) { (title, color) ->
            ServiceBlock(title, color) {
                servicioSeleccionado = title
                mensajeApp = "Seleccionaste: $title"
                mostrarDialogo = true
            }
        }
    }

    if (mostrarDialogo && servicioSeleccionado != null) {
        ConfirmacionDialogo(
            servicio = servicioSeleccionado!!,
            onConfirm = {
                mostrarDialogo = false
                navegarServicios(context, servicioSeleccionado!!)
            },
            onDismiss = { mostrarDialogo = false }
        )
    }
}

@Composable
fun CuentaScreen(modifier: Modifier = Modifier) {
    Box(
        modifier = modifier
            .fillMaxSize()
            .padding(16.dp),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = "Pantalla de Cuenta",
            fontSize = 24.sp,
            fontWeight = FontWeight.Bold
        )
    }
}

@Composable
fun NewScreen(modifier: Modifier = Modifier) { // Nueva pantalla
    Box(
        modifier = modifier
            .fillMaxSize()
            .padding(16.dp),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = "Pantalla de Servicios",
            fontSize = 24.sp,
            fontWeight = FontWeight.Bold
        )
    }
}

@Composable
fun ConfirmacionDialogo(servicio: String, onConfirm: () -> Unit, onDismiss: () -> Unit) {
    AlertDialog(
        onDismissRequest = { onDismiss() },
        title = { Text("Confirmación") },
        text = { Text("¿Estás seguro de que deseas seleccionar $servicio?") },
        confirmButton = {
            TextButton(onClick = onConfirm) {
                Text("Sí")
            }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) {
                Text("Cancelar")
            }
        }
    )
}

fun navegarServicios(context: Context, serviceName: String) {
    val intent = when (serviceName) {
        "Asistencia Jurídica" -> Intent(context, AsocialPs::class.java)
        "Podología" -> Intent(context, Podologia::class.java)
        "Psicología" -> Intent(context, PsicologiaPs::class.java)
        "Peluquería" -> Intent(context, Peluqueria::class.java)
        else -> return
    }
    context.startActivity(intent)
}

@Composable
fun ServiceBlock(title: String, color: Color, onClick: () -> Unit) {
    var isClicked by remember { mutableStateOf(false) }
    val backgroundColor by animateColorAsState(
        if (isClicked) color.copy(alpha = 0.7f) else color
    )

    Box(
        modifier = Modifier
            .fillMaxWidth()
            .height(80.dp)
            .background(backgroundColor, shape = RoundedCornerShape(8.dp))
            .clickable {
                isClicked = !isClicked
                onClick()
            }
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
