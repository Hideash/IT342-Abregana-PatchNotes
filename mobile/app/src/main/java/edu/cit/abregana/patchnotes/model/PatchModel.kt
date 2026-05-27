package edu.cit.abregana.patchnotes.model

data class PatchModel(
    val id: Long,
    val name: String,
    val description: String?,
    val topic: String?,
    val privacy: String?,
    val icon: String?,
    val createdBy: String,
    val memberCount: Int,
    val member: Boolean,
    val createdAt: String
)