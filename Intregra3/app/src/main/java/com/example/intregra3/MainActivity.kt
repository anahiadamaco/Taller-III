
package com.example.intregra3

import android.content.Intent
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            ServiciosScreen()
        }
    }
}

@Composable
fun ServiciosScreen() {
    val context = LocalContext.current
    val servicios = remember {
        listOf(
            "Podología" to Color(0xFF4CAF50),
            "Asistencia Jurídica" to Color(0xFFFF5722 ),
            "Psicología" to Color(   0xFF2196F3),
            "Peluqueria" to Color(0xFFFFC107)
        )
    }

    // Usar LazyColumn para desplazamiento vertical
    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        items(servicios) { (title, color) ->
            ServiceBlock(title, color) {
                when (title) {
                    "Asistencia Jurídica" -> {
                        val intent = Intent(context, AsocialPs::class.java)
                        context.startActivity(intent) // Cambia a Asistencia Jurídica
                    }
                    "Podología" -> {
                        val intent = Intent(context, Podologia::class.java)
                        context.startActivity(intent) // Cambia a Podologia
                    }
                    "Psicología" -> {
                        val intent = Intent(context, PsicologiaPs::class.java)
                        context.startActivity(intent) // Cambia a Psicologia
                    }
                    "Peluqueria" -> {
                        val intent = Intent(context, Peluqueria::class.java)
                        context.startActivity(intent) // Cambia a Peluqueria

                    }
                }
            }
        }

    }
}

@Composable
fun ServiceBlock(title: String, color: Color, onClick: () -> Unit) {
    Box(
        modifier = Modifier
            .fillMaxWidth() // Ocupa el ancho completo
            .height(80.dp) // Altura fija para los bloques
            .background(color, shape = RoundedCornerShape(8.dp))
            .clickable { onClick() }
            .padding(16.dp),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = title,
            fontSize = 18.sp,
            fontWeight = FontWeight.Bold,
            color = Color.White,
            textAlign = TextAlign.Center
        )
    }
}




