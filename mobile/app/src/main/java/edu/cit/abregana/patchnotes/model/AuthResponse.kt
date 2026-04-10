package edu.cit.abregana.patchnotes.model

data class AuthResponse(
    val token: String,
    val email: String,
    val username: String
)