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
import androidx.compose.ui.tooling.preview.Preview

class PsicologiaPs : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            PsicoScreen()
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun PsicoScreen() {
    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Servicios de Psicología") },
                colors = TopAppBarDefaults.topAppBarColors(containerColor = Color(0xFFFF4081))
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
            HeaderSectionPsico()
            ServiceListPsico()
            ButtonPsico() // El botón de navegación
        }
    }
}

@Composable
fun HeaderSectionPsico() {
    Text(
        text = "Bienvenido a Psicología",
        fontSize = 24.sp,
        fontWeight = FontWeight.Bold,
        modifier = Modifier.fillMaxWidth(),
        textAlign = TextAlign.Center
    )
}

@Composable
fun ServiceListPsico() {
    Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
        ServiceItemPsico("Consulta Psicológica", "Sesiones individuales con un psicólogo.")
        ServiceItemPsico("Terapia de Grupo", "Terapia en un entorno grupal para apoyo mutuo.")
        ServiceItemPsico("Evaluaciones Psicológicas", "Pruebas y evaluaciones para diagnóstico.")
    }
}

@Composable
fun ServiceItemPsico(title: String, description: String) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(8.dp),
        colors = CardDefaults.cardColors(containerColor = Color(0xFFFCE4EC))
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(text = title, fontWeight = FontWeight.Bold, fontSize = 18.sp)
            Spacer(modifier = Modifier.height(4.dp))
            Text(text = description, fontSize = 14.sp, color = Color.Gray)
        }
    }
}

@Composable
fun ButtonPsico() {
    val context = LocalContext.current // Obtiene el contexto

    Button(
        onClick = {
            val intent = Intent(context, AsocialPs::class.java) // Crea el Intent
            context.startActivity(intent) // Inicia la nueva actividad
        },
        modifier = Modifier
            .fillMaxWidth()
            .padding(top = 16.dp),
        shape = RoundedCornerShape(8.dp)
    ) {
        Text(text = "Ir a Podología", fontSize = 16.sp)
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewPsicoScreen() {
    PsicoScreen()
}
