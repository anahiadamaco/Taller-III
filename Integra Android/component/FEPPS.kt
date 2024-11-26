package com.example.Intregra3

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.google.android.material.snackbar.Snackbar

class FEPPS : AppCompatActivity() {

    private lateinit var etTelefono: EditText
    private lateinit var etCorreo: EditText
    private lateinit var etOficina: EditText
    private lateinit var btnGuardar: Button
    private lateinit var tvMensaje: TextView
    private lateinit var btnCerrar: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_form_editar_perfil)

        // Referencias a los elementos del layout
        etTelefono = findViewById(R.id.etTelefono)
        etCorreo = findViewById(R.id.etCorreo)
        etOficina = findViewById(R.id.etOficina)
        btnGuardar = findViewById(R.id.btnGuardar)
        tvMensaje = findViewById(R.id.tvMensaje)
        btnCerrar = findViewById(R.id.btnCerrar)

        // Manejo del botón cerrar
        btnCerrar.setOnClickListener {
            finish() // Cierra la actividad
        }

        // Manejo del botón guardar
        btnGuardar.setOnClickListener {
            val telefono = etTelefono.text.toString()
            val correo = etCorreo.text.toString()
            val oficina = etOficina.text.toString()

            // Validaciones
            if (telefono.isEmpty() || correo.isEmpty() || oficina.isEmpty()) {
                Snackbar.make(btnGuardar, "Todos los campos son obligatorios", Snackbar.LENGTH_LONG).show()
                return@setOnClickListener
            }

            if (!android.util.Patterns.EMAIL_ADDRESS.matcher(correo).matches()) {
                Snackbar.make(btnGuardar, "Correo no válido", Snackbar.LENGTH_LONG).show()
                return@setOnClickListener
            }

            // Mostrar mensaje de éxito
            tvMensaje.text = "Cambios guardados correctamente"
            tvMensaje.visibility = View.VISIBLE

            // Ocultar el mensaje después de 3 segundos
            Handler(Looper.getMainLooper()).postDelayed({
                tvMensaje.visibility = View.GONE
            }, 3000)
        }
    }
}
