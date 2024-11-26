package com.example.psicologia

import android.os.Bundle
import android.widget.Button
import android.widget.ImageView
import androidx.appcompat.app.AppCompatActivity
import com.github.mikephil.charting.charts.LineChart
import com.github.mikephil.charting.components.XAxis
import com.github.mikephil.charting.data.Entry
import com.github.mikephil.charting.data.LineData
import com.github.mikephil.charting.data.LineDataSet

class PsicologiaActivity : AppCompatActivity() {

    private lateinit var lineChart: LineChart
    private var isCalendarOpen: Boolean = false

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_psicologia)

        // Referencias a los elementos del diseño
        val headerImage: ImageView = findViewById(R.id.headerImage)
        lineChart = findViewById(R.id.lineChart)
        val toggleCalendarButton: Button = findViewById(R.id.toggleCalendarButton)

        // Configurar el gráfico
        setupLineChart()

        // Manejo del botón
        toggleCalendarButton.setOnClickListener {
            isCalendarOpen = !isCalendarOpen
            // Acción al alternar el estado del calendario
        }
    }

    private fun setupLineChart() {
        val dataPoints = listOf(
            Entry(0f, 0f),
            Entry(1f, 0f),
            Entry(2f, 4f),
            Entry(3f, 0f),
            Entry(4f, 0f),
            Entry(5f, 0f),
            Entry(6f, 0f)
        )

        val dataSet = LineDataSet(dataPoints, "Monthly Data")
        dataSet.color = resources.getColor(R.color.purple_200, null)
        dataSet.valueTextColor = resources.getColor(R.color.black, null)

        lineChart.data = LineData(dataSet)
        lineChart.xAxis.position = XAxis.XAxisPosition.BOTTOM
        lineChart.invalidate() // Actualizar el gráfico
    }
}
