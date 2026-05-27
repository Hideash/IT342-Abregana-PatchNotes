package edu.cit.abregana.patchnotes.ui

import android.os.Bundle
import android.view.LayoutInflater
import android.widget.*
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import edu.cit.abregana.patchnotes.R
import edu.cit.abregana.patchnotes.api.RetrofitClient
import edu.cit.abregana.patchnotes.model.SendMessageRequest
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import java.text.SimpleDateFormat
import java.util.*

class ChatActivity : AppCompatActivity() {

    private var partnerEmail = ""
    private var partnerUsername = ""
    private var currentUserEmail = ""
    private var isPolling = true

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_chat)

        partnerEmail = intent.getStringExtra("partnerEmail") ?: ""
        partnerUsername = intent.getStringExtra("partnerUsername") ?: ""

        val btnBack = findViewById<ImageButton>(R.id.btnBack)
        val tvTitle = findViewById<TextView>(R.id.tvChatTitle)
        val tvSubtitle = findViewById<TextView>(R.id.tvChatEmail)
        val tvAvatar = findViewById<TextView>(R.id.tvChatAvatar)
        val messagesContainer = findViewById<LinearLayout>(R.id.messagesContainer)
        val scrollView = findViewById<ScrollView>(R.id.scrollMessages)
        val etMessage = findViewById<EditText>(R.id.etMessage)
        val btnSend = findViewById<ImageButton>(R.id.btnSend)

        tvTitle.text = partnerUsername
        tvSubtitle.text = partnerEmail
        tvAvatar.text = partnerUsername.firstOrNull()?.uppercaseChar()?.toString() ?: "?"

        btnBack.setOnClickListener { finish() }

        lifecycleScope.launch {
            try {
                val me = RetrofitClient.getClient(this@ChatActivity).getMe()
                currentUserEmail = me.body()?.email ?: ""
                loadMessages(messagesContainer, scrollView)

                while (isPolling) {
                    delay(3000)
                    if (isPolling) loadMessages(messagesContainer, scrollView)
                }
            } catch (e: Exception) { }
        }

        btnSend.setOnClickListener {
            val content = etMessage.text.toString().trim()
            if (content.isEmpty() || partnerEmail.isEmpty()) return@setOnClickListener
            etMessage.setText("")
            lifecycleScope.launch {
                try {
                    RetrofitClient.getClient(this@ChatActivity)
                        .sendMessage(SendMessageRequest(partnerEmail, content))
                    loadMessages(messagesContainer, scrollView)
                } catch (e: Exception) { }
            }
        }
    }

    private fun loadMessages(container: LinearLayout, scrollView: ScrollView) {
        if (partnerEmail.isEmpty()) return
        lifecycleScope.launch {
            try {
                val res = RetrofitClient.getClient(this@ChatActivity).getConversation(partnerEmail)
                if (res.isSuccessful) {
                    container.removeAllViews()
                    val messages = res.body() ?: emptyList()

                    if (messages.isEmpty()) {
                        val tv = TextView(this@ChatActivity)
                        tv.text = "No messages yet. Say hello! 👋"
                        tv.setTextColor(0xFF444444.toInt())
                        tv.textSize = 13f
                        tv.setPadding(0, 64, 0, 0)
                        tv.gravity = android.view.Gravity.CENTER
                        container.addView(tv)
                    }

                    messages.forEach { msg ->
                        val isSelf = msg.senderEmail == currentUserEmail
                        val item = LayoutInflater.from(this@ChatActivity).inflate(
                            if (isSelf) R.layout.item_message_self else R.layout.item_message_other,
                            container, false
                        )
                        item.findViewById<TextView>(R.id.tvMsgAvatar).text =
                            msg.senderUsername.firstOrNull()?.uppercaseChar()?.toString() ?: "?"
                        item.findViewById<TextView>(R.id.tvMsgContent).text = msg.content
                        item.findViewById<TextView>(R.id.tvMsgTime).text = formatTime(msg.createdAt)
                        container.addView(item)
                    }
                    scrollView.post { scrollView.fullScroll(ScrollView.FOCUS_DOWN) }
                }
            } catch (e: Exception) { }
        }
    }

    private fun formatTime(dateStr: String): String {
        return try {
            val fmt = SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss", Locale.getDefault())
            val date = fmt.parse(dateStr) ?: return ""
            SimpleDateFormat("hh:mm a", Locale.getDefault()).format(date)
        } catch (e: Exception) { "" }
    }

    override fun onDestroy() {
        super.onDestroy()
        isPolling = false
    }
}