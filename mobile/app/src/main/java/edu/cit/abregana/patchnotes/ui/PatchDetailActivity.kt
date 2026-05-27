package edu.cit.abregana.patchnotes.ui

import android.os.Bundle
import android.view.LayoutInflater
import android.widget.*
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import edu.cit.abregana.patchnotes.R
import edu.cit.abregana.patchnotes.api.RetrofitClient
import kotlinx.coroutines.launch

class PatchDetailActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_patch_detail)

        val patchId = intent.getLongExtra("patchId", -1)
        val btnBack = findViewById<ImageButton>(R.id.btnBack)
        val tvIcon = findViewById<TextView>(R.id.tvPatchIcon)
        val tvName = findViewById<TextView>(R.id.tvPatchName)
        val tvDesc = findViewById<TextView>(R.id.tvPatchDesc)
        val tvMembers = findViewById<TextView>(R.id.tvMemberCount)
        val btnJoin = findViewById<Button>(R.id.btnJoin)
        val postsContainer = findViewById<LinearLayout>(R.id.postsContainer)

        btnBack.setOnClickListener { finish() }

        lifecycleScope.launch {
            try {
                val api = RetrofitClient.getClient(this@PatchDetailActivity)
                val patchRes = api.getPatchById(patchId)
                val postsRes = api.getPatchPosts(patchId)

                if (patchRes.isSuccessful) {
                    val patch = patchRes.body()!!
                    tvIcon.text = patch.icon ?: "🎮"
                    tvName.text = patch.name
                    tvDesc.text = patch.description ?: "No description."
                    tvMembers.text = "${patch.memberCount} members"
                    btnJoin.text = if (patch.member) "✓ Joined" else "+ Join"
                    btnJoin.setOnClickListener {
                        lifecycleScope.launch {
                            try {
                                val res = api.joinPatch(patchId)
                                if (res.isSuccessful) {
                                    btnJoin.text = if (res.body()!!.member) "✓ Joined" else "+ Join"
                                }
                            } catch (e: Exception) { }
                        }
                    }
                }

                if (postsRes.isSuccessful) {
                    postsContainer.removeAllViews()
                    val posts = postsRes.body() ?: emptyList()
                    if (posts.isEmpty()) {
                        val tv = TextView(this@PatchDetailActivity)
                        tv.text = "No posts in this patch yet."
                        tv.setTextColor(0xFF444444.toInt())
                        tv.textSize = 13f
                        tv.setPadding(0, 32, 0, 0)
                        postsContainer.addView(tv)
                    } else {
                        posts.forEach { post ->
                            val item = LayoutInflater.from(this@PatchDetailActivity)
                                .inflate(R.layout.item_post_simple, postsContainer, false)
                            item.findViewById<TextView>(R.id.tvPostTitle).text = post.title ?: post.content.take(60)
                            item.findViewById<TextView>(R.id.tvPostStats).text = "♥ ${post.likeCount}  💬 ${post.commentCount}"
                            postsContainer.addView(item)
                        }
                    }
                }
            } catch (e: Exception) { }
        }
    }
}