package edu.cit.abregana.patchnotes.ui

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import edu.cit.abregana.patchnotes.R

class DashboardActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_dashboard)

        val tvUsername = findViewById<TextView>(R.id.tvUsername)
        val tvEmail = findViewById<TextView>(R.id.tvEmail)
        val btnLogout = findViewById<Button>(R.id.btnLogout)

        val sharedPref = getSharedPreferences("prefs", Context.MODE_PRIVATE)
        val username = sharedPref.getString("username", "User")
        val email = sharedPref.getString("email", "")

        tvUsername.text = username
        tvEmail.text = email

        btnLogout.setOnClickListener {
            AlertDialog.Builder(this)
                .setTitle("Logout")
                .setMessage("Are you sure you want to logout?")
                .setPositiveButton("Logout") { _, _ ->
                    sharedPref.edit().clear().apply()
                    startActivity(Intent(this, LoginActivity::class.java))
                    finish()
                }
                .setNegativeButton("Cancel", null)
                .show()
        }
    }

    override fun onBackPressed() {
        // Prevent going back to login when already on dashboard
    }
}