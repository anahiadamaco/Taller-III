
package com.example.intregra3

import android.content.Intent
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.platform.LocalContext

class Podologia: ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            PodologiaScreen()
        }
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
            ScheduleButton()  // Asegúrate de tener el botón aquí
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
    Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
        ServiceItem("Consulta General", "Examen básico de los pies.")
        ServiceItem("Limpieza Podológica", "Eliminación de callos y durezas.")
        ServiceItem("Tratamiento de Uñas Encarnadas", "Alivio y prevención de uñas encarnadas.")
    }
}

@Composable
fun ServiceItem(title: String, description: String) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(8.dp),
        colors = CardDefaults.cardColors(containerColor = Color(0xFFE1F5FE))
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(text = title, fontWeight = FontWeight.Bold, fontSize = 18.sp)
            Spacer(modifier = Modifier.height(4.dp))
            Text(text = description, fontSize = 14.sp, color = Color.Gray)
        }
    }
}

@Composable
fun ScheduleButton() {
    val context = LocalContext.current  // Obtiene el contexto

    Button(
        onClick = {
            val intent = Intent(context, MainActivity::class.java) // Crea el Intent
            context.startActivity(intent) // Inicia la nueva actividad
        },
        modifier = Modifier
            .fillMaxWidth()
            .padding(top = 16.dp),
        shape = RoundedCornerShape(8.dp)
    ) {
        Text(text = "Ir a Peluquería", fontSize = 16.sp)
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewPodologiaScreen() {
    PodologiaScreen()
}
