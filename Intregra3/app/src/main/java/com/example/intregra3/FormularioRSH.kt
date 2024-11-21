package com.example.intregra3

import android.net.Uri
import android.os.Bundle
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.graphics.asImageBitmap
import androidx.compose.ui.platform.LocalContext
import java.io.InputStream
import androidx.activity.compose.rememberLauncherForActivityResult

class FormularioRSH : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            FormularioRSHScreen()
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun FormularioRSHScreen() {
    val context = LocalContext.current
    var imageUri by remember { mutableStateOf<Uri?>(null) }
    var message by remember { mutableStateOf("") }

    // Launcher para seleccionar una imagen
    val pickImageLauncher = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.GetContent()
    ) { uri: Uri? ->
        imageUri = uri
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Registro Social de Hogar") },
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
            Text(
                text = "Sube una imagen de tu Registro Social de Hogar",
                fontSize = 18.sp,
                fontWeight = FontWeight.Bold,
                textAlign = TextAlign.Center
            )
            Text(
                text = "Completa tu registro para ver si cumples con los requisitos.",
                fontSize = 14.sp,
                color = Color.Gray,
                textAlign = TextAlign.Center
            )
            Button(
                onClick = { pickImageLauncher.launch("image/*") },
                modifier = Modifier.fillMaxWidth(),
                colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF3B82F6))
            ) {
                Text(text = "Seleccionar Imagen", color = Color.White)
            }

            // Si se ha seleccionado una imagen, la muestra
            imageUri?.let { uri ->
                Image(
                    bitmap = uriToBitmap(context, uri).asImageBitmap(),
                    contentDescription = "Previsualización de imagen",
                    modifier = Modifier
                        .size(200.dp)
                        .background(Color.LightGray, RoundedCornerShape(8.dp))
                        .padding(8.dp),
                    contentScale = ContentScale.Crop
                )
            }

            // Botón para subir la imagen
            Button(
                onClick = {
                    if (imageUri == null) {
                        message = "Por favor, selecciona una imagen."
                        Toast.makeText(context, message, Toast.LENGTH_SHORT).show()
                    } else {
                        message = "Imagen cargada con éxito."
                        Toast.makeText(context, message, Toast.LENGTH_SHORT).show()
                        imageUri = null // Reinicia el estado después del envío
                    }
                },
                modifier = Modifier.fillMaxWidth(),
                colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF10B981))
            ) {
                Text(text = "Subir Imagen", color = Color.White)
            }

            // Mensaje de éxito o error después de intentar cargar la imagen
            if (message.isNotEmpty()) {
                Text(
                    text = message,
                    color = if (message.contains("éxito")) Color(0xFF10B981) else Color.Red,
                    fontSize = 14.sp,
                    textAlign = TextAlign.Center
                )
            }
        }
    }
}

/**
 * Convierte una Uri en un Bitmap para mostrar la imagen seleccionada.
 */
@Composable
fun uriToBitmap(context: android.content.Context, uri: Uri): android.graphics.Bitmap {
    val inputStream: InputStream? = context.contentResolver.openInputStream(uri)
    return android.graphics.BitmapFactory.decodeStream(inputStream)!!
}

@Preview(showBackground = true)
@Composable
fun PreviewFormularioRSHScreen() {
    FormularioRSHScreen()
}

