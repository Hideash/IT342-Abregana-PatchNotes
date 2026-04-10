package edu.cit.abregana.patchnotes.model

data class RegisterRequest(
    val email: String,
    val password: String,
    val username: String,
    val firstName: String,
    val lastName: String,
    val age: Int,
    val gender: String
)