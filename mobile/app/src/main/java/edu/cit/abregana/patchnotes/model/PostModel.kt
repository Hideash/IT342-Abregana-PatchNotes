package edu.cit.abregana.patchnotes.model

data class PostModel(
    val id: Long,
    val title: String?,
    val content: String,
    val imageUrl: String?,
    val videoUrl: String?,
    val gameTag: String?,
    val username: String,
    val email: String,
    val patchId: Long?,
    val patchName: String?,
    val createdAt: String,
    val likeCount: Int,
    val likedByCurrentUser: Boolean,
    val commentCount: Int
)

data class CreatePostRequest(
    val title: String? = null,
    val content: String,
    val imageUrl: String? = null,
    val videoUrl: String? = null,
    val gameTag: String? = null,
    val patchId: Long? = null
)