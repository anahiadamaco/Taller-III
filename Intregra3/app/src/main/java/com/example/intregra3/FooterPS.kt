package com.example.intregra3

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Column
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
import com.example.intregra3.ui.theme.Intregra3Theme

class FooterPS : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            Intregra3Theme {
                FooterPSContent()
            }
        }
    }
}

@Composable
fun FooterPSContent() {
    Column {
        // Información de la Municipalidad
        Text(text = "Av. Prat 650, Temuco - Chile")

        // Teléfonos
        Text(text = """
            Municipal: 800 100 650
            Salud: 45 297 3630
            Educación: 45 297 3771
        """.trimIndent())

        // Correos electrónicos
        Text(text = "munitco@temuco.cl (correo oficial)")
        Text(text = "webmaster@temuco.cl (exclusivo para temas técnicos y de contenido)")

        // Redes Sociales
        Text(text = "Twitter")
        Text(text = "Facebook")
        Text(text = "Instagram")
        Text(text = "temucowebvideos")
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewFooterPS() {
    Intregra3Theme {
        FooterPSContent()  // Esta es la vista que queremos previsualizar
    }
}
