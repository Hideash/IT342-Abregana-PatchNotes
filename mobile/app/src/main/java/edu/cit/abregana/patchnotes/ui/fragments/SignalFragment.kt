package edu.cit.abregana.patchnotes.ui.fragments

import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.LinearLayout
import android.widget.TextView
import androidx.fragment.app.Fragment
import androidx.lifecycle.lifecycleScope
import edu.cit.abregana.patchnotes.R
import edu.cit.abregana.patchnotes.api.RetrofitClient
import edu.cit.abregana.patchnotes.ui.ChatActivity
import kotlinx.coroutines.launch

class SignalFragment : Fragment() {

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater.inflate(R.layout.fragment_signal, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        val convContainer = view.findViewById<LinearLayout>(R.id.convContainer)
        val btnNewMsg = view.findViewById<View>(R.id.btnNewMsg)

        loadConversations(convContainer)

        btnNewMsg.setOnClickListener {
            val intent = Intent(context, ChatActivity::class.java)
            intent.putExtra("isNew", true)
            startActivity(intent)
        }
    }

    override fun onResume() {
        super.onResume()
        view?.let {
            loadConversations(it.findViewById(R.id.convContainer))
        }
    }

    private fun loadConversations(container: LinearLayout) {
        lifecycleScope.launch {
            try {
                val api = RetrofitClient.getClient(requireContext())
                val res = api.getConversationPartners()
                container.removeAllViews()

                if (res.isSuccessful) {
                    val partners = res.body() ?: emptyList()
                    if (partners.isEmpty()) {
                        val tv = TextView(context)
                        tv.text = "No conversations yet.\nPress + to start one!"
                        tv.setTextColor(0xFF444444.toInt())
                        tv.textSize = 13f
                        tv.setPadding(0, 64, 0, 0)
                        tv.gravity = android.view.Gravity.CENTER
                        container.addView(tv)
                    } else {
                        partners.forEach { partner ->
                            val item = LayoutInflater.from(context)
                                .inflate(R.layout.item_conversation, container, false)
                            item.findViewById<TextView>(R.id.tvConvAvatar).text =
                                partner.username.firstOrNull()?.uppercaseChar()?.toString() ?: "?"
                            item.findViewById<TextView>(R.id.tvConvName).text = partner.username
                            item.findViewById<TextView>(R.id.tvConvEmail).text = partner.email
                            val tvUnread = item.findViewById<TextView>(R.id.tvUnread)
                            if (partner.unreadCount > 0) {
                                tvUnread.visibility = View.VISIBLE
                                tvUnread.text = partner.unreadCount.toString()
                            } else {
                                tvUnread.visibility = View.GONE
                            }
                            item.setOnClickListener {
                                val intent = Intent(context, ChatActivity::class.java)
                                intent.putExtra("partnerEmail", partner.email)
                                intent.putExtra("partnerUsername", partner.username)
                                startActivity(intent)
                            }
                            container.addView(item)
                        }
                    }
                }
            } catch (e: Exception) { }
        }
    }
}