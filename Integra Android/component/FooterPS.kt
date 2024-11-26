package com.example.miapp

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.miapp.databinding.ActivityFooterBinding

class FooterActivity : AppCompatActivity() {

    // Utiliza View Binding para manejar las vistas
    private lateinit var binding: ActivityFooterBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        binding = ActivityFooterBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // Configura los datos iniciales
        setupUI()
    }

    private fun setupUI() {
        // Municipalidad Info
        binding.tvDireccion.text = "Av. Prat 650, Temuco - Chile"
        binding.tvTelefonos.text = """
            Municipal: 800 100 650
            Salud: 45 297 3630
            Educación: 45 297 3771
        """.trimIndent()

        // Correos
        binding.tvCorreoOficial.text = "munitco@temuco.cl (correo oficial)"
        binding.tvCorreoTecnico.text = "webmaster@temuco.cl (exclusivo para temas técnicos y de contenido)"

        // Redes Sociales
        binding.tvTwitter.text = "Twitter"
        binding.tvFacebook.text = "Facebook"
        binding.tvInstagram.text = "Instagram"
        binding.tvYoutube.text = "temucowebvideos"

        // Configura cualquier acción en los clics, si es necesario
        binding.ivTwitter.setOnClickListener {
            // Acción para abrir Twitter, si aplica
        }
    }
}
