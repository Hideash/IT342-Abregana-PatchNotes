package edu.cit.abregana.patchnotes.model

data class CommentModel(
    val id: Long,
    val content: String,
    val username: String,
    val createdAt: String
)

data class CommentRequest(val content: String)