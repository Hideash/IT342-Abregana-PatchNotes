package edu.cit.abregana.patchnotes.api

import edu.cit.abregana.patchnotes.model.*
import retrofit2.Response
import retrofit2.http.*

interface PatchNotesApi {

    // Auth
    @POST("auth/register")
    suspend fun register(@Body request: RegisterRequest): Response<AuthResponse>

    @POST("auth/login")
    suspend fun login(@Body request: LoginRequest): Response<AuthResponse>

    @POST("auth/logout")
    suspend fun logout(): Response<String>

    // User
    @GET("user/me")
    suspend fun getMe(): Response<UserModel>

    @PUT("user/me")
    suspend fun updateProfile(@Body request: UpdateProfileRequest): Response<UserModel>

    @GET("user/search")
    suspend fun searchUsers(@Query("query") query: String): Response<List<UserModel>>

    @GET("user/{email}")
    suspend fun getUserByEmail(@Path("email") email: String): Response<UserModel>

    @POST("user/{email}/follow")
    suspend fun toggleFollow(@Path("email") email: String): Response<Map<String, Any>>

    @GET("user/friends")
    suspend fun getFriends(): Response<List<UserModel>>

    // Posts
    @GET("posts")
    suspend fun getPosts(): Response<List<PostModel>>

    @POST("posts")
    suspend fun createPost(@Body request: CreatePostRequest): Response<PostModel>

    @GET("posts/{postId}")
    suspend fun getPostById(@Path("postId") postId: Long): Response<PostModel>

    @POST("posts/{postId}/like")
    suspend fun likePost(@Path("postId") postId: Long): Response<PostModel>

    @GET("posts/{postId}/comments")
    suspend fun getComments(@Path("postId") postId: Long): Response<List<CommentModel>>

    @POST("posts/{postId}/comments")
    suspend fun addComment(@Path("postId") postId: Long, @Body request: CommentRequest): Response<CommentModel>

    // Patches
    @GET("patches")
    suspend fun getPatches(): Response<List<PatchModel>>

    @GET("patches/mine")
    suspend fun getMyPatches(): Response<List<PatchModel>>

    @GET("patches/trending")
    suspend fun getTrendingPatches(): Response<List<PatchModel>>

    @GET("patches/{patchId}")
    suspend fun getPatchById(@Path("patchId") patchId: Long): Response<PatchModel>

    @GET("patches/{patchId}/posts")
    suspend fun getPatchPosts(@Path("patchId") patchId: Long): Response<List<PostModel>>

    @POST("patches/{patchId}/join")
    suspend fun joinPatch(@Path("patchId") patchId: Long): Response<PatchModel>

    @GET("patches/search")
    suspend fun searchPatches(@Query("query") query: String): Response<List<PatchModel>>

    // Messages
    @GET("messages/partners")
    suspend fun getConversationPartners(): Response<List<ConversationPartner>>

    @GET("messages/conversation/{email}")
    suspend fun getConversation(@Path("email") email: String): Response<List<MessageModel>>

    @POST("messages")
    suspend fun sendMessage(@Body request: SendMessageRequest): Response<MessageModel>
}