package com.example.intregra3

import android.content.Intent
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.draw.clip

class Perfilmovil : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            // Se pasa un ejemplo de datos a la pantalla de perfil
            PerfilScreen(
                nombre = "Juan",
                apellido = "Perez",
                condicion = "Movilidad Reducida",
                transcripcion = "Sin transcripciones disponibles.",
                medicamento = "Paracetamol",
                consejos = "Evitar esfuerzos físicos.",
                onCondicionesClick = {
                    // Navegar a la página CondicionesMedicas
                    val intent = Intent(this, CondicionesMedicas::class.java)
                    startActivity(intent)
                }
            )
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun PerfilScreen(
    nombre: String,
    apellido: String,
    condicion: String,
    transcripcion: String,
    medicamento: String,
    consejos: String,
    onCondicionesClick: () -> Unit // Callback para manejar el clic en el botón
) {
    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Perfil de Usuario") },
                colors = TopAppBarDefaults.topAppBarColors(containerColor = Color(0xFF3B82F6))
            )
        }
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .padding(16.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            // Mostrar Foto de Usuario
            UserPhoto()

            // Mostrar información básica del usuario
            UserInfo()

            // Mostrar los detalles del perfil
            Text(text = "Condición Médica: $condicion", fontSize = 16.sp, color = Color.Gray)
            Text(text = "Transcripciones: $transcripcion", fontSize = 14.sp, color = Color(0xFF374151))
            Text(text = "Medicamentos: $medicamento", fontSize = 14.sp, color = Color(0xFF374151))
            Text(text = "Consejos: $consejos", fontSize = 14.sp, color = Color(0xFF374151))

            // Botón de editar perfil
            EditProfileButton()

            // Botón de condiciones médicas
            Button(
                onClick = onCondicionesClick,
                modifier = Modifier.fillMaxWidth(),
                colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF10B981))
            ) {
                Text(text = "Condiciones Médicas", fontSize = 16.sp, color = Color.White)
            }
        }
    }
}

@Composable
fun UserPhoto() {
    Box(
        modifier = Modifier
            .size(120.dp)
            .clip(CircleShape)
            .background(Color(0xFFBEE3F8)),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = "Foto",
            color = Color(0xFF3B82F6),
            fontSize = 18.sp,
            fontWeight = FontWeight.Bold
        )
    }
}

@Composable
fun UserInfo() {
    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        Text(text = "Juan Perez", fontSize = 24.sp, fontWeight = FontWeight.Bold, color = Color(0xFF1E3A8A))
        Text(text = "juan.perez@example.com", fontSize = 16.sp, color = Color.Gray)
        Text(text = "+123456789", fontSize = 16.sp, color = Color.Gray)
        Text(text = "Movilidad: muleta", fontSize = 16.sp, color = Color.Gray)
    }
}

@Composable
fun EditProfileButton() {
    Button(
        onClick = { /* Acción de editar perfil */ },
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp),
        shape = RoundedCornerShape(8.dp),
        colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF3B82F6))
    ) {
        Text(text = "Editar Perfil", fontSize = 16.sp, color = Color.White)
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewPerfilScreen() {
    PerfilScreen(
        nombre = "Juan",
        apellido = "Perez",
        condicion = "Movilidad Reducida",
        transcripcion = "Sin transcripciones disponibles.",
        medicamento = "Paracetamol",
        consejos = "Evitar esfuerzos físicos.",
        onCondicionesClick = {} // Callback vacío para la vista previa
    )
}


