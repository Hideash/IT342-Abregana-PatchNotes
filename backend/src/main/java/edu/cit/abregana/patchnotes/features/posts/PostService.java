// package edu.cit.abregana.patchnotes.service;

// import edu.cit.abregana.patchnotes.dto.PostRequest;
// import edu.cit.abregana.patchnotes.dto.PostResponse;
// import edu.cit.abregana.patchnotes.model.Like;
// import edu.cit.abregana.patchnotes.model.Post;
// import edu.cit.abregana.patchnotes.model.User;
// import edu.cit.abregana.patchnotes.repository.CommentRepository;
// import edu.cit.abregana.patchnotes.repository.LikeRepository;
// import edu.cit.abregana.patchnotes.repository.PostRepository;
// import edu.cit.abregana.patchnotes.repository.UserRepository;
// import lombok.RequiredArgsConstructor;
// import org.springframework.stereotype.Service;

// import java.util.List;
// import java.util.Optional;
// import java.util.stream.Collectors;

// @Service
// @RequiredArgsConstructor
// public class PostService {

//     private final PostRepository postRepository;
//     private final UserRepository userRepository;
//     private final LikeRepository likeRepository;
//     private final CommentRepository commentRepository;

//     public PostResponse createPost(PostRequest request, String email) {
//         User user = userRepository.findByEmail(email)
//                 .orElseThrow(() -> new RuntimeException("User not found"));

//         Post post = new Post();
//         post.setTitle(request.getTitle());
//         post.setContent(request.getContent());
//         post.setUser(user);
//         postRepository.save(post);

//         return mapToResponse(post, user);
//     }

//     public List<PostResponse> getAllPosts(String email) {
//         User currentUser = userRepository.findByEmail(email).orElse(null);
//         return postRepository.findAllByOrderByCreatedAtDesc()
//                 .stream()
//                 .map(post -> mapToResponse(post, currentUser))
//                 .collect(Collectors.toList());
//     }

//     public PostResponse toggleLike(Long postId, String email) {
//         User user = userRepository.findByEmail(email)
//                 .orElseThrow(() -> new RuntimeException("User not found"));
//         Post post = postRepository.findById(postId)
//                 .orElseThrow(() -> new RuntimeException("Post not found"));

//         Optional<Like> existingLike = likeRepository.findByUserAndPost(user, post);
//         if (existingLike.isPresent()) {
//             likeRepository.delete(existingLike.get());
//         } else {
//             Like like = new Like();
//             like.setUser(user);
//             like.setPost(post);
//             likeRepository.save(like);
//         }

//         return mapToResponse(post, user);
//     }

//     private PostResponse mapToResponse(Post post, User currentUser) {
//         PostResponse response = new PostResponse();
//         response.setId(post.getId());
//         response.setTitle(post.getTitle());
//         response.setContent(post.getContent());
//         response.setUsername(post.getUser().getUsername());
//         response.setEmail(post.getUser().getEmail());
//         response.setCreatedAt(post.getCreatedAt());
//         response.setLikeCount(likeRepository.countByPost(post));
//         response.setCommentCount(commentRepository.countByPost(post));
//         response.setLikedByCurrentUser(
//                 currentUser != null &&
//                         likeRepository.findByUserAndPost(currentUser, post).isPresent());
//         return response;
//     }
// }

package edu.cit.abregana.patchnotes.features.posts;

import edu.cit.abregana.patchnotes.dto.PostRequest;
import edu.cit.abregana.patchnotes.dto.PostResponse;
import edu.cit.abregana.patchnotes.features.patches.PatchRepository;
import edu.cit.abregana.patchnotes.features.users.UserRepository;
import edu.cit.abregana.patchnotes.model.Like;
import edu.cit.abregana.patchnotes.model.Patch;
import edu.cit.abregana.patchnotes.model.Post;
import edu.cit.abregana.patchnotes.model.User;
import edu.cit.abregana.patchnotes.repository.CommentRepository;
import edu.cit.abregana.patchnotes.repository.LikeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;
    private final UserRepository userRepository;
    private final LikeRepository likeRepository;
    private final CommentRepository commentRepository;
    private final PatchRepository patchRepository;

    public PostResponse createPost(PostRequest request, String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Post post = new Post();
        post.setTitle(request.getTitle());
        post.setContent(request.getContent());
        post.setUser(user);

        // Optional: attach to a patch if patchId is provided
        if (request.getPatchId() != null) {
            Patch patch = patchRepository.findById(request.getPatchId())
                    .orElseThrow(() -> new RuntimeException("Patch not found"));
            post.setPatch(patch);
        }

        postRepository.save(post);
        return mapToResponse(post, user);
    }

    public List<PostResponse> getAllPosts(String email) {
        User currentUser = email != null ? userRepository.findByEmail(email).orElse(null) : null;
        return postRepository.findAllByOrderByCreatedAtDesc()
                .stream()
                .map(post -> mapToResponse(post, currentUser))
                .collect(Collectors.toList());
    }

    public PostResponse toggleLike(Long postId, String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new RuntimeException("Post not found"));

        Optional<Like> existingLike = likeRepository.findByUserAndPost(user, post);
        if (existingLike.isPresent()) {
            likeRepository.delete(existingLike.get());
        } else {
            Like like = new Like();
            like.setUser(user);
            like.setPost(post);
            likeRepository.save(like);
        }

        return mapToResponse(post, user);
    }

    private PostResponse mapToResponse(Post post, User currentUser) {
        PostResponse response = new PostResponse();
        response.setId(post.getId());
        response.setTitle(post.getTitle());
        response.setContent(post.getContent());
        response.setUsername(post.getUser().getUsername());
        response.setEmail(post.getUser().getEmail());
        response.setCreatedAt(post.getCreatedAt());
        response.setLikeCount(likeRepository.countByPost(post));
        response.setCommentCount(commentRepository.countByPost(post));
        response.setLikedByCurrentUser(
                currentUser != null &&
                        likeRepository.findByUserAndPost(currentUser, post).isPresent());
        return response;
    }
}   