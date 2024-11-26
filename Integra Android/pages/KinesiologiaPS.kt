package com.example.kinesiologia

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.github.mikephil.charting.charts.LineChart
import com.github.mikephil.charting.components.Description
import com.github.mikephil.charting.data.Entry
import com.github.mikephil.charting.data.LineData
import com.github.mikephil.charting.data.LineDataSet

class KinesiologiaActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_kinesiologia)

        // Configuración del gráfico de línea
        val lineChart = findViewById<LineChart>(R.id.lineChart)
        val entries = ArrayList<Entry>()

        // Ejemplo de datos
        entries.add(Entry(1f, 2f))
        entries.add(Entry(2f, 4f))
        entries.add(Entry(3f, 1f))
        entries.add(Entry(4f, 3f))

        val dataSet = LineDataSet(entries, "Progreso")
        dataSet.color = getColor(R.color.teal_200)

        val lineData = LineData(dataSet)
        lineChart.data = lineData

        val description = Description()
        description.text = "Progreso de Kinesiología"
        lineChart.description = description

        lineChart.invalidate() // Refrescar el gráfico
    }
}