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
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout
import edu.cit.abregana.patchnotes.R
import edu.cit.abregana.patchnotes.api.RetrofitClient
import edu.cit.abregana.patchnotes.model.PostModel
import edu.cit.abregana.patchnotes.ui.PostDetailActivity
import kotlinx.coroutines.launch
import java.text.SimpleDateFormat
import java.util.*

class HomeFragment : Fragment() {

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater.inflate(R.layout.fragment_home, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        val postsContainer = view.findViewById<LinearLayout>(R.id.postsContainer)
        val swipe = view.findViewById<SwipeRefreshLayout>(R.id.swipeRefresh)
        val emptyView = view.findViewById<TextView>(R.id.tvEmpty)

        swipe.setColorSchemeColors(0xFF59000A.toInt())
        swipe.setOnRefreshListener {
            loadPosts(postsContainer, emptyView) { swipe.isRefreshing = false }
        }

        loadPosts(postsContainer, emptyView)
    }

    private fun loadPosts(container: LinearLayout, emptyView: TextView, onComplete: (() -> Unit)? = null) {
        lifecycleScope.launch {
            try {
                val api = RetrofitClient.getClient(requireContext())
                val res = api.getPosts()
                if (res.isSuccessful) {
                    val posts = res.body() ?: emptyList()
                    container.removeAllViews()
                    if (posts.isEmpty()) {
                        emptyView.visibility = View.VISIBLE
                    } else {
                        emptyView.visibility = View.GONE
                        posts.forEach { post -> addPostCard(container, post) }
                    }
                }
            } catch (e: Exception) {
                emptyView.text = "Connection error."
                emptyView.visibility = View.VISIBLE
            }
            onComplete?.invoke()
        }
    }

    private fun addPostCard(container: LinearLayout, post: PostModel) {
        val card = LayoutInflater.from(context).inflate(R.layout.item_post, container, false)

        card.findViewById<TextView>(R.id.tvAvatar).text =
            post.username.firstOrNull()?.uppercaseChar()?.toString() ?: "?"
        card.findViewById<TextView>(R.id.tvUsername).text = post.username
        card.findViewById<TextView>(R.id.tvTime).text = formatDate(post.createdAt)

        val tvPatch = card.findViewById<TextView>(R.id.tvPatchName)
        if (post.patchName != null) {
            tvPatch.text = "• ${post.patchName}"
            tvPatch.visibility = View.VISIBLE
        } else {
            tvPatch.visibility = View.GONE
        }

        val tvTitle = card.findViewById<TextView>(R.id.tvTitle)
        if (post.title != null) {
            tvTitle.text = post.title
            tvTitle.visibility = View.VISIBLE
        } else {
            tvTitle.visibility = View.GONE
        }

        card.findViewById<TextView>(R.id.tvContent).text = post.content
        card.findViewById<TextView>(R.id.tvLikeCount).text = "♥ ${post.likeCount}"
        card.findViewById<TextView>(R.id.tvCommentCount).text = "💬 ${post.commentCount}"

        if (post.likedByCurrentUser) {
            card.findViewById<TextView>(R.id.tvLikeCount).setTextColor(0xFF59000A.toInt())
        }

        card.setOnClickListener {
            val intent = Intent(context, PostDetailActivity::class.java)
            intent.putExtra("postId", post.id)
            startActivity(intent)
        }

        card.findViewById<TextView>(R.id.tvLikeCount).setOnClickListener {
            lifecycleScope.launch {
                try {
                    RetrofitClient.getClient(requireContext()).likePost(post.id)
                    val parent = card.parent as? LinearLayout ?: return@launch
                    loadPosts(parent, requireView().findViewById(R.id.tvEmpty))
                } catch (e: Exception) { }
            }
        }

        container.addView(card)
    }

    private fun formatDate(dateStr: String): String {
        return try {
            val fmt = SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss", Locale.getDefault())
            val date = fmt.parse(dateStr) ?: return dateStr
            SimpleDateFormat("MMM d, yyyy", Locale.getDefault()).format(date)
        } catch (e: Exception) { dateStr }
    }
}