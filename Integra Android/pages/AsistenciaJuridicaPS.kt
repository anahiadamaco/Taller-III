package com.example.miapp

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.miapp.databinding.ActivityAsistenciaJuridicaPsBinding
import com.github.mikephil.charting.charts.LineChart
import com.github.mikephil.charting.components.Legend
import com.github.mikephil.charting.data.Entry
import com.github.mikephil.charting.data.LineData
import com.github.mikephil.charting.data.LineDataSet

class AsistenciaJuridicaPS : AppCompatActivity() {

    private lateinit var binding: ActivityAsistenciaJuridicaPsBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Inicializar View Binding
        binding = ActivityAsistenciaJuridicaPsBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // Configurar el gráfico
        setupLineChart()
    }

    private fun setupLineChart() {
        val lineChart: LineChart = binding.lineChart

        // Datos de ejemplo para el gráfico
        val entries = listOf(
            Entry(0f, 0f),  // Day 0
            Entry(1f, 0f),  // Ene
            Entry(2f, 0f),  // Feb
            Entry(3f, 4f),  // Mar
            Entry(4f, 6f),  // Abr
            Entry(5f, 3f)   // May
        )

        val dataSet = LineDataSet(entries, "Asistencias Mensuales").apply {
            color = getColor(R.color.purple_500)
            valueTextColor = getColor(R.color.black)
            lineWidth = 2f
            circleRadius = 4f
            setDrawCircleHole(false)
        }

        val lineData = LineData(dataSet)
        lineChart.data = lineData

        lineChart.apply {
            description.text = "Asistencia Jurídica"
            description.textColor = getColor(R.color.black)
            description.textSize = 12f
            legend.verticalAlignment = Legend.LegendVerticalAlignment.TOP
            legend.horizontalAlignment = Legend.LegendHorizontalAlignment.RIGHT
        }

        lineChart.invalidate() // Refrescar el gráfico
    }
}
