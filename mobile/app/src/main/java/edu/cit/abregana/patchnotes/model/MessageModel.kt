package edu.cit.abregana.patchnotes.model

data class MessageModel(
    val id: Long,
    val senderUsername: String,
    val senderEmail: String,
    val receiverUsername: String,
    val receiverEmail: String,
    val content: String,
    val read: Boolean,
    val createdAt: String
)

data class SendMessageRequest(
    val receiverEmail: String,
    val content: String
)

data class ConversationPartner(
    val username: String,
    val email: String,
    val unreadCount: Int
)