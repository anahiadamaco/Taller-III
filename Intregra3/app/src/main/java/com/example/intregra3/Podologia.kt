package com.example.intregra3

import android.app.DatePickerDialog
import android.app.TimePickerDialog
import android.content.Intent
import android.os.Bundle
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
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
import androidx.compose.ui.tooling.preview.Preview
import java.text.SimpleDateFormat
import java.util.*

class Podologia : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent { PodologiaScreen() }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun PodologiaScreen() {
    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Servicios de Podología") },
                colors = TopAppBarDefaults.topAppBarColors(containerColor = Color(0xFF03A9F4))
            )
        }
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            HeaderSection()
            ServiceList()
            ScheduleSection()
        }
    }
}

@Composable
fun HeaderSection() {
    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = Modifier.fillMaxWidth()
    ) {
        Text(
            text = "Bienvenido a nuestra clínica podológica",
            fontSize = 24.sp,
            fontWeight = FontWeight.Bold,
            textAlign = TextAlign.Center
        )
    }
}

@Composable
fun ServiceList() {
    val servicios = listOf(
        "Consulta General" to "Examen básico de los pies.",
        "Limpieza Podológica" to "Eliminación de callos y durezas.",
        "Tratamiento de Uñas Encarnadas" to "Alivio y prevención de uñas encarnadas."
    )

    var servicioSeleccionado by remember { mutableStateOf<String?>(null) }

    Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
        servicios.forEach { (titulo, descripcion) ->
            ServiceItem(titulo, descripcion) {
                servicioSeleccionado = titulo
            }
        }
        servicioSeleccionado?.let {
            Text(
                "Servicio Seleccionado: $it",
                fontWeight = FontWeight.Bold,
                color = Color.Green
            )
        }
    }
}

@Composable
fun ServiceItem(titulo: String, descripcion: String, onClick: () -> Unit) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .clickable { onClick() },
        shape = RoundedCornerShape(8.dp),
        colors = CardDefaults.cardColors(containerColor = Color(0xFFE1F5FE))
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(text = titulo, fontWeight = FontWeight.Bold, fontSize = 18.sp)
            Spacer(modifier = Modifier.height(4.dp))
            Text(text = descripcion, fontSize = 14.sp, color = Color.Gray)
        }
    }
}

@Composable
fun ScheduleSection() {
    val context = LocalContext.current
    val calendar = Calendar.getInstance()

    // Estados para la fecha, hora y control del diálogo
    var fechaSeleccionada by remember { mutableStateOf("") }
    var horaSeleccionada by remember { mutableStateOf("") }
    var mostrarDialogo by remember { mutableStateOf(false) }

    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = Modifier.fillMaxWidth()
    ) {
        // Botón para seleccionar fecha
        Button(
            onClick = {
                DatePickerDialog(
                    context,
                    { _, year, month, dayOfMonth ->
                        val fecha = Calendar.getInstance().apply {
                            set(year, month, dayOfMonth)
                        }
                        if (fecha.timeInMillis < System.currentTimeMillis()) {
                            Toast.makeText(context, "La fecha seleccionada no es válida", Toast.LENGTH_SHORT).show()
                        } else {
                            fechaSeleccionada = SimpleDateFormat("dd/MM/yyyy", Locale.getDefault()).format(fecha.time)
                        }
                    },
                    calendar.get(Calendar.YEAR),
                    calendar.get(Calendar.MONTH),
                    calendar.get(Calendar.DAY_OF_MONTH)
                ).show()
            },
            modifier = Modifier
                .fillMaxWidth()
                .padding(top = 8.dp),
            shape = RoundedCornerShape(8.dp)
        ) {
            Text(text = if (fechaSeleccionada.isEmpty()) "Seleccionar Fecha" else "Fecha: $fechaSeleccionada")
        }

        // Botón para seleccionar hora
        Button(
            onClick = {
                TimePickerDialog(
                    context,
                    { _, hourOfDay, minute ->
                        horaSeleccionada = String.format("%02d:%02d", hourOfDay, minute)
                    },
                    calendar.get(Calendar.HOUR_OF_DAY),
                    calendar.get(Calendar.MINUTE),
                    true
                ).show()
            },
            modifier = Modifier
                .fillMaxWidth()
                .padding(top = 8.dp),
            shape = RoundedCornerShape(8.dp)
        ) {
            Text(text = if (horaSeleccionada.isEmpty()) "Seleccionar Hora" else "Hora: $horaSeleccionada")
        }

        // Botón para confirmar reserva
        Button(
            onClick = {
                if (fechaSeleccionada.isNotEmpty() && horaSeleccionada.isNotEmpty()) {
                    mostrarDialogo = true // Activar el diálogo
                } else {
                    Toast.makeText(context, "Por favor, selecciona una fecha y una hora", Toast.LENGTH_SHORT).show()
                }
            },
            modifier = Modifier
                .fillMaxWidth()
                .padding(top = 16.dp),
            shape = RoundedCornerShape(8.dp)
        ) {
            Text(text = "Confirmar Reserva", fontSize = 16.sp)
        }

        // Mostrar el AlertDialog si `mostrarDialogo` es verdadero
        if (mostrarDialogo) {
            ConfirmacionDialogo(
                fecha = fechaSeleccionada,
                hora = horaSeleccionada,
                onConfirm = {
                    Toast.makeText(context, "Reserva Confirmada", Toast.LENGTH_LONG).show()
                    context.startActivity(Intent(context, MainActivity::class.java))
                    mostrarDialogo = false // Cerrar el diálogo
                },
                onDismiss = { mostrarDialogo = false }
            )
        }
    }
}

@Composable
fun ConfirmacionDialogo(
    fecha: String,
    hora: String,
    onConfirm: () -> Unit,
    onDismiss: () -> Unit
) {
    AlertDialog(
        onDismissRequest = onDismiss,
        confirmButton = {
            TextButton(onClick = onConfirm) {
                Text("Aceptar")
            }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) {
                Text("Cancelar")
            }
        },
        title = { Text("Confirmar Reserva") },
        text = {
            Text("¿Confirmar reserva para el $fecha a las $hora?")
        }
    )
}

@Preview(showBackground = true)
@Composable
fun PreviewPodologiaScreen() {
    PodologiaScreen()
}
