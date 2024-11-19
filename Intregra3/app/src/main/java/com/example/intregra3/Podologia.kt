package com.example.intregra3

import android.app.DatePickerDialog
import android.os.Bundle
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.tooling.preview.Preview

import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
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
    var servicio by remember { mutableStateOf("") }
    var fecha by remember { mutableStateOf("") }
    var hora by remember { mutableStateOf("") }
    val context = LocalContext.current

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Reserva de Podología") },
                colors = TopAppBarDefaults.topAppBarColors(containerColor = Color(0xFF03A9F4))
            )
        }
    ) { padding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(padding)
                .padding(16.dp)
                .background(Color(0xFFE3F2FD)),
            verticalArrangement = Arrangement.spacedBy(16.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text(
                text = "Bienvenido a nuestra clínica podológica",
                fontSize = 24.sp,
                fontWeight = FontWeight.Bold,
                textAlign = TextAlign.Center,
                color = Color(0xFF1E88E5)
            )

            ServicioSelector { servicioSeleccionado -> servicio = servicioSeleccionado }

            FechaSelector { fechaSeleccionada -> fecha = fechaSeleccionada }

            if (servicio.isNotEmpty() && fecha.isNotEmpty()) {
                HoraSelector(servicio) { horaSeleccionada -> hora = horaSeleccionada }
            }

            Spacer(modifier = Modifier.height(16.dp))

            Button(
                onClick = {
                    if (servicio.isNotEmpty() && fecha.isNotEmpty() && hora.isNotEmpty()) {
                        Toast.makeText(context, "Reserva Confirmada", Toast.LENGTH_LONG).show()
                    } else {
                        Toast.makeText(context, "Complete todos los campos", Toast.LENGTH_SHORT).show()
                    }
                },
                modifier = Modifier.fillMaxWidth(),
                colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF4CAF50)),
                shape = RoundedCornerShape(12.dp)
            ) {
                Text(text = "Confirmar Reserva", color = Color.White, fontSize = 18.sp)
            }
        }
    }
}

@Composable
fun ServicioSelector(onServicioSeleccionado: (String) -> Unit) {
    val servicios = listOf("Consulta General", "Limpieza Podológica", "Tratamiento de Uñas Encarnadas")
    var servicioSeleccionado by remember { mutableStateOf("") }

    Column(horizontalAlignment = Alignment.CenterHorizontally) {
        Text("Seleccione un servicio:", fontWeight = FontWeight.Bold, fontSize = 18.sp)

        servicios.forEach { servicio ->
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(8.dp)
                    .clickable {
                        servicioSeleccionado = servicio
                        onServicioSeleccionado(servicio)
                    },
                verticalAlignment = Alignment.CenterVertically
            ) {
                RadioButton(
                    selected = servicioSeleccionado == servicio,
                    onClick = {
                        servicioSeleccionado = servicio
                        onServicioSeleccionado(servicio)
                    }
                )
                Text(text = servicio, modifier = Modifier.padding(start = 8.dp))
            }
        }
    }
}

@Composable
fun FechaSelector(onFechaSeleccionada: (String) -> Unit) {
    val context = LocalContext.current
    val calendar = Calendar.getInstance()
    var fechaSeleccionada by remember { mutableStateOf("") }

    Button(
        onClick = {
            DatePickerDialog(
                context,
                { _, year, month, dayOfMonth ->
                    val fecha = Calendar.getInstance().apply {
                        set(year, month, dayOfMonth)
                    }
                    if (fecha.timeInMillis < System.currentTimeMillis()) {
                        Toast.makeText(context, "Fecha no válida", Toast.LENGTH_SHORT).show()
                    } else {
                        fechaSeleccionada = SimpleDateFormat("dd/MM/yyyy", Locale.getDefault()).format(fecha.time)
                        onFechaSeleccionada(fechaSeleccionada)
                    }
                },
                calendar.get(Calendar.YEAR),
                calendar.get(Calendar.MONTH),
                calendar.get(Calendar.DAY_OF_MONTH)
            ).show()
        },
        modifier = Modifier.fillMaxWidth(),
        colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF03A9F4)),
        shape = RoundedCornerShape(12.dp)
    ) {
        Text(
            text = if (fechaSeleccionada.isEmpty()) "Seleccionar Fecha" else "Fecha: $fechaSeleccionada",
            color = Color.White
        )
    }
}

@Composable
fun HoraSelector(servicio: String, onHoraSeleccionada: (String) -> Unit) {
    val horarios = getHorariosDisponibles(servicio)
    var horaSeleccionada by remember { mutableStateOf("") }

    Column(horizontalAlignment = Alignment.CenterHorizontally) {
        Text("Seleccione un horario:", fontWeight = FontWeight.Bold, fontSize = 18.sp)

        horarios.forEach { hora ->
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(8.dp)
                    .clickable {
                        horaSeleccionada = hora
                        onHoraSeleccionada(hora)
                    },
                verticalAlignment = Alignment.CenterVertically
            ) {
                RadioButton(
                    selected = horaSeleccionada == hora,
                    onClick = {
                        horaSeleccionada = hora
                        onHoraSeleccionada(hora)
                    }
                )
                Text(text = hora, modifier = Modifier.padding(start = 8.dp))
            }
        }
    }
}

fun getHorariosDisponibles(servicio: String): List<String> {
    return when (servicio) {
        "Consulta General" -> listOf("10:00", "11:00", "14:00", "15:00")
        "Limpieza Podológica" -> listOf("09:00", "11:30", "14:30", "16:00")
        "Tratamiento de Uñas Encarnadas" -> listOf("09:30", "10:30", "13:00", "15:30")
        else -> emptyList()
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewPodologiaScreen() {
    PodologiaScreen()
}
