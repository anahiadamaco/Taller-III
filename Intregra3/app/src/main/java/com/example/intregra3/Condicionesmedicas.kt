package com.example.intregra3

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

class Condicionesmedicas : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            CondicionesMedicasScreen()
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun CondicionesMedicasScreen() {
    // Variables de estado para los campos de texto
    var condicion by remember { mutableStateOf("") }
    var transcripcion by remember { mutableStateOf("") }
    var medicamento by remember { mutableStateOf("") }
    var consejos by remember { mutableStateOf("") }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Condiciones Médicas") },
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
            // Título de la pantalla
            Text(
                text = "Condiciones Médicas",
                fontSize = 24.sp,
                fontWeight = FontWeight.Bold,
                color = Color(0xFF1E3A8A)
            )

            // Campo para Condición Médica
            TextField(
                value = condicion,
                onValueChange = { condicion = it },
                label = { Text("Condición Médica") },
                modifier = Modifier.fillMaxWidth(),
                colors = TextFieldDefaults.textFieldColors(containerColor = Color(0xFFF3F4F6))
            )

            // Campo para Transcripciones
            TextField(
                value = transcripcion,
                onValueChange = { transcripcion = it },
                label = { Text("Transcripciones") },
                modifier = Modifier
                    .fillMaxWidth()
                    .height(100.dp),
                colors = TextFieldDefaults.textFieldColors(containerColor = Color(0xFFF3F4F6))
            )

            // Campo para Medicamentos
            TextField(
                value = medicamento,
                onValueChange = { medicamento = it },
                label = { Text("Medicamentos") },
                modifier = Modifier
                    .fillMaxWidth()
                    .height(100.dp),
                colors = TextFieldDefaults.textFieldColors(containerColor = Color(0xFFF3F4F6))
            )

            // Campo para Consejos
            TextField(
                value = consejos,
                onValueChange = { consejos = it },
                label = { Text("Consejos sobre el cuidado del usuario") },
                modifier = Modifier
                    .fillMaxWidth()
                    .height(100.dp),
                colors = TextFieldDefaults.textFieldColors(containerColor = Color(0xFFF3F4F6))
            )

            Spacer(modifier = Modifier.height(16.dp))

            // Botón Guardar
            Button(
                onClick = {
                    // Lógica para guardar los datos
                    // Aquí puedes añadir cualquier acción que desees al presionar el botón
                },
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(8.dp),
                colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF3B82F6))
            ) {
                Text("Guardar", fontSize = 16.sp, color = Color.White)
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewCondicionesMedicasScreen() {
    CondicionesMedicasScreen()
}
