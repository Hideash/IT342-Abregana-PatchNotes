package edu.cit.abregana.patchnotes.ui.fragments

import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.*
import androidx.appcompat.app.AlertDialog
import androidx.fragment.app.Fragment
import androidx.lifecycle.lifecycleScope
import edu.cit.abregana.patchnotes.R
import edu.cit.abregana.patchnotes.api.RetrofitClient
import edu.cit.abregana.patchnotes.ui.LoginActivity
import edu.cit.abregana.patchnotes.ui.PostDetailActivity
import kotlinx.coroutines.launch

class ProfileFragment : Fragment() {

    private var isEditing = false

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater.inflate(R.layout.fragment_profile, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        val tvAvatar = view.findViewById<TextView>(R.id.tvAvatar)
        val tvUsername = view.findViewById<TextView>(R.id.tvUsername)
        val tvEmail = view.findViewById<TextView>(R.id.tvEmail)
        val tvBio = view.findViewById<TextView>(R.id.tvBio)
        val tvPostCount = view.findViewById<TextView>(R.id.tvPostCount)
        val tvLikeCount = view.findViewById<TextView>(R.id.tvLikeCount)
        val tvCommentCount = view.findViewById<TextView>(R.id.tvCommentCount)
        val btnLogout = view.findViewById<Button>(R.id.btnLogout)
        val postsContainer = view.findViewById<LinearLayout>(R.id.postsContainer)
        val tvEmptyPosts = view.findViewById<TextView>(R.id.tvEmptyPosts)

        loadProfile(tvAvatar, tvUsername, tvEmail, tvBio, tvPostCount, tvLikeCount, tvCommentCount, postsContainer, tvEmptyPosts)

        btnLogout.setOnClickListener {
            AlertDialog.Builder(requireContext())
                .setTitle("Logout")
                .setMessage("Are you sure you want to logout?")
                .setPositiveButton("Logout") { _, _ ->
                    requireContext().getSharedPreferences("prefs", 0).edit().clear().apply()
                    startActivity(Intent(context, LoginActivity::class.java))
                    requireActivity().finish()
                }
                .setNegativeButton("Cancel", null)
                .show()
        }
    }

    private fun loadProfile(
        tvAvatar: TextView, tvUsername: TextView, tvEmail: TextView, tvBio: TextView,
        tvPosts: TextView, tvLikes: TextView, tvComments: TextView,
        postsContainer: LinearLayout, tvEmpty: TextView
    ) {
        lifecycleScope.launch {
            try {
                val api = RetrofitClient.getClient(requireContext())
                val userRes = api.getMe()
                val postsRes = api.getPosts()

                if (userRes.isSuccessful) {
                    val user = userRes.body()!!
                    val initial = user.username?.firstOrNull()?.uppercaseChar()?.toString() ?: "?"
                    tvAvatar.text = initial
                    tvUsername.text = user.username ?: user.firstName ?: "User"
                    tvEmail.text = user.email
                    tvBio.text = user.bio ?: "No bio set yet."

                    if (postsRes.isSuccessful) {
                        val myPosts = postsRes.body()?.filter { it.email == user.email } ?: emptyList()
                        tvPosts.text = myPosts.size.toString()
                        tvLikes.text = myPosts.sumOf { it.likeCount }.toString()
                        tvComments.text = myPosts.sumOf { it.commentCount }.toString()

                        postsContainer.removeAllViews()
                        if (myPosts.isEmpty()) {
                            tvEmpty.visibility = View.VISIBLE
                        } else {
                            tvEmpty.visibility = View.GONE
                            myPosts.take(10).forEach { post ->
                                val item = LayoutInflater.from(context)
                                    .inflate(R.layout.item_post_simple, postsContainer, false)
                                item.findViewById<TextView>(R.id.tvPostTitle).text =
                                    post.title ?: post.content.take(60)
                                item.findViewById<TextView>(R.id.tvPostStats).text =
                                    "♥ ${post.likeCount}  💬 ${post.commentCount}"
                                item.setOnClickListener {
                                    val intent = Intent(context, PostDetailActivity::class.java)
                                    intent.putExtra("postId", post.id)
                                    startActivity(intent)
                                }
                                postsContainer.addView(item)
                            }
                        }
                    }
                }
            } catch (e: Exception) { }
        }
    }
}