package com.example.asistenciasocial

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.asistenciasocial.ui.theme.AsistenciaSocialTheme

// Clase principal de la actividad en Android
class AsistenciaSocialPS : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            // Definir el tema para la UI
            AsistenciaSocialTheme {
                // Pantalla principal
                MainScreen()
            }
        }
    }
}

// Composable para la pantalla principal
@Composable
fun MainScreen() {
    Scaffold(
        topBar = {
            // Barra superior
            TopAppBar(
                title = { Text("Asistencia Social") },
                backgroundColor = Color(0xFF6200EE),
                contentColor = Color.White
            )
        },
        content = {
            // Contenido de la pantalla
            Content()
        },
        bottomBar = {
            // Barra inferior
            BottomNavigationBar()
        }
    )
}

// Composable que contiene el contenido principal
@Composable
fun Content() {
    // Crear una columna que se puede desplazar verticalmente
    val scrollState = rememberScrollState()
    Column(
        modifier = Modifier
            .fillMaxSize()
            .verticalScroll(scrollState)  // Habilitar desplazamiento
            .padding(16.dp)  // Espaciado general
    ) {
        // Sección de imagen de fondo
        Image(
            painter = painterResource(id = R.drawable.fondologin), // Actualiza con tu recurso
            contentDescription = "Imagen de fondo",
            modifier = Modifier
                .fillMaxWidth()
                .height(200.dp),  // Altura de la imagen
            contentScale = ContentScale.Crop  // Ajustar la imagen
        )

        Spacer(modifier = Modifier.height(16.dp))  // Espacio entre secciones

        // Secciones de contenido (por ejemplo, "Editar Horarios")
        SectionCard("Editar Horarios", R.drawable.edithorario)
        SectionCard("Editar Citas", R.drawable.editcitas)
        SectionCard("Editar Perfil", R.drawable.editperfil)
        SectionCard("Ver Calendario", R.drawable.vercalendario)
    }
}

// Composable para crear una tarjeta de sección
@Composable
fun SectionCard(title: String, imageRes: Int) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(8.dp),  // Espaciado entre tarjetas
        elevation = 4.dp  // Sombra de la tarjeta
    ) {
        Row(
            modifier = Modifier.padding(16.dp),
            horizontalArrangement = Arrangement.SpaceBetween  // Separar imagen y texto
        ) {
            // Imagen de la sección
            Image(
                painter = painterResource(id = imageRes),
                contentDescription = title,
                modifier = Modifier.size(64.dp)  // Tamaño de la imagen
            )
            Spacer(modifier = Modifier.width(16.dp))  // Espacio entre imagen y texto
            // Título de la sección
            Text(
                text = title,
                fontSize = 18.sp,
                fontWeight = FontWeight.Bold,
                modifier = Modifier.weight(1f)  // Ocupa el espacio restante
            )
        }
    }
}

// Composable para la barra inferior
@Composable
fun BottomNavigationBar() {
    BottomAppBar(
        backgroundColor = Color(0xFF6200EE),  // Color de fondo
        contentColor = Color.White  // Color del contenido
    ) {
        Text(
            text = "Contenido del pie de página",
            modifier = Modifier.padding(16.dp),
            color = Color.White  // Color del texto
        )
    }
}
