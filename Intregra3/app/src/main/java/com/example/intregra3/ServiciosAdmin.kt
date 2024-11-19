package com.example.intregra3

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
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

class ServiciosAdmin : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            ServiciosAdminScreen()
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ServiciosAdminScreen() {
    // Lista de servicios iniciales
    var servicios = remember { mutableStateListOf("Asistencia Jurídica", "Asistencia Social", "Fonoaudiología", "Kinesiología", "Peluquería", "Podología", "Psicología") }
    var filteredServicios by remember { mutableStateOf(servicios.toList()) }
    var searchQuery by remember { mutableStateOf("") }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Servicios Admin") },
                colors = TopAppBarDefaults.topAppBarColors(containerColor = Color(0xFF3B82F6))
            )
        }
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            // Título de la pantalla
            Text(
                text = "Administración de Servicios",
                fontSize = 24.sp,
                fontWeight = FontWeight.Bold,
                color = Color(0xFF1E3A8A)
            )

            // Botón "Nuevo" centrado
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.Center
            ) {
                Button(
                    onClick = {
                        servicios.add("Nuevo Servicio") // Agrega un servicio temporal para pruebas
                        filteredServicios = servicios
                    },
                    shape = RoundedCornerShape(8.dp),
                    colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF3B82F6))
                ) {
                    Text("Nuevo", fontSize = 14.sp, color = Color.White)
                }
            }

            // Campo de búsqueda
            TextField(
                value = searchQuery,
                onValueChange = { query ->
                    searchQuery = query
                    filteredServicios = if (query.isEmpty()) {
                        servicios
                    } else {
                        servicios.filter { it.contains(query, ignoreCase = true) }
                    }
                },
                placeholder = { Text("Buscar servicio...") },
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 8.dp),
                colors = TextFieldDefaults.textFieldColors(
                    containerColor = Color(0xFFF3F4F6),
                    focusedIndicatorColor = Color(0xFF3B82F6),
                    unfocusedIndicatorColor = Color(0xFFB0BEC5),
                    cursorColor = Color(0xFF3B82F6)
                )
            )

            // Mostrar la tabla de servicios filtrados
            ServiciosTable(
                servicios = filteredServicios,
                onEdit = { index ->
                    println("Editando servicio: ${filteredServicios[index]}")
                },
                onDelete = { index ->
                    servicios.remove(filteredServicios[index])
                    filteredServicios = if (searchQuery.isEmpty()) servicios else servicios.filter { it.contains(searchQuery, ignoreCase = true) }
                }
            )
        }
    }
}

@Composable
fun ServiciosTable(
    servicios: List<String>,
    onEdit: (Int) -> Unit,
    onDelete: (Int) -> Unit
) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .background(Color(0xFFF3F4F6), shape = RoundedCornerShape(8.dp))
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        servicios.forEachIndexed { index, servicio ->
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .background(Color.White, shape = RoundedCornerShape(8.dp))
                    .padding(12.dp),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                // Texto del servicio
                Text(
                    text = servicio,
                    fontSize = 16.sp,
                    fontWeight = FontWeight.Normal,
                    color = Color.Black,
                    modifier = Modifier.weight(1f)
                )

                // Botones de Editar y Borrar
                Row(
                    horizontalArrangement = Arrangement.spacedBy(8.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Button(
                        onClick = { onEdit(index) },
                        modifier = Modifier
                            .width(90.dp) // Aumenta el ancho del botón
                            .height(40.dp),
                        colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF4CAF50)),
                        shape = RoundedCornerShape(8.dp)
                    ) {
                        Text("Editar", fontSize = 14.sp, color = Color.White, maxLines = 1)
                    }

                    Button(
                        onClick = { onDelete(index) },
                        modifier = Modifier
                            .width(90.dp) // Aumenta el ancho del botón
                            .height(40.dp),
                        colors = ButtonDefaults.buttonColors(containerColor = Color(0xFFF44336)),
                        shape = RoundedCornerShape(8.dp)
                    ) {
                        Text("Borrar", fontSize = 14.sp, color = Color.White, maxLines = 1)
                    }
                }
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewServiciosAdminScreen() {
    ServiciosAdminScreen()
}