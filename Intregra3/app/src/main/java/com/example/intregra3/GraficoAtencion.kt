package com.example.intregra3

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.layout.*
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.tooling.preview.Preview

// Datos ficticios de atenciones por mes
val datosMensuales = listOf(
    "Ene" to 40,
    "Feb" to 50,
    "Mar" to 30,
    "Abr" to 60,
    "May" to 90,
    "Jun" to 70,
    "Jul" to 80,
    "Ago" to 50,
    "Sep" to 60,
    "Oct" to 45,
    "Nov" to 70,
    "Dic" to 55
)

// Datos ficticios de atenciones por servicio
val datosServicios = listOf(
    "Podología" to 30,
    "Asistencia Social" to 50,
    "Peluquería" to 20
)

class GraficoAtencion : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            GraficoAtencionScreen()
        }
    }
}

// Composable que dibuja el gráfico circular y el gráfico de barras
@Composable
fun GraficoAtencionScreen() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.Center
    ) {
        Text(
            text = "Gráfico de Servicios",
            fontSize = 24.sp,
            modifier = Modifier.padding(bottom = 16.dp)
        )
        // Gráfico Circular
        val totalServicios = datosServicios.sumOf { it.second }
        Canvas(
            modifier = Modifier
                .size(200.dp)
                .fillMaxWidth()
        ) {
            var startAngle = 0f

            datosServicios.forEach { (servicio, valor) ->
                val sweepAngle = (valor.toFloat() / totalServicios) * 360f
                drawArc(
                    color = when (servicio) {
                        "Podología" -> Color.Blue
                        "Asistencia Social" -> Color.Green
                        "Peluquería" -> Color.Red
                        else -> Color.Gray
                    },
                    startAngle = startAngle,
                    sweepAngle = sweepAngle,
                    useCenter = true
                )
                startAngle += sweepAngle
            }
        }
        Spacer(modifier = Modifier.height(16.dp))
        datosServicios.forEach { (servicio, valor) ->
            Text(text = "$servicio: ${(valor.toFloat() / totalServicios) * 100} %")
        }

        Spacer(modifier = Modifier.height(32.dp))
        Text(
            text = "Gráfico de Atenciones por Mes",
            fontSize = 24.sp,
            modifier = Modifier.padding(bottom = 16.dp)
        )

        // Gráfico de Barras
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            val maxValor = datosMensuales.maxOf { it.second }

            datosMensuales.forEach { (mes, valor) ->
                Column(
                    verticalArrangement = Arrangement.Bottom,
                    modifier = Modifier.weight(1f)
                ) {
                    // Mostrar el nombre del mes arriba de la barra
                    Text(text = mes, fontSize = 14.sp, modifier = Modifier.padding(bottom = 4.dp))

                    Canvas(
                        modifier = Modifier
                            .height((valor * 200 / maxValor).dp)
                            .fillMaxWidth(0.5f)
                    ) {
                        drawRect(
                            color = Color.Blue,
                            size = androidx.compose.ui.geometry.Size(size.width, size.height)
                        )
                    }

                    // Calcular el porcentaje y mostrarlo encima de la barra
                    val porcentaje = (valor.toFloat() / maxValor) * 100
                    Text(text = "${porcentaje.toInt()}%", fontSize = 14.sp, modifier = Modifier.padding(top = 4.dp))
                }
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewGraficoAtencion() {
    GraficoAtencionScreen()
}

