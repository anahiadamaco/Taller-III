package com.example.intregra3

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

class FormularioMovilidad : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            FormularioMovilidadScreen()
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun FormularioMovilidadScreen() {
    // Variables de estado para los campos de texto
    var nombre by remember { mutableStateOf("") }
    var apellido by remember { mutableStateOf("") }
    var transporte by remember { mutableStateOf("") }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Formulario de Movilidad") },
                colors = TopAppBarDefaults.topAppBarColors(containerColor = Color(0xFF3B82F6))
            )
        }
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            // Título del formulario
            Text(
                text = "Formulario Movilidad",
                fontSize = 24.sp,
                fontWeight = FontWeight.Bold,
                color = Color(0xFF1E3A8A)
            )

            // Campo de texto para el nombre
            TextField(
                value = nombre,
                onValueChange = { nombre = it },
                label = { Text("Nombre") },
                modifier = Modifier.fillMaxWidth()
            )

            // Campo de texto para el apellido
            TextField(
                value = apellido,
                onValueChange = { apellido = it },
                label = { Text("Apellido") },
                modifier = Modifier.fillMaxWidth()
            )

            // Campo de texto para el medio de transporte
            TextField(
                value = transporte,
                onValueChange = { transporte = it },
                label = { Text("Medio de transporte") },
                modifier = Modifier.fillMaxWidth()
            )

            // Espacio para el botón de guardar o enviar
            Spacer(modifier = Modifier.height(16.dp))

            // Botón para guardar los datos
            Button(
                onClick = { /* Lógica para guardar los datos */ },
                modifier = Modifier.fillMaxWidth()
            ) {
                Text("Guardar", fontSize = 16.sp)
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewFormularioMovilidadScreen() {
    FormularioMovilidadScreen()
}