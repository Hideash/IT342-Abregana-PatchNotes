package edu.cit.abregana.patchnotes.ui

import android.content.Intent
import android.os.Bundle
import android.widget.*
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import edu.cit.abregana.patchnotes.R
import edu.cit.abregana.patchnotes.api.RetrofitClient
import kotlinx.coroutines.launch

class UserProfileActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_user_profile)

        val email = intent.getStringExtra("email") ?: ""
        val btnBack = findViewById<ImageButton>(R.id.btnBack)
        val tvAvatar = findViewById<TextView>(R.id.tvAvatar)
        val tvUsername = findViewById<TextView>(R.id.tvUsername)
        val tvEmail = findViewById<TextView>(R.id.tvEmail)
        val tvBio = findViewById<TextView>(R.id.tvBio)
        val btnMessage = findViewById<Button>(R.id.btnMessage)
        val btnFollow = findViewById<Button>(R.id.btnFollow)

        btnBack.setOnClickListener { finish() }

        lifecycleScope.launch {
            try {
                val api = RetrofitClient.getClient(this@UserProfileActivity)
                val res = api.getUserByEmail(email)
                val meRes = api.getMe()

                if (res.isSuccessful) {
                    val user = res.body()!!
                    tvAvatar.text = user.username?.firstOrNull()?.uppercaseChar()?.toString() ?: "?"
                    tvUsername.text = user.username ?: user.firstName ?: "User"
                    tvEmail.text = user.email
                    tvBio.text = user.bio ?: "No bio yet."

                    val isOwn = meRes.body()?.email == email
                    if (isOwn) {
                        btnMessage.visibility = android.view.View.GONE
                        btnFollow.visibility = android.view.View.GONE
                    } else {
                        btnFollow.text = if (user.following) "✓ Following" else "+ Follow"
                        btnFollow.setOnClickListener {
                            lifecycleScope.launch {
                                try {
                                    api.toggleFollow(email)
                                    val updated = api.getUserByEmail(email)
                                    if (updated.isSuccessful) {
                                        btnFollow.text = if (updated.body()!!.following) "✓ Following" else "+ Follow"
                                    }
                                } catch (e: Exception) { }
                            }
                        }

                        btnMessage.setOnClickListener {
                            val intent = Intent(this@UserProfileActivity, ChatActivity::class.java)
                            intent.putExtra("partnerEmail", user.email)
                            intent.putExtra("partnerUsername", user.username ?: user.firstName ?: "User")
                            startActivity(intent)
                        }
                    }
                }
            } catch (e: Exception) { }
        }
    }
}