package edu.cit.abregana.patchnotes.model

data class UserModel(
    val id: Long,
    val email: String,
    val username: String?,
    val firstName: String?,
    val lastName: String?,
    val bio: String?,
    val age: Int?,
    val gender: String?,
    val following: Boolean = false
)

data class UpdateProfileRequest(
    val username: String? = null,
    val bio: String? = null,
    val firstName: String? = null,
    val lastName: String? = null,
    val age: Int? = null,
    val gender: String? = null
)