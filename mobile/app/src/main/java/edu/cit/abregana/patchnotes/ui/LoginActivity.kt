package edu.cit.abregana.patchnotes.ui

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import edu.cit.abregana.patchnotes.R
import edu.cit.abregana.patchnotes.api.RetrofitClient
import edu.cit.abregana.patchnotes.model.LoginRequest
import kotlinx.coroutines.launch

class LoginActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        val etEmail = findViewById<EditText>(R.id.etEmail)
        val etPassword = findViewById<EditText>(R.id.etPassword)
        val btnLogin = findViewById<Button>(R.id.btnLogin)
        val tvError = findViewById<TextView>(R.id.tvError)
        val tvRegister = findViewById<TextView>(R.id.tvRegister)

        tvRegister.setOnClickListener {
            startActivity(Intent(this, RegisterActivity::class.java))
        }

        btnLogin.setOnClickListener {
            val email = etEmail.text.toString().trim()
            val password = etPassword.text.toString().trim()

            if (email.isEmpty() || password.isEmpty()) {
                tvError.text = "Please fill in all fields"
                tvError.visibility = View.VISIBLE
                return@setOnClickListener
            }

            lifecycleScope.launch {
                try {
                    val response = RetrofitClient.getClient(this@LoginActivity)
                        .login(LoginRequest(email, password))
                    if (response.isSuccessful && response.body() != null) {
                        val token = response.body()!!.token
                        val sharedPref = getSharedPreferences("prefs", Context.MODE_PRIVATE)
                        sharedPref.edit().putString("token", token).apply()
                        sharedPref.edit().putString("email", response.body()!!.email).apply()
                        sharedPref.edit().putString("username", response.body()!!.username).apply()
                        startActivity(Intent(this@LoginActivity, DashboardActivity::class.java))
                        finish()
                    } else {
                        tvError.text = "Invalid email or password"
                        tvError.visibility = View.VISIBLE
                    }
                } catch (e: Exception) {
                    tvError.text = "Connection error. Is the server running?"
                    tvError.visibility = View.VISIBLE
                }
            }
        }
    }
}