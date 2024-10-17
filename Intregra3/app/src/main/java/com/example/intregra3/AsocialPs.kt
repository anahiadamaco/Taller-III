package com.example.intregra3

import android.content.Intent
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.foundation.clickable

import androidx.compose.ui.tooling.preview.Preview

class AsocialPs : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            AsocialPsScreen()
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun AsocialPsScreen() {
    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Asistencia Jurídica") },
                colors = TopAppBarDefaults.topAppBarColors(containerColor = Color(0xFFD32F2F)) // Rojo oscuro
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
            HeaderAsistenciaJ()
            ServiceListAsistencia()
            ButtonAsistencia()
        }
    }
}

@Composable
fun HeaderAsistenciaJ() {
    Text(
        text = "Bienvenido a Asistencia Jurídica",
        fontSize = 24.sp,
        fontWeight = FontWeight.Bold,
        modifier = Modifier.fillMaxWidth(),
        textAlign = TextAlign.Center
    )
}

@Composable
fun ServiceListAsistencia() {
    val context = LocalContext.current // Obtén el contexto
    Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
        ServiceItemAsistencia("Consultoría Legal", "Asesoría en casos legales complejos.") {
            // Acción al hacer clic en Consultoría Legal
            val intent = Intent(context, AsocialPs::class.java)
            context.startActivity(intent)
        }
        ServiceItemAsistencia("Asistencia Penal", "Defensa en procesos penales.") {
            // Acción al hacer clic en Asistencia Penal
            val intent = Intent(context, AsocialPs::class.java)
            context.startActivity(intent)
        }
        ServiceItemAsistencia("Asesoría en Familia", "Orientación en casos de derecho familiar.") {
            // Acción al hacer clic en Asesoría en Familia
            val intent = Intent(context, AsocialPs::class.java)
            context.startActivity(intent)
        }
    }
}

@Composable
fun ServiceItemAsistencia(title: String, description: String, onClick: () -> Unit) {
    Card(
        modifier = Modifier.fillMaxWidth().clickable { onClick() }, // Añadir clickable aquí
        shape = RoundedCornerShape(8.dp),
        colors = CardDefaults.cardColors(containerColor = Color(0xFFFFCDD2)) // Fondo rosado claro
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(text = title, fontWeight = FontWeight.Bold, fontSize = 18.sp)
            Spacer(modifier = Modifier.height(4.dp))
            Text(text = description, fontSize = 14.sp, color = Color.Gray)
        }
    }
}

@Composable
fun ButtonAsistencia() {
    val context = LocalContext.current

    Button(
        onClick = {
            val intent = Intent(context, AsocialPs::class.java) // Navega a AsocialPs
            context.startActivity(intent)
        },
        modifier = Modifier
            .fillMaxWidth()
            .padding(top = 16.dp),
        shape = RoundedCornerShape(8.dp),
        colors = ButtonDefaults.buttonColors(containerColor = Color(0xFFD32F2F)) // Botón rojo oscuro
    ) {
        Text(text = "Ir a Podología", fontSize = 16.sp, color = Color.White)
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewAsocialPsScreen() {
    AsocialPsScreen()
}
