import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.material.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import com.github.mikephil.charting.charts.LineChart
import com.github.mikephil.charting.data.Entry
import com.github.mikephil.charting.data.LineData
import com.github.mikephil.charting.data.LineDataSet

class FonoaudiologiaPS : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            FonoaudiologiaPSContent()
        }
    }
}

@Composable
fun FonoaudiologiaPSContent() {
    Scaffold(
        topBar = {
            TopAppBar(title = { Text("Fonoaudiología PS") })
        },
        content = {
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(16.dp),
                verticalArrangement = Arrangement.SpaceBetween,
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                // Ejemplo de una imagen de cabecera
                Image(
                    painter = painterResource(id = R.drawable.fondologin),
                    contentDescription = "Fondo de inicio de sesión",
                    modifier = Modifier.fillMaxWidth()
                )

                Spacer(modifier = Modifier.height(16.dp))

                // Marcador de posición para el gráfico lineal
                LineChartPlaceholder()

                Spacer(modifier = Modifier.height(16.dp))

                // Ejemplo de botones interactivos u otros controles
                Button(onClick = { /* TODO: Implementar acción */ }) {
                    Text("Editar Horario")
                }

                Button(onClick = { /* TODO: Implementar acción */ }) {
                    Text("Editar Citas")
                }

                Button(onClick = { /* TODO: Implementar acción */ }) {
                    Text("Editar Perfil")
                }
            }
        },
        bottomBar = {
            BottomAppBar {
                Text("Fonoaudiología PS - Pie de página")
            }
        }
    )
}

@Composable
fun LineChartPlaceholder() {
    // Marcador de posición para un gráfico
    Text("Gráfico Lineal - Marcador de posición")
}

// Función auxiliar para crear datos para el gráfico lineal (si se utiliza MPAndroidChart)
fun generateLineChartData(): LineData {
    val entradas = listOf(
        Entry(0f, 1f),
        Entry(1f, 3f),
        Entry(2f, 2f),
        Entry(3f, 5f)
    )

    val conjuntoDeDatos = LineDataSet(entradas, "Datos de ejemplo")
    return LineData(conjuntoDeDatos)
}
