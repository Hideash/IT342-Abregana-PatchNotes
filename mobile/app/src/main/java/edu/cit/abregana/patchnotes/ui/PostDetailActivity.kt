package edu.cit.abregana.patchnotes.ui

import android.os.Bundle
import android.view.LayoutInflater
import android.widget.*
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import edu.cit.abregana.patchnotes.R
import edu.cit.abregana.patchnotes.api.RetrofitClient
import edu.cit.abregana.patchnotes.model.CommentRequest
import kotlinx.coroutines.launch
import java.text.SimpleDateFormat
import java.util.*

class PostDetailActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_post_detail)

        val postId = intent.getLongExtra("postId", -1)
        val btnBack = findViewById<ImageButton>(R.id.btnBack)
        val tvTitle = findViewById<TextView>(R.id.tvPostTitle)
        val tvContent = findViewById<TextView>(R.id.tvPostContent)
        val tvUsername = findViewById<TextView>(R.id.tvPostUsername)
        val tvTime = findViewById<TextView>(R.id.tvPostTime)
        val tvAvatar = findViewById<TextView>(R.id.tvPostAvatar)
        val btnLike = findViewById<Button>(R.id.btnLike)
        val commentsContainer = findViewById<LinearLayout>(R.id.commentsContainer)
        val etComment = findViewById<EditText>(R.id.etComment)
        val btnComment = findViewById<ImageButton>(R.id.btnSubmitComment)

        btnBack.setOnClickListener { finish() }

        loadPost(postId, tvTitle, tvContent, tvUsername, tvTime, tvAvatar, btnLike, commentsContainer)

        btnComment.setOnClickListener {
            val content = etComment.text.toString().trim()
            if (content.isEmpty()) return@setOnClickListener
            etComment.setText("")
            lifecycleScope.launch {
                try {
                    RetrofitClient.getClient(this@PostDetailActivity).addComment(postId, CommentRequest(content))
                    loadComments(postId, commentsContainer)
                } catch (e: Exception) { }
            }
        }
    }

    private fun loadPost(
        postId: Long, tvTitle: TextView, tvContent: TextView, tvUsername: TextView,
        tvTime: TextView, tvAvatar: TextView, btnLike: Button, commentsContainer: LinearLayout
    ) {
        lifecycleScope.launch {
            try {
                val api = RetrofitClient.getClient(this@PostDetailActivity)
                val res = api.getPostById(postId)
                if (res.isSuccessful) {
                    val post = res.body()!!
                    tvAvatar.text = post.username.firstOrNull()?.uppercaseChar()?.toString() ?: "?"
                    tvUsername.text = post.username
                    tvTime.text = formatDate(post.createdAt)
                    tvTitle.text = post.title ?: ""
                    tvTitle.visibility = if (post.title != null) android.view.View.VISIBLE else android.view.View.GONE
                    tvContent.text = post.content
                    btnLike.text = "♥ ${post.likeCount} Likes"
                    if (post.likedByCurrentUser) btnLike.setTextColor(0xFF59000A.toInt())

                    btnLike.setOnClickListener {
                        lifecycleScope.launch {
                            try {
                                RetrofitClient.getClient(this@PostDetailActivity).likePost(postId)
                                loadPost(postId, tvTitle, tvContent, tvUsername, tvTime, tvAvatar, btnLike, commentsContainer)
                            } catch (e: Exception) { }
                        }
                    }
                    loadComments(postId, commentsContainer)
                }
            } catch (e: Exception) { }
        }
    }

    private fun loadComments(postId: Long, container: LinearLayout) {
        lifecycleScope.launch {
            try {
                val res = RetrofitClient.getClient(this@PostDetailActivity).getComments(postId)
                if (res.isSuccessful) {
                    container.removeAllViews()
                    val comments = res.body() ?: emptyList()
                    comments.forEach { comment ->
                        val item = LayoutInflater.from(this@PostDetailActivity)
                            .inflate(R.layout.item_comment, container, false)
                        item.findViewById<TextView>(R.id.tvCommentAvatar).text =
                            comment.username.firstOrNull()?.uppercaseChar()?.toString() ?: "?"
                        item.findViewById<TextView>(R.id.tvCommentUsername).text = comment.username
                        item.findViewById<TextView>(R.id.tvCommentContent).text = comment.content
                        item.findViewById<TextView>(R.id.tvCommentTime).text = formatDate(comment.createdAt)
                        container.addView(item)
                    }
                }
            } catch (e: Exception) { }
        }
    }

    private fun formatDate(dateStr: String): String {
        return try {
            val fmt = SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss", Locale.getDefault())
            val date = fmt.parse(dateStr) ?: return dateStr
            SimpleDateFormat("MMM d, yyyy hh:mm a", Locale.getDefault()).format(date)
        } catch (e: Exception) { dateStr }
    }
}