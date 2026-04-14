package edu.cit.abregana.patchnotes.ui

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.*
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import edu.cit.abregana.patchnotes.R
import edu.cit.abregana.patchnotes.api.RetrofitClient
import edu.cit.abregana.patchnotes.model.RegisterRequest
import kotlinx.coroutines.launch

class RegisterActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_register)

        val etEmail = findViewById<EditText>(R.id.etEmail)
        val etUsername = findViewById<EditText>(R.id.etUsername)
        val etFirstName = findViewById<EditText>(R.id.etFirstName)
        val etLastName = findViewById<EditText>(R.id.etLastName)
        val etPassword = findViewById<EditText>(R.id.etPassword)
        val etAge = findViewById<EditText>(R.id.etAge)
        val spinnerGender = findViewById<Spinner>(R.id.spinnerGender)
        val btnRegister = findViewById<Button>(R.id.btnRegister)
        val tvError = findViewById<TextView>(R.id.tvError)
        val tvLogin = findViewById<TextView>(R.id.tvLogin)

        val genderOptions = arrayOf("Select Gender", "Male", "Female", "Other", "Prefer not to say")
        val adapter = ArrayAdapter(this, android.R.layout.simple_spinner_item, genderOptions)
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item)
        spinnerGender.adapter = adapter

        tvLogin.setOnClickListener {
            startActivity(Intent(this, LoginActivity::class.java))
            finish()
        }

        btnRegister.setOnClickListener {
            val email = etEmail.text.toString().trim()
            val username = etUsername.text.toString().trim()
            val firstName = etFirstName.text.toString().trim()
            val lastName = etLastName.text.toString().trim()
            val password = etPassword.text.toString().trim()
            val ageStr = etAge.text.toString().trim()
            val gender = spinnerGender.selectedItem.toString()

            if (email.isEmpty() || username.isEmpty() || firstName.isEmpty() ||
                lastName.isEmpty() || password.isEmpty() || ageStr.isEmpty() ||
                gender == "Select Gender") {

                tvError.text = "Please fill in all fields"
                tvError.visibility = View.VISIBLE
                return@setOnClickListener
            }

            if (!android.util.Patterns.EMAIL_ADDRESS.matcher(email).matches()) {
                tvError.text = "Invalid email format"
                tvError.visibility = View.VISIBLE
                return@setOnClickListener
            }

            val age = ageStr.toIntOrNull()

            if (age == null) {
                tvError.text = "Enter a valid age"
                tvError.visibility = View.VISIBLE
                return@setOnClickListener
            }

            lifecycleScope.launch {
                try {
                    val response = RetrofitClient.getClient(this@RegisterActivity)
                        .register(
                            RegisterRequest(
                                email = email,
                                password = password,
                                username = username,
                                firstName = firstName,
                                lastName = lastName,
                                age = age,
                                gender = gender
                            )
                        )

                    if (response.isSuccessful && response.body() != null) {
                        val token = response.body()!!.token
                        val sharedPref = getSharedPreferences("prefs", Context.MODE_PRIVATE)

                        sharedPref.edit().putString("token", token).apply()
                        sharedPref.edit().putString("email", response.body()!!.email).apply()
                        sharedPref.edit().putString("username", response.body()!!.username).apply()

                        startActivity(Intent(this@RegisterActivity, DashboardActivity::class.java))
                        finish()
                    } else {
                        tvError.text = "Registration failed. Email may already be in use."
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
